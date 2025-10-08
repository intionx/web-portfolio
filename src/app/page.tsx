'use client';

import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import About from "@/components/about";
import Projects from "@/components/projects"
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   if(isDarkMode){
  //     document.documentElement.classList.add('dark')
  //     localStorage.theme = 'dark'
  //   }else{
  //     document.documentElement.classList.remove('dark')
  //     localStorage.theme = ''
  //   }
  // }, [isDarkMode])

  return (
    <div>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}
