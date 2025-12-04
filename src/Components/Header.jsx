import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import soumitra from "../assets/Soumitra-pic.png";
import banner from "../assets/banner.gif";
import "./nav.css";

  const roles = [
    "Back-End Developer", "React Developer" , "Laravel Developer","Front-End Developer","Full-Stack-Developer",
  ];
const Header = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in",
      once: true,
      delay: 100,
    });

    const interval = setInterval(() => {
      if (!reverse) {
        if (charIndex < roles[index].length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setReverse(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setReverse(false);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, reverse, index]);

  return (
    <section id="home">
      <div className="w-full relative">
        <img
          src={banner}
          alt="Banner"
          className="mx-auto absolute w-full h-full bg-center bg-cover"
        />
        <div className="absolute w-full h-full opacity-90"></div>

        <div className="w-full flex flex-col lg:flex-row gap-y-8 lg:gap-x-5 items-center justify-between py-16 pt-28 sm:pt-32 overflow-hidden">
          {/* Information */}
          <div
            className="basis-1/2 px-5 md:px-20 space-y-1 md:space-y-4"
            data-aos="fade-right"
          >
            <h2 className="font-bold text-[#fc036f] text-[22px] md:text-4xl">
              👋Hello, MySelf
            </h2>
            <h1 className="text-white font-bold text-[35px] md:text-6xl">
              Soumitra Halder
            </h1>

            {/* Animated Text */}
            <h2 className="text-2xl md:text-4xl text-white font">
              & I'm a &nbsp;
              <span className="text-cyan-500 font">
                {roles[index]
                  .slice(0, charIndex)
                  .split("")
                  .map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2, delay: i * 0.1 }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </span>
            </h2>

            <p className="text-white text-[13px] sm:text-sm leading-normal">
              👋 I'm a creative Backend Developer, passionate about
              building innovative solutions and deeply dedicated to my work.
            </p>

            <div className="flex flex-row space-x-3 lg:space-x-5 pt-3">
              <SocialIcon
                href="https://www.linkedin.com/in/soumitrahalder8116/"
                icon={<FaLinkedinIn size="20" />}
              />
              <SocialIcon
                href="https://github.com/soumitra86707"
                icon={<FaGithub size="20" />}
              />
              {/* <SocialIcon
                href="https://www.instagram.com/official_myselfvivek_kushwaha/"
                icon={<FaInstagram size="20" />}
              /> */}
            </div>
          </div>

          {/* Image */}
          <div
            className="basis-1/2 px-8 lg:py-5 overflow-hidden"
            data-aos="fade-left"
          >
            {/* <img
              src={soumitra}
              alt="Soumitra Halder"
              className="lg:w-[70%] lg:h-[70%] bg-center bg-cover mx-auto shadow-lg header_img rounded-full"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <div className="bg-transparent rounded-full p-4 border border-sky-500 items-center shadow-lg shadow-cyan-500/50">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-500"
    >
      {icon}
    </a>
  </div>
);

export default Header;
