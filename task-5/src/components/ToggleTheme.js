import React, { Component } from 'react';

import './ToggleTheme.css';

import MoonIcon from '../icons/moon.svg';
import SunIcon from '../icons/sun.svg';

import ThemeContext from '../ThemeContext';

class ToggleTheme extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        this.props.onClick();
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <button className={`ToggleTheme ToggleTheme_${theme} ToggleTheme_Button_clear`}
                            onClick={this.handleClick}>
                        <p>Theme</p>
                        <img src={
                            theme === 'light'
                                ? SunIcon
                                : MoonIcon
                        } width={50} height={50} />
                    </button>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default ToggleTheme;
