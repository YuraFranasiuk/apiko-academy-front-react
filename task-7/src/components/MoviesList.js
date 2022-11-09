import React from 'react';

import './MoviesList.css';

function MoviesList({ children }) {
    return (
        <div className={'MoviesList'}>
            {children}
        </div>
    );
}

export default MoviesList;
