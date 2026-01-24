import React from "react";
//import webPic from "../assets/web-pic.png";
import "../app/globals.css"; // You'll need to create this CSS file

export default function About() {
  return (
    <section
      id="about-us"
      className="about-section w-full min-h-screen relative overflow-hidden flex items-center justify-center md:justify-end before:content-[''] before:absolute before:inset-0 before:bg-gray-200 before:-z-20"
    >
      <div
        className="absolute inset-0 bg-no-repeat -z-10 bg-size-[100%] lg:bg-size-[60%] bg-fixed bg-left md:bg-left"
        style={{
          backgroundImage: `url("/images/web-pic.png")`,
        }}
      ></div>
      <div className=" w-full md:w-1/2 min-h-screen px-5 text-center md:text-start  bg-black/50 flex flex-col justify-center text-white">
        <h1 className="global-accent-text text-shadow-lg text-shadow-black/20 text-6xl md:text-6xl font-extrabold mb-6 pt-20">About Us</h1>
        <p className="text-2xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Little Lion is dedicated to great web design and development, creating stunning,
          user-friendly websites that help businesses establish a strong online presence.
        </p>
        <p className="text-xl md:text-xl mb-8 max-w-2xl mx-auto">
          Our aim is to provide high-quality, customized web solutions that not only look great but are
          also fully responsive, performing seamlessly across all devices. We believe that a well-designed website is
          crucial for any business looking to thrive in today&apos;s digital landscape.
        </p>
        <p className="text-2xl md:text-xl mb-8 max-w-2xl italic mx-auto">
          &quot;You are proud of your business, let us help you show it off to the world.&quot;
        </p>
      </div>
    </section>
  );
}
