import React, { useEffect, useState } from "react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import heropng from "../assets/hero.png";
import Trusted from "./Trusted";
import Loader from "./Loader";

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate short loading time (e.g., fetching or image load)
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-r from-purple-50 via-indigo-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            We Build <br />
            <span className="text-purple-600">Productive Apps</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-6 max-w-2xl text-lg">
            At <span className="font-semibold text-purple-700">HERO.IO</span>, we craft innovative apps designed 
            to make everyday life simpler, smarter, and more exciting.  
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              <FaGooglePlay className="text-xl" />
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-black text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              <FaAppStoreIos className="text-xl" />
              App Store
            </a>
          </div>

          {/* Decorative Image */}
          <div className="mt-12">
            <img
              src={heropng}
              alt="Hero Illustration"
              className="w-full md:w-2/3 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <div className="-mt-20">
        <Trusted />
      </div>
    </>
  );
};

export default Banner;
