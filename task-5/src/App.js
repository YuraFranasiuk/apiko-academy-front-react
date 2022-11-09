import React, { Component } from 'react';

import ThemeContext from './ThemeContext';

import Page from './components/Page';
import Header from './components/Header';
import ToggleTheme from './components/ToggleTheme';
import Main from './components/Main';
import MoviesList from './components/MoviesList';
import MovieItem from './components/MovieItem';
import Pagination from './components/Pagination';
import PopUp from './components/PopUp';

import api from './Api/Api';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light',
            selectedMovie: null,
            moviesPage: {
                page: 1,
                results: []
            }
        };

        this.changeTheme = this.changeTheme.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleMovieSelect = this.handleMovieSelect.bind(this);
        this.handleClosePopUp = this.handleClosePopUp.bind(this);
    }

    changeTheme() {
        this.setState((state, props) => ({
            theme:
                state.theme === 'light'
                    ? 'dark'
                    : 'light'
        }));
    }

    handlePageChange(page) {
        api.fetchPopularMovies(page)
            .then(moviesPage => this.setState({ moviesPage }))
            .then(() => window.scroll(0, 0));
    }

    handleMovieSelect(movie) {
        this.setState({ selectedMovie: movie });
    }

    handleClosePopUp() {
        this.setState({ selectedMovie: null });
    }

    componentDidMount() {
        this.handlePageChange(this.state.moviesPage.page);
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Page>
                    <Header>
                        <ToggleTheme onClick={this.changeTheme} />
                    </Header>
                    <Main>
                        <MoviesList>
                            {this.state.moviesPage.results.map(movie => {
                                const props = {
                                    id: movie.id,
                                    title: movie.title,
                                    poster: movie.poster_path,
                                    overview: movie.overview,
                                    popularity: movie.popularity,
                                    releaseDate: movie.release_date
                                };

                                return (
                                    <MovieItem
                                        key={movie.id}
                                        onPosterClick={this.handleMovieSelect}
                                        {...props}
                                    />
                                );
                            })}
                        </MoviesList>
                        <Pagination
                            onChange={this.handlePageChange}
                            currentPage={this.state.moviesPage.page}
                            lastPage={this.state.moviesPage.total_pages}
                        />
                    </Main>
                    {this.state.selectedMovie && (
                        <PopUp
                            key={this.state.selectedMovie.id}
                            releaseDate={this.state.selectedMovie.releaseDate}
                            onClose={this.handleClosePopUp}
                        />
                    )}
                </Page>
            </ThemeContext.Provider>
        );
    }
}

export default App;
