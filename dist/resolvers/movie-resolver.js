import { getMovie, getMovies, getSuggessions } from "../service/movie-services";
const movieResolver = {
    Query: {
        movie: async (_, { movie_id }) => {
            return await getMovie(movie_id);
        },
        movies: async (_, { limit, minimum_rating }) => {
            return await getMovies(limit, minimum_rating);
        },
        suggesions: async (_, { movie_id }) => {
            return await getSuggessions(movie_id);
        },
    },
};
export default movieResolver;
//# sourceMappingURL=movie-resolver.js.map