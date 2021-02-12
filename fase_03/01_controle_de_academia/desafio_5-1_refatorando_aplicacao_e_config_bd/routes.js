const express = require('express');
const teachers = require('./controllers/teachers');
const students = require('./controllers/students');
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.redirect("/professores");
});

routes.get("/professores", teachers.index);
routes.get("/professores/novo", teachers.create);
routes.get("/professores/:id", teachers.show);
routes.get("/professores/:id/editar", teachers.edit);
routes.post("/professores", teachers.post);
routes.put("/professores", teachers.put);
routes.delete("/professores", teachers.delete);

routes.get("/alunos", students.index);
routes.get("/alunos/novo", students.create);
routes.get("/alunos/:id", students.show);
routes.get("/alunos/:id/editar", students.edit);
routes.post("/alunos", students.post);
routes.put("/alunos", students.put);
routes.delete("/alunos", students.delete);

module.exports = routes; 