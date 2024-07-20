"use client";
import { motion } from "framer-motion";
import { SectionWrapper } from "./Section-wrapper";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <SectionWrapper>
      <div className="border-t-[1px] border-purple-300 border-solid flex flex-row justify-center items-center py-8 select-none mx-2">
        <div>
          <h1 className="text-lg sm:text-2xl font-semibold text-center  md:text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#51D7FD] via-[#ad51e5]  to-[#F8C342]">
            Made with 💜 by Team Techacks
          </h1>
          <div className="flex justify-center items-center gap-[5px] md:gap-5 mt-6 flex-nowrap">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className={` text-[.8rem] md:text-xl raleway  hover:text-white transition-all duration-300 ease-in-out text-[${link.color}]`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            <div className="flex justify-center items-center gap-6 mt-6">
              {socials.map((social) => (
                <div
                  key={social.link}
                  className="p-3 rounded-full group  hover:bg-gray-900 hover:scale-105 cursor-pointer transition-all"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 "
                  >
                    {social.Logo}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t-[1px] rounded-sm border-solid border-gray-400 mt-8 py-6 flex justify-center items-center w-[60%] mx-auto">
            <p className="text-gray-400 text-[.7rem] md:text-xl">
              Copyright © Techacks, 2024
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Footer;

const links: {
  name: string;
  link: string;
  color: string;
}[] = [
  {
    name: "Code of Conduct",
    link: "https://drive.google.com/file/d/1uOs5x2799Ch3SH5xzMorH1kSIth5zn40/vieww",
    color: "#51D7FD",
  },

  {
    name: "Get Started With Open Source",
    link: "https://linkin.bio/techacksxopensource/",
    color: "#F8C342",
  },
];

const socials = [
  {
    Logo: (
      <Twitter className="group-hover:text-purple-600 transition-all hover:scale-105" />
    ),

    link: "https://twitter.com/techackscu",
  },
  {
    Logo: (
      <Facebook className="group-hover:text-purple-600 transition-all hover:scale-105" />
    ),
    link: "https://www.facebook.com/techackscu/",
  },
  {
    Logo: (
      <Instagram className="group-hover:text-purple-600 transition-all hover:scale-105" />
    ),
    link: "https://www.instagram.com/techacks.cu",
  },
  {
    Logo: (
      <Linkedin className="group-hover:text-purple-600 transition-all hover:scale-105" />
    ),
    link: "https://www.linkedin.com/company/techacks-cu",
  },
  {
    Logo: (
      <Mail className="group-hover:text-purple-600 transition-all hover:scale-105" />
    ),
    link: "mailto:techackscu@gmail.com",
  },
];
