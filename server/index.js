import express from "express";
import { config } from "dotenv";
import dbconnection from "./db/connection.js";
import router from "./routes/user_route.js";
import authrouter from "./routes/auth_route.js";
import cors from "cors";
config();

const app = express();
app.use(express.json());
const port = process.env.port || 8000;

app.use(cors());
app.use("/api/user", router);
app.use("/api/signup", authrouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

dbconnection();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
