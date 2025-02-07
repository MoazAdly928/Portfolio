import Image from "next/image";
import Header from "./components/header/Header";
import HomeSection from "./components/homeSection/HomeSection";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Work from "./components/work/Work";
export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <HomeSection />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <ScrollUp />
    </>
  );
}
