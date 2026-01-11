import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import SectionTitle, { SectionTitleClose } from "@/components/Title";

type ContactInfoProps = {
  icon: IconDefinition;
  name: string;
  url: string;
  onClick?: () => void;
};

const ContactInfo = ({
  icon,
  name,
  url,
  onClick,
}: ContactInfoProps) => (
  <div className="flex items-center space-x-2">
    <FontAwesomeIcon icon={icon} />
    {onClick ? (
      <button
        type="button"
        onClick={onClick}
        className="text-ctp-green hover:text-ctp-text transition duration-150 ease-in-out"
      >
        {name}
      </button>
    ) : (
      <a
        href={url}
        className="text-ctp-green hover:text-ctp-text transition duration-150 ease-in-out"
      >
        {name}
      </a>
    )}
  </div>
);

export default function Contact({ onOpen }: { onOpen?: () => void }) {
  return (
    <section id="contact" className="tile scroll-mt-24">
      <SectionTitle emoji="✉️" onOpen={onOpen}>
        contact
      </SectionTitle>
      <div className="content">
        <ContactInfo
          icon={faEnvelope}
          name="email"
          url="mailto:tomaslglavina@gmail.com"
          onClick={onOpen}
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
}

export function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-4">
      <SectionTitleClose emoji="✉️" onClose={onClose}>
        contact
      </SectionTitleClose>
      <div className="content">
        <form
          className="space-y-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs uppercase tracking-wide">
              name
            </label>
            <input
              id="name"
              type="text"
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2 text-ctp-text placeholder:text-ctp-overlay1 focus:outline-none focus:ring-2 focus:ring-ctp-green/50"
              placeholder="your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs uppercase tracking-wide">
              email
            </label>
            <input
              id="email"
              type="email"
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2 text-ctp-text placeholder:text-ctp-overlay1 focus:outline-none focus:ring-2 focus:ring-ctp-green/50"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-wide"
            >
              message
            </label>
            <textarea
              id="message"
              rows={5}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2 text-ctp-text placeholder:text-ctp-overlay1 focus:outline-none focus:ring-2 focus:ring-ctp-green/50"
              placeholder="say hi..."
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-ctp-green px-4 py-2 text-sm font-semibold uppercase tracking-wide text-ctp-crust hover:bg-ctp-green/90"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
