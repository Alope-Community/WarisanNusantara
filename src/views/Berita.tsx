import {
  IconCalendar,
  IconChevronRight,
  IconDashboard,
  IconEnvelope,
  IconMapFill,
} from "@irsyadadl/paranoid";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Berita() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="mt-10 mx-auto grid lg:grid-cols-4 gap-10 pt-20 lg:px-20 md:px-5 px-3">
        <div
          className="lg:col-span-3 lg:h-[600px] md:h-[400px] h-[300px] bg-cover relative z-10 flex items-end md:p-10 p-4 after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:-z-10 bg-bottom rounded overflow-hidden"
          style={{
            backgroundImage:
              "url(" +
              "https://warisannusantara.vercel.app/images/news/serenTaun.jpg" +
              ")",
          }}
        >
          <div className="w-[80%]">
            <h6 className="text-red-500 md:mb-3 mb-1 font-semibold md:text-base text-sm">
              UPACARA
            </h6>
            <Link to={"/Berita/read"}>
              <h2 className="lg:text-3xl md:text-2xl font-bold text-white ">
                UPACARA SEREN TAUN DI CIGUGUR UNTUK MENSYUKURI HASIL PANEN
              </h2>
            </Link>
            <p className="text-gray-200 mt-3 text-sm lg:block hidden">
              Seren Taun adalah upacara adat panen padi masyarakat Sunda yang
              dilakukan setiap tahun. Upacara ini berlangsung khidmat dan
              semarak di berbagai desa adat Sunda. Upacara adat sebagai syukuran
              masyarakat agraris.
            </p>
          </div>
        </div>
        <div className="md:grid hidden lg:grid-cols-1 grid-cols-2 lg:gap-0 gap-10">
          <div>
            <div className="lg:h-[250px] h-[230px] after:rounded relative after:ontent-[''] after:bg-black/40 after:absolute after:inset-0">
              <img
                src="https://warisannusantara.vercel.app/images/news/serenTaun.jpg"
                className="w-full lg:h-[250px] h-[230px] rounded object-cover"
              />
            </div>
          </div>
          {/* <br /> */}
          <div>
            <div className="lg:my-5 my-3">
              <small className="text-red-500">UPACARA</small>
              <Link to={"/news/read"}>
                <h5 className="font-semibold lg:text-2xl text-base text-gray-800">
                  Peringati 32 Tahun Candi Borobudur
                </h5>
              </Link>
            </div>
            <div className="lg:my-5 my-3">
              <small className="text-indigo-500">FUN EVENT</small>
              <Link to={"/news/read"}>
                <h5 className="font-semibold lg:text-2xl tex-base text-gray-800">
                  2.000 Pelari Meriahkan "Borobudur Fun Run"
                </h5>
              </Link>
            </div>
            <div className="lg:my-5 my-3">
              <small className="text-yellow-500 uppercase">
                Indonesia Dimata Dunia
              </small>
              <Link to={"/news/read"}>
                <h5 className="font-semibold lg:text-2xl tex-base text-gray-800">
                  Candi Borobudur Situs Warisan Dunia
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto mt-20 lg:px-20 md:px-10 px-3">
        <section>
          <div className="grid lg:grid-cols-4 md:gap-10">
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-5">
                <span className="flex gap-2 items-center text-red-500 text-xl font-semibold">
                  <IconDashboard />
                  <h2>TRENDING</h2>
                </span>
                <span className="flex items-center gap-2 text-sm hover:underline">
                  <a href="#">View More</a>
                  <IconChevronRight />
                </span>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                <div>
                  <img
                    src="https://warisannusantara.vercel.app/images/news/unesco.jpeg"
                    alt="subheader1"
                    className="h-[200px] object-cover"
                  />
                  <Link to={"/news/read"}>
                    <h3 className="font-bold mt-2">
                      Bahasa Indonesia Menjadi Bahasa Resmi ke-10 di UNIESCO
                    </h3>
                  </Link>
                </div>
                <div className="md:block hidden">
                  <img
                    src="https://warisannusantara.vercel.app/images/news/unesco.jpeg"
                    alt="subheader2"
                    className="h-[200px] object-cover"
                  />
                  <Link to={"/news/read"}>
                    <h3 className="font-bold mt-2">
                      Pertunjukkan Budaya Indonesia Pukau Warga Turki
                    </h3>
                  </Link>
                </div>
                <div className="lg:block hidden">
                  <img
                    src="https://warisannusantara.vercel.app/images/news/unesco.jpeg"
                    alt="subheader3"
                    className="h-[200px] object-cover"
                  />
                  <Link to={"/news/read"}>
                    <h3 className="font-bold mt-2">
                      Candi Borobudur Situs Warisan Dunia
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border p-7 relative md:block hidden">
              <div className="bg-red-500 w-[50px] h-[50px] text-white flex items-center justify-center absolute top-0 left-[20px] lg:-translate-y-1/2">
                <IconEnvelope />
              </div>
              <h3 className="mb-5 lg:mt-6 mt-12">
                Berlangganan untuk mendapatkan notifikasi saat ada berita baru!
              </h3>
              <input
                type="text"
                className="border w-full py-3 px-3"
                placeholder="Email Address"
              />
              <Link to={"/subscription"}>
                <button className="bg-red-500 px-10 py-2 rounded-full text-white mt-5 text-sm">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        </section>
        <hr className="my-10 " />
        <section className="grid lg:grid-cols-4 gap-20 mt-10">
          <div className="lg:col-span-3 md:w-auto w-[95%]">
            <div className="md:grid md:grid-cols-5 items-center lg:gap-10 md:gap-5 md:mb-5 mb-16">
              <div className="md:col-span-2">
                <img
                  src="https://warisannusantara.vercel.app/images/news/serenTaun.jpg"
                  className="w-full h-[250px] rounded object-cover"
                />
              </div>
              <div className="md:col-span-3">
                <small className="text-yellow-500 font-semibold">
                  INDONESIA DI MATA DUNIA
                </small>

                <Link to={"/news/read"}>
                  <h3 className="text-xl font-bold mb-3">
                    Pertunjukkan Budaya Indonesia Pukau Warga Turki{" "}
                  </h3>
                </Link>
                <p className="text-gray-700 lg:text-base md:text-sm text-[12px]">
                  Acara yang dimulai pada jam 6 sore hingga 10 malam waktu Turki
                  menyita perhatian ratusan penonton dari berbagai kalangan,
                  termasuk dosen-dosen dari Sakarya University, mahasiswa Turki,
                  mahasiswa Indonesia, dan sejumlah tamu undangan.
                </p>

                <div className="mt-5 md:flex gap-10">
                  <p className="flex md:mb-0 mb-2 md:text-base text-[12px] gap-2 text-sm text-gray-600 items-center">
                    <IconMapFill />
                    <span>Sakarya University, Turki</span>
                  </p>
                  <p className="flex gap-2 text-sm text-gray-600 items-center">
                    <IconCalendar />
                    <span>17 Oktober 2023</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-5 items-center lg:gap-10 md:gap-5 md:mb-5 mb-16">
              <div className="md:col-span-2">
                <img
                  src="https://warisannusantara.vercel.app/images/news/serenTaun.jpg"
                  className="w-full h-[250px] rounded object-cover"
                />
              </div>
              <div className="md:col-span-3">
                <small className="text-emerald-500 font-semibold uppercase">
                  Musik dan Lagu
                </small>
                <Link to={"/news/read"}>
                  <h3 className="text-xl font-bold mb-3">
                    Fungsi Gordang Sambilan Sebelum Masyarakat Mandailing Kenal
                    Islam
                  </h3>
                </Link>
                <p className="text-gray-700 lg:text-base md:text-sm text-[12px]">
                  Gordang Sambilan saat itu juga dipergunakan untuk menggelar
                  upacara mangido udan (meminta hujan) untuk mengatasi
                  kekeringan yang melanda di daerah tersebut.
                </p>

                <div className="mt-5 md:flex gap-10">
                  <p className="flex md:mb-0 mb-2 md:text-base text-[12px] gap-2 text-sm text-gray-600 items-center">
                    <IconMapFill />
                    <span>Mandailing, Sumatra Utara</span>
                  </p>
                  <p className="flex gap-2 text-sm text-gray-600 items-center">
                    <IconCalendar />
                    <span>17 Oktober 2023</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-5 items-center lg:gap-10 md:gap-5 md:mb-5 mb-16">
              <div className="md:col-span-2">
                <img
                  src="https://warisannusantara.vercel.app/images/news/serenTaun.jpg"
                  className="w-full h-[250px] rounded object-cover"
                />
              </div>
              <div className="md:col-span-3">
                <small className="text-purple-500 font-semibold">PAKAIAN</small>
                <Link to={"/news/read"}>
                  <h3 className="text-xl font-bold mb-3">
                    Hari Batik Nasional 2 Oktober, Mari Lebih Mengenal Batik
                  </h3>
                </Link>
                <p className="text-gray-700 lg:text-base md:text-sm text-[12px]">
                  Batik merupakan salah satu jenis karya seni rupa yang
                  berkembang di Indonesia. Batik sendiri dipercaya sudah ada
                  sejak zaman Majapahit dan populer pada akhir abad XVIII atau
                  permulaan abad XIX.
                </p>

                <div className="mt-5 md:flex gap-10">
                  <p className="flex md:mb-0 mb-2 md:text-base text-[12px] gap-2 text-sm text-gray-600 items-center">
                    <IconMapFill />
                    <span>Bandung, Jawa Barat</span>
                  </p>
                  <p className="flex gap-2 text-sm text-gray-600 items-center">
                    <IconCalendar />
                    <span>17 Oktober 2023</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-1 justify-center mt-10">
              <a
                href="#"
                className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-red-400"
              >
                &laquo;
              </a>
              <a
                href="#"
                className="text-white bg-red-500 py-1 md:px-4 px-3 md:text-base text-sm rounded"
              >
                1
              </a>
              <a
                href="#"
                className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-red-400"
              >
                2
              </a>
              <a
                href="#"
                className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-red-400"
              >
                3
              </a>
              <a
                href="#"
                className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-red-400"
              >
                4
              </a>
              <a
                href="#"
                className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-red-400"
              >
                5
              </a>
              <a
                href="#"
                className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-red-400"
              >
                6
              </a>
              <a
                href="#"
                className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-red-400"
              >
                &raquo;
              </a>
            </div>
          </div>
          <div className="lg:block hidden">
            <img
              src="/images/news/kabarBudaya.png"
              alt="kabarBudayaBanner"
              className="rounded"
            />
          </div>
        </section>
      </main>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="lg:px-20 md:px-10 px-3 md:py-14 py-10 lg:flex lg:justify-between lg:items-center bg-gradient-to-r from-red-500/90 to-red-400/90 text-white relative overflow-hidden">
        <span
          id="blink"
          className="w-[1000px] h-[1000px] rounded-full absolute -rotate-[60deg]"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(255, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <div className="relative z-10">
          <h3 className="font-bold md:text-2xl text-xl lg:text-left text-center">
            LOGIN UNTUK MENDAPATKAN NOTIFIKASI BERITA BARU
          </h3>
          <p className="text-gray-200 mt-2 md:md:text-base text-[13px] text-sm md:mb-0 mb-10 lg:text-left text-center">
            Setiap ada berita, event serta konten baru akan diberitahu lewat
            email
          </p>
        </div>
        <div className="relative z-10 lg:mt-0 mt-10 flex justify-center">
          <Link
            to={"/subcription"}
            className="bg-white md:px-7 px-5 md:py-3 py-2 md:text-base text-sm border-2 border-white rounded-full text-red-500 font-semibold hover:bg-transparent hover:text-white"
          >
            Subscription
          </Link>
        </div>
      </section>
    </>
  );
}
