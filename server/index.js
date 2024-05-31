import express from "express";
import { config } from "dotenv";
import dbconnection from "./db/connection.js";

config();

const app = express();
const port = process.env.port || 8000;

app.get("/", (req, res) => {
  res.send("Hello");
});

dbconnection();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
