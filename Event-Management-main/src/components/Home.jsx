import React, { useEffect, useState } from "react";
import Bannerimg from "../assets/bannerimg2.jpg";
import Mainbg from "../assets/mainbg2.jpg";
import Mainbg2 from "../assets/mainbg3.jpg";
import Mainbg3 from "../assets/mainbg4.jpg";
import { IoMdArrowRoundForward } from "react-icons/io";
import RotatingText from "./RotatingText";
import CategorySection from "./CategorySection";
import Testimonials from "./Testimonials";
import NewsLetter from "./NewsLetter";

const Home = () => {
  const backgrounds = [Mainbg, Mainbg2, Mainbg3]; // background images array
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000); // 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    // ------------ OUTER WRAPPER (Centers Everything) ------------
    <>
    <div
      className="w-full min-h-screen bg-cover bg-center py-2 md:py-12 flex flex-col relative overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: `url(${backgrounds[currentIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* ------------ MAIN CONTAINER ------------ */}
<div className="flex flex-col md:flex-row rounded-xl px-6 w-full md:px-10 lg:px-20 py-6 min-h-[calc(100vh-80px)] relative z-20">
        {/* -------- Left Section -------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-8 py-4">
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold leading-tight">
            Making Your Events <br /> Memorable
          </p>

          <div className="text-gray-300 text-md font-light">
            <p>
              Creating unforgettable events with flawless planning and
              execution.
              <br className="hidden sm:block" />
              Schedule your event now.
            </p>
          </div>

          <RotatingText
            texts={["Wedding", "Auditorium", "Catering", "Photography"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-blue-600 text-white font-bold text-md md:text-2xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg max-w-[120px] w-full md:max-w-[250px] md:w-full"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

          <a
            className="flex items-center gap-2 border border-gray-200 px-6 md:px-8 py-2 md:py-3 rounded-full text-white text-xs md:text-sm hover:scale-105 transition-all duration-300"
            href="#sepeciality"
          >
            Book Now <IoMdArrowRoundForward />
          </a>
        </div>

        {/* -------- Right Section -------- */}
        <div className="md:w-1/2 flex items-center justify-center py-4">
          <img
            className="hidden max-w-[260px] md:max-w-[300px] lg:max-w-[350px] h-auto rounded-lg"
            src={Bannerimg}
            alt=""
          />
        </div>
      </div>
    </div>
    <CategorySection/>
    <Testimonials/>
    <NewsLetter/>
    </>
  );
};

export default Home;
