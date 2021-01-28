const express = require('express');
const teachers = require('./teachers');
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.redirect("/professores");
});

routes.get("/professores", teachers.index);

routes.get("/professores/novo", (req, res) => {
  return res.render("teachers/create");
});

routes.get("/professores/:id", teachers.show);

routes.get("/professores/:id/editar", teachers.edit);

routes.post("/professores", teachers.post);

routes.put("/professores", teachers.put);

routes.delete("/professores", teachers.delete);

routes.get("/alunos", (req, res) => {
  return res.send("students");
});

module.exports = routes; 