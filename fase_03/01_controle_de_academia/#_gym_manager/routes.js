const express = require('express');
const instructors = require("./instructors");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.redirect("/instrutores");
});

routes.get("/instrutores", (req, res) => {
  return res.render("instructors/index");
});

routes.post("/instrutores", instructors.post);

routes.get("/instrutores/novo", (req, res) => {
  return res.render("instructors/create");
});

routes.get("/membros", (req, res) => {
  return res.send("members");
});

module.exports = routes;