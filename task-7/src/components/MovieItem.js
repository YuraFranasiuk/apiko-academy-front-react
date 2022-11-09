import React, { useContext } from 'react';

import './MovieItem.css';

import RateSwitch from './RateSwitch';

import ThemeContext from '../ThemeContext';

function MovieItem({ title, popularity, poster, overview, releaseDate, onPosterClick }) {
    const theme = useContext(ThemeContext);

    return (
        <div className={`MovieItem MovieItem_${theme}`}>
            <h2 className={'MovieItem_Title'}>{title}</h2>
            <RateSwitch popularity={popularity} />
            <div className={'MovieItem_Content'}>
                <img
                    className={'MovieItem_Poster'}
                    src={`http://image.tmdb.org/t/p/w400/${poster}`}
                    width={400}
                    height={700}
                    onClick={() => onPosterClick({
                        title, popularity, poster, releaseDate, overview
                    })}
                />
                <p className={'MovieItem_Overview'}>{overview}</p>
            </div>
        </div>
    );
}

export default MovieItem;
