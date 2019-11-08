import React, { Component } from 'react';
import './ConfirmModal.scss';
import Modal from 'react-awesome-modal';

export class ConfirmModal extends Component {
    state = {}
    render() {
        //props: CloseModal, action, visible
        const { content, confirmBtn } = this.props;
        return (
            <Modal visible={this.props.visible} width="300px" height="200px" onClickAway={() => this.props.CloseModal()}>
                <div className="confirm-modal">
                    <div className="confirm-modal__content">{content}</div>
                    <div className="confirm-modal__btns">
                        <a name="" id="" class="btn" href="#" role="button" onClick={() => this.props.action()}>{confirmBtn}</a>
                        <a name="" id="" class="btn btn-primary" href="#" role="button" onClick={() => this.props.CloseModal()}>Đóng</a>
                    </div>
                </div>
            </Modal>
        );
    }
}