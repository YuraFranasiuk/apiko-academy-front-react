import React, { useState, useContext } from 'react';

import './RateSwitch.css';

import ThemeContext from '../ThemeContext';

function RateSwitch ({ popularity }) {
    const [showRate, setShowRate] = useState(false);

    const theme = useContext(ThemeContext);

    const toggleRateVisibility = () => setShowRate(!showRate);

    return (
        <button onClick={toggleRateVisibility}
                className={`RateSwitch RateSwitch_${theme} RateSwitch_clear`}>
            <p>{!showRate ? 'Show Rate' : `Rate: ${popularity}`}</p>
        </button>
    );
}

export default RateSwitch;
