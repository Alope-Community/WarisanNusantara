import Navbar from "./components/_global/navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Berita from "./views/Berita";
import Event from "./views/Event";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Berita />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>

      <footer className="bg-gray-900 lg:px-20 md:px-10 px-5 pt-20 pb-5 grid md:grid-cols-5 grid-cols-1 text-white gap-20">
        <div className="md:col-span-2">
          <h3 className="text-white text-xl font-semibold">
            WARISAN NUSANTARA
          </h3>
          <p className="text-gray-100 text-sm mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
            recusandae perspiciatis saepe neque exercitationem dolorum ipsa
            porro nostrum dignissimos, itaque quisquam consequatur expedita quo
            autem tenetur, excepturi distinctio sequi deleniti?
          </p>
        </div>
        <div className="flex gap-20 md:col-span-3">
          <div>
            <h4 className="font-semibold text-xl">Navigation</h4>
            <ul className="mt-3">
              <li>Beranda</li>
              <li>Berita</li>
              <li>Event</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xl">Social Media</h4>
            <ul className="mt-3">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-5">
          <hr />
          <p className="mt-5 text-sm">Copyright &copy; 2024 by ALOPE</p>
        </div>
      </footer>
    </>
  );
}
