import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  bgImage: string;
  fullDesc?: string;
  techStack?: string[];
  demo?: string;
  images?: string[];
  github?: string;
  figma?: string;
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-family-ovo">Portfolio</h4>
        <h2 className="text-center text-5xl font-family-ovo">My Projects</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-family-ovo">
          Welcome to my portfolio! Here you’ll find a few projects I’ve built and been a part of, ranging from fullstack web apps to frontend and UI/UX designs.
        </p>
        <div className="grid grid-cols-auto my-10 gap-5 font-family-outfit">
          {workData.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-md shadow-gray-500"
              onClick={() => setActiveProject(project)}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 w-[90%] md:w-[60%] lg:w-[70%] shadow-xl relative max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-black"
                  onClick={() => setActiveProject(null)}
                >
                  ✕
                </button>
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-family-outfit">
                  {activeProject.title}
                </h2>

                {activeProject.images && activeProject.images.length > 0 && (
                  <div className="flex gap-3 overflow-x-auto mb-4 scrollbar-thin scrollbar-thumb-gray-300">
                    {activeProject.images.map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt={`${activeProject.title} preview ${i + 1}`}
                        width={200}
                        height={200}
                        unoptimized
                        // className="rounded-lg flex-shrink-0 w-[500px] md:w-[750px] h-[250px] md:h-[350px] object-cover border border-gray-400"
                        className={`rounded-lg flex-shrink-0 object-cover border border-gray-400 ${
                          activeProject.title === "NUTRI-FIT"
                            ? "w-[200px] md:w-[150px] h-[400px] md:h-[350px]"
                            : "w-[500px] md:w-[750px] h-[250px] md:h-[350px]"
                        }`}
                      />
                    ))}
                  </div>
                )}

                <p className="text-black leading-relaxed mb-5">
                  {activeProject.fullDesc}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 font-family-outfit items-center">
                  {activeProject.techStack && (
                    <div className="flex flex-wrap gap-2 mb-5 font-family-outfit">
                      {activeProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-lime-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-800 hover:text-black font-medium mt-3"
                    >
                      <span>View on GitHub</span>
                      <Image
                        src="/github.png"
                        alt="GitHub icon"
                        width={50}
                        height={50}
                        className="opacity-80 hover:opacity-100 transition"
                      />
                    </a>
                  )}

                  {activeProject.figma && (
                    <a
                      href={activeProject.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-800 hover:text-black font-medium mt-3"
                    >
                      <span>View on Figma</span>
                      <Image
                        src="/figma.png"
                        alt="Figma icon"
                        width={50}
                        height={50}
                        className="opacity-80 hover:opacity-100 transition"
                      />
                    </a>
                  )}
                  
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <a
          href=""
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-lime-300 duration-500"
        >
          Show More{" "}
          <Image
            src={assets.right_arrow_bold}
            alt="right arrow"
            className="w-4"
          />
        </a> */}
      </div>
    </>
  );
}
