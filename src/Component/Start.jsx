import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Cards from "./Cards";
import Footer from "./Footer";
import image from "./1.jpg";
import { useEffect, useState } from "react";
const Start = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  useEffect(() => {
    setBackgroundImage(image);
    return () => {
      setBackgroundImage("");
    };
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Cards />
      </div>

      <Footer />
    </div>
  );
};

export default Start;
