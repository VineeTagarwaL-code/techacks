"use client";
import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ContainerScroll } from "./UI/container-scroll-animation";
export const Video = () => {
  const { scrollY } = useViewportScroll();
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      setVideoHeight(videoElement.offsetHeight);
    }
  }, []);

  const scale = useTransform(scrollY, [0, videoHeight], [1, 0.5]);
  const opacity = useTransform(scrollY, [0, videoHeight], [1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className=""
    >
      <ContainerScroll>
        <motion.video
          src="/video.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full  rounded-xl md:rounded-3xl"
        />
      </ContainerScroll>
    </motion.div>
  );
};

export default Video;
