import React, { Component } from 'react';

import './Main.css';

import ThemeContext from '../ThemeContext';

class Main extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <main className={`Main Main_${theme}`}>
                        {this.props.children}
                    </main>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Main;
