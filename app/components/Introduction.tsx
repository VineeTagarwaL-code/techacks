"use client";
import { useState } from "react";
import { SectionWrapper } from "./Section-wrapper";
import { motion } from "framer-motion";
import { Discord } from "./ui/Discord";
import { FileCheck2, User2 } from "lucide-react";
import Link from "next/link";
export const Introduction = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <SectionWrapper>
      <div className="flex justify-start items-center mt-24 flex-col px-2 ">
        <div className="relative ">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            // src={ "}
            src={hovered ? "/Techacks-bg(1).webp" : "/Techacks-bg(2).webp"}
            alt="Techacks"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className={"w-[800px]"}
          />
        </div>

        <div className="flex justify-center items-center gap-3  mt-6 mx-2">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="text-[#51D7FD] text-xl sm:text-2xl  md:text-3xl "
          >
            Collaborate.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="text-[#ad51e5]  text-xl sm:text-2xl  md:text-3xl"
          >
            Contribute.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="text-[#F8C342]  text-xl sm:text-2xl  md:text-3xl "
          >
            Empower.
          </motion.p>
        </div>
        <div className="mt-8 md:mt-16 flex justify-center items-center gap-6">
          <Link href={"https://lu.ma/rn0d9iie"}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className=" cursor-pointer group text-sm md:text-xl px-4 md:px-8  md:min-w-[210px] transition-all hover:scale-[1.1] py-2 rounded-lg bg-gray-900 text-gray-300 flex justify-center items-center gap-4"
            >
              <FileCheck2 />
              <span className=" transition-all  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-400">
                Pre Registration
              </span>
            </motion.button>
          </Link>
          <Link href={"https://discord.gg/YUdjPEwebc"}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className=" cursor-pointer 
            transition-all hover:scale-[1.1] 
            bg-gradient-to-r  from-purple-800 to-indigo-400 text-sm md:text-xl px-4 md:px-8 py-2 md:min-w-[210px] rounded-lg bg-gray-900 text-gray-300 flex justify-center items-center gap-4"
            >
              <Discord />
              <span className="text-white shadow-2xl font-semibold">
                Join Us
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};
