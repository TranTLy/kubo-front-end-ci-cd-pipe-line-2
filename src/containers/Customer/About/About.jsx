import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header';
import Footer from '../../../components/Customer/Footer/Footer';
import HeadLine from '../../../components/Customer/HeadLine/HeadLine'
import { Loading } from '../../../components'
import { Container } from 'reactstrap';

import './About.scss'
import { READ_BRANCH } from '../../../config/ActionType';
import { connect } from 'react-redux';
class About extends Component {
    constructor(props) {
        super(props);
        //TODO: get branches infor from database
        this.state = {
            branches: [],
            isLoading: true
        }
    }

    componentWillReceiveProps = (nextProps) => {
        // console.log("on component will receive props ", nextProps.branches);
        if (!nextProps.branches.loading) {
            console.log("onchange in reveive props")
            this.setState({ branches: nextProps.branches.data, isLoading: false })
        }
    }

    componentDidMount = () => {
        this.props.readBranch();
        // console.log("on component did mount:", this.props.branches);
    }

    render() {
        console.log("on render");
        return (
            <div>
                {this.state.isLoading ? (
                    <Loading />
                ) :
                    <div>
                        <head>

                        </head>
                        <Header />
                        <Container className = "about-page">
                            <div className="about-us-wrap">
                                <div className="general-infor">
                                    <HeadLine title="Thông tin" />
                                    <div className="content">
                                        Kubo là chuỗi rạp chiếu phim nổi tiếng.
                    Được thành lập từ năm 2000. Chuỗi rạp chiếu phim Kubo đã trở thành nơi đến quen thuộc của nhiều người yêu thích phim.<br />
                                        Kubo luôn cập nhập những bộ phim mới một cách nhanh nhất. <br />
                                        Ở Kubo, bạn có thể lựa chọn nhiều bộ phim hấp dẫn, đa dạng, thuộc nhiều thể loại, lứa tuổi.
                    </div>
                                </div>
                                <div className="branch-infor">
                                    <HeadLine title="Chi nhánh" />
                                    <div className="content">
                                        <ul className="branches">
                                            {this.state.branches.map((item, index) => {
                                                return (
                                                    <li className="branches__single"> <a href="#" className="name">{item.name}</a>
                                                        <br />
                                                        {item.address}
                                                        <div className="branches__single--img">
                                                            <img src={item.img} alt="" />
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </Container>
                        <Footer />
                    </div>
                }

            </div>
        );

    }
}

function mapStateToProps(state) {
    // console.log("state in view:", state);
    return {
        branches: state.branch
    }
}
function mapDispatchToProps(dispatch) {
    // console.log("map dispatch:", dispatch);

    return {
        readBranch: () => dispatch({ type: READ_BRANCH })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);