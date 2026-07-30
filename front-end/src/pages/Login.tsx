import { useState } from "react";
import Input from "../components/Imput";
import { Link } from "react-router";
import Buttom from "../components/Buttom";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/" viewTransition>
          <img src="public/logo (1).svg" alt="" className="mb-4 h-21.5 w-25" />
        </Link>

        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Buttom title="Login" variant="default" />

        <Link to={"/register"} className="w-full" viewTransition>
          <Buttom title="Não tenho uma conta" variant="Outline" />
        </Link>
      </div>
    </form>
  );
};

export default login;
