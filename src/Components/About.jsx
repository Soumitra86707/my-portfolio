import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { BiBriefcase, BiDesktop } from "react-icons/bi";
import { RiDownloadCloudFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import soumitra from "../assets/Soumitra-pic.png";
import about from "../assets/b7.jpg";
import pic from "../assets/pic.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in",
      once: true,
      delay: 100,
    });
  }, []);

  const roles = [
    "Back-End Developer", "React Developer" , "Laravel Developer","Front-End Developer","Full-Stack-Developer",
  ];

  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
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
    <section id="about" className="relative w-full">
      <img
        src={about}
        alt="Background"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-80"></div>
      <div className="relative w-full mx-auto py-16 md:py-20 px-2">
        <div className="max-w-[300px] mx-auto p-5 text-center">
          <h1 className="text-white font-bold text-3xl md:text-4xl font-serif">About Me</h1>
          <div className="w-[200px] mx-auto flex items-center gap-x-3">
            <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
            <h1 className="text-[#fc036f] font-semibold">Who I Am</h1>
            <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
          </div>
        </div>
        <div className="w-full py-7">
          <div className="max-w-[1250px] flex flex-col lg:flex-row items-center gap-5 mx-auto bg-white rounded-lg shadow-lg p-5">
            <div className="basis-1/2" data-aos="fade-up">
              <img
                src={soumitra}
                alt="Profile"
                className="rounded-full object-cover lg:h-[28rem] lg:w-[25rem]"
              />
            </div>
            <div className="basis-1/2 text-gray-800 px-5 space-y-3" data-aos="fade-up">
              <div className="flex justify-center space-x-3" data-aos="zoom-out-up">
                {[{icon: <FiAward size={20} color="#fc036f" />, title: "Experience", desc: "10+ Months, Currently Present..."},
                  {icon: <BiBriefcase size={22} color="#fc036f" />, title: "Completed", desc: "5+ Projects"},
                  {icon: <BiDesktop size={22} color="#fc036f" />, title: "Learning", desc: "Python, Django, Firebase"}].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center border rounded-lg p-4">
                    {item.icon}
                    <h1 className="text-gray-800 font-semibold text-sm">{item.title}</h1>
                    <h2 className="text-gray-500 text-xs">{item.desc}</h2>
                  </div>
                ))}
              </div>
              <h1 className="text-gray-800 font-bold text-2xl md:text-3xl">
                Hey, Myself Soumitra and I'm a
                <span className="text-cyan-500 ml-3">
                  {roles[index].slice(0, charIndex).split(" ").map((char, i) => (
                    <motion.span key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                      {char} 
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="mt-3 md:text-[15px] leading-6 sm:pr-5 first-letter:text-3xl first-letter:font-semibold">
                    I am Soumitra Halder from West Bengal, currently I'm working as
                    a Backend Developer and I have 10+ months hands on
                    experience in ReactJs, Php, Laravel in Backend field.
                    <br />
                    <h2 className="text-green-600 font-bold">
                      😀🏃‍♂️‍➡️ I'm currently learning ....
                    </h2>
                    <p>
                    the fundamentals of Python along with the Django
                    framework to strengthen my backend development skills. Python’s simplicity
                    and power make it ideal for building scalable applications, while Django
                    provides a clean, secure, and efficient structure for developing full-stack
                    web applications.
                    </p>
                    also exploring NoSQL databases, particularly MongoDB, which offers a
                    flexible document-based structure suitable for modern applications. In
                    addition, I am learning Firebase for real-time databases, authentication,
                    cloud storage, and serverless backend development. These technologies
                    together are helping me build dynamic, scalable, and production-ready
                    applications...
                  </p>

              <a download="CV_SoumitraHalder.pdf" href="CV-SoumitraHalder.pdf">
                <button className="flex items-center gap-1 px-4 py-2 bg-cyan-500 text-white rounded-md shadow-lg mt-5">
                  <RiDownloadCloudFill /> Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
