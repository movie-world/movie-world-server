import {
  addPost,
  getPost,
  getPostPreviews,
  getPosts,
  getUser,
  getUsers,
} from "../service/movie-love-service";

type TUser = {
  id: number;
};
type IPostId = {
  postId: number;
};

export type TPost = {
  id: number;
  title: string;
  description?: string;
  regDate: string;
  imgUrl?: string;
  author: string;
  content: string;
};
const movieLoveResolver = {
  Query: {
    users: async () => {
      return getUsers();
    },
    user: async (_: any, { id }: TUser) => {
      return await getUser(id);
    },
    posts: async () => {
      return await getPosts();
    },
    post: async (_: any, { postId }: IPostId) => {
      return await getPost(postId);
    },
    previews: async () => {
      return await getPostPreviews();
    },
  },
  Mutation: {
    addPost: async (_: any, input: TPost) => {
      return await addPost(input);
    },
  },
};

export default movieLoveResolver;
