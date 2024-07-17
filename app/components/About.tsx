"use client";
import { useRef } from "react";
import { SectionWrapper } from "./Section-wrapper";
import { useInView, motion } from "framer-motion";
import Carousel from "./Carousel";
export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <SectionWrapper>
      <div className="flex md:flex-row md:my-24 gap-8 justify-center items-center flex-col mx-3 my-">
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className="flex flex-col w-full md:w-[60%] justify-between"
        >
          <h1 className="text-3xl lg:text-5xl text-purple-600 font-semibold mb-6 w-full text-left pl-2 text-transparent bg-clip-text bg-gradient-to-t  from-[#2d7ef9] via-[#be7cff] to-[#64e3ff]   ">
            About Us
          </h1>
          <p className="text-gray-300 text-sm  md:text-2xl  text-justify my-6">
            The Techacks community is a vibrant group of innovators, developers,
            and tech enthusiasts. It&apos;s a space where creativity and
            collaboration thrive, bringing together diverse individuals to
            tackle real-world challenges.
            <br />
            <br />
            Members are passionate about learning, sharing knowledge, and
            collaborating on projects. This camaraderie makes Techacks more than
            a competition—it&apos;s a hub for networking and growth. Committed
            to diversity and inclusivity, Techacks welcomes everyone, valuing
            and recognizing all contributions.
          </p>
        </div>
        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <Carousel />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
