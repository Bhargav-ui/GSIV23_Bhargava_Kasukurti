export const API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=514c476f69ae4104c0d58d964c8c42c4";

export const IMG_PATH = "http://image.tmdb.org/t/p/w500";

export const SEARCH = {
  search_api: (movieName) =>
    `https://api.themoviedb.org/3/search/movie?api_key=514c476f69ae4104c0d58d964c8c42c4&include_adult=false&language=en-US&query=${movieName}`,
};

export const SINGLE_MOVIE = {
  singleMovieApi: (movie_id) =>
    ` https://api.themoviedb.org/3/movie/${movie_id}?api_key=514c476f69ae4104c0d58d964c8c42c4`,
};
// `https://api.themoviedb.org/3/discover/movie?api_key=<your_api_key>`;

//  https://api.themoviedb.org/3/movie/496450?api_key=514c476f69ae4104c0d58d964c8c42c4
