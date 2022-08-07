import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import connectDB from "./db.js";
import dotenv from "dotenv";
import { ApolloServer, gql } from "apollo-server";

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

// route handlers entrypoint for all routes
app.use("/api", routes);

// begin listening on given port
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(
    `The app is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
