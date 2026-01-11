import SectionTitle from "./Title";
import kdrama from "@/assets/images/crash-landing-on-you-smile.gif";
import bouldering from "@/assets/images/fail-jump.gif";
import hollowknight from "@/assets/images/hollow-knight.gif";
import itsumaki from "@/assets/images/salmon.gif";
import solaire from "@/assets/images/solaire.gif";
import ojosama from "@/assets/images/ojosama.gif";

export default function Interests() {
  const items = [
    { src: kdrama, alt: "kdrama" },
    { src: bouldering, alt: "bouldering" },
    { src: hollowknight, alt: "hollowknight" },
    { src: itsumaki, alt: "itsumaki" },
    { src: solaire, alt: "solaire" },
    { src: ojosama, alt: "ojosama, its time to go to bed" },
  ];
  return (
    <section id="interests" className="tile scroll-mt-24">
      <SectionTitle emoji="">python random_interests.py</SectionTitle>
      <div className="content grid grid-cols-3 grid-rows-2 gap-2 p-2 overflow-hidden">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="h-full w-full rounded-md object-cover"
          />
        ))}
      </div>
    </section>
  );
}
