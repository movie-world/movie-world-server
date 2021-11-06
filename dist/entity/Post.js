var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsOptional, IsString } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";
let Post = class Post {
    id;
    title;
    description;
    regDate;
    author;
    imgUrl;
};
__decorate([
    PrimaryColumn({ type: "int", width: 20 }),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    Column(),
    IsString(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    Column({ nullable: true }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], Post.prototype, "description", void 0);
__decorate([
    Column(),
    IsString(),
    __metadata("design:type", String)
], Post.prototype, "regDate", void 0);
__decorate([
    Column({ type: "varchar", length: "50" }),
    IsString(),
    __metadata("design:type", String)
], Post.prototype, "author", void 0);
__decorate([
    Column({ nullable: true }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], Post.prototype, "imgUrl", void 0);
Post = __decorate([
    Entity()
], Post);
export { Post };
//# sourceMappingURL=Post.js.map