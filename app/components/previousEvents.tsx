"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import useDetectScroll from "@smakss/react-scroll-direction";
import { SectionWrapper } from "./Section-wrapper";
const variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  up: {
    opacity: 1,
    y: -20,
    transition: {
      duration: 0.5,
    },
  },
  down: {
    opacity: 1,
    y: 20,
    transition: {
      duration: 0.5,
    },
  },
};

export const PreviousEvents = () => {
  const { scrollDir } = useDetectScroll();
  const [scrollDirection, setScrollDirection] = useState(scrollDir);

  useEffect(() => {
    setScrollDirection(scrollDir);
  }, [scrollDir]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <SectionWrapper>
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className=" lg:min-w-[1200px] min-w-[90vw] mt-8 "
        >
          <h1 className="text-3xl lg:text-4xl text-purple-600 font-semibold mb-6 w-full text-left pl-2 text-transparent bg-clip-text bg-gradient-to-t  from-[#2d7ef9] via-[#be7cff] to-[#64e3ff]   ">
            Previous Events
          </h1>
        </div>
      </SectionWrapper>
      <div className="max-w-[1200px] lg:min-w-[1090px] min-w-[100vw] p-4">
        <div className="flex justify-center items-center gap-4 mt-12 flex-col w-full my-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              <motion.div
                key="div1"
                initial="hidden"
                animate={
                  scrollDirection === "up"
                    ? "down"
                    : "visible" || scrollDirection === "down"
                    ? "up"
                    : "visible"
                }
                exit="hidden"
                variants={variants}
                className="  flex flex-col gap-2 cursor-pointer relative group"
              >
                <div className="h-full   w-full bg-black/80  rounded-2xl absolute block sm:hidden group-hover:block group-hover:transition-all">
                  <div className="flex flex-col gap-2 p-4 absolute  bottom-0">
                    <h1 className="text-2xl sm:text-3xl lg:text-6xl text-purple-700 shadow-lg font-semibold ">
                      4000+
                    </h1>
                    <p className="text-purple-600 text-lg sm:text-2xl md:text-4xl font-semibold">
                      hackers
                    </p>
                  </div>
                </div>
                <img
                  src={"/im1.jpg"}
                  alt="event"
                  className="w-full h-full rounded-2xl "
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                key="div2"
                initial="hidden"
                animate={
                  scrollDirection === "up"
                    ? "up"
                    : "visible" || scrollDirection === "down"
                    ? "down"
                    : "visible"
                }
                exit="hidden"
                variants={variants}
                className="flex flex-col gap-2 cursor-pointer relative group"
              >
                <div className="h-full w-full bottom-0 bg-black/80  rounded-2xl absolute block sm:hidden group-hover:block group-hover:transition-all">
                  <div className="flex flex-col gap-2 p-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-6xl  text-red-300 shadow-lg font-semibold ">
                      40+
                    </h1>
                    <p className="text-red-300 text-lg sm:text-2xl md:text-4xl font-semibold">
                      Workshops
                    </p>
                  </div>
                </div>
                <img
                  src={"/pv-1.JPG"}
                  alt="event"
                  className="w-full h-full rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                key="div3"
                initial="hidden"
                animate={
                  scrollDirection === "up"
                    ? "down"
                    : "visible" || scrollDirection === "down"
                    ? "up"
                    : "visible"
                }
                exit="hidden"
                variants={variants}
                className="flex flex-col gap-2 cursor-pointer relative group"
              >
                <div className="h-full w-full bg-black/80  rounded-2xl absolute block sm:hidden group-hover:block group-hover:transition-all">
                  <div className="flex flex-col gap-2 p-4 absolute  bottom-0">
                    <h1 className="text-2xl sm:text-3xl lg:text-6xl text-indigo-400 shadow-lg font-semibold ">
                      27+
                    </h1>
                    <p className="text-indigo-400 text-lg sm:text-2xl md:text-4xl font-semibold">
                      Countries
                    </p>
                  </div>
                </div>
                <img
                  src={"/pv-4.jpg"}
                  alt="event"
                  className="w-full h-full rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                key="div4"
                initial="hidden"
                animate={
                  scrollDirection === "up"
                    ? "up"
                    : "visible" || scrollDirection === "down"
                    ? "down"
                    : "visible"
                }
                exit="hidden"
                variants={variants}
                className="flex flex-col gap-2 cursor-pointer relative group"
              >
                <div className="h-full w-full bg-black/80  rounded-2xl absolute block sm:hidden group-hover:block group-hover:transition-all">
                  <div className="flex flex-col gap-2 p-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-6xl text-yellow-500 shadow-lg font-semibold ">
                      661+
                    </h1>
                    <p className="text-yellow-500 text-lg sm:text-2xl md:text-4xl font-semibold">
                      Projects
                    </p>
                  </div>
                </div>
                <img
                  src={"/pv-3.jpg"}
                  alt="event"
                  className="w-full h-full rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
