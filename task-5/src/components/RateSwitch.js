import React, { Component } from 'react';

import './RateSwitch.css';

import ThemeContext from '../ThemeContext';

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
            <ThemeContext.Consumer>
                {theme => (
                    <button onClick={this.toggleRateVisibility}
                            className={`RateSwitch RateSwitch_${theme} RateSwitch_clear`}>
                        <p>{!this.state.showRate ? 'Show Rate' : `Rate: ${rate}`}</p>
                    </button>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default RateSwitch;
