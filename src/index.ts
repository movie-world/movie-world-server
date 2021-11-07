import "dotenv/config";
import { GraphQLServer } from "graphql-yoga";
import { ContextParameters } from "graphql-yoga/dist/types";
import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";
import movieLoveResolver from "./resolvers/movie-love-resolver";
import movieResolver from "./resolvers/movie-resolver";
const isProd = () => (process.env.NODE_ENV === "PROD" ? "./dist" : "src");
const connectionOptions: ConnectionOptions = {
  type: "mariadb",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: process.env.NODE_ENV === "PROD" ? false : true,
  entities: [`${isProd()}/entity/**/*.*`],
  migrations: [`${isProd()}/migration/**/*.*`],
  subscribers: [`${isProd()}/subscriber/**/*.*`],
  cli: {
    entitiesDir: `${isProd()}/entity`,
    migrationsDir: `${isProd()}/migration`,
    subscribersDir: `${isProd()}/subscriber`,
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
      typeDefs: [`${isProd()}/graphql/schema.graphql`],
      resolvers: [movieResolver, movieLoveResolver],
      context: (req: ContextParameters) => {
        const accessUrl =
          process.env.NODE_ENV === "PROD"
            ? [
                "https://movie-world-server.herokuapp.com",
                "https://movie-world.github.io",
              ]
            : ["http://localhost:4000"];
        if (!accessUrl.includes(String(req.request.headers.origin))) {
          throw new Error("접근권한이 없습니다.");
        }
      },
    });

    server.start(({ port }) => {
      console.log("start Graphql-yoga server", port);
    });
  })
  .catch((error) => console.log(error));
