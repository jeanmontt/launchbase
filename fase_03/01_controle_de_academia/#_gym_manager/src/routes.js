const express = require('express');
const instructors = require("./app/controllers/instructors");
const members = require("./app/controllers/members")
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.redirect("/instrutores");
});

//Instructors
routes.get("/instrutores", instructors.index);
routes.get("/instrutores/novo", instructors.create);
routes.get("/instrutores/:id", instructors.show);
routes.get("/instrutores/:id/editar", instructors.edit);
routes.post("/instrutores", instructors.post);
routes.put("/instrutores", instructors.put);
routes.delete("/instrutores", instructors.delete);

//Members
routes.get("/membros", members.index);
routes.get("/membros/novo", members.create);
routes.get("/membros/:id", members.show);
routes.get("/membros/:id/editar", members.edit);
routes.post("/membros", members.post);
routes.put("/membros", members.put);
routes.delete("/membros", members.delete);

module.exports = routes;