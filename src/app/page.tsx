import Navbar from "@/components/navbar";
import React from "react";
import Header from "@/components/header";
import About from "@/components/about";

export default function Home() {
  return (
    <div>
      {/* <body> */}
        <Navbar />
        <Header />
        <About />
      {/* </body> */}
    </div>
  );
}
