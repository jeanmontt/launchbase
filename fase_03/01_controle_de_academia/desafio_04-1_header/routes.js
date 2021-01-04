const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {
    return res.redirect("/professores");
});

routes.get("/professores", (req, res) => {
    return res.render("teachers/index");
});

routes.get("/alunos", (req, res) => {
    return res.send("students");
});

module.exports = routes;