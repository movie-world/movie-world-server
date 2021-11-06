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
const typeorm_1 = require("typeorm");
const Content_1 = require("../entity/Content");
const Post_1 = require("../entity/Post");
const User_1 = require("../entity/User");
exports.getUsers = () => __awaiter(this, void 0, void 0, function* () {
    return yield typeorm_1.getRepository(User_1.User).find();
});
exports.getUser = (id) => __awaiter(this, void 0, void 0, function* () {
    return yield typeorm_1.getRepository(User_1.User).findOne(id);
});
exports.getPosts = () => __awaiter(this, void 0, void 0, function* () {
    return yield typeorm_1.getRepository(Content_1.Content)
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
//# sourceMappingURL=movie-love-service.js.map