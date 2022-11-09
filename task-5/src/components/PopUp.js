import React, { Component } from 'react';

import './PopUp.css';

class PopUp extends Component {
    render() {
        return (
            <div className={'PopUp'}>
                <button className={'PopUp_Button PopUp_Button_clear'}
                        onClick={this.props.onClose}>☒</button>
                <p>Release date: {this.props.releaseDate}</p>
            </div>
        );
    }
}

export default PopUp;
