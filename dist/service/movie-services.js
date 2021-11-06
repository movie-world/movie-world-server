"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuggessions = exports.getMovies = exports.getMovie = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "https://yts.mx/api/v2";
const getMovie = async (movie_id) => {
    const { data: { data: { movie }, }, } = await (0, axios_1.default)(`${BASE_URL}/movie_details.json`, {
        params: {
            movie_id,
        },
    });
    return movie;
};
exports.getMovie = getMovie;
const getMovies = async (limit, minimum_rating) => {
    const { data: { data: { movies }, }, } = await (0, axios_1.default)(`${BASE_URL}/list_movies.json`, {
        params: {
            limit,
            minimum_rating,
            sort_by: "year",
            order_by: "desc",
        },
    });
    return movies;
};
exports.getMovies = getMovies;
const getSuggessions = async (movie_id) => {
    const { data: { data: { movies }, }, } = await (0, axios_1.default)(`${BASE_URL}/movie_suggestions.json`, {
        params: {
            movie_id,
        },
    });
    return movies;
};
exports.getSuggessions = getSuggessions;
//# sourceMappingURL=movie-services.js.map