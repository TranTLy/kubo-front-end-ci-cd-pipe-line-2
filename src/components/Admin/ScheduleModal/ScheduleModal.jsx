import React, { Component } from 'react';
import { ADD_MODE, EDIT_MODE } from '../../../constanst';
import Modal from 'react-awesome-modal';
import './ScheduleModal.scss'


export class ScheduleModal extends Component {
    state = {}
    render() {
        const { visible, schedule, mode } = this.props;
        return (
            <Modal visible={visible} width="600" height="520" effect="fadeInUp" onClickAway={() => this.props.CloseAddModel()}>
                <div className="schedule-modal">
                    <div className="schedule-modal__title">
                        {mode === ADD_MODE && (<h4>Thêm lịch chiếu</h4>)}
                        {mode !== ADD_MODE && (<h4> Thông tin chi tiết lịch chiếu</h4>)}
                    </div>
                    <div className="schedule-modal__table">
                        <table className="table">
                            <tbody>
                                {mode === ADD_MODE && (
                                    <React.Fragment>
                                        <tr>
                                            <td className="lable required-lable">Tên phim:</td>
                                            <td><input name="name" className="required" type="text" placeholder={schedule !== null ? schedule.name : ""} /></td>
                                        </tr>
                                        <tr>
                                            {/* TODO */}
                                            <td className="lable required-lable">Tên rạp chiếu:</td>
                                            <td>
                                                <textarea name="idBranch" className="required" id="desciprion" cols="30" rows="3" placeholder={schedule !== null ? schedule.desciption : ""}></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="lable required-lable">Phòng chiếu:</td>
                                            <td><input name="idRoom" className="required" type="text" placeholder={schedule !== null ? schedule.duration : ""} /></td>
                                        </tr>
                                    </React.Fragment>
                                )}
                                {mode != ADD_MODE && (
                                    <React.Fragment>
                                        <tr>
                                            <td className="lable required-lable">Tên phim:</td>
                                            <td><input name="name" className="required" type="text" placeholder={schedule !== null ? schedule.name : ""} /></td>
                                        </tr>
                                        <tr>
                                            {/* TODO */}
                                            <td className="lable required-lable">Tên rạp chiếu:</td>
                                            <td>
                                                <textarea name="idBranch" className="required" id="desciprion" cols="30" rows="3" placeholder={schedule !== null ? schedule.nameBranch : ""}></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="lable required-lable">Phòng chiếu:</td>
                                            <td><input name="idRoom" className="required" type="text" placeholder={schedule !== null ? schedule.nameRoom : ""} /></td>
                                        </tr>
                                    </React.Fragment>
                                )}

                                <tr>
                                    <td className="lable required-lable">Thời gian bắt đầu:</td>
                                    <td>
                                        <div className="placeholder-time">{schedule !== null ? schedule.startTime : ""}</div>
                                        <input name="startDate" className="time required" type="datetime-local" placeholder={schedule !== null ? new Date(schedule.startTime) : ""} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Tổng số lượng vé:</td>
                                    <td><input name="sumTicket" className="required" type="number" placeholder={schedule !== null ? schedule.director : ""} /></td>
                                </tr>
                                {mode != ADD_MODE && (
                                    <tr>
                                        <td className="lable required-lable">Số lượng vé còn:</td>
                                        <td><input name="availableTicket" className="required" type="text" placeholder={schedule !== null ? schedule.director : ""} /></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="schedule-modal__btns">
                        <a className="btn" role="button" onClick={mode === ADD_MODE ? () => this.props.AddNewSchedule() : () => this.props.SaveEditSchedule()}> <i class="far fa-save"></i> Lưu</a>
                        <a className="btn" role="button" onClick={() => this.props.CloseAddModel()}> <i class="far fa-times-circle"></i> Đóng</a>
                    </div>

                </div>
            </Modal >
        );
    }
}