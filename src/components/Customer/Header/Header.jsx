import React, { Component } from 'react';
import {
    Button, Container, Row, Navbar, NavbarBrand, Nav, Collapse,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import './Header.scss'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';
import { connect } from "react-redux"
import { READ_CATEGORY, READ_FILM, READ_USER } from '../../../config/ActionType';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            data: this.props.data,
            user: this.props.user
        }
    }
    handleClick = (id) => {
        window.location.href = "/categoryfilm?id=" + id;
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
            this.setState({ isLoggedIn: nextProps.isLoggedIn })
        }
        if (nextProps.data !== this.state.data) {
            this.setState({ data: nextProps.data })
        }
        if (nextProps.user !== this.state.user) {
            this.setState({ user: nextProps.user })
        }
    };
    componentWillMount() {
        this.props.read();
        this.props.readFilms();
        this.props.readUsers();
    }
    componentDidMount() {
        let pathname = window.location.pathname;
        if (pathname === "/") {
            document.getElementsByClassName("type")[0].classList.remove("active");
            document.getElementsByClassName("about")[0].classList.remove("active");
            document.getElementsByClassName("schedule")[0].classList.remove("active");
            let element = document.getElementsByClassName("home");
            element[0].classList.add("active");
        }
        else if (pathname === "/categoryfilm") {
            document.getElementsByClassName("home")[0].classList.remove("active");
            document.getElementsByClassName("about")[0].classList.remove("active");
            document.getElementsByClassName("schedule")[0].classList.remove("active");
            let element = document.getElementsByClassName("type");
            element[0].classList.add("active");
        }
        else if (pathname === "/about") {
            document.getElementsByClassName("home")[0].classList.remove("active");
            document.getElementsByClassName("type")[0].classList.remove("active");
            document.getElementsByClassName("schedule")[0].classList.remove("active");
            let element = document.getElementsByClassName("about");
            element[0].classList.add("active");
        }
        else if (pathname === "/schedule") {
            document.getElementsByClassName("home")[0].classList.remove("active");
            document.getElementsByClassName("type")[0].classList.remove("active");
            document.getElementsByClassName("about")[0].classList.remove("active");
            let element = document.getElementsByClassName("schedule");
            element[0].classList.add("active");
        }
    }
    render() {
        let button;
        if (!this.state.isLoggedIn) {
            button = (
                <React.Fragment>
                    <LogInButton ></LogInButton>
                    <Link to="/signin">
                        <Button outline color="danger" className="ml-2">Đăng ký</Button>
                    </Link>
                </React.Fragment>
            )
        }
        else {
            button = <LogOutButton fullname={this.state.user.fullname} ></LogOutButton>
        }
        return (
            <div className="header sticky-top">
                <Container>
                    <Row>
                        <Navbar expand="md">
                            <NavbarBrand href="/" className="pt-0 mb-1">
                                <img src={logo} alt="logo" class="d-inline-block align-top "></img>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav navbar className="pt-0 pb-2">
                                    <NavItem className="pr-2">
                                        <NavLink href="/" className="home">Trang chủ</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar className="pr-2">
                                        <DropdownToggle nav caret className="type">
                                            Thể loại
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            {this.state.data !== null ? this.state.data.map(type => <DropdownItem onClick={() => this.handleClick(type._id)}>{type.name}</DropdownItem>) : <DropdownItem></DropdownItem>}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem className="pr-2">
                                        <NavLink href="about" className="about">Giới thiệu</NavLink>
                                    </NavItem>
                                    <NavItem className="pr-2">
                                        <NavLink href="schedule" className="schedule">Lịch chiếu</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        <div className="ml-auto d-flex mt-2 mr-2">
                            {button}

                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state header", state);
    return {
        isLoggedIn: state.login.isLoggedIn,
        loading: state.categorys.loading,
        data: state.categorys.data || [],
        error: state.categorys.error,
        user: state.login.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        read: () => dispatch({ type: READ_CATEGORY }),
        readFilms: () => dispatch({ type: READ_FILM }),
        readUsers: () => dispatch({ type: READ_USER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);