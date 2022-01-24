import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());

const usuarios = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send(usuario);
});

server.listen(5000);