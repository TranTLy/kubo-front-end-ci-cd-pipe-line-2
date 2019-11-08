import React, { Component } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import './Footer.scss';
import ImgCHPlay from '../../../assets/img/logoCHPlay.png'
import ImgGooglePlay from '../../../assets/img/logoAppstore.png';
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container container-fluid="true">
                    <Row className="content-footer pr-0">
                        <Col xl={5} lg={5} className="section-footer  mb-0">
                            <div className="Dieu-khoan-chinh-sach">
                                <div className="footer-title">
                                    <span>ĐIỀU KHOẢN CHÍNH SÁCH</span>
                                </div>
                                <div className="footer-item">
                                    <a href="#">KHÁCH HÀNG THƯỜNG XUYÊN</a>
                                    <br />
                                    <a href="#">CHÍNH SÁCH QUYỀN RIÊNG TƯ</a>
                                    <br />
                                </div>
                            </div>
                            <div className="doi-tac">
                                <div className="footer-title">
                                    <span>LIÊN HỆ</span>
                                </div>
                                <div className="footer-item">
                                    <a href="#">LIÊN HỆ QUẢNG CÁO</a>
                                    <br />
                                    <a href="#">THÔNG TIN KUBO CINEMA</a>
                                    <br />

                                </div>
                            </div>
                        </Col>
                        <Col xl="auto" lg="auto" className="social section-footer-social  mb-0">
                            <div className="footer-title">
                                <span>KẾT NỐI VỚI KUBO</span>
                            </div>
                            <div className="footer-item">
                                <div className="footer-social">
                                    <i className="fab fa-facebook fa-2x" />
                                    <i className="fab fa-youtube-square fa-2x" />
                                    <i className="fab fa-twitter-square fa-2x" />
                                    <i className="fab fa-instagram fa-2x" />
                                </div>
                                <hr />

                            </div>
                        </Col>
                        <Col xl={4} lg={4} className="logo section-footer-social mb-0 pr-0">
                            <div className="footer-title">
                                <span>KUBO</span>
                            </div>
                            <div className="logo-CHPlay">
                                <img src={ImgCHPlay} alt="Lo go CH play" />
                                <img src={ImgGooglePlay} alt="Lo go Google Play" />

                            </div>
                        </Col>
                    </Row>
                    <Row className="KuboVN">
                        <div className="footer-kubo-VN">
                            <span>©  2019 Kubo Viet Nam, All right reserved</span>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }

}