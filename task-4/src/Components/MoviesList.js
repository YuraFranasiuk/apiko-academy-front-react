import React, { Component } from 'react';

import './MoviesList.css';

import Pagination from './Pagination';
import MovieItem from "./MovieItem";

import api from '../Api/Api';

class MoviesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastPage: null,
            movies: []
        };

        this.handlePageNumberChange = this.handlePageNumberChange.bind(this);
    }

    handlePageNumberChange(page) {
        api.fetchPopularMovies(page).then(pageData => {
            window.scroll(0,0)

            this.setState({ lastPage: pageData.total_pages });
            this.setState({ movies: pageData.results.map(movie => {
                return {
                    title: movie.title,
                    poster: movie.poster_path,
                    popularity: movie.popularity,
                    overview: movie.overview
                };
            })});
        });
    }

    componentDidMount() {
        this.handlePageNumberChange(1);
    }

    render() {
        return (
            <div className={'MoviesList'}>
                <div className={'MoviesList_Movies'}>
                    {this.state.movies.map(movie => (
                        <MovieItem key={movie.overview} {...movie}/>
                    ))}
                </div>
                <div className={'MoviesList_Navigation'}>
                    <Pagination currentPage={1} lastPage={this.state.lastPage}
                                onChange={this.handlePageNumberChange}/>
                </div>
            </div>
        );
    }
}

export default MoviesList;
