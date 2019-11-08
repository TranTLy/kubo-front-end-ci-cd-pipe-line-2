
import React, { Component } from 'react';
import {
    Card, CardBody, CardHeader, Container, Row
} from 'reactstrap';
import imgMovie from '../../../assets/img/1.jpg';
import './RomanticMovie.scss'
import CardItem from "../CardItem/CardItem"

const listItem = [{ img: imgMovie, title: "Thằng em lý thưởng", description: "Chó sục Max (Patton Oswalt) đang thích nghi với nhiều thay đổi lớn trong cuộc sống của Chú. Cô chủ của cậu nay đã kết hôn và có một cậu con trai, Liam. Max luôn lo lắng về việc bảo vệ cậu bé đến mức mắc chứng rối loạn âu lo. Trong chuyến đi chơi của gia đình về vùng nông trại, Max và chú chó lai Duke (Eric Stonestreet) chạm trán với đàn bò Không thân thiện, những chú cáo hơi thù địch và một chú gà tây đáng sợ. Việc này càng tăng nỗi sợ của Max. May mắn thay, Max nhận được chỉ dẫn của chú chó chăn gia súc kỳ cựu tên Rooster nhân vật đã thúc đẩy Max gạt bỏ sự lo lắng của mình, tìm ra bản năng mạnh mẽ tiềm ẩn bên trong," },
{ img: imgMovie, title: "Thằng em lý thưởng", description: "Chó sục Max (Patton Oswalt) đang thích nghi với nhiều thay đổi lớn trong cuộc sống của Chú. Cô chủ của cậu nay đã kết hôn và có một cậu con trai, Liam. Max luôn lo lắng về việc bảo vệ cậu bé đến mức mắc chứng rối loạn âu lo. Trong chuyến đi chơi của gia đình về vùng nông trại, Max và chú chó lai Duke (Eric Stonestreet) chạm trán với đàn bò Không thân thiện, những chú cáo hơi thù địch và một chú gà tây đáng sợ. Việc này càng tăng nỗi sợ của Max. May mắn thay, Max nhận được chỉ dẫn của chú chó chăn gia súc kỳ cựu tên Rooster nhân vật đã thúc đẩy Max gạt bỏ sự lo lắng của mình, tìm ra bản năng mạnh mẽ tiềm ẩn bên trong," },
{ img: imgMovie, title: "Thằng em lý thưởng", description: "Chó sục Max (Patton Oswalt) đang thích nghi với nhiều thay đổi lớn trong cuộc sống của Chú. Cô chủ của cậu nay đã kết hôn và có một cậu con trai, Liam. Max luôn lo lắng về việc bảo vệ cậu bé đến mức mắc chứng rối loạn âu lo. Trong chuyến đi chơi của gia đình về vùng nông trại, Max và chú chó lai Duke (Eric Stonestreet) chạm trán với đàn bò Không thân thiện, những chú cáo hơi thù địch và một chú gà tây đáng sợ. Việc này càng tăng nỗi sợ của Max. May mắn thay, Max nhận được chỉ dẫn của chú chó chăn gia súc kỳ cựu tên Rooster nhân vật đã thúc đẩy Max gạt bỏ sự lo lắng của mình, tìm ra bản năng mạnh mẽ tiềm ẩn bên trong," },
{ img: imgMovie, title: "Thằng em lý thưởng", description: "Chó sục Max (Patton Oswalt) đang thích nghi với nhiều thay đổi lớn trong cuộc sống của Chú. Cô chủ của cậu nay đã kết hôn và có một cậu con trai, Liam. Max luôn lo lắng về việc bảo vệ cậu bé đến mức mắc chứng rối loạn âu lo. Trong chuyến đi chơi của gia đình về vùng nông trại, Max và chú chó lai Duke (Eric Stonestreet) chạm trán với đàn bò Không thân thiện, những chú cáo hơi thù địch và một chú gà tây đáng sợ. Việc này càng tăng nỗi sợ của Max. May mắn thay, Max nhận được chỉ dẫn của chú chó chăn gia súc kỳ cựu tên Rooster nhân vật đã thúc đẩy Max gạt bỏ sự lo lắng của mình, tìm ra bản năng mạnh mẽ tiềm ẩn bên trong," }];

export default class RomanticMovie extends Component {
    render() {
        return (
            <div className="pt-3">
                <Container>
                    <Row>
                        <div className="home-film">
                            {/* <CardHeader >Nổi bậc nhất</CardHeader> */}
                            {/* <hr className="mt-0"></hr> */}
                            <CardBody className="flexDirection: 'row, w-100">
                                <CardItem listItem={this.props.listItem}></CardItem>
                            </CardBody>
                        </div>
                    </Row>
                </Container>

            </div>
        );
    }
};
