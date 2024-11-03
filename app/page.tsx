"use client"
import Navbar from "./component/Navbar";
import Homee from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import head from 'next/head'

export default function Home() {
  function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu?.classList.toggle("hidden");
  }
  return (
      <>
    <Navbar />
    <Homee/>
    <About/> 
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

