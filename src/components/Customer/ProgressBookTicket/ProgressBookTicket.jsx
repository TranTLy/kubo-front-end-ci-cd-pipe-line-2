import React, { Component } from 'react';

import './ProgressBookTicket.scss'

export class ProgressBookTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { currentStep, steps } = this.props;
        return (
            <div className="progress-book-ticket-wrap">
                <div className="progress-book-ticket-wrap__step -name">
                    {
                        steps.map((item) => {
                            return (
                                <div className={item.step <= currentStep ? "step step--active" : "step step--normal"}>
                                    {item.name}
                                </div>
                            )
                        })

                    }

                </div>
                <div className="progress-book-ticket-wrap__step -number">
                    {
                        steps.map((item, index) => {
                            return (
                                <div className="step">
                                    <div className={item.step <= currentStep ? "step__element -active" : "step__element -normal"}>
                                        {index + 1}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="progress-book-ticket-wrap__progress"></div>
            </div>
        );
    }
}
