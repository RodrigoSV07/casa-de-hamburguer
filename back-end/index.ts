import express from "express";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connection();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const users = await prisma.user.findFirst({
      where: { email: email, password: password },
    });

    if (!email || !password) {
      res.status(400).json({ message: "E-mail e senha obrigatória" });
      return;
    }

    if (!users) {
      res.status(404).json({ message: "usuário não encontrado" });
      return;
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});

app.listen(3000, () => {
  console.log("server rodando na porta 3000-1");
});
//# sourceMappingURL=index.js.map
