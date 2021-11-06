var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryColumn } from "typeorm";
let Content = class Content {
    id;
    content;
};
__decorate([
    PrimaryColumn({ type: "int", width: 20 }),
    __metadata("design:type", Number)
], Content.prototype, "id", void 0);
__decorate([
    Column({ type: "text" }),
    __metadata("design:type", String)
], Content.prototype, "content", void 0);
Content = __decorate([
    Entity()
], Content);
export { Content };
//# sourceMappingURL=Content.js.map