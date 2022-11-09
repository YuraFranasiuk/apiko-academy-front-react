import React, { Component } from 'react';

import ThemeContext from '../ThemeContext';

class Page extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => {
                    if (theme === 'light')
                        document.body.style.background = '#ececec';
                    else if (theme === 'dark')
                        document.body.style.background = '#1e1e28';

                    return (
                        <div className={'Page'}>
                            {this.props.children}
                        </div>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default Page;
