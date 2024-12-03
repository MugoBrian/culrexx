import { FaGithub } from "react-icons/fa6";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="mt-8 flex sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <div>
        <img
          src={logo}
          className="w-24 h-12 sm:w-32 sm:h-16"
          alt="Culrexx logo"
        />
      </div>
      <div>
        <a href="https://github.com/MugoBrian/culrexx" target="_blank">
          <FaGithub className="h-8 w-8 sm:h-9 sm:w-9" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
