import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faJsSquare, faAws, faGitAlt, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

type SkillProps = {
    icon: any;
    label: string;
    description: string;
};

const Skill: React.FC<SkillProps> = ({ icon, label, description }) => (
    <div className='flex flex-row items-start space-x-4 p-4'>
        <FontAwesomeIcon icon={icon} size="3x" />
        <div className="flex-grow text-left">
            <p className="text-xl font-bold">{label}</p>
            <p className="mt-2 text-sm">{description}</p>
        </div>
    </div>
);


const SkillsGrid: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skill icon={faJava} label="Java & Spring" description='Core - OOP - Functional Programming - Dependency Injection -
                  Var-Args - Packages - Security - Boot - Data' />
        <Skill icon={faReact} label="React" description='JSX - State Management - Redux - Router - NextJS - Jest ' />
        <Skill icon={faJsSquare} label="TypeScript & NodeJs" description='Type annotations - Generics - Classes - Interfaces - Server handling - Event Driven Architecture - Modules - Express - Debugging' />
        <Skill icon={faAws} label="AWS" description='EC2 - S3 - RDS - Console - CLI - IAM - Lambda - Databases' />
        <Skill icon={faDatabase} label="Database" description='SQL: PostgreSQL, MySQL, AmazonRDS, SQLite
NoSQL: MongoDB, DynamoDB, Cassandra' />        
        <Skill icon={faGitAlt} label="Git" description='Pull Requests - Merging/Rebasing - Cherry Picking - Git Flow' />
        <Skill icon={faLinux} label="Linux" description='Command-Line Tools (grep, sed, awk, find, etc) - Networking - File Systems (ext4, btrfs) - Bash and Python Scripting - im - Package Management (APT, DNF and Pacman) - Processes - System Administration - SSH' />
        {/*<Skill icon={faCode} label="Bash" />*/}

        {/* Add more skills as needed */}
    </div>
);

export default SkillsGrid;
