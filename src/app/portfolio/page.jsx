"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

import HRDevHubImage from "/public/HRDevHub.png";
import DocPortalImage from "/public/DocPortal.png";
import LearnCentralImage from "/public/LearnCentral.png";
import FlicksterImage from "/public/Flickster.png";
import OrbitNavigator from "/public/OrbitNavigator.png"

const items = [
  {
    id: 1,
    color: "from-gray-600 to-gray-700",
    title: "HRDevHub HR Management",
    desc: "In HRDevHub HR Management System I integrated a QR code-based attendance tracking for interns and outsourced staff. Employing the MERN stack with Vite.js, I ensured seamless integration. Additionally, I devised algorithms for accurate salary computation based on attendance and performance. Technologies: Node.js, Express.js, MongoDB, React + Vite.js.",
    link: "https://itp-frontend-9eo4h841a-shafdo.vercel.app/",
    image: HRDevHubImage,
  },
  {
    id: 2,
    color: "from-gray-700 to-gray-800",
    title: "Orbit Navigator Space Blog",
    desc: "Orbit Navigator Project merges space exploration with user-generated content. It features the latest NASA blogs, providing cutting-edge insights into space and astronomy. In addition, users can create and share their own blogs, offering a unique platform for space enthusiasts. The project combines MongoDB, Express, React, and Node.js to deliver a robust and interactive experience, where users can explore, contribute, and engage with a vibrant community of space lovers",
    link: "https://github.com/SandunJay/DocPortal",
    image: OrbitNavigator,
  },
  {
    id: 3,
    color: "from-gray-700 to-gray-800",
    title: "Kotlin Medical Center App",
    desc: "DocPortal is a robust Android application developed in Kotlin that serves as an efficient management tool for hospital employees. Built with an array of features, it simplifies hospital operations and enhances employee productivity.",
    link: "https://github.com/SandunJay/DocPortal",
    image: DocPortalImage,
  },
  {
    id: 4,
    color: "from-gray-800 to-gray-900",
    title: "LearnCentral Digital Learning",
    desc: "LearnCentral is a robust web platform merging Spring Boot backend with React and Vite frontend, utilizing JWT authentication, email confirmation, and SMS alerts for secure access and resource management. Technologies used: - Spring Boot, - JWT, - React + Vite, - Docker.",
    link: "/",
    image: LearnCentralImage,
  },
  {
    id: 5,
    color: "from-gray-900 to-gray-900",
    title: "Flickster Movie Streaming",
    desc: "I built a scalable online video streaming site with Java servlets, prioritizing OOP principles. Using Java and MySQL, we crafted a robust backend to manage user interactions and video content effectively, offering an immersive experience. Technologies: Java, JSP, JS.",
    link: "https://github.com/SandunJay/Flickster",
    image: FlicksterImage,
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollY } = useScroll({ target: ref });
  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollY.get();
      setScrollDirection(currentScrollY > prevScrollY ? "down" : "up");
      setPrevScrollY(currentScrollY);
    };

    scrollY.onChange(handleScroll);

    return () => scrollY.onChange(handleScroll);
  }, [scrollY, prevScrollY]);

  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-auto relative" ref={ref}>
        <div
          className={`w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center ${
            scrollDirection === "down" ? "hidden" : ""
          }`}
        >
          {" "}
          My Works{" "}
        </div>
        <div className="w-screen flex flex-col items-center justify-center">
          {items.map((item) => (
            <motion.div
              className={`w-screen min-h-screen flex items-center justify-center bg-gradient-to-b ${item.color}`}
              key={item.id}
              style={{ y: scrollY }}
            >
              <div className="h-full flex flex-col justify-center items-center text-white">
                <div className="w-full md:flex md:items-center">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] flex items-center justify-center">
                      <Image src={item.image} alt="" fill />
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl mx-3">
                      <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl mb-4 text-center">
                          {item.title}
                        </h1>

                        <p className="mb-4">{item.desc}</p>
                        <Link href={item.link} className="flex justify-center">
                          <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gray-800 text-black font-semibold rounded">
                            See Demo
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gray-900">
        <h1 className="text-8xl text-white">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="white">
              <textPath xlinkHref="#circlePath" className="text-xl">
                {" "}
                Backend Developer and DevOps{" "}
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
