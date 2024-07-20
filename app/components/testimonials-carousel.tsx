import * as React from "react";

import { Card, CardContent } from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/Carousel";
export function CarouselTestimonials({
  testiMonials,
}: {
  testiMonials: {
    quote: string;
    name: string;
    image: string;
    title: string;
  }[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {testiMonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className=" md:basis-1/2 lg:basis-1/3 select-none"
          >
            <div className="p-1 flex justify-center items-center ">
              <Card className="max-w-sm lg:w-[380px] bg-black/20  h-[450px] border-[1px] border-purple-700 border-solid">
                <CardContent className="flex h-full items-center justify-center  bg-black/40 border-none ">
                  <div className=" h-full flex flex-col justify-between py-6 px-3 ">
                    <span className=" relative z-20 text-sm leading-[1.6] text-purple-400 font-normal">
                      {testimonial.quote}
                    </span>
                    <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <span className="flex flex-col gap-1">
                        <span className=" text-sm leading-[1.6] text-white font-normal">
                          {testimonial.name}
                        </span>
                        <span className=" text-sm leading-[1.6] text-white font-normal">
                          {testimonial.title}
                        </span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
