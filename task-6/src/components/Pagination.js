import React, { useState, useContext } from 'react';

import './Pagination.css';

import ThemeContext from '../ThemeContext';

function Pagination({ currentPage, lastPage, onChange }) {
    const [pageNumber, setPageNumber] = useState(currentPage);

    const theme = useContext(ThemeContext);

    const increasePageNumber = () => {
        const page = pageNumber + 1;

        onChange(page);
        setPageNumber(page);
    };

    const reducePageNumber = () => {
        const page = pageNumber - 1;

        onChange(page);
        setPageNumber(page);
    }

    const isFirstPage = pageNumber <= 1;
    const isLastPage = pageNumber >= lastPage;

    return (
        <div className={`Pagination Pagination_${theme}`}>
            <button className={'Pagination_Button Pagination_Button_clear'}
                    disabled={isFirstPage}
                    onClick={reducePageNumber}>
                &lt;
            </button>
            <p className={'Pagination_Pages'}>
                You are on page {pageNumber} of {lastPage}
            </p>
            <button className={'Pagination_Button Pagination_Button_clear'}
                    disabled={isLastPage}
                    onClick={increasePageNumber}>
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
