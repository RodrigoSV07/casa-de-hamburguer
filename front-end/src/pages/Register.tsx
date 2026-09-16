import { useState } from "react";
import Input from "../components/Imput";
import { Link } from "react-router";
import Buttom from "../components/Buttom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!name || !email || !password || !cep) {
        alert("Todas as informações são obrigatórias");
        return;
      }

      if (password !== confirmPassword) {
        setError("As senhas não conferem");
        return;
      }

      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, cep }),
      });

      switch (response.status) {
        case 409:
          setError("Email já cadastrado");
          break;
        case 400:
          setError("Todas as informações são obrigatórias");
          break;
        case 201:
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setCep("");
          setError("");
          break;
        case 500:
          setError("Tente novamente mais tarde.");
          break;
        default:
          setError("");
          break;
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <form
      className="flex h-screen w-full items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/">
          <img
            src="public/logo (1).svg"
            alt=""
            className="mx-auto mb-4 h-21.5 w-25"
          />
        </Link>
        <Input
          type="name"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <Input
          type="Email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Input
          type="password"
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />

        <Input
          type="text"
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
          value={cep}
        />

        <p className="font-bold text-red-500">{error}</p>

        <div className="mt-3 flex w-full flex-col gap-2">
          <Buttom title={"Criar conta"} variant={"default"} type="submit" />

          <Link to={"/login"} className="w-full" viewTransition>
            <Buttom title="Já tenho uma conta" variant="Outline" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
