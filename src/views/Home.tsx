// import React from "react";
import { useState } from "react";
import {
  IconCalendar,
  IconEye,
  IconHeart,
  IconPaper,
  IconMessages,
  IconTicket,
  IconLocation,
} from "@irsyadadl/paranoid";

export default function Home() {
  const [tabActive, setTabActive] = useState("news");

  return (
    <>
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
          <div className="rounded-md overflow-hidden h-[550px] relative p-5 bg-[url('https://i.pinimg.com/736x/b9/78/07/b978077a8ca10c45603baf9bd7581379.jpg')] bg-cover after:content-[''] after:absolute after:inset-0 after:bg-black/30">
            <div className="absolute z-10">
              <p className="text-sm text-red-500 font-semibold">Ragam</p>
              <p className="text-white text-2xl font-bold">Tari Tradisional</p>
            </div>
            <div className="absolute bottom-5 z-10 text-white w-[80%] text-sm">
              <p className="mb-5">
                Seni tari Indonesia mencakup ekspresi budaya melalui gerakan,
                musik, dan kostum yang kaya dan beragam, dengan lebih dari 300
                jenis tarian tradisional dan daerah.
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
              <p className="text-white text-2xl font-bold">Upacara Adat</p>
            </div>
            <div className="absolute bottom-5 z-10 text-white w-[80%] text-sm">
              <p className="mb-5">
                Upacara adat Ritual turun-temurun untuk merayakan peristiwa
                penting seperti pernikahan, kematian, atau musim panen.
              </p>
              <a
                href=""
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-400"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="rounded-md overflow-hidden h-[550px] relative p-5 bg-[url('https://i.pinimg.com/564x/54/0b/c5/540bc5f4d5b4dce24ebc1b74a88b3ef8.jpg')] bg-cover after:content-[''] after:absolute after:inset-0 after:bg-black/30">
            <div className="absolute z-10">
              <p className="text-sm text-red-500 font-semibold">Ragam</p>
              <p className="text-white text-2xl font-bold">Seni Pertunjukan</p>
            </div>
            <div className="absolute bottom-5 z-10 text-white w-[80%] text-sm">
              <p className="mb-5">
                Seni pertunjukan Indonesia, termasuk wayang, lenong, ketoprak,
                dan masih banyak lagi, merefleksikan kekayaan budaya dengan
                beragamnya.
              </p>
              <a
                href=""
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-400"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="rounded-md overflow-hidden h-[550px] relative p-5 bg-[url('https://i.pinimg.com/564x/67/78/27/6778279febaa2c01b77a531128a9e1dd.jpg')] bg-cover after:content-[''] after:absolute after:inset-0 after:bg-black/30">
            <div className="absolute z-10">
              <p className="text-sm text-red-500 font-semibold">Ragam</p>
              <p className="text-white text-2xl font-bold">Kuliner Khas</p>
            </div>
            <div className="absolute bottom-5 z-10 text-white w-[80%] text-sm">
              <p className="mb-5">
                Kuliner Indonesia, kaya ragam dan cita rasa lezat, mencerminkan
                keanekaragaman budaya dan tradisi kuliner lokal.
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

      <section className="mb-20">
        <div className=" lg:px-20 md:px-10 px-5 mt-10">
          <button
            className={`rounded text-red-500 bg-gray-100 px-10 py-2 ${
              tabActive == "news" ? "border" : ""
            } border-red-500 inline-flex gap-5 mr-5`}
            onClick={() => {
              setTabActive("news");
            }}
          >
            <IconPaper />
            Berita
          </button>
          <button
            className={`rounded text-red-500 bg-gray-100 px-10 py-2 ${
              tabActive == "event" ? "border" : ""
            } border-red-500 inline-flex gap-5 mr-5`}
            onClick={() => {
              setTabActive("event");
            }}
          >
            <IconCalendar />
            Event
          </button>
        </div>

        {tabActive == "news" ? (
          <section>
            <div className="grid lg:grid-cols-5 gap-10 items-center lg:px-20 md:px-10 px-5 mt-10">
              <div className="h-[350px] w-full rounded-md overflow-hidden lg:col-span-2">
                <img
                  src="https://warisannusantara.vercel.app/images/header/3.jpg"
                  alt=""
                  className="object-cover h-full w-full"
                  data-aos-once="true"
                  data-aos="fade-left"
                />
              </div>
              <div
                className="lg:col-span-3"
                data-aos-once="true"
                data-aos="fade-right"
              >
                <h5 className="text-red-500 font-semibold md:mb-5 mb-3 md:text-base text-sm">
                  RAGAM BERITA
                </h5>
                <span>
                  <h2 className="font-bold md:text-3xl text-gray-800 text-xl">
                    {
                      "INDONESIA DENGAN KEBERAGAMAN BUDAYA NUSANTARA YANG MENDUNIA"
                    }
                  </h2>
                </span>
                <p className="text-gray-800 mt-5 md:text-base text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis quasi tempore incidunt architecto maxime dolore
                  quo? Nihil laborum saepe et, officia laboriosam accusantium
                  dicta eius unde, eos, quisquam hic deserunt.
                </p>
                <div className="flex gap-5 mt-10 text-gray-600 md:text-base text-sm">
                  <span className="flex gap-2 items-center">
                    <IconEye />
                    <small>2.000 views</small>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IconHeart />
                    <small>2.000 suka</small>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IconMessages />
                    <small>2.000 komentar</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-5 gap-10 items-center lg:px-20 md:px-10 px-5 mt-10">
              <div className="h-[350px] w-full rounded-md overflow-hidden lg:col-span-2">
                <img
                  src="https://warisannusantara.vercel.app/images/header/3.jpg"
                  alt=""
                  className="object-cover h-full w-full"
                  data-aos-once="true"
                  data-aos="fade-left"
                />
              </div>
              <div
                className="lg:col-span-3"
                data-aos-once="true"
                data-aos="fade-right"
              >
                <h5 className="text-red-500 font-semibold md:mb-5 mb-3 md:text-base text-sm">
                  RAGAM BERITA
                </h5>
                <span>
                  <h2 className="font-bold md:text-3xl text-gray-800 text-xl">
                    {
                      "INDONESIA DENGAN KEBERAGAMAN BUDAYA NUSANTARA YANG MENDUNIA"
                    }
                  </h2>
                </span>
                <p className="text-gray-800 mt-5 md:text-base text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis quasi tempore incidunt architecto maxime dolore
                  quo? Nihil laborum saepe et, officia laboriosam accusantium
                  dicta eius unde, eos, quisquam hic deserunt.
                </p>
                <div className="flex gap-5 mt-10 text-gray-600 md:text-base text-sm">
                  <span className="flex gap-2 items-center">
                    <IconEye />
                    <small>2.000 views</small>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IconHeart />
                    <small>2.000 suka</small>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IconMessages />
                    <small>2.000 komentar</small>
                  </span>
                </div>

                {/* <div className="lg:flex hidden gap-5 md:justify-end justify-center mt-5">
              <button className="flex items-center justify-center rounded-full w-[30px] h-[30px] dark:hover:bg-gray-800 ">
                <IconChevronLeft />
              </button>
              <button className="flex items-center justify-center rounded-full w-[30px] h-[30px] dark:hover:bg-gray-800 ">
                <IconChevronRight />
              </button>
            </div> */}
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="grid lg:grid-cols-5 gap-10 items-center lg:px-20 md:px-10 px-5 mt-10">
              <div className="h-[350px] w-full rounded-md overflow-hidden lg:col-span-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63368.913786928504!2d108.4005254933701!3d-6.943412765018405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1631a2e8c157%3A0x4170001fab845472!2sKec.%20Cigugur%2C%20Kabupaten%20Kuningan%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1717932215334!5m2!1sid!2sid"
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div
                className="lg:col-span-3"
                data-aos-once="true"
                data-aos="fade-right"
              >
                <h5 className="text-red-500 font-semibold md:mb-5 mb-3 md:text-base text-sm">
                  RAGAM EVENT
                </h5>
                <span>
                  <h2 className="font-bold md:text-3xl text-gray-800 text-xl">
                    UPACARA SEREN TAUN
                  </h2>
                </span>
                <p className="text-gray-800 mt-5 md:text-base text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis quasi tempore incidunt architecto maxime dolore
                  quo? Nihil laborum saepe et, officia laboriosam accusantium
                  dicta eius unde, eos, quisquam hic deserunt.
                </p>
                <div className="flex gap-5 mt-10 text-gray-600 md:text-base text-sm">
                  <span className="flex gap-2 items-center">
                    <IconTicket />
                    <small>Gratis</small>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IconCalendar />
                    <small>12 Des 2024</small>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IconLocation />
                    <small>Kuningan</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-5 gap-10 items-center lg:px-20 md:px-10 px-5 mt-10">
              <div className="h-[350px] w-full rounded-md overflow-hidden lg:col-span-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63368.913786928504!2d108.4005254933701!3d-6.943412765018405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1631a2e8c157%3A0x4170001fab845472!2sKec.%20Cigugur%2C%20Kabupaten%20Kuningan%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1717932215334!5m2!1sid!2sid"
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div
                className="lg:col-span-3"
                data-aos-once="true"
                data-aos="fade-right"
              >
                <h5 className="text-red-500 font-semibold md:mb-5 mb-3 md:text-base text-sm">
                  RAGAM EVENT
                </h5>
                <span>
                  <h2 className="font-bold md:text-3xl text-gray-800 text-xl">
                    UPACARA SEREN TAUN
                  </h2>
                </span>
                <p className="text-gray-800 mt-5 md:text-base text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis quasi tempore incidunt architecto maxime dolore
                  quo? Nihil laborum saepe et, officia laboriosam accusantium
                  dicta eius unde, eos, quisquam hic deserunt.
                </p>
                <div className="flex gap-5 mt-10 text-gray-600 md:text-base text-sm">
                  <span className="flex gap-2 items-center">
                    <IconTicket />
                    <small>Gratis</small>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IconCalendar />
                    <small>12 Des 2024</small>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IconLocation />
                    <small>Kuningan</small>
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="flex justify-center mt-16">
          <a
            href=""
            className="bg-red-500 text-white px-10 py-3 rounded-full hover:bg-red-400"
          >
            Show More
          </a>
        </div>
      </section>
    </>
  );
}
