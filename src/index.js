import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

const usuarios = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send('OK');
});

server.post('/tweets', (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send('OK');
});

server.get('/tweets', (req, res) => {
    for (let i = 0; i < 10; i++) {
        res.send(tweets);
    }
});

server.listen(5000);