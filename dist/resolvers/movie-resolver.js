"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_services_1 = require("../service/movie-services");
const movieResolver = {
    Query: {
        movie: (_, { movie_id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, movie_services_1.getMovie)(movie_id);
        }),
        movies: (_, { limit, minimum_rating }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, movie_services_1.getMovies)(limit, minimum_rating);
        }),
        suggesions: (_, { movie_id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, movie_services_1.getSuggessions)(movie_id);
        }),
    },
};
exports.default = movieResolver;
//# sourceMappingURL=movie-resolver.js.map