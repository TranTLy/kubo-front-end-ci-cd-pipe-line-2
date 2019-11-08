
import React, { Component } from 'react';
import { CardBody, Container, Row } from 'reactstrap';
import './CardFilm.scss'
import CardItem from "../CardItem/CardItem"

export default class Movie extends Component {
    render() {
        return (
            <div className="pt-3 w-100 d-flex flexDirection: 'row' ">
                <Container>
                    <Row>
                        <div className="home-film">
                            <CardBody className="w-100 section-movie">
                                <CardItem listItem={this.props.listItem}></CardItem>
                            </CardBody>
                        </div>
                    </Row>
                </Container>

            </div>
        );
    }
};
