import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header';
import Footer from '../../../components/Customer/Footer/Footer';
import CardItemDetail from '../../../components/Customer/CardItemDetail/CardItemDetail'
import { Container, Table, Button } from 'reactstrap';
import './Profile.scss';
import { connect } from 'react-redux';
import { READ_USER_FILM_FAVOR, UPDATE_USER } from '../../../config/ActionType';
import { Loading } from '../../../components';
import { LogIn } from "../../../actions/action"

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab: 0,
			tabInformation: 0,
			tabFavourite: 1,
			tab: [
				{
					id: 0,
					name: 'Thông tin cá nhân'
				},
				{
					id: 1,
					name: 'Bộ sưu tập yêu thích'
				}
			],
			filmFavor: [],
			user: null,
			isLoading: true
		};
	}

	componentWillReceiveProps = (nextProps) => {
		if (!nextProps.filmFavor.loading
			&& nextProps.filmFavor.data !== this.state.filmFavor
			&& nextProps.user !== this.state.user
			&& nextProps.user !== null) {
			console.log("profile: will revieve props , next props:", nextProps.filmFavor);
			this.setState({
				filmFavor: nextProps.filmFavor.data,
				user: nextProps.user,
				isLoading: false
			});
		}
	}

	// componentWillMount = () => {
	// 	console.log("will mount, next props:", this.props.filmFavor);
	// 	this.setState({ filmFavor: this.props.filmFavor, isLoading: false });
	// }

	componentDidMount() {
		const id = "5d09b69efed6a72290d288c6";
		this.props.readFilmFavor(id);
		console.log("profile: on component did mount, film favor = : ", this.props.filmFavor);
		this.setState({ filmFavor: this.props.filmFavor })
	}

	setCurrentTab = (id) => {
		this.setState({ currentTab: id });

		const tab = document.getElementsByClassName("tab");
		Array.from(tab).reverse().forEach(item => {
			item.classList.remove("tab-active");
		})
		tab[id].classList.add("tab-active");
	}

	onEditInfor = () => {
		const btnOnEdit = document.getElementsByClassName("fa-toggle-on");
		const btnOffEdit = document.getElementsByClassName("fa-toggle-off");
		btnOnEdit[0].style.display = "block";
		btnOffEdit[0].style.display = "none";

		const lable = document.getElementById("lable-edit");
		lable.innerHTML = "Đang chỉnh sửa";
		lable.style.fontStyle = "italic";

		const inputTags = document.getElementsByClassName("infor-edit");
		Array.from(inputTags).forEach(item => {
			item.style.display = "block";
		})
		const showTextTags = document.getElementsByClassName("infor-show");
		Array.from(showTextTags).forEach(item => {
			item.style.display = "none";
		})

		const btnSave = document.getElementById("btn-save-wrap");
		btnSave.style.display = "block";
	}

	offEditInfor() {
		const btnOnEdit = document.getElementsByClassName("fa-toggle-on");
		const btnOffEdit = document.getElementsByClassName("fa-toggle-off");
		btnOnEdit[0].style.display = "none";
		btnOffEdit[0].style.display = "block";

		const lable = document.getElementById("lable-edit");
		lable.innerHTML = "Chỉnh sửa";
		lable.style.fontStyle = "normal";

		const inputTags = document.getElementsByClassName("infor-edit");
		Array.from(inputTags).forEach(item => {
			item.style.display = "none";
		})

		const showTextTags = document.getElementsByClassName("infor-show");
		Array.from(showTextTags).forEach(item => {
			item.style.display = "block";
		})

		const btnSave = document.getElementById("btn-save-wrap");
		btnSave.style.display = "none";
	}

	onSaveUser = () => {
		//get user infor:
		const user = {
			_id: this.state.user._id,
			fullname: document.getElementById("fullname").value || this.state.user.fullname,
			email: document.getElementById("email").value || this.state.user.email,
			phone: document.getElementById("phone").value || this.state.user.phone,
			birthday: document.getElementById("birthday").value !== "" ? new Date(document.getElementById("birthday").value) : this.state.user.birthday
		}
		console.log("user new: ", user);
		this.props.updateUser(user);
		this.props.login(user);
		this.setState({
			user
		});
		this.offEditInfor();

	}

	getContentTab() {
		//todo: db demo
		const user = this.state.user

		if (this.state.currentTab === this.state.tabInformation) {
			return (
				<div className="infor-wrap">
					<div className="edit">
						<span id="lable-edit"> Chỉnh sửa</span>
						<i className="fas fa-toggle-off" onClick={() => this.onEditInfor()}></i>
						<i className="fas fa-toggle-on" onClick={() => this.offEditInfor()}></i>
					</div>

					<Table className="table">
						<tr>
							<td className="title">Họ tên: </td>
							<td className="infor-show">{user.fullname}</td>
							<td><input id="fullname" className="infor-edit" type="text" name="hoTen" placeholder={user.fullname} /></td>
						</tr>
						<tr>
							<td className="title">Ngày tháng năm sinh: </td>
							<td className="infor-show">{new Date(user.birthday).toLocaleDateString('en-GB')}</td>
							<td><input id="birthday" className="infor-edit" type="date" name="hoTen" placeholder={new Date(user.birthday).toLocaleDateString('en-GB')} /></td>
						</tr>
						<tr>
							<td className="title">Email: </td>
							<td className="infor-show">{user.email}</td>
							<td><input id="email" className="infor-edit" type="text" name="hoTen" placeholder={user.email} /></td>
						</tr>
						<tr>
							<td className="title">Điện thoại: </td>
							<td className="infor-show">{user.phone}</td>
							<td><input id="phone" className="infor-edit" type="text" name="hoTen" placeholder={user.phone} /></td>
						</tr>
					</Table>
					<div id="btn-save-wrap">
						<Button id="btn-save-infor" onClick={() => this.onSaveUser()}>Lưu</Button>
					</div>
				</div>);
		} else if (this.state.currentTab === this.state.tabFavourite) {
			return (
				<div className="favourite-wrap">
					<div id="sum-favoutire-movie">Tổng cộng: {this.state.filmFavor.length} bộ phim</div>
					<div className="favourite-content-wrap">
						<div className="favourite-movie-left-column">
							{
								this.state.filmFavor.map((film, index) => {
									const item = film.idfilm;
									if (index % 2 === 0) {
										return (
											<CardItemDetail movie={item} />
										)
									}
									return '';
								})
							}
						</div>
						<div className="favourite-movie-right-column">

							{
								this.state.filmFavor.map((film, index) => {
									const item = film.idfilm;
									if (index % 2 === 1) {
										return (
											<CardItemDetail movie={item} />
										)
									}
									return '';
								})
							}
						</div>
					</div>
				</div>
			)
		}
	};



	render() {
		// if (!this.state.isLoading) {
		return (
			<div>
				<head>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
				</head>
				<Header />
				{this.state.isLoading ? <Loading /> :
					<div className="profile-container-wrap">
						<Container>
							<div className="tab-wrap">
								{this.state.tab.map((item) => {
									return (
										<div className={item.id == this.state.currentTab ? "tab tab-active" : "tab"} onClick={() => this.setCurrentTab(item.id)}>
											{item.name}
										</div>
									);
								})}
							</div>
							<div className="profile-content">
								{this.getContentTab()}
							</div>
						</Container>
					</div>
				}
				<Footer />
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log("state in view:", state);
	return {
		filmFavor: state.userFilmFavor,
		user: state.login.user
	}
}
function mapDispatchToProps(dispatch) {
	return {
		readFilmFavor: (userId) => dispatch({ type: READ_USER_FILM_FAVOR, userId }),
		updateUser: (user) => dispatch({ type: UPDATE_USER, user }),
		login: (user) => dispatch(LogIn(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
