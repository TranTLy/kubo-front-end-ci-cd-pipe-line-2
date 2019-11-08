import React, { Component } from 'react';
import './BarChartStatistcic.scss';
import { HorizontalBar, Line, Doughnut } from 'react-chartjs-2';


export class BarChartStatistcic extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Kubo Bình Thạnh',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    //hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Kubo Sư Vạn Hạnh',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    //hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
        const data2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }
        const data3 = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };

        return (
            <div bar-chart-statistic>
                <HorizontalBar data={data} className="bar-chart-statistic__chart" />
                <Line data={data2} />
                <Doughnut data={data3} />
            </div >
        );

    };
}