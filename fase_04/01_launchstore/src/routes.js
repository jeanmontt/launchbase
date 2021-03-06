const express = require('express');
const multer = require('./app/middlewares/multer');

const ProductController = require('./app/controllers/ProductController');

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.render("layout.njk");
});

routes.get("/produtos/novo", ProductController.create);
routes.get("/produtos/:id", ProductController.show);
routes.get("/produtos/:id/editar", ProductController.edit);

routes.post("/produtos", multer.array("photos", 6), ProductController.post);
routes.put("/produtos", multer.array("photos", 6), ProductController.put);
routes.delete("/produtos", ProductController.delete);

//Alias
routes.get("/anuncios/novo", (req, res) => {
  return res.redirect("/produtos/novo");
});

module.exports = routes;