import supboard from '../assets/images/supboard.png';
import shore from '../assets/images/shore.jpg';
import SkillsGrid from '../components/Skill';
const About = () => {
    return (
        <div>
            <h1 className="text-6xl text-left pb-10 font-bold">About me</h1>
            <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col space-y-6 max-w-4xl mx-auto p-4">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <img className="max-w-xs object-contain rounded-full mx-auto" src={supboard} alt="Me on sup board" />
                    <div className='text-center md:text-left md:pl-12'>
                    <p>Hello! I am Tomas Glavina and I enjoy solving problems and creating things that live in 0s and 1s.
                    Currently, I am studying Software Engineering at Tampere University of Applied Sciences where I am a tutor for new students, which I'm loving so much!
                    I am a third year student with a 4.32/5 GPA and I already completed many 4th year courses like, 'FullStack Development', 'Operative Systems and Linux Programming', 'AI and Machine Learning', and more!
                    After this year, I will have only 5 courses left, and I'm planning on finishing one year earlier.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <img className="max-w-xs object-contain rounded-full mx-auto" src={shore} alt="Me on shore" />
                    <div className='text-center md:text-left md:pr-12'>
                            <p>Besides school, I am also learning Spring backend development, Linux Administration and Bash scripting, and doing CTFs for fun. Also, I am learning Data Structures and Algorithms, by reading Introduction to Algorithms by Thomas H. Cormen and applying them in Java.
                    My hobbies are going on hikes, reading (The Hobbit, best book ever), playing football, learning more about coding, and spending time with my friends.</p>
                </div>
            </div>
            <div className="pt-16">
                <h2 className="text-3xl font-bold text-center md:text-5xl md:text-left md:pb-10">Skills</h2>
                <SkillsGrid />
            </div>
        </div>
        </div>
        </div>
    );
};

export default About;
