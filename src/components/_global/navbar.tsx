import { IconSun } from "@irsyadadl/paranoid";

export default function Navbar() {
  return (
    <nav className="flex top-0 justify-between items-center bg-white text-[#111] px-10 py-7 shadow fixed left-0 right-0 z-30">
      <div>
        <h2 className="text-[#111] font-semibold text-xl">WARISAN NUSANTARA</h2>
      </div>
      <div className="flex items-center gap-5">
        <ul className="flex gap-10 border-r-2 border-[#111] pr-6">
          <li>
            <a
              href=""
              className="text-red-500 relative font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[3px] after:bg-red-500 after:rounded-full"
            >
              Beranda
            </a>
          </li>
          <li>
            <a href="">Berita</a>
          </li>
          <li>
            <a href="">Event</a>
          </li>
          <li>
            <a href="">Peta Interaktif</a>
          </li>
        </ul>
        <div className="shadow-md flex items-center justify-center rounded-full w-[40px] h-[40px]">
          <IconSun />
        </div>
      </div>
    </nav>
  );
}
