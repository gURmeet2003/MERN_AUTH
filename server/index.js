import express from "express";
import { config } from "dotenv";
import dbconnection from "./db/connection.js";
import router from "./routes/user_route.js";
import authrouter from "./routes/auth_route.js";
config();

const app = express();
app.use(express.json());
const port = process.env.port || 8000;

app.use("/api/user", router);
app.use("/api/signup", authrouter);

dbconnection();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
