import React, { Component } from 'react';

import './Pagination.css';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = { currentPage: props.currentPage };

        this.increasePageNumber = this.increasePageNumber.bind(this);
        this.reducePageNumber = this.reducePageNumber.bind(this);
    }

    increasePageNumber() {
        this.setState((state, props) => {
            const currentPage = state.currentPage + 1;

            this.props.onChange(currentPage);

            return { currentPage };
        });
    }

    reducePageNumber() {
        this.setState((state, props) => {
            const currentPage = state.currentPage - 1;

            this.props.onChange(currentPage);

            return { currentPage };
        });
    }

    render() {
        const isFirstPage = this.state.currentPage <= 1;
        const isLastPage = this.state.currentPage >= this.props.lastPage;

        return (
            <div className={'Pagination'}>
                <button className={'Pagination_Button'}
                        disabled={isFirstPage}
                        onClick={this.reducePageNumber}>&lt;</button>
                <p className={'Pagination_Pages'}>You are on page {this.state.currentPage} of {this.props.lastPage}</p>
                <button className={'Pagination_Button'}
                        disabled={isLastPage}
                        onClick={this.increasePageNumber}>&gt;</button>
            </div>
        );
    }
}

export default Pagination;
