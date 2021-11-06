"use strict";
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
    logging: false,
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
    .then(async (connection) => {
    console.log("start database...");
    const server = new graphql_yoga_1.GraphQLServer({
        typeDefs: ["src/graphql/schema.graphql"],
        resolvers: [movie_resolver_1.default, movie_love_resolver_1.default],
    });
    server.start(({ port }) => {
        console.log("start Graphql-yoga server", port);
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map