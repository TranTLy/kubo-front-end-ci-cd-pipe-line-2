import React, { Component } from 'react';

import './HomeAdmin.scss';
import MenuPanel from '../../../components/Admin/MenuPanel/MenuPanel';
import Branch from '../Branch/Branch';
import CinemaAdmin from '../CinemaAdmin/CinemaAdmin';
import ScheduleAdmin from '../ScheduleAdmin/ScheduleAdmin';
import PromotionAdmin from '../PromotionAdmin/PromotionAdmin';
import StatisticAdmin from '../StatisticAdmin/StatisticAdmin';

class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
            tabs: [
                {
                    name: "Lịch chiếu"
                },
                {
                    name: "Phim"
                },
                {
                    name: "Ưu đãi"
                },
                {
                    name: "Chi nhánh"
                },
                {
                    name: "Thống kê"
                },
            ]
        }
    }
    getTabContent = () => {
        switch (this.state.currentTab) {
            case 0: //schedule
                return (<ScheduleAdmin />);
            case 1: //cinema
                return <CinemaAdmin />;
            case 2:
                return (<PromotionAdmin />)
            case 3: //branch
                return (<Branch />);
            case 4: //statistic
                return (<StatisticAdmin />);
            default:
                return ("");
        }
    }

    changeCurrentTab = (tabIndex) => {
        this.setState({ currentTab: tabIndex });
    }
    render() {
        return (
            <div className="admin home-admin">
                <MenuPanel changeCurrentTab={this.changeCurrentTab} tabs={this.state.tabs} currentTab={this.state.currentTab} />
                {this.getTabContent()}
            </div>
        );
    }
}

export default HomeAdmin;
