import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-[#161410]">
      <div className="mx-auto flex w-full max-w-184.25 flex-row items-center justify-between p-3 md:p-0">
        <img src="/logo (1).svg" alt="" />

        <Link to={"/login"}>
          <div className="flex h-8.75 w-32.5 cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC] text-center text-black">
            Entrar
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
