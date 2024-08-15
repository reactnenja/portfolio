import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black p-3 fixed top-0 w-full z-50">
            <div className="container mx-auto px-5">
                <div className="flex justify-between items-center">
                    <a
                        href="/"
                        className="border-white p-2 border-2 rounded-md"
                    >
                        <span className="text-white text-2xl">Engineer</span>
                    </a>

                    {/* Menu Button for Mobile */}
                    <div className="block lg:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="text-white text-2xl"
                            aria-label="Toggle menu"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            &#9776; {/* Burger Icon */}
                        </motion.button>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-4">
                        <motion.ul className="flex">
                            <li>
                                <motion.a
                                    href="#hero"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    home
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="#portfolio"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    portfolio
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="#about"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    about
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="#skills"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    skills
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="#contact"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    contact
                                </motion.a>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden fixed top-[70px] left-0 w-full h-full bg-black text-white z-40 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.ul className="flex flex-col gap-4 items-center">
                            <li className="mb-4">
                                <motion.a
                                    href="#hero"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    home
                                </motion.a>
                            </li>
                            <li className="mb-4">
                                <motion.a
                                    href="#portfolio"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    portfolio
                                </motion.a>
                            </li>
                            <li className="mb-4">
                                <motion.a
                                    href="#about"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    about
                                </motion.a>
                            </li>
                            <li className="mb-4">
                                <motion.a
                                    href="#skills"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    skills
                                </motion.a>
                            </li>
                            <li className="mb-4">
                                <motion.a
                                    href="#contact"
                                    className="text-white font-medium text-xl capitalize hover:bg-gray-800 transition-all duration-300 px-4 py-3 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    contact
                                </motion.a>
                            </li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
