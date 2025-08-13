"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  {
    id: 1,
    img: "/day-1/f1 logo.png",
  },

  {
    id: 2,
    img: "/day-1/redbull.png",
  },
];

export default function HeroCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        loop: true,
        align: "start",
      }}
      className="w-sm"
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id} className="basis-1/4">
            <Image
              width={200}
              height={200}
              src={slide.img}
              alt="Carousel Images"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
