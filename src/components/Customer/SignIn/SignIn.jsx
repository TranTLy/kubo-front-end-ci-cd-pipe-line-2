import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'
import './SignIn.scss'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { CREATE_USER, LOG_IN } from '../../../config/ActionType';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleSignInClick = this.handleSignInClick.bind(this);
        this.handleInputFullName = this.handleInputFullName.bind(this);
        this.haneleInputEmail = this.haneleInputEmail.bind(this);
        this.handleInputPassWord = this.handleInputPassWord.bind(this);
        this.handleInputRePassWord = this.handleInputRePassWord.bind(this);
        this.handleInputBirthday = this.handleInputBirthday.bind(this);
        this.handleInputPhone = this.handleInputPhone.bind(this);
        this.validInput = this.validInput.bind(this);
        this.state = {
            email: null,
            password: null,
            birthday: null,
            fullname: null,
            phone: null,
            re_password: null,
            address: null,
            users: this.props.users,
            checkMail: false,
            checkPhone: false,
            checkPassword: false,
            checkRepassword: false,
            checkBirthday: false,
            checkFullname: false,
            userLogin: this.props.userLogin
        }
    }
    componentWillReceiveProps = nextProps => {
        if (nextProps.users !== this.state.users) {
            this.setState({ users: nextProps.users })
        };
        if (nextProps.userLogin !== this.state.userLogin) {
            this.setState({ userLogin: nextProps.userLogin })
        };
    }
    handleInputFullName = e => {
        if (e.target.value === "") {
            this.setState({ checkFullname: false })
        }
        else {
            this.setState({ checkFullname: true })
        }
        this.setState({ fullname: e.target.value });
    }
    handleInputBirthday = e => {
        if (new Date(e.target.value) > new Date()) {
            this.setState({ checkBirthday: false })
            document.getElementById("check-input__birthday").innerHTML = "Ngày sinh bạn nhập không đúng, vui lòng nhập lại";
        }
        else {
            this.setState({ checkBirthday: true })
            document.getElementById("check-input__birthday").innerHTML = "";

        }
        this.setState({ birthday: e.target.value });
    }
    handleInputPassWord = e => {
        if (e.target.value.length < 8) {
            this.setState({ checkPassword: false })
            document.getElementById("check-input__password").innerHTML = "Mật khẩu dài hơn 8 kí tự";
        }
        else if (e.target.value.search(/[a-zA-Z]/i) < 0) {
            this.setState({ checkPassword: false })
            document.getElementById("check-input__password").innerHTML = "Mật khẩu phải chứa chữ cái";
        }
        else if (e.target.value.match("search(/[0-9]/)") < 0) {
            this.setState({ checkPassword: false })
            document.getElementById("check-input__password").innerHTML = "Mật khẩu phải chứa số";
        }
        else {
            this.setState({ checkPassword: true })
            document.getElementById("check-input__password").innerHTML = "";
        }
        this.setState({ password: e.target.value });
    }
    haneleInputEmail = e => {
        if (this.state.users) {
            let user = this.state.users.filter(item => item.email === e.target.value);
            if (user.length > 0) {
                this.setState({ checkMail: false })
                document.getElementById("check-input__mail").innerHTML = "Email đã tồn tại, mời bạn nhập email khác";
            }
            else {
                this.setState({ checkMail: true })
                document.getElementById("check-input__mail").innerHTML = "";
            }
        }
        else {
            this.setState({ checkMail: true })
            document.getElementById("check-input__mail").innerHTML = "";

        }
        this.setState({ email: e.target.value });

    }
    handleInputRePassWord = e => {
        if (this.state.password !== e.target.value) {
            this.setState({ checkRepassword: false })
            document.getElementById("check-input__repassword").innerHTML = "Mật khẩu nhập lại không khớp";
        }
        else {
            this.setState({ checkRepassword: true })
            document.getElementById("check-input__repassword").innerHTML = "";

        }
        this.setState({ re_password: e.target.value });
    }
    handleInputPhone = e => {
        if (e.target.value === "")
            this.setState({ checkPhone: false })
        else {
            this.setState({ checkPhone: true })
        }
        this.setState({ phone: e.target.value })
    }
    handleSignInClick() {
        let user = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            birthday: this.state.birthday,
            phone: this.state.phone,
        }
        this.props.Signin(user);
        if (this.state.userLogin.length > 0) {
            window.location.href = "/profile?id=" + this.state.userLogin._id
        }
    }
    validInput() {
        return this.state.checkMail && this.state.checkBirthday && this.state.checkFullname && this.state.checkPassword && this.state.checkRepassword && this.state.checkPhone;
    }
    render() {
        return (
            <Form className="mt-5 w-50 f-signin">
                <FormGroup className="d-flex flexDirection: 'row',justifyContent: 'space-between', title-login-signin">
                    <Col sm={5}>
                        <Link to="/login">
                            <h4 className="font-weight-bold ">Đăng nhập</h4>
                        </Link>
                    </Col>
                    <Col sm={2}>
                        <hr className="mt-3"></hr>
                    </Col>
                    <Col sm={5}>
                        <Link to="/signin">
                            <h4 className="font-weight-bold ">Đăng Ký</h4>
                        </Link>
                    </Col>
                </FormGroup>
                <hr className="mt-0"></hr>
                <FormGroup row className="mt-5 d-flex flexDirection: 'row',">
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-user fa-2x"></i>
                    </Col>
                    <Col sm={{ size: 8 }} >
                        <Input className="text-secondary" type="text" name="fullname" id="fullname"
                            placeholder="Vui lòng nhập tên của bạn" value={this.state.fullname} onChange={this.handleInputFullName}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-envelope fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="email" name="email" id="email"
                            placeholder="Địa chỉ email của bạn" value={this.state.email} onChange={this.haneleInputEmail}
                        />
                        <i className="check-input" id="check-input__mail"></i>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-key fa-2x"></i>
                    </Col>
                    <Col sm={{ size: 8 }}>
                        <Input className="text-secondary" type="password" name="password" id="password"
                            placeholder="Nhập mật khẩu của bạn" value={this.state.password} onChange={this.handleInputPassWord}
                        />
                        <i className="check-input" id="check-input__password"></i>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-lock fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="password" name="re-password" id="re-password"
                            placeholder="Nhập lại mật khẩu" value={this.state.re_password} onChange={this.handleInputRePassWord}
                        />
                        <i className="check-input" id="check-input__repassword"></i>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-birthday-cake fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="date" name="birthday" id="birthday"
                            placeholder="Chọn ngày tháng năm sinh của bạn" value={this.state.birthday} onChange={this.handleInputBirthday}
                        />
                        <i id="check-input__birthday" className="check-input"></i>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 1, offset: 1 }} className="pr-0" >
                        <i class="fas fa-mobile-alt fa-2x"></i>
                    </Col>
                    <Col sm={8}>
                        <Input className="text-secondary" type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            placeholder="Nhập số điện thoại của bạn" value={this.state.phone} onChange={this.handleInputPhone}
                        />
                        <span>Vui lòng nhập đúng định dạng: 123-45-678</span>
                    </Col>
                </FormGroup>
                <FormGroup row className="pt-5" >
                    <Col className=" text-center">
                        <Button outline color="light" className="font-weight-bold mb-1" onClick={this.handleSignInClick} disabled={!this.validInput()}>
                            <i class="fas fa-sign-in-alt pr-2"></i>
                            Đăng ký
                        </Button>
                    </Col>
                </FormGroup>
            </Form >

        );
    }
}

function mapStateToProps(state) {
    console.log("state in singin, user is logged", state.login.user);
    return {
        users: state.users.data,
        userLogin: state.login.user
    }

}
function mapDispatchToProps(dispatch) {
    return {
        Signin: (user) => dispatch({ type: CREATE_USER, user }),
        Login: (user) => dispatch({ type: LOG_IN, user })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)