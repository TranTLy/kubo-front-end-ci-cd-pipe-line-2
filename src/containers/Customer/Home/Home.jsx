import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header'
import Footer from '../../../components/Customer/Footer/Footer'
import './Home.scss'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="">
                <Header></Header>
                This is home
                <Footer></Footer>
            </div>
        );
    }
}
