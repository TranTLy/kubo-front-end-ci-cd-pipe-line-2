import React, { Component } from 'react';
import './CinemaAdmin.scss';
import { MenuPanel, ConfirmModal, CinemaModal, Loading } from '../../../components';
import { ADD_MODE, EDIT_MODE } from '../../../constanst';
import { READ_FILM, DELETE_FILM, UPDATE_FILM, CREATE_FILM } from '../../../config/ActionType';
import { connect } from "react-redux"

class CinemaAdmin extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            addCinemaModalVisible: false,
            editCinemaModalVisible: false,
            deleteCinemaModalVisible: false,
            cinemaEdit: null,
            cinemaDelete: null,
            films: [],
            loading: this.props.loading,
            isOnDelete: false,
            isOnAdd: false,
            isOnEdit: false,
        }
    }

    componentDidMount() {
        this.props.readFilm();
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.films.data !== this.state.films) {
            this.setState({ films: nextProps.films.data })
        }
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        }
        if (this.state.isOnDelete && !nextProps.films.loading) {
            alert(nextProps.films.resultDelete);
        }
    }

    CloseAddModal = () => {
        this.setState({ addCinemaModalVisible: false })
    }
    OpenAddModal = () => {
        this.setState({ addCinemaModalVisible: true });
    }

    CloseEditModal = () => {
        this.setState({ editCinemaModalVisible: false })
    }
    OpenEditModal = (item) => {
        console.log("item", item);
        this.setState({ editCinemaModalVisible: true, cinemaEdit: item });
    }
    CloseDeleteModal = () => {
        this.setState({ deleteCinemaModalVisible: false });
    }
    OpenDeleteModal = (item) => {
        this.setState({ cinemaDelete: item, deleteCinemaModalVisible: true });
    }
    DeleteCinema = () => {
        //TODO
        console.log("delete cinema: ", this.state.cinemaDelete);
        this.CloseDeleteModal();
        this.setState({ isOnDelete: true });
        this.props.deleteFilm(this.state.cinemaDelete._id);

    }
    SaveEditCinema = (newCinemaInput) => {
        //TODO
        console.log("save cinema...", newCinemaInput);
        newCinemaInput._id = this.state.cinemaEdit._id;
        if (newCinemaInput === this.state.cinemaEdit) {
            console.log("not change save");
            //do nothing
        } else {
            console.log("change save");
            this.props.updateFilm(newCinemaInput);
        }
        this.CloseEditModal();
    }
    AddNewCinema = (newCinema) => {
        //TODO
        console.log("add new cinema ... ", newCinema);
        this.props.addFilm(newCinema);
        this.CloseAddModal();
    }

    render() {
        return (
            <React.Fragment>
                <div className="cinemas-admin admin__content">
                    <div className="cinemas-admin__head admin__head">
                        <div className="cinemas-admin__head--find admin__head--find">
                            <input type="text" placeholder="Tìm kiếm" />
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="cinemas-admin__head--add admin__head--add">
                            <a name="" id="" class="btn " href="#" role="button" onClick={() => this.OpenAddModal()}>Thêm</a>
                        </div>
                    </div>
                    {this.state.loading ? <Loading /> : (
                        <div className="cinema-admin__cinemas admin__detail">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên phim</th>
                                        <th scope="col">Thời lượng</th>
                                        <th scope="col">Đạo diễn</th>
                                        <th scope="col">Điểm đánh giá</th>
                                        <th scope="col"></th>
                                        <th scope="col">Tình trạng</th>
                                        {/* th: actor */}
                                    </tr>
                                </thead>
                                {this.state.films !== null ? (
                                    <tbody>
                                        {this.state.films.map((item, index) => (
                                            <tr className="cinemas-admin__cinemas--single-cinema admin__detail--single">
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td >{item.duration}</td>
                                                <td >{item.director}</td>
                                                <td>{item.rate}</td>
                                                <td className="actions">
                                                    <i class="fas fa-edit" onClick={() => this.OpenEditModal(item)}></i>
                                                    <i class="fas fa-trash-alt" onClick={() => this.OpenDeleteModal(item)}></i></td>
                                                <td>{item.status === true ? "Còn chiếu" : "Hết chiếu"}</td>

                                            </tr>
                                        ))}

                                    </tbody>
                                ) : ""}
                            </table>
                        </div>)}


                    <CinemaModal mode={ADD_MODE} visible={this.state.addCinemaModalVisible} CloseAddModel={this.CloseAddModal} cinema={null}
                        AddNewCinema={this.AddNewCinema} />

                    <CinemaModal mode={EDIT_MODE} visible={this.state.editCinemaModalVisible} CloseAddModel={this.CloseEditModal} cinema={this.state.cinemaEdit}
                        SaveEditCinema={this.SaveEditCinema} />

                    <ConfirmModal visible={this.state.deleteCinemaModalVisible} confirmBtn="Xóa" content={this.state.cinemaDelete != null ? `Bạn có chắc chắn muốn xóa phim ${this.state.cinemaDelete.name}?` : ""}
                        action={this.DeleteCinema} CloseModal={this.CloseDeleteModal} />

                </div>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        films: state.films,
        loading: state.films.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        readFilm: () => dispatch({ type: READ_FILM }),
        deleteFilm: (idFilm) => dispatch({ type: DELETE_FILM, idFilm }),
        updateFilm: (film) => dispatch({ type: UPDATE_FILM, film }),
        addFilm: (film) => dispatch({ type: CREATE_FILM, film }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CinemaAdmin)