import "dotenv/config";
import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";
import movieLoveResolver from "./resolvers/movie-love-resolver";
import movieResolver from "./resolvers/movie-resolver";

const connectionOptions: ConnectionOptions = {
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
    // const post = new Post();
    // post.id = 1112;
    // post.title = "타이틀입니다.";
    // post.author = "dryadsoft";
    // post.regDate = "2021-11-01";
    // post.description = "테스트입니다.";
    // await connection.manager.save(post);

    // const content = new Content();
    // content.id = 1112;
    // content.content = "컨텐트입니다.";
    // // content.post = post;
    // await connection.manager.save(content);
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");
    const server = new GraphQLServer({
      typeDefs: ["src/graphql/schema.graphql"],
      resolvers: [movieResolver, movieLoveResolver],
    });
    server.start(({ port }) => {
      console.log("start Graphql-yoga server", port);
    });
  })
  .catch((error) => console.log(error));
