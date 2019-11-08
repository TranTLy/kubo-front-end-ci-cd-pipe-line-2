import React, { Component } from 'react';
import { ADD_MODE, EDIT_MODE } from '../../../constanst';
import Modal from 'react-awesome-modal';
import './PromotionModal.scss'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export class PromotionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: new Date(),
            endTime: new Date(),
        }
    }

    OnHandleStartTime = (date) => {
        console.log("start time: ", date);
        this.setState({ startTime: date });
    }

    OnHandleEndTime = (date) => {
        console.log("end time: ", date);
        this.setState({ endTime: date });

    }

    render() {
        const { visible, promotion, mode } = this.props;
        return (
            <Modal visible={visible} width="600" height="500" effect="fadeInUp" onClickAway={() => this.props.CloseAddModel()}>
                <div className="promotion-modal">
                    <div className="promotion-modal__title">
                        {mode === ADD_MODE && (<h4>Thêm ưu đãi</h4>)}
                        {mode !== ADD_MODE && (<h4> Thông tin chi tiết ưu đãi</h4>)}
                    </div>
                    <div className="promotion-modal__table">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="lable required-lable">Tên ưu đãi:</td>
                                    <td><input name="namePromotion: " clasName="required" type="text" placeholder={promotion !== null ? promotion.namePromotion : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable">Khách hàng áp dụng:</td>
                                    <td>
                                        <textarea name="nameTypeUser" id="nameTypeUser" cols="30" rows="3" placeholder={promotion !== null ? promotion.nameTypeUser : ""}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Thời gian bắt đầu:</td>
                                    <td className="time">
                                        <div className="placeholder-start-time">{promotion !== null ? promotion.startTime : ""}</div>
                                        <DatePicker onChange={this.OnHandleStartTime}
                                            showTimeSelect
                                            selected={this.state.startTime}
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            timeCaption="time" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Thời gian kết thúc:</td>
                                    <td className="time">
                                        <div className="placeholder-start-time">{promotion !== null ? promotion.endTime : ""}</div>
                                        <DatePicker onChange={this.OnHandleEndTime}
                                            showTimeSelect
                                            selected={this.state.endTime}
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            timeCaption="time" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Phần trăm ưu đãi: <br />(từ 0 đến 50%)</td>
                                    <td><input name="discount" clasName="discount required" type="number" placeholder={promotion !== null ? promotion.discount : ""} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="promotion-modal__btns">
                        <a className="btn" role="button" onClick={mode === ADD_MODE ? () => this.props.AddNewPromotion() : () => this.props.SaveEditPromotion()}> <i class="far fa-save"></i> Lưu</a>
                        <a className="btn" role="button" onClick={() => this.props.CloseAddModel()}> <i class="far fa-times-circle"></i> Đóng</a>
                    </div>

                </div>
            </Modal >
        );
    }
}