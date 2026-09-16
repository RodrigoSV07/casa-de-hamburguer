import express, { type Request, type Response } from "express";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connection();

app.post("/login", async (req: Request, res: Response) => {
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

app.post("/register", async (req: Request, res:Response) => {

  try {
    const {name, email, password, cep} = req.body;

    if (!name || !email || !password || !cep) {
      res.status(400).json({message:"Todas as informações são obrigatórias"});
      return;
    }

    const user = await prisma.user.findFirst({
      where:{email: email},
    })

    if (user?.email) {
      res.status(409).json({message: "E-mail já cadastrado"});
      return;
    }

    const newUser = await prisma.user.create({
      data: {name: name, email: email, password: password, cep: cep},
    });

    res.status(201).json(newUser);

  } catch (error) {
    res.status(500).json({message:"Erro no servidor"})
    return;
  }
})

app.listen(3000, () => {
  console.log("server rodando na porta 3000-1");
});
//# sourceMappingURL=index.js.map
