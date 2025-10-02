import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SectionTitle from "@/components/Title";

type ContactInfoProps = {
  icon: IconDefinition;
  name: string;
  url: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, name, url }) => (
  <div className="flex items-center space-x-2">
    <FontAwesomeIcon icon={icon} />
    <a
      href={url}
      className="text-ctp-mauve hover:text-ctp-mauve/75 transition duration-150 ease-in-out"
    >
      {name}
    </a>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24">
      <SectionTitle emoji="✉️">contact</SectionTitle>
      <div className="content">
        <ContactInfo
          icon={faEnvelope}
          name="email"
          url="mailto:tomaslglavina@gmail.com"
        />
        <ContactInfo
          icon={faGithub}
          name="github"
          url="https://github.com/tomasglavina"
        />
        <ContactInfo
          icon={faLinkedin}
          name="linkedin"
          url="https://www.linkedin.com/in/tomasglavina/"
        />

        <p>city: tampere, finland</p>
      </div>
    </section>
  );
};

export default Contact;
