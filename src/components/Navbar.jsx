function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-80 text-white p-4 z-50">
            <div className="max-w-6xl mx-auto flex justify-between">
                <h1 className="font-bold">Andreea</h1>

                <div className="flex gap-6">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;