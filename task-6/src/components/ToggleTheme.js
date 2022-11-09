import React, { useContext } from 'react';

import './ToggleTheme.css';

import MoonIcon from '../icons/moon.svg';
import SunIcon from '../icons/sun.svg';

import ThemeContext from '../ThemeContext';

function ToggleTheme({ onClick }) {
    const theme = useContext(ThemeContext);

    const handleClick = (evt) => onClick();

    return (
        <button className={`ToggleTheme ToggleTheme_${theme} ToggleTheme_Button_clear`}
                onClick={handleClick}>
            <p>Theme</p>
            <img src={
                theme === 'light'
                    ? SunIcon
                    : MoonIcon
            } width={50} height={50} />
        </button>
    );
}

export default ToggleTheme;
