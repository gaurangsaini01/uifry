"use client"
import Hero from "@/components/Hero";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

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
    <main className="min-h-screen">
      <Navbar isSmall={isSmall} isOpen={isOpen} menutoggle={menutoggle} />
      {isOpen && <SideBar/>}
      <Hero isSmall={isSmall}/>
    </main>
  );
}
