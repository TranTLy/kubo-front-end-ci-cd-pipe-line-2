import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import './Branch.scss';
import { MenuPanel, BranchModal, ConfirmModal, Loading } from '../../../components';
import { ADD_BRANCH_MODE, EDIT_BRANCH_MODE } from '../../../constanst';
import { connect } from "react-redux"
import { READ_BRANCH } from "../../../config/ActionType"
class BranchAdmin extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            addBranchModalVisible: false,
            editBranchModalVisible: false,
            deleteBranchModalVisible: false,
            branchEdit: null,
            branchDelete: null,
            branchs: this.props.branchs,
            loading: this.props.loading
        }
    }

    componentDidMount = () => {
        this.props.readBranch();
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.branchs !== this.state.branchs) {
            this.setState({ branchs: nextProps.branchs })
        }
        if (nextProps.loading !== this.state.loading) {
            this.setState({ loading: nextProps.loading })
        }
    }

    CloseAddModel = () => {
        this.setState({ addBranchModalVisible: false })
    }
    OpenAddModal = () => {
        this.setState({ addBranchModalVisible: true });
    }

    CloseEditModel = () => {
        this.setState({ editBranchModalVisible: false })
    }
    OpenEditModal = (item) => {
        console.log("item", item);
        this.setState({ editBranchModalVisible: true, branchEdit: item });
    }

    CloseDeleteModal = () => {
        this.setState({ deleteBranchModalVisible: false });
    }
    OpenDeleteModal = (item) => {
        this.setState({ branchDelete: item, deleteBranchModalVisible: true });
    }

    DeleteBranch = () => {
        //TODO
        console.log("delete branch");
        this.CloseDeleteModal();
    }
    SaveEditBranch = () => {
        //TODO
        console.log("save branch...");
        this.CloseEditModel();
    }
    AddNewBranch = () => {
        //TODO
        console.log("add new branch ... ");
        this.CloseAddModel();
    }
    render() {
        // const {branchs} = this.props;
        // const branchs = [
        //     {
        //         _id: "1",
        //         nameBranch: "KuBo Bình Thạnh",
        //         address: "Số 111, quận Bình Thạnh, TP. Hồ Chí Minh", numberRoom: 5, status: 1
        //     },
        //     {
        //         _id: "2",
        //         nameBranch: "KuBo Bình Thạnh",
        //         address: "Số 111, quận Bình Thạnh, TP. Hồ Chí Minh", numberRoom: 5, status: 1
        //     }, {
        //         _id: "3",
        //         nameBranch: "KuBo Bình Thạnh",
        //         address: "Số 111, quận Bình Thạnh, TP. Hồ Chí Minh", numberRoom: 5, status: 1
        //     },
        //     {
        //         _id: "4",
        //         nameBranch: "KuBo Bình Thạnh",
        //         address: "Số 111, quận Bình Thạnh, TP. Hồ Chí Minh", numberRoom: 5, status: 1
        //     }
        // ]
        return (
            <React.Fragment>
                <div className="branch-admin__content admin__content">
                    <div className="branch-admin__head admin__head">
                        <div className="branch-admin__head--find admin__head--find">
                            <input type="text" placeholder="Tìm kiếm" />
                            <i class="fas fa-search"></i>
                        </div>
                        <div className="branch-admin__head--add admin__head--add">
                            <a name="" id="" class="btn " href="#" role="button" onClick={() => this.OpenAddModal()}>Thêm</a>
                        </div>
                    </div>
                    {this.state.loading ? <Loading /> : (
                        <div className="branch-admin__branchs admin__detail">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên chi nhánh</th>
                                        <th scope="col">Địa chỉ</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                {this.state.branchs !== null ? (
                                    <tbody>
                                        {this.state.branchs.map((item, index) => (
                                            <tr className="branch-admin__branchs--single-branch admin__detail--single">
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td className="actions">
                                                    <i class="fas fa-edit" onClick={() => this.OpenEditModal(item)}></i>
                                                    <i class="fas fa-trash-alt" onClick={() => this.OpenDeleteModal(item)}></i></td>
                                            </tr>
                                        ))}

                                    </tbody>) : ""}
                            </table>

                        </div>)}

                    <BranchModal mode={ADD_BRANCH_MODE} visible={this.state.addBranchModalVisible} branch={null} CloseAddModel={this.CloseAddModel} AddNewBranch={this.AddNewBranch} />

                    <BranchModal mode={EDIT_BRANCH_MODE} visible={this.state.editBranchModalVisible} branch={this.state.branchEdit} CloseAddModel={this.CloseEditModel} SaveEditBranch={this.SaveEditBranch} />

                    <ConfirmModal visible={this.state.deleteBranchModalVisible} content={this.state.branchDelete !== null ? `Bạn chắc chắn muốn xóa chi nhánh  ${this.state.branchDelete.nameBranch}?` : ""} confirmBtn={"Xóa"} action={this.DeleteBranch} CloseModal={this.CloseDeleteModal} />


                </div>
            </React.Fragment >);
    }
}

function mapStateToProps(state) {
    console.log("state admin home ", state);
    return {
        branchs: state.branch.data,
        loading: state.branch.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        readBranch: () => dispatch({ type: READ_BRANCH })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BranchAdmin)