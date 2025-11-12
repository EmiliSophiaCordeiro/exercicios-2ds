import { Router } from "express";
import produtosRouter from "./produtos";

const router = Router();

// rota de teste
router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

// rota inicial
router.get("/", (req, res) => {
  res.json({ nome: "Emili Sophia", idade: 18 });
});

// rotas de produtos
router.use("/produtos", produtosRouter);

export default router;
