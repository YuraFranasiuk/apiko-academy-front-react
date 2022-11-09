import React, { Component } from 'react';

import './RateSwitch.css';

class RateSwitch extends Component {
    constructor(props) {
        super(props);

        this.state = { showRate: false };

        this.toggleRateVisibility = this.toggleRateVisibility.bind(this);
    }

    toggleRateVisibility() {
        this.setState((state, props) => ({
            showRate: !state.showRate
        }));
    }

    render() {
        const rate = this.props.popularity;

        return (
            <button onClick={this.toggleRateVisibility} className={'RateSwitch'}>
                <p>{!this.state.showRate ? 'Show Rate' : `Rate: ${rate}. Hide Rate`}</p>
            </button>
        );
    }
}

export default RateSwitch;
