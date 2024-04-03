"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/person.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Empowering Digital Infrastructure, Driving Innovation.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital workshop, where I architect robust backend systems,
            optimize DevOps workflows, and craft full-stack solutions. With a blend of
            precision engineering and creative problem-solving, my portfolio showcases
            projects that embody my dedication to building scalable, resilient,
            and innovative software solutions.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white" >
              <Link href="/portfolio">
                View My Work
              </Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-white text-white">
              <Link href="/contact">
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
