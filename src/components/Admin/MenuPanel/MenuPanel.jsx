import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MenuPanel.scss'

class MenuPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }
    render() {
        const { tabs, currentTab } = this.props;
        console.log("tabs: ", tabs, "props: ", this.props);
        return (
            <div className="menu-panel-admin">
                <div className="menu-panel-admin-left">
                    <div className="menu-panel-admin-left__space"></div>
                    <div className="menu-panel-admin-left__menu">
                        {tabs.map((item, index) => {
                            return (
                                <div key={index} onClick={() => this.props.changeCurrentTab(index)}
                                    className={index === currentTab ?
                                        "menu-panel-admin-left__menu--tab -active" :
                                        "menu-panel-admin-left__menu--tab"}>{item.name}</div>)
                        })}
                        <div className="menu-panel-admin-left__infor-bottom">
                            © 2019 Kubo Viet Nam <br /> All right reserved
                 </div>
                    </div>
                </div>
                <div className="menu-panel-admin-right">
                    <i class="fas fa-user"></i>
                    <span>
                    </span>
                </div>
            </div>)
    }
}

MenuPanel.propTypes = {
    tabs: PropTypes.array,
    currentTab: PropTypes.number
}
MenuPanel.defaultProps = {
    tabs: [],
    currentTab: -1
};

export default MenuPanel
