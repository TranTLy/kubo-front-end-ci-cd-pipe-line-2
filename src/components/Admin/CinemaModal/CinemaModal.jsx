import React, { Component } from 'react';
import { ADD_MODE, EDIT_MODE } from '../../../constanst';
import Modal from 'react-awesome-modal';
import './CinemaModal.scss'
import { timingSafeEqual } from 'crypto';


export class CinemaModal extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            cinema: {
                // name: '',
                // description: '',
                // releaseDate: '',
                // director: '',
                // actors: '',
                // language: '',
                // duration: '',
                // age: '',
                // price: '',
                // point: '',
                // rate: ''
            }
        }
    }

    checkIsEmpty = () => {
        if (
            !this.state.cinema.name
            || !this.state.cinema.description
            || !this.state.cinema.releaseDate
            || !this.state.cinema.director
            || !this.state.cinema.actors
            || !this.state.cinema.language
            || !this.state.cinema.duration
            || !this.state.cinema.age
            || !this.state.cinema.price
            || !this.state.cinema.point
            || !this.state.cinema.rate
            || !this.state.cinema.img
        ) {
            alert("Nội dung không được rỗng")
            console.log("film add new name check empty: ", this.state.rate);

            return true;
        } else {
            return false;
        }
    }


    getInfor = (mode) => {
        console.log("cinema state: ", this.state.cinema);
        if (mode === EDIT_MODE) {
            const newCinema = {
                name: this.state.cinema.name || this.props.cinema.name,
                description: this.state.cinema.description || this.props.cinema.description,
                releaseDate: this.state.cinema.releaseDate || this.props.cinema.releaseDate,
                director: this.state.cinema.director || this.props.cinema.director,
                actors: this.state.cinema.actors || this.props.cinema.actors,
                language: this.state.cinema.language || this.props.cinema.language,
                duration: this.state.cinema.duration || this.props.cinema.duration,
                age: this.state.cinema.age || this.props.cinema.age,
                price: this.state.cinema.actors || this.props.cinema.price,
                point: this.state.cinema.actors || this.props.cinema.point,
                rate: this.state.cinema.actors || this.props.cinema.rate
            }
            console.log("film save: ", newCinema);
            this.props.SaveEditCinema(newCinema);
        } else {
            if (!this.checkIsEmpty()) {
                console.log("film add new: ", this.state.cinema.name);
                this.props.AddNewCinema(this.state.cinema);
            }
        }
    }

    onChangeName = (e) => {
        this.setState({ cinema: { name: e.target.value } }, () => {
            console.log("film add new name: ", this.state.cinema.name);

        })
    }
    onChangeDescription = (e) => {
        this.setState({ cinema: { ...this.state.cinema, description: e.target.value } })
    }
    onChangeReleaseDate = (e) => {
        this.setState({ cinema: { ...this.state.cinema, releaseDate: e.target.value } })
    }
    onChangeDirector = (e) => {
        this.setState({ cinema: { ...this.state.cinema, director: e.target.value } })
    }
    onChangeActors = (e) => {
        this.setState({ cinema: { ...this.state.cinema, actors: e.target.value } })
    }
    onChangeLanguage = (e) => {
        this.setState({ cinema: { ...this.state.cinema, language: e.target.value } })
    }
    onChangeDuration = (e) => {
        this.setState({ cinema: { ...this.state.cinema, duration: e.target.value } })
    }
    onChangeAge = (e) => {
        this.setState({ cinema: { ...this.state.cinema, age: e.target.value } })
    }
    onChangePrice = (e) => {
        this.setState({ cinema: { ...this.state.cinema, price: e.target.value } })
    }
    onChangePoint = (e) => {
        this.setState({ cinema: { ...this.state.cinema, point: e.target.value } })
    }
    onChangeRate = (e) => {
        this.setState({ cinema: { ...this.state.cinema, rate: e.target.value } })
    }
    onChangeImg = (e) => {
        this.setState({ cinema: { ...this.state.cinema, img: e.target.value } })
    }

    render() {
        const { visible, cinema, mode } = this.props;
        return (
            <Modal visible={visible} width="600" height="600" effect="fadeInUp" onClickAway={() => this.props.CloseAddModel()}>
                <div className="cinema-modal">
                    <div className="cinema-modal__title">
                        {mode === ADD_MODE && (<h4>Thêm phim</h4>)}
                        {mode !== ADD_MODE && (<h4> Thông tin chi tiết phim</h4>)}
                    </div>
                    <div className="cinema-modal__table">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="lable required-lable">Tên phim:</td>
                                    <td><input onChange={this.onChangeName} id="modal-name" clasName="required" type="text" placeholder={cinema !== null ? cinema.name : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Mô tả:</td>
                                    <td>
                                        <textarea onChange={this.onChangeDescription} id="modal-description" cols="30" rows="3" placeholder={cinema !== null ? cinema.description : ""}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Ngày khởi chiếu:</td>
                                    <td><input onChange={this.onChangeReleaseDate} id="modal-startDate" clasName="required" type="text" placeholder={cinema !== null ? new Date(cinema.releaseDate).toLocaleDateString('en-GB') : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Thời lượng:</td>
                                    <td><input onChange={this.onChangeDuration} id="modal-duration" clasName="required" type="text" placeholder={cinema !== null ? cinema.duration : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Đạo diễn:</td>
                                    <td><input onChange={this.onChangeDirector} id="modal-director" clasName="required" type="text" placeholder={cinema !== null ? cinema.director : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Diễn viên:</td>
                                    <td>
                                        <input onChange={this.onChangeActors} id="modal-actors" type="text" placeholder={cinema !== null ? cinema.actors : ""} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Ngôn ngữ:</td>
                                    <td><input onChange={this.onChangeLanguage} id="modal-language" type="text" placeholder={cinema !== null ? cinema.language : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Độ tuổi tối thiểu:</td>
                                    <td><input onChange={this.onChangeAge} id="modal-age" type="number" placeholder={cinema !== null ? cinema.age : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Giá vé:</td>
                                    <td><input onChange={this.onChangePrice} id="modal-price" clasName="required" type="number" placeholder={cinema !== null ? (cinema.price / 1000.0).toFixed(3) : ""} /></td>
                                </tr>
                                {mode !== ADD_MODE && cinema != null && (
                                    <tr>
                                        <td className="lable">Tình trạng:</td>
                                        <td><input name="status" type="text" value={cinema.status === true ? "Đang/ sắp chiếu" : "Ngừng chiếu"} /></td>
                                    </tr>)}
                                <tr>
                                    <td className="lable required-lable">Điểm tích lũy cho thành viên:</td>
                                    <td><input onChange={this.onChangePoint} id="modal-point" type="number" placeholder={cinema !== null ? cinema.point : ""} /></td>
                                </tr>
                                <tr>
                                    <td className="lable required-lable">Điểm đánh giá:</td>
                                    <td><input onChange={this.onChangeRate} id="modal-rate" type="number" placeholder={cinema !== null ? cinema.rate : ""} /></td>
                                </tr>
                                {
                                    mode === ADD_MODE && (
                                        <tr>
                                            <td className="lable required-lable">Hình ảnh:</td>
                                            <td><input onChange={this.onChangeImg} name="img" type="file" clasName="required" /></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="cinema-modal__btns">
                        <a className="btn" role="button" onClick={mode === ADD_MODE ? () => this.getInfor(ADD_MODE) : () => this.getInfor(EDIT_MODE)}> <i class="far fa-save"></i> Lưu</a>
                        <a className="btn" role="button" onClick={() => this.props.CloseAddModel()}> <i class="far fa-times-circle"></i> Đóng</a>
                    </div>

                </div>
            </Modal >
        );
    }
}