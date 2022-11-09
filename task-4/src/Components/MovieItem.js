import React, { Component } from 'react';

import './MovieItem.css';

import RateSwitch from './RateSwitch';

class MovieItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'MovieItem'}>
                <h2 className={'MovieItem_Title'}>{this.props.title}</h2>
                <div className={'MovieItem_Content'}>
                    <RateSwitch popularity={this.props.popularity} />
                    <img className={'MovieItem_Poster'}
                         src={`http://image.tmdb.org/t/p/w500/${this.props.poster}`}
                         width={450}
                         height={750}/>
                    <p className={'MovieItem_OverView'}>{this.props.overview}</p>
                </div>
            </div>
        );
    }
}

export default MovieItem;
