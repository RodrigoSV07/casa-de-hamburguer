import { useState } from "react";
import Input from "../components/Imput";
import { Link } from "react-router";
import Buttom from "../components/Buttom";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(nome);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(cep);
  }

  return (
    <form
      className="flex h-screen w-full items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="public/logo (1).svg" alt="" className="mb-4 h-21.5 w-25" />
        </Link>
        <Input
          type="name"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <Input
          type="Email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Input
          type="text"
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
        />
        <Buttom title={"Criar conta"} variant={"default"} />
        <Link to={"/login"} className="w-full" viewTransition>
          <Buttom title="Já tenho uma conta" variant="Outline" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
