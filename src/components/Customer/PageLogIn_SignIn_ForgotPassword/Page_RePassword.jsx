import React, { Component } from 'react';
import RePassword from '../ForgotPassword/Re_Password'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Card, Container, Row, Col, Button } from 'reactstrap'
import './PageLogIn_SignIn_ForgotPassword.scss'
import kubo from '../../../assets/img/Kubo.png'

export default class PageLogInSignInIntro extends Component {
    render() {
        return (
            <div className="page-login-sign-intro">
                <Header></Header>
                <Container>
                    <Row>
                        <Card className="mt-5 w-100">
                            <div className="form mt-5 pt-0 my-5 w-100">
                                <img src={kubo}></img>
                                <RePassword></RePassword>
                            </div>
                        </Card>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        );
    }
}