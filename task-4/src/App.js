import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header';
import MoviesList from './Components/MoviesList';

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <header>
                    <Header>
                        <div className={'App_Container'}>
                            <div className={'Header_Content'}>
                                <h1>Favourite Movies</h1>
                            </div>
                        </div>
                    </Header>
                </header>
                <main>
                    <div className={'App_Container'}><MoviesList/></div>
                </main>
            </div>
        );
    }
}

export default App;
