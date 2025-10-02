
import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Instagram, Linkedin, MousePointer } from "lucide-react";

// ✅ Import background images
import bgDesktop1 from "../assets/DSC05054.jpg";
import bgDesktop2 from "../assets/DSC06407.jpg";
import bgDesktop3 from "../assets/218 Millstone Pkwy_263.jpg";

import bgTablet1 from "../assets/DJI_20250917184114_0781_D (1).jpg";
import bgTablet2 from "../assets/DSC05048.jpg";
import bgMobile1 from "../assets/DSC05048.jpg";
import bgMobile2 from "../assets/DJI_20250917184114_0781_D (1).jpg";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);
  const [bgImages, setBgImages] = useState<string[]>([]);

  const words = ["Transform", "Enhance", "Perfect", "Elevate"];

  // ✅ Detect screen size and choose correct background set
  useEffect(() => {
    const updateBackgrounds = () => {
      if (window.innerWidth <= 640) {
        setBgImages([bgMobile1, bgMobile2]);
      } else if (window.innerWidth <= 1024) {
        setBgImages([bgTablet1, bgTablet2]);
      } else {
        setBgImages([bgDesktop1, bgDesktop2,bgDesktop3,]);
      }
    };

    updateBackgrounds();
    window.addEventListener("resize", updateBackgrounds);
    return () => window.removeEventListener("resize", updateBackgrounds);
  }, []);

  // ✅ Word rotation
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentWord((prev) => (prev + 1) % words.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  // ✅ Background slideshow
  useEffect(() => {
    if (bgImages.length > 0) {
      const interval = setInterval(
        () => setCurrentBg((prev) => (prev + 1) % bgImages.length),
        6000
      );
      return () => clearInterval(interval);
    }
  }, [bgImages]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white hero">
      {/* ✅ Background slideshow */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
              index === currentBg ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              transition: "opacity 1s ease-in-out, transform 6s ease-in-out",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 z-[1]" />
      </div>

      {/* ✅ Hero Content */}
      <div className="container relative z-10 px-6 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-500 via-purple-200 to-red-900 bg-clip-text text-transparent animate-pulse">
            {words[currentWord]}
          </span>
          <span className="block text-white bg-clip-text text-transparent">
            Your Visual Story
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-30">
          Professional photo editing services without AI and only human touch.{" "}
          <span className=" text-white font-semibold 
          ">
            Transform ordinary photos into extraordinary masterpieces.
          </span>
        </p>
      </div>

      {/* ✅ Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-1 animate-bounce" />
        </div>
        <div className="text-white/60 text-xs mt-2">Scroll to explore</div>
        <MousePointer className="w-4 h-4 text-white/40 mt-1 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
