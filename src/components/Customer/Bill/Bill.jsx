import React, { Component } from 'react';
import './Bill.scss'


export class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { numberTicket, price, discount, name, typeUser } = this.props;
        const sum = numberTicket * price;
        return (
            <div className="bill-wrap">
                <div className="bill-wrap__element -sum">
                    <div className="element__lable">Tổng cộng {numberTicket} vé:</div>
                    <div className="element__content">{sum}đ</div>
                </div>
                {
                    discount > 0 && (
                        <React.Fragment>
                            <div className="bill-wrap__element -discount">
                                <div className="element__lable">Ưu đãi <span>{discount * 100}%/vé</span>:</div>
                                <div className="element__content">- {sum * discount}đ</div>
                            </div>
                            <div className="bill-wrap__element -name-discount">
                                <div className="element__content">({name})</div>
                                {
                                    discount > 0 && (
                                        <div className="element__content">Dành cho khách hàng {typeUser}</div>
                                    )
                                }
                            </div>
                        </React.Fragment>
                    )
                }
                <div className="bill-wrap__element -last-sum">
                    <div className="element__lable">Thành tiền:</div>
                    <div className="element__content">{(sum * (1 - discount) / 1000.0).toFixed(3)}đ</div>
                </div>
            </div>
        )

    }
}
