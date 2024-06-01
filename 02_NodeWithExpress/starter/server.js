import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { router as allTodos } from "./routes/alltodos.js"
import { router as addTodo } from "./routes/addTodo.js"
import { router as singleTodo } from "./routes/singleTodo.js"

const app = express();

dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;
const uri = process.env.DB_URI;

const main = async() => {
    console.log(`Connecting to the database at ${uri}...`);
    await mongoose.connect(uri);
}

// app.get(`/`, (req, res) => res.send(`Hello World`));
app.use(express.json());
app.use("/", allTodos);
app.use("/add", addTodo);
app.use("/todo", singleTodo);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
})

main().catch(e => {
    console.error(e.message);
})