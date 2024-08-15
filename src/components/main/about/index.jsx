import { motion } from "framer-motion";
import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="bg-gray-900  text-white py-[120px] w-full h-auto px-6"
        >
            <div className="container mx-auto px-4 xl:h-[650px]">
                {/* Header Section */}
                <div className="flex justify-center items-center flex-col h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            className="text-4xl font-bold mb-4"
                            whileHover={{ scale: 1.05, color: "#F3C14C" }}
                            transition={{ duration: 0.3 }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="text-lg mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Hello! I'm a passionate software developer with
                            experience in building responsive and interactive
                            web applications. I love exploring new technologies
                            and constantly strive to improve my skills.
                        </motion.p>
                        <motion.p
                            className="text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            My journey in tech began with a fascination for
                            coding and problem-solving. Over the years, I've
                            worked on various projects, honing my skills in
                            frontend and backend development. Whether it's
                            crafting elegant UI/UX designs or optimizing backend
                            performance, I take pride in delivering high-quality
                            solutions.
                        </motion.p>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <motion.h3
                            className="text-2xl font-semibold mb-4"
                            whileHover={{ scale: 1.05, color: "#F3C14C" }}
                            transition={{ duration: 0.3 }}
                        >
                            Skills
                        </motion.h3>
                        <motion.ul
                            className="flex flex-wrap gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {[
                                "React",
                                "Node.js",
                                "JavaScript",
                                "CSS",
                                "Tailwind CSS",
                            ].map((skill, index) => (
                                <motion.li
                                    key={index}
                                    className="bg-gray-800 px-6 py-3 rounded-full cursor-pointer"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: -5,
                                        backgroundColor: "#F3C14C",
                                        color: "#000",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
