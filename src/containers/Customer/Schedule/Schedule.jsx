import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header';
import Footer from '../../../components/Customer/Footer/Footer';
import CardItemDetail from '../../../components/Customer/CardItemDetail/CardItemDetail'
import { Container, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Loading } from '../../../components'
import './Schedule.scss'
import { READ_SCHEDULE, READ_BRANCH, READ_FILM } from '../../../config/ActionType';



class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allBrandOption: "0",
            allFilmOption: "0",
            branchs: [],
            allSchedules: [],
            schedules: [],
            currentBranch: 0,
            isLoading: true,
            films: [],
            idQueryFilm: 'before'
        }
        // this.onSelectBranch = this.onSelectBranch.bind(this);
    }


    componentWillReceiveProps = (nextProps) => {
        if (!nextProps.schedule.loading && !nextProps.branch.loading
            && nextProps.schedule.data !== this.state.allSchedules
            && nextProps.branch.data !== this.state.branchs) {
            console.log("Schedule: onchange in receive props", nextProps)
            // this.setState({ branches: nextProps.branches.data,  })
            let newSchedule = [];
            if (this.state.idQueryFilm === this.state.allFilmOption) {
                newSchedule = nextProps.schedule.data;
            } else {
                const temp = nextProps.schedule.data.filter((item) => item.idfilm._id === this.state.idQueryFilm);
                if (temp.length > 0) {
                    newSchedule = temp;
                } else {
                    newSchedule = [];
                }
            }

            this.setState({
                allSchedules: nextProps.schedule.data,
                schedules: newSchedule,
                currentBranch: this.state.allBrandOption,
                branchs: nextProps.branch.data,
                films: nextProps.films.data,
                isLoading: false
            });
        }
    }

    componentDidMount() {
        let values = this.props.location.search;
        const param = new URLSearchParams(values);
        console.log("value link: ", values, "param: ")
        const idfilm = param.get('idfilm');
        console.log("idfilm", idfilm);
        this.setState({ idQueryFilm: idfilm || this.state.allFilmOption }, () => {
            console.log("id query film: ", this.state.idQueryFilm);
        });

        console.log("schedule: on did mount ");
        this.props.readSchedule();
        this.props.readBranch();
    }

    onSearchSchedule = () => {
        const select = document.getElementById("select-branch");
        const idBranch = select.value;

        const idFilm = document.getElementById("select-film").value;


        console.log("id Branch: ", idBranch, idFilm);

        let startTime = document.getElementById("select-date-start").value;
        let endTime = document.getElementById("select-date-end").value;

        // console.log("start: ", startTime, "end: ", endTime);
        if (startTime === '' && endTime === '') {
            this.setState({
                schedules: this.state.allSchedules.filter((item) => {
                    console.log("sldfklsjdfls:", typeof (idBranch), typeof (this.state.allBrandOption), idBranch == this.state.allBrandOption
                        || item.idbranch._id === idBranch);

                    if ((idBranch === this.state.allBrandOption.toString()
                        || item.idbranch._id === idBranch) && (idFilm === this.state.allFilmOption.toString() || idFilm === item.idfilm._id)) {
                        return item;
                    }
                })
            })
        } else if (startTime === '') {
            endTime = new Date(endTime);
            const newSchedules = this.state.allSchedules.filter((item) => {
                const temp = new Date(item.endTime);
                // console.log("temp = ", temp, temp <= endTime, "- ", temp, "- ", endTime);
                // console.log("item idbranch: ", item.idbranch);
                // console.log("kjashf: ", (idBranch.toString() === this.state.allBrandOption.toString() || item.idbranch._id === idBranch.toString()))
                if (temp <= endTime
                    && (idBranch === this.state.allBrandOption.toString() || item.idbranch._id === idBranch)) {
                    return item;
                }
            });
            this.setState({ schedules: newSchedules })
        } else if (endTime === '') {
            startTime = new Date(startTime);
            this.setState({
                schedules: this.state.allSchedules.filter((item) => {
                    const temp = new Date(item.startTime);
                    if (temp >= startTime && (idBranch === this.state.allBrandOption.toString() || item.idbranch._id === idBranch)) {
                        return temp;
                    }
                })
            })
        } else {
            endTime = new Date(endTime);
            startTime = new Date(startTime);
            if (startTime > endTime) {
                return alert("Ngày bắt đầu phải nhỏ hơn ngày kết thúc");
            }
            this.setState({
                schedules: this.state.allSchedules.filter((item) => {
                    const temp = new Date(item.startTime);
                    if (temp >= startTime && temp <= endTime
                        && (idBranch === this.state.allBrandOption.toString() || item.idbranch._id === idBranch)
                        && (idFilm === this.state.allFilmOption.toString() || idFilm === item.idfilm._id)) {
                        return temp;
                    }
                })
            })
        }



    }

    render() {
        console.log("on render schedules: ...", this.state.schedules);

        return (
            <div>
                <head>
                </head>
                <Header />
                {
                    this.state.isLoading ?
                        (<Loading />) :
                        <Container className="schedule-wrap">
                            <div className="search">
                                <div className="search-branch">
                                    <span class="lable-search"> Chi nhánh </span>
                                    <select id="select-branch">
                                        <option value={this.state.allBrandOption}>Tất cả</option>)
                                        {
                                            this.state.branchs.map((item) => {
                                                return (
                                                    <option value={item._id}>{item.name}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="search-film">
                                    <span class="lable-search"> Phim </span>
                                    <select id="select-film">
                                        <option value={this.state.allFilmOption}>Tất cả</option>)
                                {
                                            this.state.films.map((item) => {
                                                if (item._id === this.state.idQueryFilm) {
                                                    return (
                                                        <option value={item._id} selected>{item.name}</option>)
                                                } else {
                                                    return (
                                                        <option value={item._id}>{item.name}</option>)
                                                }
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="search-date">
                                    <span class="lable-search"> Thời gian </span>
                                    {/* <div>Thời gian: </div> */}
                                    <div> Từ <input className="select-date-detail" id="select-date-start" type="date" name="date" /></div>
                                    <div> Đến <input className="select-date-detail" id="select-date-end" type="date" name="date" /></div>
                                    <a name="" id="" onClick={() => this.onSearchSchedule()} class="btn btn-dark btn-search-schedule" href="#" role="button">Tìm kiếm</a>
                                </div>
                            </div>

                            <div className="sum-schedule">Tổng cộng {this.state.schedules.length} lịch chiếu</div>
                            <div className="list-schedules">
                                {
                                    this.state.schedules !== null && this.state.schedules.length > 0 && this.state.schedules.map((schedule, index) => {
                                        let branch = this.state.branchs.filter((item) => item._id == schedule.idroom.idbranch);
                                        branch = branch[0];
                                        const _movie = schedule.idfilm;
                                        const href = "book-ticket?id=" + schedule._id;
                                        return (
                                            <div className="schedule">
                                                <CardItemDetail movie={_movie} key={index} />
                                                <div className="detail-schedule">
                                                    <div className="title"><div> <i class="fas fa-film"></i> Lịch chiếu</div></div>
                                                    <div><span className="lable">Chi nhánh: </span>{branch.name}</div>
                                                    <div><span className="lable">Địa chỉ: </span>{branch.address}</div>
                                                    <div><span className="lable">Thời gian bắt đầu: </span>{new Date(schedule.startTime).toLocaleDateString('en-GB') + ' ' + new Date(schedule.startTime).toISOString().slice(11, 19)}</div>
                                                    <div><span className="lable">Phòng: </span>{schedule.room}</div>
                                                    <div><span className="lable">Số vé còn: </span>{schedule.availableTicket} vé/ tổng {schedule.sumTicket} vé</div>
                                                    <div className="btn-book-ticket"> <Button class="btn" ><a href={href}>Đặt vé </a> </Button></div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </Container>
                }
                <Footer />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        schedule: state.schedule,
        branch: state.branch,
        films: state.films
    }
}
function mapDispatchToProps(dispatch) {
    return {
        readSchedule: () => dispatch({ type: READ_SCHEDULE }),
        readBranch: () => dispatch({ type: READ_BRANCH })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
