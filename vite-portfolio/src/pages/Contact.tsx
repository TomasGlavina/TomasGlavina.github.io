import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

type ContactInfoProps = {
    icon: IconDefinition;
    name: string;
    url: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, name, url }) => (
    <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={icon} />
            <a href={url} className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">{name}</a>
    </div>
);

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <ContactInfo 
                icon={faEnvelope} 
                name="tomaslglavina@gmail.com" 
                url="mailto:tomaslglavina@gmail.com" 
            />
            <ContactInfo 
                icon={faLinkedin} 
                name="LinkedIn" 
                url="https://www.linkedin.com/in/tomasglavina/" 
            />
            <ContactInfo 
                icon={faGithub} 
                name="GitHub" 
                url="https://github.com/tomasglavina" 
            />
            <ContactInfo 
                icon={faInstagram} 
                name="Instagram" 
                url="https://www.instagram.com/tomiglavina/" 
            />
            <div>
                <p>City: Tampere, Finland</p>
            </div>
        </div>
    );
};

export default Contact;
