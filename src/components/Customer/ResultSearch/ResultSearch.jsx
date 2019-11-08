import React, { Component } from 'react';
import {
    Container, Row, Card, Col, Button, CardBody
} from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import imgFilm from '../../../assets/img/NgoiDenKiQuai.jpg'
import imgFilm1 from '../../../assets/img/3.jpg';
import CardItem from "../CardItem/CardItem"
import "./ResultSearch.scss"
const listItem = [{ img: imgFilm }, { img: imgFilm1 }, { img: imgFilm }, { img: imgFilm1 }];
export default class ResultSearch extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Container>
                    <Row className="mt-4">
                        <Col sm={4}>
                            <hr></hr>
                        </Col>
                        <Col sm={4} className="title-result-search">
                            <h4>Kết quả tìm kiếm cho: Phim hài</h4>
                        </Col>
                        <Col sm={4}>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row className="result-search-film justifyContent: 'center',alignItems: 'center',">
                        <Row className="film mt-4">
                            <CardItem listItem={listItem}></CardItem>
                        </Row>
                        <Row className="film mt-4">
                            <CardItem listItem={listItem}></CardItem>
                        </Row>
                        <Row className="film mt-4">
                            <CardItem listItem={listItem}></CardItem>
                        </Row>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}