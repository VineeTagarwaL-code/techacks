"use client";
import { useRef, useState } from "react";
import { SectionWrapper } from "./Section-wrapper";
import { useInView, motion } from "framer-motion";
import { cn } from "../utils/cn";

const partners = [
  {
    name: "Github",

    logo: "https://hackthisfall.tech/_nuxt/img/github.580dd30.svg",
  },
  {
    name: "Logitech",
    logo: "/white.png",
  },
  {
    name: "Logitech",
    logo: "/twillio.png",
  },
  {
    name: "micro",
    className: "md:h-[6vh]",
    logo: "/azure.png",
  },
  {
    name: "micro",
    className: "md:h-[6vh]",
    logo: "/mlh-white.png",
  },
  {
    name: "tezod",
    className: "md:h-[6vh]",
    logo: "/tezos.svg",
  },
  {
    name: "micro",
    className: "md:h-[6vh]",
    logo: "/mongo.svg",
  },
  {
    name: "micro",
    className: "md:h-[6vh]",
    logo: "/balsam.svg",
  },
  {
    name: "micro",
    className: "md:h-[6vh]",
    logo: "/foss.png",
  },
  {
    name: "micro",
    className: "md:h-[8vh]",
    logo: "/sos.png",
  },
  {
    name: "micro",
    className: "md:h-[6vh]",
    logo: "/polygon.svg",
  },
  {
    name: "micro",
    className: "md:h-[6vh]",
    logo: "/replit.webp",
  },
  {
    name: "micro",
    className: "md:h-[6vh]",
    logo: "/peerlist.png",
  },
  {
    name: "micro",
    className: "md:h-[6vh]",
    logo: "/orkes.svg",
  },
  {
    name: "AMD",
    className: "md:h-[7vh]",
    logo: "/amd1.png",
  },
  {
    name: "Devfolio",
    logo: "/devfolio.png",
  },
  {
    name: "Give me my certificate",

    logo: "/gmc.png",
  },
  {
    name: "Jdoodle",
    className: "md:h-[7vh]",
    logo: "/jdoodle.png",
  },
];

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // State to track which partner is being hovered
  const [hoveredPartner, setHoveredPartner] = useState<string | null>("");

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
          <h1 className="text-3xl lg:text-5xl text-purple-600 font-semibold mb-6 w-full text-left pl-2 text-transparent bg-clip-text bg-gradient-to-t  from-[#2d7ef9] via-[#be7cff] to-[#64e3ff]   ">
            Previous Partners
          </h1>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex md:my-24 justify-center items-center flex-col my-10 w-full">
          <div
            ref={ref}
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            className="grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-row flex-wrap w-full px-2  justify-center md:justify-evenly items-center gap-2 md:gap-12"
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className={cn(
                  `flex min-w-[80px] sm:min-w-[350px] bg-gray-900 px-8 py-6 rounded-md md:rounded-2xl justify-center items-center gap-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105`
                )}
              >
                <div className="flex flex-col justify-center items-center gap-4 ">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={cn(
                      "h-[3vh] md:h-[5vh] object-contain",
                      partner.className
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};
