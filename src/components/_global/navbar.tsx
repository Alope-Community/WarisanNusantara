import { IconBarsThree, IconSun } from "@irsyadadl/paranoid";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex w-full top-0 justify-between items-center bg-white text-[#111] md:px-10 px-5 md:py-7 py-4 shadow fixed left-0 right-0 z-30">
      <div>
        <h2 className="text-[#111] font-semibold md:text-xl text-base">
          WARISAN NUSANTARA
        </h2>
      </div>
      <div className="flex items-center gap-5">
        <ul className="lg:flex hidden gap-10 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 relative font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[3px] after:bg-red-500 after:rounded-full"
                  : "relative font-semibold"
              }
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 relative font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[3px] after:bg-red-500 after:rounded-full"
                  : "relative font-semibold"
              }
            >
              Berita
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 relative font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[3px] after:bg-red-500 after:rounded-full"
                  : "relative font-semibold"
              }
            >
              Event
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden block">
          <button className="flex items-center justify-center w-[40px] h-[40px]">
            <IconBarsThree />
          </button>
        </div>
        <div className="border-l-2 border-[#111] pl-6 md:block hidden">
          <button className="shadow-md flex items-center justify-center rounded-full w-[40px] h-[40px]">
            <IconSun />
          </button>
        </div>
      </div>
    </nav>
  );
}
