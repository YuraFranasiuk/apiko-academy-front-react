class API {
    baseUrl = 'https://api.themoviedb.org/3';
    token = 'c1f1bfcf10259d5f3d7bd66da82c97f0';

    create_query_url(resource, params = {}) {
        const query = [];

        for (const [key, value] of Object.entries(params)) {
            query.push(`${key}=${value}`);
        }

        return `${this.baseUrl}${resource}${query.length ? `?${query.join('&')}` : ''}`;
    }

    async fetchPopularMovies(page = 1) {
        const url = this.create_query_url('/movie/popular', {
            api_key: this.token,
            language: 'en-US',
            page: page
        });

        const res = await fetch(url);
        return await res.json();
    }
}

export default new API();
