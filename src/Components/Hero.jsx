import React from "react";
import hero from "/img/hero.jpg";

function Hero() {
  return (
   <section className="relative h-screen overflow-hidden bg-black" >
  <div className="absolute top-18  bottom-0 z-0 left-2 right-2  ">
    <img
      src={hero}
      alt="Imagem de fundo"
      className="w-full h-full  rounded-2xl object-cover opacity-90 transition-opacity duration-500 "
    />
    <div className="absolute inset-0 gradient-bg"></div>
  </div>

  <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      className="size-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  </div>
</section>

  );
}

export default Hero;
