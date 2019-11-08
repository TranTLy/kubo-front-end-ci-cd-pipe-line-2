import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import "./CategoryFilm.scss"
import { connect } from "react-redux"
import SectionFilm from '../SectionFilm/SectionFilm';
import { Loading } from '../../Loading/Loading';


class CategoryFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: this.props.films,
            loading: this.props.loading
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.films !== this.state.films) {
            this.setState({ films: nextProps.films });
        }
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading });
        }
    }
    render() {
        const values = this.props.location.search;
        const params = new URLSearchParams(values);
        const id = params.get('id');
        let title = "";
        let filmBytype = this.state.films.filter(film => film.type._id == id);
        if (filmBytype[0]) {
            title = filmBytype[0].type.name;
        }
        return (
            <div>
                <Header />
                {this.state.loading ? <Loading /> :
                    <div className="SectionFilm">
                        <SectionFilm movie={filmBytype} title={title}></SectionFilm>
                    </div >}
                <Footer />
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        films: state.films.data,
        loading: state.films.loading
    }
}

export default connect(mapStateToProps)(CategoryFilm)