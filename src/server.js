import http from "http";
import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import connectDB from "./db.js";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { Schema } from "./graphql/schema.js";
import { Resolvers } from "./graphql/resolvers.js";

// sets environment variables based on centents of .env file
dotenv.config();

// db
connectDB();

// start server instance
const app = express();

/*  
// uncomment this line if running behind a proxy 
// the x-forwarded-for header in nginx config must be set
// node will set req.ip to real remote address
app.set('trust proxy', true);
*/

// cross origin request middleware
app.use(cors());
// dev middleware
app.use(morgan("dev"));
// url middleware
app.use(json());
// route handlers
app.use("/api", routes);

// // begin listening on given port
const PORT = process.env.PORT || 5000;

async function startApolloServer() {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: Schema,
    resolvers: Resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startApolloServer();
