import React, { Component } from 'react';

import './Header.css';

import ThemeContext from '../ThemeContext';

class Header extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <header className={`Header Header_${theme}`}>
                        <h1 className={'Header_Logo'}>Favourite Movies</h1>
                        <div className={'Header_Items'}>{this.props.children}</div>
                    </header>
                )}
            </ThemeContext.Consumer>
        );
    };
}

export default Header;
