import React, { useState, useEffect } from 'react';

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

function App() {
    const [theme, setTheme] = useState('light');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [moviesPage, setMoviesPage] = useState({ page: 1, results: [] });

    const changeTheme = () =>
        setTheme(theme === 'light' ? 'dark' : 'light');

    const handlePageChange = (page) => {
        api.fetchPopularMovies(page)
            .then(moviesPage => setMoviesPage(moviesPage))
            .then(() => window.scroll(0, 0));
    };

    const handleMovieSelect = (movie) => setSelectedMovie(movie);
    const handleClosePopUp = () => setSelectedMovie(null);

    useEffect(() => {
        handlePageChange(moviesPage.page);
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <Page>
                <Header>
                    <ToggleTheme onClick={changeTheme} />
                </Header>
                <Main>
                    <MoviesList>
                        {moviesPage.results.map(movie => {
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
                                    onPosterClick={handleMovieSelect}
                                    {...props}
                                />
                            );
                        })}
                    </MoviesList>
                    <Pagination
                        onChange={handlePageChange}
                        currentPage={moviesPage.page}
                        lastPage={moviesPage.total_pages}
                    />
                </Main>
                {selectedMovie && (
                    <PopUp
                        key={JSON.stringify(selectedMovie)}
                        releaseDate={selectedMovie.releaseDate}
                        onClose={handleClosePopUp}
                    />
                )}
            </Page>
        </ThemeContext.Provider>
    );
}

export default App;
