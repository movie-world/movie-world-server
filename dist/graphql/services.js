"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "https://yts.mx/api/v2";
exports.getMovie = (movie_id) => __awaiter(this, void 0, void 0, function* () {
    const { data: { data: { movie }, }, } = yield axios_1.default(`${BASE_URL}/movie_details.json`, {
        params: {
            movie_id,
        },
    });
    return movie;
});
exports.getMovies = (limit, minimum_rating) => __awaiter(this, void 0, void 0, function* () {
    const { data: { data: { movies }, }, } = yield axios_1.default(`${BASE_URL}/list_movies.json`, {
        params: {
            limit,
            minimum_rating,
            sort_by: "year",
            order_by: "desc",
        },
    });
    return movies;
});
exports.getSuggessions = (movie_id) => __awaiter(this, void 0, void 0, function* () {
    const { data: { data: { movies }, }, } = yield axios_1.default(`${BASE_URL}/movie_suggestions.json`, {
        params: {
            movie_id,
        },
    });
    return movies;
});
//# sourceMappingURL=services.js.map