"use client";

import React, { type JSX } from "react";

import Navbar from "@/components/navbar";
import About from "@/sections/LandingPage/about";
import Answers from "@/sections/LandingPage/answers";
import Contact from "@/sections/LandingPage/contact";
import Footer from "@/sections/LandingPage/footer";
import Hero from "@/sections/LandingPage/hero";
import Services from "@/sections/LandingPage/services";

const Home = (): JSX.Element => {
  const links = [
    { label: "Nosotros", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Contacto", href: "#contact" },
    { label: "Preguntas", href: "#faq" },
  ];

  return (
    <>
      <main>
        <Navbar links={links} />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Answers />
      </main>
      <Footer />
    </>
  );
};

export default Home;
