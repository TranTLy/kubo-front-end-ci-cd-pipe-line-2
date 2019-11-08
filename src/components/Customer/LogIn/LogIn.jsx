import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'
import './LogIn.scss'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { LogIn } from "../../../actions/action"
class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleInputEmail = this.handleInputEmail.bind(this);
        this.handleInputPassWord = this.handleInputPassWord.bind(this);
        this.state = {
            email: "",
            password: "",
            users: this.props.users || []
        }
    }

    componentWillReceiveProps = nextprops => {
        if (nextprops.users !== this.state.users) {
            this.setState({ users: nextprops.users })
        }
    }
    handleInputEmail(e) {
        this.setState({ email: e.target.value })
    }
    handleInputPassWord(e) {
        this.setState({ password: e.target.value })
    }

    handleLoginClick() {
        console.log("email", this.state.email);
        console.log("password", this.state.password);

        let user = this.state.users.filter(user => user.email === this.state.email && user.password.toString() === this.state.password);
        console.log("user", user);
        if (user.length > 0) {
            this.props.login(user[0]);
            window.location.href = "/profile";
        }
        else {
            alert("Email hoặc mật khẩu bị sai, mời bạn đăng nhập lại");

        }
    }

    render() {
        return (
            <Form className="mt-2 w-50 f-login">
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
                        <Input className="text-secondary" type="email" name="email" id="email"
                            placeholder="Nhập gmail của bạn" value={this.state.email} onChange={this.handleInputEmail}
                        />
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
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col className="text-right" sm={10}>
                        <Link className="text-white" to="/forgotpassword">
                            <h6>Quên mật khẩu ?</h6>
                        </Link>
                    </Col>
                </FormGroup>
                {/* <FormGroup row>
                    <Col sm={4}>
                        <hr></hr>
                    </Col>
                    <Col sm={4}>
                        <h6>Hoặc đăng nhập qua</h6>
                    </Col>
                    <Col sm={4}>
                        <hr></hr>
                    </Col>
                </FormGroup> */}
                {/* <FormGroup row >
                    <Col className="d-flex flexDirection: 'row',">
                        <Col sm={{ size: 2, offset: 3 }}>
                            <Button color="primary" className="d-flex flexDirection: 'row',">
                                <i class="fab fa-facebook-f pt-1 pr-1"></i>
                                Facebook</Button>
                        </Col>
                        <Col sm={{ size: 2, offset: 1 }}>
                            <Button color="danger" className="d-flex flexDirection: 'row',">
                                <i class="fab fa-google pt-1 pr-1"></i>
                                Google</Button>
                        </Col>
                    </Col>
                </FormGroup> */}
                <FormGroup row>
                    <Col sm={{ offset: 3 }} className="d-flex flexDirection: 'row',">
                        <h6>Bạn chưa có tài khoản? </h6>
                        <Link to="/signin">
                            <h6 className="pl-1 font-weight-light">Đăng ký ngay</h6>
                        </Link>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col className=" text-center">
                        <Button outline color="light" className="font-weight-bold mb-1" onClick={this.handleLoginClick}>
                            <i class="fas fa-user-alt pr-2"></i>
                            Đăng nhập
                        </Button>
                    </Col>
                </FormGroup>

            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.login.isLoggedIn,
        users: state.users.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (user) => dispatch(LogIn(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)