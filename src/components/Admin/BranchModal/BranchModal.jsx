import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './BranchModal.scss';
import { ADD_BRANCH_MODE } from '../../../constanst'

export class BranchModal extends Component {
    state = {}
    render() {
        const { mode, branch, visible } = this.props;
        console.log("branch: ", branch);
        return (
            <Modal visible={visible} className="branch-modal" width="600" height="400" effect="fadeInUp" onClickAway={() => this.props.CloseAddModel()}>
                <div className="branch-modal__title">
                    {mode === ADD_BRANCH_MODE && (<h4>Thêm chi nhánh</h4>)}
                    {mode !== ADD_BRANCH_MODE && (<h4> Thông tin chi nhánh</h4>)}
                </div>
                <div className="branch-modal__table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="lable">Tên:</td>
                                <td><input type="text" placeholder={branch !== null ? branch.nameBranch : ""} /></td>
                            </tr>
                            <tr>
                                <td className="lable">Địa chỉ:</td>
                                <td>
                                    <textarea name="address" id="address" cols="30" rows="3" placeholder={branch !== null ? branch.address : ""}></textarea>
                                </td>
                            </tr>
                            {mode !== ADD_BRANCH_MODE && branch != null && (
                                <tr>
                                    <td className="lable">Số lượng phòng chiếu:</td>
                                    <td><input type="text" placeholder={branch !== null ? branch.numberRoom : ""} /></td>
                                </tr>)}

                        </tbody>
                    </table>
                </div>
                <div className="branch-modal__btns">
                    <a className="btn" role="button" onClick={mode === ADD_BRANCH_MODE ? () => this.props.AddNewBranch() : () => this.props.SaveEditBranch()}> <i class="far fa-save"></i> Lưu</a>
                    <a className="btn" role="button" onClick={() => this.props.CloseAddModel()}> <i class="far fa-times-circle"></i> Đóng</a>
                </div>
            </Modal >
        );
    }
}
