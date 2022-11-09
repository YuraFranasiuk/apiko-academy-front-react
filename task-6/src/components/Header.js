import React, { useContext } from 'react';

import './Header.css';

import ThemeContext from '../ThemeContext';

function Header({ children }) {
    const theme = useContext(ThemeContext);

    return (
        <header className={`Header Header_${theme}`}>
            <h1 className={'Header_Logo'}>Favourite Movies</h1>
            <div className={'Header_Items'}>{children}</div>
        </header>
    );
}

export default Header;
