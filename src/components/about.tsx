import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-family-ovo">
          Introduction
        </h4>
        <h2 className="text-center text-5xl font-family-ovo">About Me</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="w-64 sm:w-90 rounded-3xl max-w-none">
            <Image
              src={assets.about_me}
              alt=""
              className="w-full rounded-3xl"
            />
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-3xl font-family-ovo">
              I’m a third-year Computer Science student at BINUS University, currently working and gaining hands-on experience as a Web Developer at Bina Nusantara IT Division. I enjoy working across both the frontend and backend, and occasionally exploring UI/UX design to make sure every product I help build feels intuitive and well-crafted.
              {/* <br />
              What motivates me most is seeing something I’ve built come together and creating websites that not only work smoothly, but also feel satisfying to use. I take a calm and steady approach to my work, paying attention to detail and always looking for ways to improve my skills. */}
              <br />
              I value collaboration and enjoy working with others to bring ideas to life. As I grow as a developer, I’m aiming to deepen my experience in fullstack development and continue building applications that are both functional and meaningful for their users.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl font-family-outfit">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-dark"
                >
                  <Image src={icon} alt={title} className="w-7 mt-3" />
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </li>
              ))}
            </ul>
            <h4 className="mt-6 mb-2 text-gray-700 font-family-ovo">
                Tools I use
            </h4>
            <ul className="flex items-center gap-3 sm:gap-5">
                {toolsData.map((tool, index)=>(
                    <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                        <Image src={tool} alt="Tool" className="w-5 sm:w-7"/>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
