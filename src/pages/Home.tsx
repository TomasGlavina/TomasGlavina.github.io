import meInca from '../assets/images/me-inca.jpeg';

const Home = () => {
    return (
        <>
        <div className='flex flex-col justify-evenly items-center md:flex-row md:justify-between'>
            <div className='text-start pr-32'>
                <h1 className='text-3xl'>Hola,</h1>
                <h1 className='flex items-end text-6xl whitespace-nowrap'>
                    I am
                    <span className='pl-3 text-6xl text-mauve'>Tomás</span>
                </h1>
                <h3>Software Engineering Student</h3>
                <p className='py-5'>I am an Italian-Argentine Software Engineering student at TAMK in Tampere, Finland</p>
            </div>
            <div>
                <img className='max-w-sm h-auto rounded-full sm:max-w-xs' src={meInca} alt="Me and Inca" />
            </div>
        </div>
        </>
    );
};

export default Home;