import dotenv from "dotenv";
import express from "express";

const app = express();

dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;

console.log(port, host);

app.get(`/`, (req, res) => res.send(`Hello World`));

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
})