"use client";
import { SectionWrapper } from "./Section-wrapper";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <SectionWrapper>
      <nav className="flex justify-between items-center w-full px-4 py-2 md:py-2 lg:mt-5 z-[3] ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={"/Techacks-bg(1).webp"}
            alt="logo"
            className="h-[20px] sm:h-[30px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ zIndex: 3 }}
        >
          <motion.img
            src="/Sticker-2.webp"
            alt="logo"
            width={50}
            height={50}
            className="absolute  md:block  top-0 right-[35%] transform translate-x-1/2 -translate-y-1/2"
            initial={{ y: 10, opacity: 0 }}
            animate={isHovered ? { y: -30, opacity: 1 } : { y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ zIndex: 0 }}
          />
          <motion.div className="relative bg-gray-900 text-sm  md:text-xl px-3 py-2  md:px-5 md:py-3 rounded-lg text-gray-400 group cursor-pointer ">
            <Link href="https://forms.gle/txZdjz7hmb6gnbXK6">
              <button className=" transition-all duration-300 ease-in-out group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-400">
                Sponsor Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </nav>
    </SectionWrapper>
  );
};
