const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("src/views", {
    express: server,
    autoescape: false
});

server.get("/", (req, res) => {
    return res.render("about");
});

server.get("/conteudos", (req, res) => {
    return res.render("contents");
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, () => {
    console.log("Server is running!");
});