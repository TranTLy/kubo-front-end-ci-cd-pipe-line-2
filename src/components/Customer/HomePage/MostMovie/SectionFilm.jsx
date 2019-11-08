/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CardFilm from "../../CardFilm/CardFilm";
import "./SectionFilm.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

export default class SectionFilm extends Component {
    constructor(props) {
        super(props);
        this.handleClickArrowLeft = this.handleClickArrowLeft.bind(this);
        this.handleClickArrowRight = this.handleClickArrowRight.bind(this);
        this.state = {
            movie: this.props.movie || [],
            start: 0,
            end: 4
        };
    }

    componentDidMount = () => {
        if (this.state.start === 0)
            document.getElementsByClassName("icon-arrow__left")[0].style = "display: none"
        // document.getElementsByClassName("icon-arrow__right")[0].style = "display: none"
    };
    handleClickArrowLeft() {
        if (this.state.start <= 0)
            document.getElementsByClassName("icon-arrow__left")[0].style = "display: none"
        else {
            document.getElementsByClassName("icon-arrow__right")[0].style = "display: block";
            document.getElementsByClassName("icon-arrow__left")[0].style = "display: block";
            this.setState({ start: this.state.start - 1, end: this.state.end - 1 })
        }
    }
    handleClickArrowRight() {
        if (this.state.end < this.state.movie.length) {
            document.getElementsByClassName("icon-arrow__left")[0].style = "display: block";
            document.getElementsByClassName("icon-arrow__right")[0].style = "display: block";
            this.setState({ start: this.state.start + 1, end: this.state.end + 1 })
        }
        else {
            document.getElementsByClassName("icon-arrow__right")[0].style = "display: none"
        }
    }
    componentWillReceiveProps = nextProps => {
        if (nextProps.movie !== this.state.movie) {
            this.setState({ movie: nextProps.movie });
            if (this.state.end > nextProps.movie.length)
                document.getElementsByClassName("icon-arrow__right")[0].style = "display: none"
            else {
                document.getElementsByClassName("icon-arrow__right")[0].style = "display: block"
            }
        }
    };

    render() {
        return (
            <div className="SectionFilm">
                <Container className="content">
                    <Row className="mt-4">
                        <Col sm={4}>
                            <hr />
                        </Col>
                        <Col sm={4} className="d-flex flexDirection: 'row'">
                            <img
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-left-transparent.png"
                                alt=""
                            />
                            <div className="title-type-film">
                                <h4>{this.props.title}</h4>
                            </div>
                            <img
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-ribon-right-transparent.png"
                                alt=""
                            />
                        </Col>
                        <Col sm={4}>
                            <hr />
                        </Col>
                    </Row>
                    <div className="d-flex flexDirection: 'row', w-100 section" >
                        <a onClick={this.handleClickArrowLeft}><i class="fas fa-angle-left fa-3x icon-arrow__left"></i></a>
                        <CardFilm listItem={this.state.movie.slice(this.state.start, this.state.end)} className="w-100" />
                        <a onClick={this.handleClickArrowRight}><i class="fas fa-angle-right fa-3x icon-arrow__right"></i></a>
                    </div>
                </Container>
            </div >
        );
    }
}

