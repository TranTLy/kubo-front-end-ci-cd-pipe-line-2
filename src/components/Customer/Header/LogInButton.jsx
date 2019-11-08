import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
export default class LogInButton extends Component {
    render() {
        return (
            <div>
                <Link to="/login">
                    <Button outline color="danger">Đăng nhập</Button>
                </Link>
            </div>
        )
    }
}