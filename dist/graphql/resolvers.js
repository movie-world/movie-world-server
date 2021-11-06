"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_love_service_1 = require("./movie-love-service");
const services_1 = require("./services");
const BASE_URL = "https://yts.mx/api/v2";
const resolvers = {
    Query: {
        movie: (_, { movie_id }) => __awaiter(this, void 0, void 0, function* () {
            return yield services_1.getMovie(movie_id);
        }),
        movies: (_, { limit, minimum_rating }) => __awaiter(this, void 0, void 0, function* () {
            return yield services_1.getMovies(limit, minimum_rating);
        }),
        suggesions: (_, { movie_id }) => __awaiter(this, void 0, void 0, function* () {
            return yield services_1.getSuggessions(movie_id);
        }),
        users: () => __awaiter(this, void 0, void 0, function* () {
            return movie_love_service_1.getUsers();
        }),
        user: (_, { id }) => __awaiter(this, void 0, void 0, function* () {
            return yield movie_love_service_1.getUser(id);
        }),
        posts: () => __awaiter(this, void 0, void 0, function* () {
            return yield movie_love_service_1.getPosts();
        }),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map