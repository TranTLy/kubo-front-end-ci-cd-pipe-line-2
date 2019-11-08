import React, { Component } from 'react';
import './Loading.scss'

export class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="loader" ></div >
        );
    }
}
