"use client";
import { SectionWrapper } from "./Section-wrapper";
import { CarouselTestimonials } from "./testimonials-carousel";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionWrapper className="my-12 overflow-hidden">
      <div className="flex flex-col overflow-hidden">
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className="w-full overflow-hidden"
        >
          {" "}
          {/* <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          /> */}
          <CarouselTestimonials testiMonials={testimonials} />
        </div>
      </div>
    </SectionWrapper>
  );
};

const testimonials = [
  {
    name: "Ashutosh Soni ",
    image: "/Ashutosh.png",
    title: "7th sem - Acropolis Institute of Technology and Research Indore",
    quote:
      "Techacks 4.0 holds a special place in my heart. The journey, the commute, and the venue were exhilarating. Since it was my first hackathon in a different city, my team and I were very excited. The overall experience was top-notch; the organizing team took care of every detail and comfort of the hackers despite the chill weather, making it truly memorable. Networking and competing alongside such talented individuals was an incredible experience. Emerging as the first runner-up made all our hard work worthwhile",
  },
  {
    name: "Akash Pal",
    image: "/akash.jpg",
    title: "KIET groups of institution , ghaziabad",
    quote:
      "The TECHACKS 4.0 was an amazing experience in my life. It was my greatest and first-ever hackathon achievement, full of unforgettable memories.Winning a hackathon was not just about the prize but the journey and the lessons learned along the way. It was an unforgettable experience that I cherish and continually draw inspiration from. Thank you team Techacks for organising this wonderful event, looking forward to work with you in the team.",
  },
  {
    name: "Sneha Sharma ",
    image: "/sneha.jpg",
    title: "Chitkara University, Sem 5, Student",
    quote:
      "Participating in Techacks 4.0, my first hackathon, provided me with an invaluable experience and an exciting opportunity to acquire new skills. It was a stimulating and intellectually challenging event where I encountered many experienced and talented individuals showcasing their remarkable ideas. This opportunity allowed me to build meaningful connections and gain significant insights. I am grateful to my team and mentors for their support and guidance throughout this journey. ",
  },
  {
    name: "Yash Kumar Parashar",
    image: "/Yash_Parashar.jpg",
    title: "NIT Kurukshetra (5th semester)",
    quote:
      "Techacks 4.0 was a transformative 36-hour hackathon that helped me realize my potential. The supportive and kind mentors were invaluable, guiding us through challenges and encouraging our growth. Events like this not only hone our technical skills but also foster connections with like-minded individuals, creating a vibrant community of innovators. Participating in Techacks 4.0 was a rewarding experience, affirming my ability to achieve great things and pushing me to explore new horizons. ",
  },
  {
    name: "Aditya Kumar Singh",
    image: "/Aditya_Kumar_Singh.jpg",
    title: "SRMIST 5th Semester ",
    quote:
      "Techacks was a extremely well planned and phenomenonal experience be it for a first timer or a experienced hacker. The sessions organized were just pure craft. I look forward to all spirits forecoming Techacks Season Holds!",
  },
  {
    name: "Karan Gajanan Mali",
    image: "/karan_mali.jpeg",
    title: "Chandigarh University 7th semester",
    quote:
      "TechHacks 4.0 was an amazing opportunity to network and meet people having common interests, the themes were innovative and new and did proposed challenges that were fun to solve. Also the organisation of the whole event was really good. Apart from winning in the hardware track the best part for me was that we had fun! ",
  },
];
