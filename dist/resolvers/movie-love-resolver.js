"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_love_service_1 = require("../service/movie-love-service");
const movieLoveResolver = {
    Query: {
        users: async () => {
            return (0, movie_love_service_1.getUsers)();
        },
        user: async (_, { id }) => {
            return await (0, movie_love_service_1.getUser)(id);
        },
        posts: async () => {
            return await (0, movie_love_service_1.getPosts)();
        },
        post: async (_, { id }) => {
            return await (0, movie_love_service_1.getPost)(id);
        },
        previews: async () => {
            return await (0, movie_love_service_1.getPostPreviews)();
        },
    },
    Mutation: {
        addPost: async (_, { input }) => {
            return await (0, movie_love_service_1.addPost)(input);
        },
    },
};
exports.default = movieLoveResolver;
//# sourceMappingURL=movie-love-resolver.js.map