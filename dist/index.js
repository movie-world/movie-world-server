import "dotenv/config";
import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { createConnection } from "typeorm";
import movieLoveResolver from "./resolvers/movie-love-resolver";
import movieResolver from "./resolvers/movie-resolver";
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
createConnection(connectionOptions)
    .then(async (connection) => {
    console.log("start database...");
    const server = new GraphQLServer({
        typeDefs: ["src/graphql/schema.graphql"],
        resolvers: [movieResolver, movieLoveResolver],
    });
    server.start(({ port }) => {
        console.log("start Graphql-yoga server", port);
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map