import React, { Component } from 'react';
import LogIn from '../LogIn/LogIn'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Card, Container, Row } from 'reactstrap'
import './PageLogIn_SignIn_ForgotPassword.scss'
import kubo from '../../../assets/img/Kubo.png'

export default class PageLogInSignInIntro extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="page-login-sign-intro">
                    <Container>
                        <Row>
                            <Card className="mt-5 w-100">
                                <div className="form mt-5 pt-0 my-5 w-100">
                                    <img src={kubo}></img>
                                    <LogIn></LogIn>
                                </div>
                            </Card>
                        </Row>
                    </Container>
                </div>
                <Footer></Footer>

            </div>
        );
    }
}