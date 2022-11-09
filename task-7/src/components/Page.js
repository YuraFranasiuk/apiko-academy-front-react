import React, { useContext } from 'react';

import ThemeContext from '../ThemeContext';

function Page({ children }) {
    const theme = useContext(ThemeContext);

    if (theme === 'light')
        document.body.style.background = '#ececec';
    else if (theme === 'dark')
        document.body.style.background = '#1e1e28';

    return (
        <div className={'Page'}>
            {children}
        </div>
    );
}

export default Page;
