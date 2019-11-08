import React, { Component } from 'react';
import { BarChartStatistcic } from '../../../components';
import './StatisticAdmin.scss';

class StatisticAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="admin__content statistic-admin__content">
                skdflsd
                <BarChartStatistcic />
            </div>
        );
    }
}

export default StatisticAdmin;