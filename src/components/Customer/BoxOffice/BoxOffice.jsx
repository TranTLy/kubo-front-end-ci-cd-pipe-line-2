import React from 'react'
import "./BoxOffice.scss"
// import { Container, Row, Col } from 'reactstrap'

const items = [
    { content: 'THẰNG EM LÝ TƯỞNG', duration: "120 Phút", releasedate: "31/05/2019" },
    { content: 'THẰNG EM LÝ TƯỞNG', duration: "120 Phút", releasedate: "31/05/2019" },
    { content: 'THẰNG EM LÝ TƯỞNG', duration: "120 Phút", releasedate: "31/05/2019" },
    { content: 'THẰNG EM LÝ TƯỞNG', duration: "120 Phút", releasedate: "31/05/2019" },
    { content: 'THẰNG EM LÝ TƯỞNG', duration: "120 Phút", releasedate: "31/05/2019" },
    { content: 'THẰNG EM LÝ TƯỞNG', duration: "120 Phút", releasedate: "31/05/2019" }
]


class ItemBox extends React.Component {
    render() {

        return (
            <div className="item-box mt-3">
                <div className="info-film">
                    <h6>{this.props.index}.</h6>
                    <h6>{this.props.item.content.substring(0, 15)}...</h6>
                </div>

                <div className="time-film">
                    <span>{this.props.item.duration} </span>
                    <span>|</span>
                    <span> {this.props.item.releasedate}</span>
                </div>
            </div>
        )
    };
}

export default class BoxOffice extends React.Component {
    render() {
        return (
            <div className="box-office">
                <div className="box-office-title mt-3">
                    <h3>BOX OFFICE</h3>
                </div>
                <div className="mt-3">
                    {items.map((item, index) =>
                        <ItemBox item={item} index={index + 1}></ItemBox>
                    )}
                </div>
                <div className="pay-ticket">
                    <h3>ĐẶT VÉ NGAY</h3>
                </div>
            </div>
        );
    }
}