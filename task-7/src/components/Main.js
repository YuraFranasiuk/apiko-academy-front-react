import React, { useContext } from 'react';

import './Main.css';

import ThemeContext from '../ThemeContext';

function Main({ children }) {
    const theme = useContext(ThemeContext);

    return (
        <main className={`Main Main_${theme}`}>
            {children}
        </main>
    );
}

export default Main;
