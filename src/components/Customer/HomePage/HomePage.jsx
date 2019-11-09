import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Poster from "../Poster/Poster";
import Header from "../Header/Header";
import { Loading } from "../../Loading/Loading";
import "./HomePage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import ActiveMovie from "./ActiveMovie/SectionFilm"
import NewMovie from "./NewMovie/SectionFilm"
import MostMovie from "./MostMovie/SectionFilm"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: this.props.films || [],
      loading: this.props.loading
    };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.films !== this.state.films) {
      this.setState({ films: nextProps.films });
    }
    if (nextProps.loading !== this.state.loading) {
      this.setState({ loading: nextProps.loading });
    }
  };

  render() {
    let mostMovie;
    let newMovie;
    let oldMovie;
    let date = new Date();
    if (this.state.films) {
      let activeMovie = this.state.films.filter(film => {
        let dateFilm = new Date(film.releaseDate);
        return dateFilm < date && film.isActive === true;
      });

      mostMovie = activeMovie.sort((a, b) =>
        a.rate > b.rate
          ? -1
          : a.rate === b.rate
            ? a.point > b.point
              ? -1
              : 1
            : 1
      );

      newMovie = this.state.films
        .filter(film => {
          let dateFilm = new Date(film.releaseDate);
          return dateFilm > date && film.status === true;
        })
        .sort((a, b) =>
          a.rate > b.rate
            ? -1
            : a.rate === b.rate
              ? a.point > b.point
                ? -1
                : 1
              : 1
        );

      oldMovie = this.state.films
        .filter(film => {
          let dateFilm = new Date(film.releaseDate);
          return dateFilm < date && film.status === true;
        })
        .sort((a, b) => (a.point > b.point ? 1 : -1));
    }
    return (
      <div>
        <Header />
        {this.state.loading ? (
          <Loading />
        ) : (
            <>
              <div>
                <Poster />
                <div className="content-home">
                  <ActiveMovie movie={mostMovie} title="Phim nổi bật nhất" />
                  <NewMovie movie={newMovie} title="Phim sắp chiếu" />
                  <MostMovie movie={oldMovie} title="Phim đang chiếu" />
                </div>
              </div>
              <Footer className="mt-0" />
            </>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.films.loading,
    films: state.films.data
  };
}

export default connect(mapStateToProps)(HomePage);
