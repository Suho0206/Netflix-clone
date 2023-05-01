const key = 'f6173311f239d1f19bf61411d36ae07c'

const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestSimilar:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    // requestsTranslations:
}

export default requests