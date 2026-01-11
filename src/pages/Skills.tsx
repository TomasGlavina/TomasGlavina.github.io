import SectionTitle from "@/components/Title";
import SkillsGrid from "../components/Skill";

export default function Skills() {
  return (
    <section className="tile" id="skills">
      <SectionTitle emoji="🛠️">skills</SectionTitle>
      <div className="content">
        <SkillsGrid />
      </div>
    </section>
  );
}
