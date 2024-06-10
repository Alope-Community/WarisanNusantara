import Map from "../components/Event/Map";
import {
  IconCalendar,
  IconListBullets,
  IconLocation,
  IconMap,
  IconTicket,
} from "@irsyadadl/paranoid";
import Pagination from "../components/_global/pagination";
import { useEffect } from "react";

export default function Event() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-red-500 to-red-400 pt-36 pb-10 px-20 text-white">
        <h1 className="font-semibold text-3xl">RAGAM EVENT</h1>
      </section>
      <section className="mt-20 lg:px-20 px-10">
        <div className="flex gap-5 items-center mb-5 mt-20">
          <span className="bg-red-500 text-white w-[50px] h-[50px] flex items-center justify-center rounded-xl">
            <IconListBullets className="w-[30px] h-[30px]" />
          </span>
          <h3 className="text-2xl font-semibold">LIST EVENT</h3>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 items-center mt-10">
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
                {"INDONESIA DENGAN KEBERAGAMAN BUDAYA NUSANTARA YANG MENDUNIA"}
              </h2>
            </span>
            <p className="text-gray-800 mt-5 md:text-base text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis quasi tempore incidunt architecto maxime dolore quo?
              Nihil laborum saepe et, officia laboriosam accusantium dicta eius
              unde, eos, quisquam hic deserunt.
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
        <div className="grid lg:grid-cols-5 gap-10 items-center mt-10">
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
                {"INDONESIA DENGAN KEBERAGAMAN BUDAYA NUSANTARA YANG MENDUNIA"}
              </h2>
            </span>
            <p className="text-gray-800 mt-5 md:text-base text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis quasi tempore incidunt architecto maxime dolore quo?
              Nihil laborum saepe et, officia laboriosam accusantium dicta eius
              unde, eos, quisquam hic deserunt.
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

        <Pagination />
      </section>

      <section className="px-20">
        <div className="flex gap-5 items-center mb-5 mt-20">
          <span className="bg-red-500 text-white w-[50px] h-[50px] flex items-center justify-center rounded-xl">
            <IconMap className="w-[30px] h-[30px]" />
          </span>
          <h3 className="text-2xl font-semibold">PETA EVENT</h3>
        </div>
        <Map />
      </section>
    </>
  );
}
