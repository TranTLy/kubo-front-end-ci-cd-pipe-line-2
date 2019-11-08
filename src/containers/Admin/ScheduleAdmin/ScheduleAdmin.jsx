import React, { Component } from 'react';
import './ScheduleAdmin.scss'
import { ConfirmModal, ScheduleModal, Loading } from '../../../components';
import { ADD_MODE, EDIT_MODE } from '../../../constanst';
import { connect } from "react-redux"
import { READ_SCHEDULE } from '../../../config/ActionType';
class ScheduleAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addScheduleModalVisible: false,
            editScheduleModalVisible: false,
            deleteScheduleModalVisible: false,
            scheduleEdit: null,
            scheduleDelete: null,
            schedule: this.props.schedule,
            loading: this.props.loading,
            films: this.props.films
        }
    }
    componentDidMount() {
        this.props.readSchedule();
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.schedule !== this.state.schedule) {
            this.setState({ schedule: nextProps.schedule })
        };
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        };
        if (nextProps.films !== this.state.films) {
            this.setState({ films: nextProps.films })
        };
    }
    CloseAddModel = () => {
        this.setState({ addScheduleModalVisible: false })
    }
    OpenAddModal = () => {
        this.setState({ addScheduleModalVisible: true });
    }

    CloseEditModel = () => {
        this.setState({ editScheduleModalVisible: false })
    }
    OpenEditModal = (item) => {
        console.log("item", item);
        this.setState({ editScheduleModalVisible: true, scheduleEdit: item });
    }

    CloseDeleteModal = () => {
        this.setState({ deleteScheduleModalVisible: false });
    }
    OpenDeleteModal = (item) => {
        this.setState({ scheduleDelete: item, deleteScheduleModalVisible: true });
    }

    DeleteSchedule = () => {
        //TODO
        console.log("delete schedule");
        this.CloseDeleteModal();
    }
    SaveEditSchedule = () => {
        //TODO
        console.log("save schedule...");
        this.CloseEditModel();
    }
    AddNewSchedule = () => {
        //TODO
        console.log("add new schedule ... ");
        this.CloseAddModel();
    }
    render() {
        // const {schedules} = this.props;
        //TODO: get db from api, join tables: Schedule, Cineme, Branch, Room
        const schedules = [
            {
                _id: "1",
                idBranch: "1",
                idCinema: "1",
                startTime: "2019-01-20 08:00 AM",
                endTime: "01/30/2019 10:00 AM",
                idRoom: "1",
                sumTicket: 60,
                availableTicket: 59,
                name: "Bí kíp luyện rồng", //name cinema
                nameBranch: "Kubo Bình Thạnh",
                nameRoom: "A11"
            }
        ]
        return (
            <React.Fragment>
                <div className="schedule-admin__content admin__content">
                    <div className="schedule-admin__head admin__head">
                        <div className="schedule-admin__head--find admin__head--find">
                            <input type="text" placeholder="Tìm kiếm" />
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="schedule-admin__head--add admin__head--add">
                            <a name="" id="" class="btn " href="#" role="button" onClick={() => this.OpenAddModal()}>Thêm</a>
                        </div>
                    </div>
                    {this.state.loading ? <Loading /> : (
                        <div className="schedule-admin__schedules admin__detail">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên phim</th>
                                        <th scope="col">Rạp chiếu</th>
                                        <th scope="col">Thời gian bắt đầu</th>
                                        <th scope="col">Số lượng vé còn</th>
                                        <th scope="col"></th>
                                        {/* //TODO */}
                                        <th scope="col">Tình trạng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.schedule.map((item, index) => (
                                        <tr className="schedule-admin__schedules--single-schedule admin__detail--single">
                                            <td>{index + 1}</td>
                                            <td>{item.idfilm.name}</td>
                                            <td>{item.idbranch.name}</td>
                                            <td>{new Date(item.startTime).toLocaleDateString('en-GB')} {new Date(item.startTime).toISOString().slice(11, 19)} </td>
                                            <td>{item.availableTicket}/{item.sumTicket}</td>

                                            <td className="actions">
                                                <i class="fas fa-edit" onClick={() => this.OpenEditModal(item)}></i>
                                                <i class="fas fa-trash-alt" onClick={() => this.OpenDeleteModal(item)}></i></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>)}


                    <ScheduleModal mode={ADD_MODE} visible={this.state.addScheduleModalVisible} films={this.state.films} schedule={null} CloseAddModel={this.CloseAddModel} AddNewSchedule={this.AddNewSchedule} />

                    <ScheduleModal mode={EDIT_MODE} visible={this.state.editScheduleModalVisible} schedule={this.state.scheduleEdit} CloseAddModel={this.CloseEditModel} SaveEditSchedule={this.SaveEditSchedule} />

                    <ConfirmModal visible={this.state.deleteScheduleModalVisible}
                        content={this.state.scheduleDelete != null ? `Bạn chắc chắn muốn xóa lịch chiếu ${this.state.scheduleDelete.name} vào lúc ${this.state.scheduleDelete.startTime} tại ${this.state.scheduleDelete.nameBranch}?` : ""}
                        confirmBtn={"Xóa"} action={this.DeleteSchedule} CloseModal={this.CloseDeleteModal} />


                </div>
            </React.Fragment >);
    }
}

function mapStateToProps(state) {
    return {
        schedule: state.schedule.data,
        loading: state.schedule.loading,
        films: state.films.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        readSchedule: () => dispatch({ type: READ_SCHEDULE })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleAdmin)