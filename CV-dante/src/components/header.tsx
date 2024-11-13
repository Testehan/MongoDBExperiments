
const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-2xl font-bold">Dan Testehan</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
                        <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
                        <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
                        <li><a href="#experience" className="hover:text-yellow-400">Experience</a></li>
                        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;