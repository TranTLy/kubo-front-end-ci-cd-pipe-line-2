import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'
import './ForgotPassword.scss'
export default class LogIn extends Component {
    render() {
        return (
            <Form className="mt-2 w-50 f-login">
                <FormGroup row className="lay-lai-mat-khau">
                    <h4 className="font-weight-bold">Thay đổi mật khẩu</h4>
                </FormGroup>
                <hr className="mt-0"></hr>
                <FormGroup row className="pt-5">
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-key fa-2x"></i>
                    </Col>
                    <Col sm={{ size: 8 }}>
                        <Input className="text-secondary" type="password" name="password" id="password"
                            placeholder="Nhập mật khẩu mới của bạn"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-lock fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="re-password" name="re-password" id="re-password"
                            placeholder="Nhập lại mật khẩu"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row className="pt-5">
                    <Col className=" text-center">
                        <Button outline color="light" className="font-weight-bold mb-1" type="submit">
                            <i class="fas fa-paper-plane pr-2"></i>
                            Gửi
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

