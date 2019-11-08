import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header';
import Footer from '../../../components/Customer/Footer/Footer';
import CardItemDetail from '../../../components/Customer/CardItemDetail/CardItemDetail'
import { Container } from 'reactstrap';
import { ProgressBookTicket, SeatingPlant, Bill, Loading } from '../../../components'

import './BookTicket.scss'
import { READ_SCHEDULE, READ_PROMOTION_BOOK_TICKET, READ_TYPEPAYMENT, CREATE_BILL } from '../../../config/ActionType';
import { connect } from 'react-redux';
class BookTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            STEP_ONE: 1,
            STEP_TWO: 2,
            STEP_THREE: 3,
            steps: [
                {
                    step: 1,
                    name: "Chọn số lượng vé"
                }, {
                    step: 2,
                    name: "Chọn ghế ngồi"
                }, {
                    step: 3,
                    name: "Thanh toán"
                }
            ],
            currentStep: 1,
            numberTicket: 0,
            arrayPositionSeat: [], //an array that records the position of seat,
            schedule: null,
            schedules: [],
            idSchedule: null,
            isLoading: true,
            promotion: {
                name: "(Không có)",
                discount: 0
            },
            user: {
                "typeuser": {
                    "_id": "5d05eebacc0d062430b5f3ec",
                    "name": "Thân thiết",
                    "minscore": 0,
                    "__v": 0
                },
                "point": 0,
                "_id": "5d09b69efed6a72290d288c6",
                "fullname": "Trần Lý",
                "birthday": "1998-07-22T17:00:00.000Z",
                "email": "tranly237@gmail.com",
                "password": "12345678",
                "phone": "0900 001 009",
                "__v": 0
            },
            typePayment: [],
            bill: null,
            isFinish: false
        }
    }

    componentWillReceiveProps(next) {
        if (!next.schedules.loading && !next.typePayment.loading
            && next.schedules.data !== this.state.schedules
            && next.typePayment.data !== this.state.typePayment) {
            let detailSchedule = next.schedules.data.filter((item) => item._id === this.state.idSchedule);
            if (detailSchedule.length > 0) {
                detailSchedule = detailSchedule[0];
                //TOTO: type user here
                this.props.readPromotionBookTicket(detailSchedule.idfilm._id, this.state.user.typeuser._id);
            } else {
                detailSchedule = null;
            }
            this.setState({
                schedules: next.schedules.data,
                schedule: detailSchedule,
                typePayment: next.typePayment.data,
                user: next.user,
                isLoading: false
            })
            console.log("user in bookticket: ", next.user)
        }


        if (!next.promotion.loading && next.promotion.data !== this.state.promotion) {
            //if there are not any promotion => discount = 0
            //get max discount promotion
            if (next.promotion.data.length > 0) {
                this.setState({ promotion: next.promotion.data[0] });
            }
        }

        console.log("next bill:", next.bill);
        if (!next.bill.loading && this.state.isFinish) {
            console.log("saved bill: ", next.bill.data);
            this.setState({
                bill: next.bill.data
            })
            alert(`Đặt ${this.state.arrayPositionSeat.length} vé thành công. Vui lòng nhận vé trước giờ chiếu 15 phút`);
            document.getElementsByClassName("book-ticket-option")[0].innerHTML =
                `<div className= "book-ticket-success-wrap">
            <div className="book-ticket-success__title">Đặt vé thành công</div>
            <div className="book-ticket-success">Bạn đã đặt ${this.state.arrayPositionSeat.length} vé</div>
            <div className="book-ticket-success">Vị trí ghế ngồi: ${this.state.arrayPositionSeat.map((item, index) =>
                    index !== 0 ? (' ' + (parseInt(item) + 1)) : (parseInt(item) + 1))}</div>
            <div className="book-ticket-success">Vui lòng nhận vé trước giờ chiếu 15 phút</div>
            </div>`
            this.setState({ isFinish: false });
        }
    }

    componentDidMount() {
        // console.log("did mount location:", window.location);
        const values = window.location.search;
        const param = new URLSearchParams(values);
        const id = param.get("id");
        console.log("value link: ", values, " - id: ", id);
        this.setState({
            idSchedule: id || ''
        })
        this.props.readSchedule();
        this.props.readTypePayment();
    }

    selectSeatPosition = (pos) => {
        this.setState({ arrayPositionSeat: [...this.state.arrayPositionSeat, pos] })
    }

    deselectSeatPosition = (pos) => {
        this.setState({ arrayPositionSeat: [...this.state.arrayPositionSeat.filter(item => item != pos)] });
        console.log("arr pos seat:", this.state.arrayPositionSeat);

    }

    nextStep = () => {
        const currentStep = this.state.currentStep;
        console.log("first curr step: ", currentStep);
        if (currentStep === this.state.STEP_THREE) { //last step: payment
            //TODO
            const idTypePayment = document.getElementById("typePayment").elements["typePayment"].value;
            if (idTypePayment === '') {
                document.getElementById("message").innerHTML = "Bạn vui lòng chọn hình thức thanh toán.";
            }
            else {
                document.getElementById("message").innerHTML = "";
                const quantity = this.state.arrayPositionSeat.length;
                const price = this.state.schedule.idfilm.price;
                const discount = this.state.promotion.discount;
                const bill = {
                    idUser: this.state.user._id,
                    idPromotion: this.state.promotion.discount > 0 ? this.state.promotion._id : "",
                    idTypePayment,
                    quantity,
                    sum: quantity * price * (1 - discount),
                    seat: this.state.arrayPositionSeat,
                    idSchedule: this.state.schedule._id,
                    date: new Date()
                }
                console.log("bill new: ", bill);
                this.props.createBill(bill);
                this.setState({ isFinish: true });
            }
        }
        else if (currentStep == this.state.STEP_TWO) {  //2nd step: choose seat
            const temp = document.getElementById("message");
            if (this.state.arrayPositionSeat.length < this.state.numberTicket) {
                temp.innerHTML = `Vui lòng chọn đủ ${this.state.numberTicket} ghế ngồi.`
            } else {
                temp.innerHTML = '';
                const btnNext = document.getElementById("btn--next");
                btnNext.innerHTML = "Thanh toán";
                this.setState({ currentStep: currentStep + 1 });
            }
        }
        else { //step 1
            console.log("number ticket: ", this.state.numberTicket);
            const temp = document.getElementById("message");
            if (this.state.numberTicket <= 0) {
                temp.innerHTML = 'Vui lòng chọn số lượng vé hợp lệ'
            } else if (this.state.numberTicket > this.state.schedule.availableTicket) {
                temp.innerHTML = `Suất chiếu chỉ còn lại ${this.state.schedule.availableTicket} vé`;
            } else {
                temp.innerHTML = '';
                this.setState({ currentStep: currentStep + 1 });
            }
        }

    }
    backStep = () => {
        document.getElementById("message").innerHTML = '';
        const currentStep = this.state.currentStep;

        if (currentStep != this.state.STEP_ONE) {
            this.setState({ currentStep: currentStep - 1 });

            const btnNext = document.getElementById("btn--next");
            if (btnNext != null) {
                btnNext.innerHTML = "Tiếp theo"
            }
        }
    }

    onChangNumberTicket = () => {
        const inputNumberTicket = document.getElementById("number-ticket");
        if (inputNumberTicket.value <= 0) {
            inputNumberTicket.value = 1;
        }
        this.setState({ numberTicket: inputNumberTicket.value });
    }

    renderOption = () => {
        switch (this.state.currentStep) {
            case this.state.STEP_ONE:
                return (
                    <div className="option__detail -number-ticket">
                        <span className="number">Số lượng vé: </span>
                        <input type="number" value={this.state.numberTicket} name="number" id="number-ticket" onChange={() => { this.onChangNumberTicket() }} /> <br />
                    </div>

                )
            case this.state.STEP_TWO:

                return (
                    <div class="option__detail">
                        <SeatingPlant stateSeat={this.state.schedule.stateSeat} maxSeat={this.state.numberTicket}
                            selectSeatPosition={this.selectSeatPosition} deselectSeatPosition={this.deselectSeatPosition}
                            arrayPositionSeat={this.state.arrayPositionSeat} />
                    </div>
                )
            case this.state.STEP_THREE:
                return (
                    <div className="option__detail">
                        <div className="detail__lable">Vui lòng chọn hình thức thanh toán</div>
                        <div className="detail__payment">
                            <form id="typePayment">
                                {
                                    this.state.typePayment.map((item) => {
                                        return (
                                            <React.Fragment>
                                                <input type="radio" name="typePayment" value={item._id} />{item.name}<br></br>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </form >
                        </div>
                    </div>
                )
            default:
                return (<div>

                </div>);
        }
    }
    render() {
        // console.log('render...prom: ', this.state.promotion);
        const schedule = this.state.schedule;
        if (this.state.schedule != null) {
            const branch = schedule.idbranch;
            const myMovie = schedule.idfilm;
        }

        return (
            <div>
                <Header />
                {
                    this.state.isLoading ? <Loading /> : !this.state.isLoading && this.state.schedule === null ?
                        <div class="book-ticket-not-found">Không tìm thấy lịch chiếu phim</div> :
                        (
                            <Container className="book-ticket-wrap">
                                <div className="schedule">
                                    <CardItemDetail movie={schedule.idfilm} />
                                    <div className="detail-schedule">
                                        <div className="title"><div> <i class="fas fa-film"></i> Lịch chiếu</div></div>
                                        <div><span className="lable">Chi nhánh: </span>{schedule.idbranch.nameBranch}</div>
                                        <div><span className="lable">Địa chỉ: </span>{schedule.idbranch.address}</div>
                                        <div><span className="lable">Thời gian bắt đầu: </span>{schedule.startTime}</div>
                                        <div><span className="lable">Phòng: </span>{schedule.idRoom}</div>
                                        <div><span className="lable">Số vé còn: </span>{schedule.availableTicket} vé/ tổng {schedule.sumTicket} vé</div>
                                    </div>
                                </div>
                                <div className="book-ticket-option">
                                    <div className="title"><span>ĐẶT VÉ</span></div>
                                    <ProgressBookTicket currentStep={this.state.currentStep} steps={this.state.steps} />
                                    <div className="btns">
                                        <button id="btn--back" onClick={() => { this.backStep() }}>Trở về</button>
                                        <button id="btn--next" onClick={() => { this.nextStep() }}>Tiếp theo</button>
                                    </div>
                                    <div id="message">

                                    </div>
                                    <div className="option">
                                        {
                                            this.renderOption()
                                        }
                                    </div>
                                    <div className="bill">
                                        <Bill price={schedule.idfilm.price} numberTicket={this.state.numberTicket}
                                            discount={this.state.promotion.discount} name={this.state.promotion.name}
                                            typeUser={this.state.user.typeuser.name} />
                                    </div>

                                </div>
                            </Container>
                        )
                }
                <Footer />

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        schedules: state.schedule,
        promotion: state.promotionBookTicket,
        typePayment: state.typePayment,
        bill: state.bill,
        user: state.login.user
    }
}

function mapDispathToProps(dispath) {
    return {
        readSchedule: () => dispath({ type: READ_SCHEDULE }),
        readPromotionBookTicket: (idfilm, idtypeuser) => dispath({ type: READ_PROMOTION_BOOK_TICKET, idfilm, idtypeuser }),
        readTypePayment: () => dispath({ type: READ_TYPEPAYMENT }),
        createBill: (bill) => dispath({ type: CREATE_BILL, bill })
    }
}
export default connect(mapStateToProps, mapDispathToProps)(BookTicket);
