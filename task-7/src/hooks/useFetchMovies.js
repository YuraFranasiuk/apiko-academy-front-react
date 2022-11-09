import { useState, useEffect } from 'react';

function useFetchMovies(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData({
                data: data.results,
                total: data.total_pages,
                currentPage: data.page
            }));
    }, [url]);

    return data;
}

export default useFetchMovies;
