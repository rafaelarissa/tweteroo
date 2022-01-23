import express from "express";
import cors from "cors";

const server = express();
let username;
let avatar;
let tweet;

server.get('/', (req, res) => {
    res.send('Hello world');
});

server.listen(5000);