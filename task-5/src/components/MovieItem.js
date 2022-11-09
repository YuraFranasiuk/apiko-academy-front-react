import React, { Component } from 'react';

import './MovieItem.css';

import RateSwitch from './RateSwitch';

import ThemeContext from '../ThemeContext';


class MovieItem extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className={`MovieItem MovieItem_${theme}`}>
                        <h2 className={'MovieItem_Title'}>{this.props.title}</h2>
                        <RateSwitch popularity={this.props.popularity} />
                        <div className={'MovieItem_Content'}>
                            <img
                                className={'MovieItem_Poster'}
                                src={`http://image.tmdb.org/t/p/w400/${this.props.poster}`}
                                width={400}
                                height={700}
                                onClick={() => this.props.onPosterClick(this.props)}
                            />
                            <p className={'MovieItem_Overview'}>{this.props.overview}</p>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default MovieItem;
