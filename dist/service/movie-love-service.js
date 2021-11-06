"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPost = exports.getPostPreviews = exports.getPost = exports.getPosts = exports.getUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const Content_1 = require("../entity/Content");
const Post_1 = require("../entity/Post");
const User_1 = require("../entity/User");
const getUsers = async () => {
    return await (0, typeorm_1.getRepository)(User_1.User).find();
};
exports.getUsers = getUsers;
const getUser = async (id) => {
    return await (0, typeorm_1.getRepository)(User_1.User).findOne(id);
};
exports.getUser = getUser;
const getPosts = async () => {
    return await (0, typeorm_1.getRepository)(Content_1.Content)
        .createQueryBuilder("content")
        .select("post.id", "id")
        .addSelect("post.title", "title")
        .addSelect("post.description", "description")
        .addSelect("post.regDate", "regDate")
        .addSelect("post.imgUrl", "imgUrl")
        .addSelect("post.author", "author")
        .addSelect("content.content", "content")
        .leftJoin(Post_1.Post, "post", "post.id = content.id")
        .getRawMany();
};
exports.getPosts = getPosts;
const getPost = async (id) => {
    return await (0, typeorm_1.getRepository)(Content_1.Content)
        .createQueryBuilder("content")
        .select("post.id", "id")
        .addSelect("post.title", "title")
        .addSelect("post.description", "description")
        .addSelect("post.regDate", "regDate")
        .addSelect("post.imgUrl", "imgUrl")
        .addSelect("post.author", "author")
        .addSelect("content.content", "content")
        .leftJoin(Post_1.Post, "post", "post.id = content.id")
        .where("post.id = :postId", { postId: id })
        .getRawOne();
};
exports.getPost = getPost;
const getPostPreviews = async () => {
    return await (0, typeorm_1.getRepository)(Post_1.Post)
        .createQueryBuilder("post")
        .select("post.id", "id")
        .addSelect("post.title", "title")
        .addSelect("post.description", "description")
        .addSelect("post.regDate", "regDate")
        .addSelect("post.imgUrl", "imgUrl")
        .addSelect("post.author", "author")
        .getRawMany();
};
exports.getPostPreviews = getPostPreviews;
const addPost = async (input) => {
    try {
        const post = new Post_1.Post();
        post.id = input.id;
        post.title = input.title;
        post.description = input.description;
        post.imgUrl = input.imgUrl;
        post.regDate = input.regDate;
        post.author = input.author;
        await (0, typeorm_1.getRepository)(Post_1.Post).save(post);
        const content = new Content_1.Content();
        content.id = input.id;
        content.content = input.content;
        await (0, typeorm_1.getRepository)(Content_1.Content).save(content);
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
exports.addPost = addPost;
//# sourceMappingURL=movie-love-service.js.map