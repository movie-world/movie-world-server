import { getRepository } from "typeorm";
import { Content } from "../entity/Content";
import { Post } from "../entity/Post";
import { User } from "../entity/User";
export const getUsers = async () => {
    return await getRepository(User).find();
};
export const getUser = async (id) => {
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
};
export const getPost = async (id) => {
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
        .where("post.id = :postId", { postId: id })
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
export const addPost = async (input) => {
    try {
        const post = new Post();
        post.id = input.id;
        post.title = input.title;
        post.description = input.description;
        post.imgUrl = input.imgUrl;
        post.regDate = input.regDate;
        post.author = input.author;
        await getRepository(Post).save(post);
        const content = new Content();
        content.id = input.id;
        content.content = input.content;
        await getRepository(Content).save(content);
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
//# sourceMappingURL=movie-love-service.js.map