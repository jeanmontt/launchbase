const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {
    return res.redirect("/instrutores");
});

routes.get("/instrutores", (req, res) => {
    return res.render("instructors/index");
});

routes.get("/membros", (req, res) => {
    return res.send("members");
});

module.exports = routes;