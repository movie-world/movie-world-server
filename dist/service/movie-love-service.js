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
exports.addPost = exports.getPostPreviews = exports.getPost = exports.getPosts = exports.getUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const Content_1 = require("../entity/Content");
const Post_1 = require("../entity/Post");
const User_1 = require("../entity/User");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, typeorm_1.getRepository)(User_1.User).find();
});
exports.getUsers = getUsers;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, typeorm_1.getRepository)(User_1.User).findOne(id);
});
exports.getUser = getUser;
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, typeorm_1.getRepository)(Content_1.Content)
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
});
exports.getPosts = getPosts;
const getPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, typeorm_1.getRepository)(Content_1.Content)
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
});
exports.getPost = getPost;
const getPostPreviews = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, typeorm_1.getRepository)(Post_1.Post)
        .createQueryBuilder("post")
        .select("post.id", "id")
        .addSelect("post.title", "title")
        .addSelect("post.description", "description")
        .addSelect("post.regDate", "regDate")
        .addSelect("post.imgUrl", "imgUrl")
        .addSelect("post.author", "author")
        .getRawMany();
});
exports.getPostPreviews = getPostPreviews;
const addPost = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = new Post_1.Post();
        post.id = input.id;
        post.title = input.title;
        post.description = input.description;
        post.imgUrl = input.imgUrl;
        post.regDate = input.regDate;
        post.author = input.author;
        yield (0, typeorm_1.getRepository)(Post_1.Post).save(post);
        const content = new Content_1.Content();
        content.id = input.id;
        content.content = input.content;
        yield (0, typeorm_1.getRepository)(Content_1.Content).save(content);
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
});
exports.addPost = addPost;
//# sourceMappingURL=movie-love-service.js.map