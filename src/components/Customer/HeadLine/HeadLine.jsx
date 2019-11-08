import React, { Component } from 'react';
import './HeadLine.scss';

class HeadLine extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { title } = this.props
        return (
            <div className="head-line-wrap">
                <span> {title}</span>
            </div>
        );
    }
}

export default HeadLine;