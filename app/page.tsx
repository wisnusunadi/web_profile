"use client";
import Image from "next/image";
import Experience from "./components/Experience";
import exp_list from "@/data/experience.json";
import prj_list from "@/data/project.json";
import Project from "./components/Project";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("en");

  return (
    <>
      <div className="w-full bg-gray-100 py-12 px-6">
        <div className="mx-auto gap-6 flex flex-col lg:flex-row max-w-5xl items-center ">
          <div className="relative w-36 h-36 rounded-full bg-gray-400 shrink-0 overflow-hidden">
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Bartolomeus Wisnu
            </h1>
            <p className="text-xl font-medium text-black">Programmer</p>
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="flex items-center gap-2 py-1 text-sm font-medium transition hover:bg-gray-100"
            >
              <span
                className={
                  lang === "id" ? "font-bold text-blue-600" : "text-gray-400"
                }
              >
                ID
              </span>
              <span className="text-gray-400">|</span>
              <span
                className={
                  lang === "en" ? "font-bold text-blue-600" : "text-gray-400"
                }
              >
                EN
              </span>
            </button>
            <p className="text-xl font-medium text-gray-700 text-justify ">
              {lang === "en"
                ? `  Hello, I’m Wisnu. A Fullstack Developer with over 5 years of
              experience in the manufacturing industry. Experienced in web
              application development, database management, and system
              optimization to support business processes.`
                : `Perkenalkan, saya
              Wisnu. Fullstack Developer dengan pengalaman lebih dari 5 tahun di
              industri manufaktur. Berpengalaman dalam pengembangan aplikasi
              web, pengelolaan database, serta optimalisasi sistem untuk
              mendukung proses bisnis.`}
            </p>
          </div>
        </div>
      </div>

      <section>
        <p className="text-2xl lg:text-4xl text-center mb-5">
          {lang === "id" ? "Pengalaman Kerja" : "Work Experience"}{" "}
        </p>
        <div className="experience-timeline">
          {exp_list.map((item, index) => (
            <Experience key={index} lang={lang} {...item}></Experience>
          ))}
        </div>
      </section>

      <section>
        <p className="text-2xl lg:text-4xl text-center mb-5">
          {lang === "en" ? "Portfolio" : "Portoflio"}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
          {prj_list.map((item, index) => (
            <Project key={index} lang={lang} {...item}></Project>
          ))}
        </div>
      </section>

       <section className="bg-white p-10 px-10 rounded-lg shadow-md text-center mx-10">
         <p className="text-2xl lg:text-4xl text-center mb-5">{lang === "en" ? "Contact Me" : "Hubungi Saya"}</p>
        <p style={{ marginBottom: "20px" }}>
          {lang === "en"
            ? "Interested in discussing a project or have a question? Please contact me using the form below."
            : "Tertarik untuk mendiskusikan projek atau ada pertanyaan ? Kontak saya menggunakan form dibawah ini."}
        </p>
        <div>
          <a href="mailto:wisnusunadi@gmail.com" target="_blank" className="text-indigo-400 hover:text-purple-700 no-underline text-lg mx-4 transition-colors duration-300 ease-in-out">Email</a>
          <a href="https://www.linkedin.com/in/bartolomeus-wisnu/" target="_blank" className="text-indigo-400 hover:text-purple-700 no-underline text-lg mx-4 transition-colors duration-300 ease-in-out">LinkedIn</a>
          <a href="https://github.com/wisnusunadi" target="_blank" className="text-indigo-400 hover:text-purple-700 no-underline text-lg mx-4 transition-colors duration-300 ease-in-out">GitHub</a>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Bartolomeus Wisnu</p>
      </footer>
    </>
  );
}
