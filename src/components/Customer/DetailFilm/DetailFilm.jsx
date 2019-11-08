import React, { Component } from 'react';
import {
    Container, Row, Card, Col, Button
} from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PosterDetailFilm from '../PosterDetailFilm/PosterDetailFilm'
import imgFilm from '../../../assets/img/NgoiDenKiQuai.jpg'
import './DetailFilm.scss'
import { connect } from "react-redux"
import { request } from 'http';
import { queryString } from "query-string"
import { Loading } from '../../Loading/Loading';
class DetailFilm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            films: this.props.films || [],
            loading: this.props.loading
        }
    }
    handleClick = id => {
        window.location.href = "/schedule?id=" + id;
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.films !== this.state.films) {
            this.setState({ films: nextProps.films })
        }
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        }
    }
    render() {
        let values = this.props.location.search;
        const param = new URLSearchParams(values);
        const id = param.get('id');
        let container = null;
        let film = this.state.films.filter(film => film._id == id);
        console.log("film", film);
        if (film[0]) {
            container = 1;
        }
        return (
            <div className="detail-film">
                <Header />
                {this.state.loading ? <Loading /> : (
                    <div>
                        <PosterDetailFilm />
                        {container !== null ? (
                            <React.Fragment>
                                <Container className="pt-5">
                                    <Row className="flexDirection: 'column',">
                                        <Col sm={3}>
                                            <img src={film[0].img} className="w-100" alt="" ></img>
                                            <Button color="secondary" className="w-100 mt-3 rounded-0" onClick={() => this.handleClick(film[0]._id)}>Đặt vé</Button>
                                        </Col>
                                        <Col>
                                            <h3 className="text-dark font-weight-bold pb-3">{film[0].name}</h3>
                                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                                <h5 className="pr-3 pl-0">Xem xếp hạng:</h5>
                                                <i class="fas fa-star text-warning pt-1"></i>
                                                <i class="fas fa-star text-warning pt-1"></i>
                                                <i class="fas fa-star text-warning pt-1"></i>
                                                <i class="fas fa-star text-warning pt-1"></i>
                                                <i class="fas fa-star-half-alt text-warning pt-1"></i>
                                            </Col>
                                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                                <h5 className="pr-3 pl-0 text-danger font-weight-bold">Ngày phát hành:</h5>
                                                <h6 className="pt-1">{new Date(film[0].releaseDate).toLocaleDateString('en-GB')}</h6>
                                            </Col>
                                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                                <h5 className="pr-3 pl-0 text-danger font-weight-bold">Thể loại:</h5>
                                                <h6 className="pt-1">{film[0].type.name}</h6>
                                            </Col>
                                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                                <h5 className="pr-3 pl-0 text-danger font-weight-bold">Thời lượng:</h5>
                                                <h6 className="pt-1">{film[0].duration}</h6>
                                            </Col>
                                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                                <h5 className="pr-3 pl-0 text-danger font-weight-bold">Đạo diễn:</h5>
                                                <h6 className="pt-1">{film[0].director}</h6>
                                            </Col>
                                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                                <h5 className="pr-3 pl-0 text-danger font-weight-bold">Diễn viên:</h5>
                                                <h6 className="pt-1">{film[0].actors}</h6>
                                            </Col>
                                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                                <h5 className="pr-3 pl-0 text-danger font-weight-bold">Giá:</h5>
                                                <h6 className="pt-1">{film[0].price} VND</h6>
                                            </Col>
                                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                                <h5 className="pr-3 pl-0 text-danger font-weight-bold">Ngôn ngữ:</h5>
                                                <h6 className="pt-1">{film[0].language} </h6>
                                            </Col>
                                            <Col className="d-flex flexDirection: 'row', justifyContent: 'flex-start', pl-0">
                                                <h5 className="pr-3 pl-0 text-danger font-weight-bold">Độ tuổi tối thiểu:</h5>
                                                <h6 className="pt-1">{film[0].age} tuổi</h6>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Container>
                                <Container className="pt-5">
                                    <Row>
                                        <Col>
                                            <h3 className="text-danger font-weight-bold ">Tóm tắt</h3>
                                            <p>{film[0].description}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </React.Fragment>) : ""}
                    </div>)}
                <Container className="pt-5 mt-5">
                    <Row>
                        <Col className="d-flex flexDirection: 'row',">
                            <h3 className="text-dark font-weight-bold ">Xếp hạng và đánh giá phim</h3>
                            <p className="ml-auto">0/220 Ký tự</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Card className="w-100 h-100 px-0 py-0 comment-film">
                            <Col sm={2} className="pl-5 pr-0 pt-3">
                                <h5 className="text-dark">Xếp hạng</h5>
                                <div>
                                    <i class="far fa-star pt-1"></i>
                                    <i class="far fa-star pt-1"></i>
                                    <i class="far fa-star pt-1"></i>
                                    <i class="far fa-star pt-1"></i>
                                    <i class="far fa-star pt-1"></i>
                                </div>
                            </Col>
                            <Col sm={9} className="px-0  bg-secondary">
                                <textarea placeholder="Nhập nội dung bình luận" className="backgound w-100 h-100 px-0 py-0 border border-white"></textarea>
                            </Col>
                            <Col sm={1} className="px-0">
                                <Button color="warning" className="w-100 h-100 px-0 py-0 font-weight-bold rounded-0">Bình luận</Button>
                            </Col>
                        </Card>
                    </Row>
                </Container>
                <Container>
                    <hr className="border mt-3 "></hr>
                </Container>
                <Container className="pt-3">
                    <Row>
                        <div className="w-100 px-0 py-0 flexDirection: 'column',comment">
                            <Col className="pr-0  d-flex flexDirection: 'row',">
                                <div class="badge badge-dark text-wrap rounded-0 h-25">
                                    Khách
                                </div>
                                <div className="pl-2">
                                    <i class="fas fa-star text-warning pt-1"></i>
                                    <i class="fas fa-star text-warning pt-1"></i>
                                    <i class="fas fa-star text-warning pt-1"></i>
                                    <i class="fas fa-star text-warning pt-1"></i>
                                    <i class="fas fa-star-half-alt text-warning pt-1"></i>
                                </div>
                            </Col>
                            <Col className="pt-3">
                                <p>Phim hay. Ý nghĩa. Đoạn cuối đã khóc
                                </p>
                            </Col>
                            <Col className="d-flex flexDirection: 'row',">
                                <p>{new Date().toLocaleTimeString()}</p>
                                <i class="fas fa-heart text-danger pl-3 pt-1"></i>
                            </Col>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <hr className="border"></hr>
                </Container>
                <Container className="pt-3 pl-4">
                    <Row >
                        <div className="border w-100 backgound ">
                            <Col className="pt-3 ">
                                <div className="d-flex flexDirection: 'row', pb-2">
                                    <i class="fas fa-exclamation-triangle pt-1 pr-2"></i>
                                    <h5 className="text-dark font-weight-bold ">Lưu ý</h5>
                                </div>
                                <p>Mỗi tài khoản chỉ có thể đánh giá một lần cho mỗi lượt truy cập. Đánh giá khi đã thực hiện thì không thể chỉnh sửa.</p>
                                <p>Tài khoản của bạn phải là thành viên và đã mua vé xem phim mới có thể tham gia đánh giá phim.</p>
                                <p>Bạn có thể kiểm tra lại phần đánh giá của mình trong My Kubo.</p>
                            </Col>
                        </div>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        films: state.films.data,
        loading: state.films.loading
    }
}


export default connect(mapStateToProps)(DetailFilm)