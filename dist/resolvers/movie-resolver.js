"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_services_1 = require("../service/movie-services");
const movieResolver = {
    Query: {
        movie: async (_, { movie_id }) => {
            return await (0, movie_services_1.getMovie)(movie_id);
        },
        movies: async (_, { limit, minimum_rating }) => {
            return await (0, movie_services_1.getMovies)(limit, minimum_rating);
        },
        suggesions: async (_, { movie_id }) => {
            return await (0, movie_services_1.getSuggessions)(movie_id);
        },
    },
};
exports.default = movieResolver;
//# sourceMappingURL=movie-resolver.js.map