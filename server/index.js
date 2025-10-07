
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/api/planos", (_req, res)=>{
  res.json([
    { id: 1, nome: "Starter", preco: "R$ 0", desc: "Para explorar recursos básicos." },
    { id: 2, nome: "Pro", preco: "R$ 29/mês", desc: "Para comunidades ativas." },
    { id: 3, nome: "Enterprise", preco: "Fale conosco", desc: "Soluções personalizadas e SLA." },
  ]);
});

app.get("/api/clientes", (_req, res)=>{
  res.json([
    { id:1, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+A"},
    { id:2, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+B"},
    { id:3, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+C"},
    { id:4, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+D"},
    { id:5, logo:"https://dummyimage.com/140x40/ffffff/000000&text=Company+E"},
  ]);
});

app.post("/api/contato", (req, res)=>{
  // neste exemplo apenas retornamos sucesso
  console.log("Contato recebido:", req.body);
  res.json({ ok: true });
});

app.listen(PORT, ()=>{
  console.log(`API ouvindo em http://localhost:${PORT}`);
});
