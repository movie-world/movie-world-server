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
const movie_love_service_1 = require("../service/movie-love-service");
const movieLoveResolver = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            return (0, movie_love_service_1.getUsers)();
        }),
        user: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, movie_love_service_1.getUser)(id);
        }),
        posts: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, movie_love_service_1.getPosts)();
        }),
        post: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, movie_love_service_1.getPost)(id);
        }),
        previews: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, movie_love_service_1.getPostPreviews)();
        }),
    },
    Mutation: {
        addPost: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, movie_love_service_1.addPost)(input);
        }),
    },
};
exports.default = movieLoveResolver;
//# sourceMappingURL=movie-love-resolver.js.map