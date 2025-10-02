import Navbar from "@/components/navbar";
import React from "react";
import Header from "@/components/header";
import About from "@/components/about";
import Projects from "@/components/projects"

export default function Home() {
  return (
    <div>
      {/* <body> */}
        <Navbar />
        <Header />
        <About />
        <Projects />
      {/* </body> */}
    </div>
  );
}
