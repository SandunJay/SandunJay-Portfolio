"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import HRDevHubImage from "/public/HRDevHub.png";
import DocPortalImage from "/public/DocPortal.png";
import LearnCentralImage from "/public/LearnCentral.png";
import FlicksterImage from "/public/Flickster.png";

const items = [
  {
    id: 1,
    color: "from-gray-600 to-gray-900",
    title: "HRDevHub HR Management",
    desc: "In HRDevHub HR Management System I integrated a QR code-based attendance tracking for interns and outsourced staff. Employing the MERN stack with Vite.js, I ensured seamless integration. Additionally, I devised algorithms for accurate salary computation based on attendance and performance. Technologies: Node.js, Express.js, MongoDB, React + Vite.js.",
    link: "https://itp-frontend-9eo4h841a-shafdo.vercel.app/",
    image: HRDevHubImage,
  },
  {
    id: 2,
    color: "from-gray-600 to-gray-900",
    title: "Kotlin Medical Center App",
    desc: "DocPortal is a robust Android application developed in Kotlin that serves as an efficient management tool for hospital employees. Built with an array of features, it simplifies hospital operations and enhances employee productivity.",
    link: "https://github.com/SandunJay/DocPortal",
    image: DocPortalImage,
  },
  {
    id: 3,
    color: "from-gray-600 to-gray-900",
    title: "LearnCentral Digital Learning",
    desc: `LearnCentral is a robust web platform merging Spring Boot backend with React and Vite frontend, utilizing JWT authentication, email confirmation, and SMS alerts for secure access and resource management.
            Technologies used: 
            - Spring Boot,
            - JWT,
            - React + Vite,
            - Docker.`,
    link: "/",
    image: LearnCentralImage,
  },
  {
    id: 4,
    color: "from-gray-600 to-gray-900",
    title: "Flickster Movie Streaming",
    desc: "I built a scalable online video streaming site with Java servlets, prioritizing OOP principles. Using Java and MySQL, we crafted a robust backend to manage user interactions and video content effectively, offering an immersive experience. Technologies: Java, JSP, JS.",
    link: "https://github.com/SandunJay/Flickster",
    image: FlicksterImage,
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gray-600" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.image} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gray-800 text-black font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
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
                Backend Developer and DevOps 
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
