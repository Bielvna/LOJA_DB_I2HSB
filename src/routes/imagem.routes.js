import produtoController from "../controllers/produto.controller.js";
import uploadImage from "../middlewares/uploadImage.middleware.js";
import uploadFile from "../middlewares/uploadDocuments.middleware.js";
import { Router } from "express";

const imagemRoutes = Router();

imagemRoutes.post('/produtos/imagens', uploadImage, produtoController.upload);
imagemRoutes.post('/produtos/docs', uploadFile, produtoController.upload);

export default imagemRoutes;