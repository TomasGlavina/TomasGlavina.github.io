import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    return (
        <nav className="mocha bg-base fixed top-0 left-0 right-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-white font-bold text-xl">
                            Tomas Glavina
                        </Link>
                    </div>
                    <div className="flex">
                        
                        <Link
                            to="/about"
                            className="text-gray-300 hover:bg-flamingo hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            className="text-gray-300 hover:bg-flamingo hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-300 hover:bg-flamingo hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
