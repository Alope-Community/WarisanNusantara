// import React from "react";

import Navbar from "./components/_global/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <header className="relative grid grid-cols-2 pt-10 px-10 max-h-[700px] overflow-y-hidden after:absolute after:bg-gradient-to-t after:from-white after:to-white/10 after:w-full after:h-[130px] after:bottom-0">
        <div className="h-full flex-col justify-center items-center pt-20">
          <h4 className="text-2xl font-semibold text-red-500 mb-5">
            Indonesia Kaya
          </h4>
          <h1 className="font-semibold text-[#111] text-5xl leading-[60px] mb-16">
            Telusuri Pesona dan <br /> Keberagaman Budaya Indonesia <br /> yang
            Memukau
          </h1>
          <a href="" className="bg-red-500 px-10 py-5 rounded-full text-white">
            Jelajahi Sekarang
          </a>
        </div>
        <div className="grid grid-cols-2 gap-5 rotate-3 -mt-20">
          <div className="grid grid-cols-1 gap-5 animate-scroll-to-t">
            <div className="row-span-2 h-[500px] rounded-md overflow-hidden">
              <img
                src="https://warisannusantara.vercel.app/images/header/1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="row-span-2 h-[500px] rounded-md overflow-hidden">
              <img
                src="https://warisannusantara.vercel.app/images/header/1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="row-span-2 h-[500px] rounded-md overflow-hidden">
              <img
                src="https://warisannusantara.vercel.app/images/header/1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/*  */}
          <div className="animate-scroll-to-b">
            <div className="h-[240px] -mt-52 rounded-md overflow-hidden">
              <img
                src="https://warisannusantara.vercel.app/images/header/1.jpg"
                alt=""
              />
            </div>
            <div className="h-[240px] mt-5 rounded-md overflow-hidden">
              <img
                src="https://warisannusantara.vercel.app/images/header/1.jpg"
                alt=""
              />
            </div>
            <div className="h-[240px] mt-5 rounded-md overflow-hidden">
              <img
                src="https://warisannusantara.vercel.app/images/header/1.jpg"
                alt=""
              />
            </div>
            <div className="h-[240px] mt-5 rounded-md overflow-hidden">
              <img
                src="https://warisannusantara.vercel.app/images/header/1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
