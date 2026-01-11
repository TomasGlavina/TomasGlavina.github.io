import Autoplay from "embla-carousel-autoplay";
import hotelTN1 from "../assets/images/hotel-tn1.png";
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
import SectionTitle, { SectionTitleClose } from "@/components/Title.tsx";

const projects = [
  {
    title: "sorting visualizer",
    description: "algorithms in the browser.",
    thumbnail: sortVis,
  },
  {
    title: "cli dotfiles",
    description: "linux + tmux + nvim workflow.",
    thumbnail: hotelTN1,
  },
  // …add more
];

export default function ProjectsCarousel({
  onOpen,
}: {
  onOpen?: () => void;
}) {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section id="projects" className="tile scroll-mt-24">
      <SectionTitle emoji="📂" onOpen={onOpen}>
        projects
      </SectionTitle>
      <div className="content p-0 overflow-hidden">
        <Carousel
          className="group relative h-full w-full"
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
        >
          <CarouselContent
            className="h-full -ml-0 items-stretch"
            containerClassName="h-full"
          >
            {projects.map((p) => (
              <CarouselItem key={p.title} className="basis-full h-full pl-0">
                <Card
                  {...p}
                  className="h-full rounded-none border-0 shadow-none flex flex-col"
                  imageClassName="h-24 md:h-28 lg:h-32 flex-none"
                  contentClassName="flex-1"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity left-3 top-auto bottom-3 translate-y-0" />
          <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity right-3 top-auto bottom-3 translate-y-0" />
        </Carousel>
      </div>
    </section>
  );
}

export function ProjectsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-4">
      <SectionTitleClose emoji="📂" onClose={onClose}>
        projects
      </SectionTitleClose>
      <div className="content grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
