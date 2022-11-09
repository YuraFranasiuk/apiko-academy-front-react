import React, { useState } from 'react';

import useFetchMovies from './hooks/useFetchMovies';

import ThemeContext from './ThemeContext';

import Page from './components/Page';
import Header from './components/Header';
import ToggleTheme from './components/ToggleTheme';
import Main from './components/Main';
import MoviesList from './components/MoviesList';
import MovieItem from './components/MovieItem';
import Pagination from './components/Pagination';
import PopUp from './components/PopUp';

function App() {
    const createUrl = (page) =>
        'https://api.themoviedb.org/3' +
        '/movie/popular' +
        '?api_key=c1f1bfcf10259d5f3d7bd66da82c97f0' +
        '&language=en-US' +
        `&page=${page}`;

    const [theme, setTheme] = useState('light');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [url, setUrl] = useState(createUrl(1));

    const moviesPage = useFetchMovies(url);

    const handlerChangeTheme = () => { setTheme(theme === 'light' ? 'dark' : 'light') };
    const handleMovieSelect = (movie) => { setSelectedMovie(movie) };
    const handleClosePopUp = () => { setSelectedMovie(null) };
    const handlePageNumberChange = (page) => {
        setUrl(createUrl(page));
        window.scroll(0, 0)
    };

    return (
        <ThemeContext.Provider value={theme}>
            <Page>
                <Header>
                    <ToggleTheme onClick={handlerChangeTheme} />
                </Header>
                <Main>
                     {moviesPage && (<>
                         <MoviesList>
                             {moviesPage.data.map(movie => {
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
                             onChange={handlePageNumberChange}
                             currentPage={moviesPage.currentPage}
                             lastPage={moviesPage.total}
                         />
                     </>)}
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
