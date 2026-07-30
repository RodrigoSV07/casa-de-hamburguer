import express from "express";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connection();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const users = await prisma.user.findFirst({
    where: { email: email, password: password },
  });
  res.json(users);
});

app.listen(3000, () => {
  console.log("server rodando na porta 3000-1");
});
//# sourceMappingURL=index.js.map
