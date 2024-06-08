"use client"
import Advantages from "@/components/Advantages";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SideBar from "@/components/SideBar";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Copyright from "@/components/Copyright";

export default function Home() {
  const [isSmall, setIsSmall] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1062) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function menutoggle() {
    setIsOpen(!isOpen);
  }
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar isSmall={isSmall} isOpen={isOpen} menutoggle={menutoggle} />
      {isOpen && <SideBar isOpen={isOpen}/>}
      <Hero isSmall={isSmall}/>
      <Features/>
      <Advantages isSmall={isSmall}/>
      <Testimonials isSmall={isSmall}/>
      <FAQ />
      <Download/>
      <Footer/>
      <Copyright/>
    </main>
  );
}
