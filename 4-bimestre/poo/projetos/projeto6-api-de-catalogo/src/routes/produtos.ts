import { Router } from "express";

const router = Router();

// Lista fixa inicial
let produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 350 },
  { id: 3, nome: "Monitor Full HD", preco: 900 },
];

// GET /produtos → lista todos
router.get("/", (req, res) => {
  res.json(produtos);
});

// GET /produtos/:id → retorna produto por ID
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  res.json(produto);
});

// POST /produtos → adiciona novo produto
router.post("/", (req, res) => {
  const novoProduto = req.body;
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

export default router;
