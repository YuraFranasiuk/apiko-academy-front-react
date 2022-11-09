import React from 'react';

import './PopUp.css';

function PopUp({ releaseDate, onClose }) {
    return (
        <div className={'PopUp'}>
            <button className={'PopUp_Button PopUp_Button_clear'}
                     onClick={onClose}>☒</button>
            <p>Release date: {releaseDate}</p>
        </div>
    );
}

export default PopUp;
