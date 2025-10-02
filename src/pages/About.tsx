import supboard from "../assets/me-draw-2.png";
import { SectionTitleClose } from "@/components/Title";

const About = ({ onOpenAbout }: { onOpenAbout: () => void }) => {
  return (
    <section id="about" className=" m-0 scroll-mt-24">
      <SectionTitleClose emoji="(˶˃ ᵕ ˂˶)" onOpenAbout={onOpenAbout}>
        About me
      </SectionTitleClose>
      <div className="flex justify-center overflow-hidden items-center ">
        <div className="flex flex-col space-y-6 max-w-4xl p-4">
          <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="text-center md:text-left md:pl-4">
              <p>
                Hello! I am Tomas Glavina and I enjoy solving problems and
                creating things that live in 0s and 1s. Currently, I am
                finishing my studies Software Engineering at Tampere University
                of Applied Sciences where I am a tutor for new students, which
                I'm loving so much! I am a fourth year student with a 4.32/5 GPA
                and I am currently working on my thesis and completed courses
                like 'FullStack Development', 'Operative Systems and Linux
                Programming', 'AI and Machine Learning', and more!{" "}
              </p>
              <p> </p>
              <p>
                Besides school, I am also learning Go, Linux Administration and
                Bash scripting, and doing CTFs for fun. Also, I love reading
                both fiction and knowledge books, currently reading Introduction
                to Algorithms by Thomas H. Cormen and applying them in React. My
                hobbies are singin karaoke, bouldering, muay thai, going on
                hikes, reading (The Hobbit, best book ever), gaming (Zelda,
                Pokemon, you name it), and spending time with my friends.
              </p>
            </div>
            <img
              className="max-w-xs object-contain rounded-full mx-auto"
              src={supboard}
              alt="Me on sup board"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
