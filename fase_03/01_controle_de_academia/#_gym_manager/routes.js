const express = require('express');
const instructors = require("./instructors");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.redirect("/instrutores");
});

routes.get("/instrutores", instructors.index);

routes.get("/instrutores/novo", (req, res) => {
  return res.render("instructors/create");
});

routes.get("/instrutores/:id", instructors.show);

routes.get("/instrutores/:id/editar", instructors.edit);

routes.post("/instrutores", instructors.post);

routes.put("/instrutores", instructors.put);

routes.delete("/instrutores", instructors.delete);

routes.get("/membros", (req, res) => {
  return res.send("members");
});

module.exports = routes;