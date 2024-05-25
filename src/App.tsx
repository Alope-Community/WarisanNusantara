// import React from "react";

import Navbar from "./components/_global/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <header className="mt-20 relative grid grid-cols-2 pt-10 px-10 max-h-[700px] overflow-y-hidden after:absolute after:bg-gradient-to-t after:from-white after:to-white/10 after:w-full after:h-[130px] after:bottom-0">
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
        <div className="grid grid-cols-2 gap-5 rotate-3 -mt-20 overflow-hidden">
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
                src="https://i.pinimg.com/736x/b9/78/07/b978077a8ca10c45603baf9bd7581379.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="row-span-2 h-[500px] rounded-md overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/8f/47/ab/8f47abdb931c3b44f411c6bdf38dde00.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/*  */}
          <div className="animate-scroll-to-b">
            <div className="h-[240px] -mt-52 rounded-md overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/48/a3/c3/48a3c30b3d068b7ef86c32f19d5ead3b.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[240px] mt-5 rounded-md overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/fc/ce/06/fcce0689b975e499e970557f4596df58.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[240px] mt-5 rounded-md overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/32/d6/4e/32d64e9f4ab70f413914976e48f8ae81.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[240px] mt-5 rounded-md overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/45/1c/3a/451c3a2537616f5d5d06750972b5458e.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/*  */}

      <section className="mt-32 px-10">
        <div className="text-center mb-10">
          <p className="text-red-500">Indonesia Kaya</p>
          <h2 className="text-4xl font-semibold">Kekayaan Budaya Indonesia</h2>
          <p className="text-sm w-[50%] mx-auto text-gray-700 mt-3">
            Keragaman budaya Indonesia mencerminkan kekayaan dan keberagaman
            melibatkan warisan sejarah, tradisi, dan nilai-nilai yang tercermin
            dalam setiap lapisan masyarakat. Dengan lebih dari 300 suku dan
            bahasa yang berbeda, Indonesia menjadi tempat bagi beragam tradisi,
            tarian, musik, dan seni rupa yang memukau.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="rounded-md overflow-hidden h-[550px] relative p-5 bg-[url('https://warisannusantara.vercel.app/images/header/1.jpg')] bg-cover after:content-[''] after:absolute after:inset-0 after:bg-black/30">
            <div className="absolute z-10">
              <p className="text-sm text-red-500 font-semibold">Ragam</p>
              <p className="text-white text-2xl font-bold">Seni Tari</p>
            </div>
            <div className="absolute bottom-5 z-10 text-white w-[80%] text-sm">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam doloremque obcaecati,
              </p>
              <a
                href=""
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-400"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="rounded-md overflow-hidden h-[550px] relative p-5 bg-[url('https://warisannusantara.vercel.app/images/header/1.jpg')] bg-cover after:content-[''] after:absolute after:inset-0 after:bg-black/30">
            <div className="absolute z-10">
              <p className="text-sm text-red-500 font-semibold">Ragam</p>
              <p className="text-white text-2xl font-bold">Seni Tari</p>
            </div>
            <div className="absolute bottom-5 z-10 text-white w-[80%] text-sm">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam doloremque obcaecati,
              </p>
              <a
                href=""
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-400"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="rounded-md overflow-hidden h-[550px] relative p-5 bg-[url('https://warisannusantara.vercel.app/images/header/1.jpg')] bg-cover after:content-[''] after:absolute after:inset-0 after:bg-black/30">
            <div className="absolute z-10">
              <p className="text-sm text-red-500 font-semibold">Ragam</p>
              <p className="text-white text-2xl font-bold">Seni Tari</p>
            </div>
            <div className="absolute bottom-5 z-10 text-white w-[80%] text-sm">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam doloremque obcaecati,
              </p>
              <a
                href=""
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-400"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="rounded-md overflow-hidden h-[550px] relative p-5 bg-[url('https://warisannusantara.vercel.app/images/header/1.jpg')] bg-cover after:content-[''] after:absolute after:inset-0 after:bg-black/30">
            <div className="absolute z-10">
              <p className="text-sm text-red-500 font-semibold">Ragam</p>
              <p className="text-white text-2xl font-bold">Seni Tari</p>
            </div>
            <div className="absolute bottom-5 z-10 text-white w-[80%] text-sm">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam doloremque obcaecati,
              </p>
              <a
                href=""
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-400"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="bg-red-500 py-20 text-center mt-20">
        <p className="text-white font-semibold text-3xl">
          “Keberagaman suku dan budaya Indonesia ini menjadi kekayaan <br />{" "}
          besar bangsa sekaligus juga kekuatan besar, <br /> bukan menjadi
          kelemahan.”
        </p>
        <h4 className="font-semibold mt-10 text-xl text-white">Joko Widodo</h4>
        <small className="text-white">Presiden Republik Indonesia</small>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
