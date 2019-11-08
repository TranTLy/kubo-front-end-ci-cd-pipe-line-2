import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './ForgotPassword.scss'
export default class LogIn extends Component {
    constructor(props) {
        super(props)
        this.handleClickSendEmail = this.handleClickSendEmail.bind(this);
        // this.handleClickConfirm = this.handleClickConfirm.bind(this);
    }
    handleClickSendEmail() {
        document.getElementsByClassName("send-email")[0].style.display = "none";
        document.getElementsByClassName("confirm")[0].style.display = "block";
    }
    // handleClickConfirm() {
    //     document.getElementsByClassName("send-email").style = "none";
    //     document.getElementsByClassName("confirm").style = "block";
    // }
    render() {
        return (
            <Form className="mt-2 w-50 f-login">
                <FormGroup row className="lay-lai-mat-khau">
                    <h4 className="font-weight-bold">Lấy lại mật khẩu</h4>
                </FormGroup>
                <hr className="mt-0"></hr>
                <div className="send-email">
                    <FormGroup row className="pt-5">
                        <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                            <i class="fas fa-envelope fa-2x"></i>
                        </Col>
                        <Col sm={8}>
                            <Input className="text-secondary" type="email" name="email" id="email"
                                placeholder="Địa chỉ email của bạn"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="pt-5">
                        <Col className=" text-center">
                            <Button outline color="light" className="font-weight-bold mb-1" onClick={this.handleClickSendEmail}>
                                <i class="fas fa-paper-plane pr-2"></i>
                                Gửi
                        </Button>
                        </Col>
                    </FormGroup>
                </div>
                <div className="confirm pt-5">
                    <FormGroup row>
                        <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                            <i class="fas fa-barcode fa-2x"></i>
                        </Col>
                        <Col sm={8}>
                            <Input className="text-secondary" type="text" name="confirm" id="confirm"
                                placeholder="Nhập mã xác nhận từ email của bạn"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="pt-5">
                        <Col className=" text-center">
                            <Link to="repassword">
                                <Button outline color="light" className="font-weight-bold mb-1">
                                    <i class="fas fa-clipboard-check pr-2"></i>
                                    Xác nhận
                        </Button>
                            </Link>
                        </Col>
                    </FormGroup>
                </div>
            </Form>
        );
    }
}

