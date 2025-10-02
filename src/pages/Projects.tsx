import Autoplay from "embla-carousel-autoplay";
import hotelTN1 from "../assets/images/hotel-tn1.png";
import weatherPage from "../assets/images/weather-page-sc.png";
import sortVis from "../assets/images/sorting-alg-vis.png";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../components/Card.tsx";
import SectionTitle from "@/components/Title.tsx";

const projects = [
  {
    title: "sorting visualizer",
    description: "algorithms in the browser.",
    thumbnail: sortVis,
    tags: ["React", "TS"],
  },
  {
    title: "cli dotfiles",
    description: "linux + tmux + nvim workflow.",
    thumbnail: hotelTN1,
    tags: ["Linux", "tmux"],
  },
  // …add more
];

export default function ProjectsCarousel() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section>
      <SectionTitle emoji="📂">projects</SectionTitle>
      <Carousel
        className="group relative w-full"
        opts={{ align: "start", loop: true }}
        plugins={[autoplay.current]}
      >
        <CarouselContent>
          {projects.map((p) => (
            <CarouselItem key={p.title} className="basis-full ">
              <Card {...p} /> {/* ← reuse your Card */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-3 flex justify-end gap-2">
          <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Carousel>
    </section>
  );
}
