import { navLists } from "../../constants";
import { appleImg, bagImg, searchImg } from "../../utils/index";
const NavBar = () => {
  return (
    <header className=" w-full py-12 sm:px-5 px-2 flex justify-between items-center">
      <nav className=" flex w-full">
        <img src={appleImg} alt="Apple logo" height={22} width={20} />
        <div className=" space-x-4 justify-center flex flex-1 max-sm:hidden text-lg cursor-pointer text-gray">
          {navLists.map((nav) => (
            <a key={nav} href="#" className="hover:text-white transition-all">
              {nav}
            </a>
          ))}
        </div>
        <div className=" flex items-baseline space-x-4 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={22} height={22} />
          <img src={bagImg} alt="search" width={22} height={22} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
