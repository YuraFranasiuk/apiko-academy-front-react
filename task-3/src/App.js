import React from 'react';

import './App.css';

import Menu from './components/Menu';
import MenuItem from './components/MenuItem';

import { menu } from './constants';

const App = () => {
    const menuItems = menu.map(item => {
        const props = {
            title: item.title,
            link: item.link
        };

        return <MenuItem key={item.title} {...props}/>;
    });

    return <Menu>{menuItems}</Menu>;
};

export default App;
