import SearchingFun from "./SearchingFun";
import { MenuIcon } from "../icons/Icons";
import { Link } from "react-router-dom";
const Header = () => {
  const toggleMenu = () => {
    document.querySelector(".menu").classList.toggle("translate-x-48");
  };

  return (
    <div className="w-full fixed z-10">
      <div className="flex justify-between items-center py-3 px-3 md:px-40 shadow shadow-4  w-full text-white bg-[#242423] shadow-md shadow-stone-700 h-[60px] z-10">
        <div className="flex">
          <Link to="/">
            <h1 className="text-2xl text-white">Meme generator</h1>
          </Link>
          <ul className="flex items-center ml-10 md:flex hidden text-white">
            <Link to="/">
              <li className="ml-5 cursor-pointer">Home</li>
            </Link>
            <Link to="/about">
              <li className="ml-10 cursor-pointer">Guide</li>
            </Link>
          </ul>
        </div>
        <div>
          <SearchingFun />
        </div>
        <MenuIcon
          onClick={toggleMenu}
          className="w-[35px] cursor-pointer md:hidden ml-5 absolute right-2"
        />
      </div>
      <div className="flex justify-end w-full">
        <ul className="bg-stone-900 translate-x-48 text-white w-1/4  md:hidden duration-100 ease-linear menu">
          <Link to="/">
            <li onClick={toggleMenu} className="p-5">Home</li>
          </Link>
          <Link to="/about">
          <li onClick={toggleMenu} className="p-5">About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
