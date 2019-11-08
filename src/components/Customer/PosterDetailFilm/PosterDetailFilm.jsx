import React, { Component } from 'react';
import { Container, Row } from 'reactstrap'
import './PosterDetailFilm.scss'
import { UncontrolledCarousel } from 'reactstrap';
import imgMovie_2 from '../../../assets/img/NgoiDenKiQuai_2.jpg';
import imgMovie_1 from '../../../assets/img/NgoiDenKiQuai_1.jpg';
import imgMovie_3 from '../../../assets/img/NgoiDenKiQuai_3.jpg';
const items = [
    {
        src: imgMovie_1,
    },
    {
        src: imgMovie_2,
    },
    {
        src: imgMovie_3,
    }
];

export default class Poster extends Component {
    render() {
        return (
            <div className="poster-detail">
                <Container className="content-poster">
                    <Row className="_carousel">
                        <UncontrolledCarousel items={items} indicators={false} ></UncontrolledCarousel>
                    </Row>
                </Container>
            </div>
        );
    }
}