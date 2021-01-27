const express = require('express');
const teachers = require('./teachers');
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.redirect("/professores");
});

routes.get("/professores", (req, res) => {
  return res.render("teachers/index");
});

routes.post("/professores", teachers.post);

routes.get("/professores/novo", (req, res) => {
  return res.render("teachers/create");
});

routes.get("/professores/:id", teachers.show);

routes.get("/professores/:id/editar", teachers.edit);

routes.get("/alunos", (req, res) => {
  return res.send("students");
});

module.exports = routes; 