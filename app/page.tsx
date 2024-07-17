"use client";
import { useRef } from "react";
import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import { Video } from "./components/Video";
import { About } from "./components/About";
import Footer from "./components/footer";
import { Testimonials } from "./components/Testimonials";
import { useInView } from "framer-motion";
import { SectionWrapper } from "./components/Section-wrapper";
import { Partners } from "./components/Partner";
import { PreviousEvents } from "./components/previousEvents";
export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <main className=" overflow-hidden flex min-h-screen flex-col items-center  relative bg-gradient-to-b from-black via-black to-purple-950/40">
      <div
        className="w-full h-full absolute "
        style={{
          backgroundImage: "url('/stars1.png')",

          backgroundSize: "contain",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.3,
        }}
      ></div>
      <div className=" w-[100vw] flex justify-center items-center flex-col relative">
        <div
          className="w-[110vw] h-full absolute hidden md:block bg-contain xl:bg-cover"
          style={{
            backgroundImage: "url('/line.png')",
            backgroundRepeat: "no-repeat",

            zIndex: 0,
            opacity: 0.5,
          }}
        ></div>
        <Navbar />
        <Introduction />
        <Video />
      </div>
      <About />
      <PreviousEvents />

      <Partners />
      <SectionWrapper>
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className=" lg:min-w-[1200px] min-w-[90vw] "
        >
          <h1 className="text-3xl lg:text-5xl text-purple-600 font-semibold mb-6 w-full text-left pl-2 text-transparent bg-clip-text bg-gradient-to-t  from-[#2d7ef9] via-[#be7cff] to-[#64e3ff]   ">
            Testimonials
          </h1>
        </div>
      </SectionWrapper>
      <Testimonials />

      <Footer />
    </main>
  );
}
