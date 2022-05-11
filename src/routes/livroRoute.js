import express from "express";
import livroController from "../controllers/livroController.js";

const router = express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros", livroController.listarLivroPorEditora)
    .get("/livros/:id", livroController.listarLivroPorID)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizarLivro)
    .delete("/livros/:id", livroController.deletarLivro)

export default router;