import React, { Component } from 'react';
import './PromotionAdmin.scss';
import { MenuPanel, ConfirmModal, PromotionModal } from '../../../components';
import { ADD_MODE, EDIT_MODE } from '../../../constanst';


class PromotionAdmin extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            addPromotionModalVisible: false,
            editPromotionModalVisible: false,
            deletePromotionModalVisible: false,
            promotionEdit: null,
            promotionDelete: null,
        }
    }

    CloseAddModal = () => {
        this.setState({ addPromotionModalVisible: false })
    }
    OpenAddModal = () => {
        this.setState({ addPromotionModalVisible: true });
    }

    CloseEditModal = () => {
        this.setState({ editPromotionModalVisible: false })
    }
    OpenEditModal = (item) => {
        console.log("item", item);
        this.setState({ editPromotionModalVisible: true, promotionEdit: item });
    }
    CloseDeleteModal = () => {
        this.setState({ deletePromotionModalVisible: false });
    }
    OpenDeleteModal = (item) => {
        this.setState({ promotionDelete: item, deletePromotionModalVisible: true });
    }
    DeletePromotion = () => {
        //TODO
        console.log("delete promotion");
        this.CloseDeleteModal();
    }
    SaveEditPromotion = () => {
        //TODO
        console.log("save promotion...");
        this.CloseEditModal();
    }
    AddNewPromotion = () => {
        //TODO
        console.log("add new promotion ... ");
        this.CloseAddModal();
    }
    render() {
        // const {promotions} = this.props;
        //TODO: join tables: Promotion_Cinema, Promotion, TypeUser
        const promotions = [
            {
                _id: "1",
                namePromotion: "Ưu đãi đón hè",
                idTypeUser: "1",
                startTime: "01/01/2019 8:00AM",
                endTime: "01/30/2019 8:00AM",
                status: 1,
                discount: 0.2,
                idCinema: ["1"],
                name: ["Bí kíp luyện rồng"], //name cinema
                nameTypeUser: "Bạch kim"
            }
        ]
        return (
            <React.Fragment>
                <div className="promotions-admin admin__content">
                    <div className="promotions-admin__head admin__head">
                        <div className="promotions-admin__head--find admin__head--find">
                            <input type="text" placeholder="Tìm kiếm" />
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="promotions-admin__head--add admin__head--add">
                            <a name="" id="" class="btn " href="#" role="button" onClick={() => this.OpenAddModal()}>Thêm</a>
                        </div>
                    </div>
                    <div className="promotion-admin__promotions admin__detail">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên ưu đãi</th>
                                    <th scope="col">Khách hàng áp dụng</th>
                                    <th scope="col">Ưu đãi</th>
                                    <th scope="col">Tình trạng</th>
                                    <th scope="col"></th>
                                    {/* th: actor */}
                                </tr>
                            </thead>
                            <tbody>
                                {promotions.map((item, index) => (
                                    <tr className="promotions-admin__promotions--single-promotion admin__detail--single">
                                        <td>{index + 1}</td>
                                        <td>{item.namePromotion}</td>
                                        <td>{item.nameTypeUser}</td>
                                        <td>{item.discount * 100}%</td>
                                        <td>{item.status}</td>
                                        <td className="actions">
                                            <i class="fas fa-edit" onClick={() => this.OpenEditModal(item)}></i>
                                            <i class="fas fa-trash-alt" onClick={() => this.OpenDeleteModal(item)}></i></td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>


                    <PromotionModal mode={ADD_MODE} visible={this.state.addPromotionModalVisible} CloseAddModel={this.CloseAddModal} promotion={null}
                        AddNewPromotion={this.AddNewPromotion} />

                    <PromotionModal mode={EDIT_MODE} visible={this.state.editPromotionModalVisible} CloseAddModel={this.CloseEditModal} promotion={this.state.promotionEdit}
                        SaveEditPromotion={this.SaveEditPromotion} />

                    <ConfirmModal visible={this.state.deletePromotionModalVisible} confirmBtn="Xóa" content={this.state.promotionDelete != null ? `Bạn có chắc chắn muốn xóa ưu đãi ${this.state.promotionDelete.namePromotion}?` : ""}
                        action={this.DeletePromotion} CloseModal={this.CloseDeleteModal} />
                </div>
            </React.Fragment>
        );
    }
}

export default PromotionAdmin;