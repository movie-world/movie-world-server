import { getRepository } from "typeorm";
import { Content } from "../entity/Content";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

export const getUsers = async () => {
  return await getRepository(User).find();
};

export const getUser = async (id: number) => {
  return await getRepository(User).findOne(id);
};

export const getPosts = async () => {
  return await getRepository(Content)
    .createQueryBuilder("content")
    .select("post.id", "id")
    .addSelect("post.title", "title")
    .addSelect("post.description", "description")
    .addSelect("post.regDate", "regDate")
    .addSelect("post.imgUrl", "imgUrl")
    .addSelect("post.author", "author")
    .addSelect("content.content", "content")
    .leftJoin(Post, "post", "post.id = content.id")
    .getRawMany();
  // return getConnection()
  //   .manager.getRepository(Post)
  //   .createQueryBuilder("post")
  //   .select("post.id", "id")
  //   .addSelect("content.content", "content")
  //   .leftJoin(Content, "content", "content.id = post.id")
  //   .getRawMany();
};

export const getPost = async (postId: number) => {
  return await getRepository(Content)
    .createQueryBuilder("content")
    .select("post.id", "id")
    .addSelect("post.title", "title")
    .addSelect("post.description", "description")
    .addSelect("post.regDate", "regDate")
    .addSelect("post.imgUrl", "imgUrl")
    .addSelect("post.author", "author")
    .addSelect("content.content", "content")
    .leftJoin(Post, "post", "post.id = content.id")
    .where("post.id = :postId", { postId: postId })
    .getRawOne();
};

export const getPostPreviews = async () => {
  return await getRepository(Post)
    .createQueryBuilder("post")
    .select("post.id", "id")
    .addSelect("post.title", "title")
    .addSelect("post.description", "description")
    .addSelect("post.regDate", "regDate")
    .addSelect("post.imgUrl", "imgUrl")
    .addSelect("post.author", "author")
    .getRawMany();
};

export const addPost = async (args: any) => {
  try {
    const post = new Post();
    post.id = args.input.id;
    post.title = args.input.title;
    post.description = args.input.description;
    post.imgUrl = args.input.imgUrl;
    post.regDate = args.input.regDate;
    post.author = args.input.author;
    await getRepository(Post).save(post);
    const content = new Content();
    content.id = args.input.id;
    content.content = args.input.content;
    await getRepository(Content).save(content);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
