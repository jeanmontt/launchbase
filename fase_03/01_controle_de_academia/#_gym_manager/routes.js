const express = require('express');
const instructors = require("./instructors");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.redirect("/instrutores");
});

routes.get("/instrutores", (req, res) => {
  return res.render("instructors/index");
});

routes.get("/instrutores/novo", (req, res) => {
  return res.render("instructors/create");
});

routes.get("/instrutores/:id", instructors.show);

routes.get("/instrutores/:id/editar", (req, res) => {
  return res.render("instructors/edit");
});

routes.post("/instrutores", instructors.post);

routes.get("/membros", (req, res) => {
  return res.send("members");
});

module.exports = routes;