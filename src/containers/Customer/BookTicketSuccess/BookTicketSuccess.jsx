import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header';
import Footer from '../../../components/Customer/Footer/Footer';
import CardItemDetail from '../../../components/Customer/CardItemDetail/CardItemDetail'
import { Container } from 'reactstrap';
import { ProgressBookTicket, SeatingPlant, Bill, Loading } from '../../../components'

import './BookTicketSuccess.scss'
import { READ_SCHEDULE, READ_PROMOTION_BOOK_TICKET, READ_TYPEPAYMENT, CREATE_BILL } from '../../../config/ActionType';
import { connect } from 'react-redux';
class BookTicketSuccess extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(next) {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Đặt vé thành công
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {

    }
}

function mapDispathToProps(dispath) {
    return {

    }
}
export default connect(mapStateToProps, mapDispathToProps)(BookTicketSuccess);
