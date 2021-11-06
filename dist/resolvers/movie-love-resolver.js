import { addPost, getPost, getPostPreviews, getPosts, getUser, getUsers, } from "../service/movie-love-service";
const movieLoveResolver = {
    Query: {
        users: async () => {
            return getUsers();
        },
        user: async (_, { id }) => {
            return await getUser(id);
        },
        posts: async () => {
            return await getPosts();
        },
        post: async (_, { id }) => {
            return await getPost(id);
        },
        previews: async () => {
            return await getPostPreviews();
        },
    },
    Mutation: {
        addPost: async (_, { input }) => {
            return await addPost(input);
        },
    },
};
export default movieLoveResolver;
//# sourceMappingURL=movie-love-resolver.js.map