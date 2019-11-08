import React, { Component } from 'react';
import './SeatingPlant.scss';


export class SeatingPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumSeatChose: 0
        }
    }

    isSeatChoose = (position) => {
        for (let i = 0; i < this.props.arrayPositionSeat.length; i++) {
            if (this.props.arrayPositionSeat[i].toString() === position.toString()) {
                return true;
            }
        }
        return false;
    }

    getSeatPlant = (stateSeat) => {
        const AVAILABLE = "0";
        var results = [];
        for (let i = 0; i < stateSeat.length; i++) {
            if (this.isSeatChoose(i)) {
                results.push(
                    <div className='seat-wrap seat-choosen seat-wrap--available' onClick={() => { this.chooseSeat(i) }}>
                        <span className='seat'>
                            {i + 1}
                        </span>
                    </div>
                );
            }
            else if (stateSeat[i] === AVAILABLE) {
                results.push(
                    <div className='seat-wrap seat-wrap--available' onClick={() => { this.chooseSeat(i) }}>
                        <span className='seat'>
                            {i + 1}
                        </span>
                    </div>
                );
            }
            else {
                results.push(
                    <div className='seat-wrap seat-wrap--unavailable'>
                        <span className='seat'>
                            {i + 1}
                        </span>
                    </div>);
            }
        }
        return results;
    }

    chooseSeat = (position) => {
        const seats = document.getElementsByClassName("seat-wrap");
        const seat = seats[position];
        if (seat.classList.contains("seat-choosen")) {
            console.log("not chose");
            seat.classList.remove("seat-choosen");
            this.setState({ sumSeatChose: this.state.sumSeatChose - 1 });
            this.props.deselectSeatPosition(position);
        }
        else if (this.state.sumSeatChose < this.props.maxSeat) {
            console.log(" chose");
            seat.classList.add("seat-choosen");
            this.setState({ sumSeatChose: this.state.sumSeatChose + 1 });
            this.props.selectSeatPosition(position);
        }
    }

    componentDidMount() {
        console.log("on componentDidMount");
        this.setState({ sumSeatChose: this.props.arrayPositionSeat.length })
    }

    render() {
        const { stateSeat, maxSeat } = this.props;
        return (
            <div className="seating-plant-wrap">
                <div className="seating-plant__sum-seat-chose">Bạn đã chọn {this.props.arrayPositionSeat.length} vé/ {maxSeat} vé</div>
                <div className="seating-plant">
                    {
                        this.getSeatPlant(stateSeat)
                    }
                </div>
            </div >
        );
    }
}
