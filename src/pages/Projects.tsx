import CardList from "../components/CardList";

const Projects = () => {
    return (
        <div>
            <h1 className="text-6xl text-left font-bold pb-20">Project Page</h1>
            <div className="flex flex-col justify-start items-center min-h-screen">
                <CardList />
            </div>
        </div>
    );
};

export default Projects;