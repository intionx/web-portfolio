import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div>
          <Image
            src={assets.profile_img}
            alt=""
            className="rounded-full w-32"
          />
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-family-ovo">
          Hi! My name is Kenneth Angelo Sulaiman{" "}
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-family-ovo">
          Fullstack Web Developer based in Jakarta
        </h1>
        <p className="max-w-2xl mx-auto font-family-ovo">
          I am a third-year Computer Science student at BINUS University with
          hands-on experience as a Web Developer at Bina Nusantara IT Division.
          Skilled in fullstack development using frameworks and languages such
          as Next.js (React, TypeScript) for frontend and Laravel for backend.
          Experienced in building interactive web applications and strong in
          adaptability, teamwork, and time management.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            contact me{" "}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
          <a
            href="/KENNETH ANGELO SULAIMAN - CV.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            my resume{" "}
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
