import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import HeroImages from "../../../assets/hero-dark.png";
const Hero = () => {
    return (
        <section
            id="hero"
            className="p-[190px] h-auto w-full bg-gray-900 text-white flex items-center"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            Hi, I'm{" "}
                            <span className="text-indigo-400">
                                Ulugbek Eshnazarov
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl mb-8 text-gray-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            A passionate Full-Stack Developer specializing in
                            creating seamless web experiences with cutting-edge
                            technologies.
                        </motion.p>
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <motion.a
                                href="#projects"
                                className="group bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Work
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="group bg-transparent border-2 border-indigo-400 text-indigo-400 px-6 py-3 rounded-full hover:bg-indigo-400 hover:text-white transition duration-300 flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>
                        <div className="mt-8 flex justify-center md:justify-start space-x-4">
                            <motion.a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaGithub className="text-gray-400 hover:text-white transition-colors text-2xl" />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaLinkedin className="text-gray-400 hover:text-white transition-colors text-2xl" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <img
                            src={HeroImages}
                            alt="Profile"
                            className="w-full rounded-md object-cover shadow-2xl border-4 border-indigo-400"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-gray-900/20" />
            </motion.div>
        </section>
    );
};

export default Hero;
