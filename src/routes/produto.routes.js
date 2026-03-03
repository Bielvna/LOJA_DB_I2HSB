import produtoController from "../controllers/produto.controller.js";
import categoriaController from "../controllers/categoria.controller.js";
import uploadImage from "../middlewares/uploadImage.middleware.js";
import { Router } from "express";

const routes = Router();

routes.post('/produtos/imagens', uploadImage, produtoController.uploadArquivo);

routes.post('/produto', produtoController.cadastrarProduto);
routes.get('/produto', produtoController.listarTodos);

routes.post('/categoria', categoriaController.cadastrarCategoria);
routes.get('/categoria', categoriaController.listarTodas);

export default routes;