import React, { useCallback, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    const navItems = [
        { name: "home", href: "#hero" },
        { name: "portfolio", href: "#portfolio" },
        { name: "about", href: "#about" },
        { name: "skills", href: "#skills" },
        { name: "contact", href: "#contact" },
    ];

    const handleNavItemClick = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 py-3 transition-all duration-300 ${
                scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a
                        href="/"
                        className="border-white p-2 border-2 rounded-md transition-transform duration-300 hover:scale-105 active:scale-95"
                    >
                        <span className="text-white text-xl font-bold">
                            Engineer
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white font-medium text-lg capitalize hover:text-indigo-400 transition-colors duration-300 hover:scale-110 active:scale-95"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 transition-transform duration-300 active:scale-90"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Side Drawer */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-[300px] bg-black shadow-lg transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-600">
                    <a
                        href="/"
                        className="border-white p-2 border-2 rounded-md transition-transform duration-300 hover:scale-105 active:scale-95"
                    >
                        <span className="text-white text-xl font-bold">
                            Engineer
                        </span>
                    </a>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white p-2 transition-transform duration-300 active:scale-90"
                        aria-label="Close menu"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>
                <ul className="flex flex-col items-start space-y-6 p-4">
                    {navItems.map((item) => (
                        <li key={item.name} className="w-full">
                            <a
                                href={item.href}
                                className="block w-full text-white font-medium text-xl capitalize hover:text-indigo-400 transition-all duration-300 hover:pl-2"
                                onClick={handleNavItemClick}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
