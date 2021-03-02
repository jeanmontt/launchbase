const express = require('express');
const ProductController = require('./app/controllers/ProductController');

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.render("layout.njk");
});

routes.get("/produtos/novo", ProductController.create);
routes.get("/produtos/:id/editar", ProductController.edit);

routes.post("/produtos", ProductController.post);
routes.put("/produtos", ProductController.put);
routes.delete("/produtos", ProductController.delete);

//Alias
routes.get("/anuncios/novo", (req, res) => {
  return res.redirect("/produtos/novo");
});

module.exports = routes;