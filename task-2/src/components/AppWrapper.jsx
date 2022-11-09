import React from 'react';

import './AppWrapper.css'

const AppWrapper = (props) => (
    <div className={'app-wrapper'}>
        <header className={'app-wrapper__header'}>
            <h1 className={'app-wrapper__title'}>{props.title}</h1>
        </header>
        <main>
            {props.children}
        </main>
    </div>
);

export default AppWrapper;
