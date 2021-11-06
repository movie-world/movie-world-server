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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const graphql_yoga_1 = require("graphql-yoga");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const movie_love_resolver_1 = __importDefault(require("./resolvers/movie-love-resolver"));
const movie_resolver_1 = __importDefault(require("./resolvers/movie-resolver"));
const connectionOptions = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
    },
};
(0, typeorm_1.createConnection)(connectionOptions)
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("start database...");
    const server = new graphql_yoga_1.GraphQLServer({
        typeDefs: ["src/graphql/schema.graphql"],
        resolvers: [movie_resolver_1.default, movie_love_resolver_1.default],
    });
    server.start(({ port }) => {
        console.log("start Graphql-yoga server", port);
    });
}))
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map