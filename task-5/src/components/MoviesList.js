import React, { Component } from 'react';

import './MoviesList.css';

class MoviesList extends Component {
    render() {
        return (
            <div className={'MoviesList'}>
                {this.props.children}
            </div>
        );
    }
}

export default MoviesList;
