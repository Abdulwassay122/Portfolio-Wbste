import Navbar from "./component/Navbar";
import Homee from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import head from 'next/head'

export default function Home() {
  return (
      <div>
    <head>
      <title>Abdul Wassay Porfolio</title>
    </head>
    <Navbar />
    <Homee/>
    <About/> 
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

