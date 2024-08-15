import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";
import {
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaPython,
    FaReact,
    FaRust,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
    SiAxios,
    SiChakraui,
    SiFormik,
    SiLinux,
    SiMacos,
    SiMui,
    SiNextdotjs,
    SiReactquery,
    SiRedux,
    SiTypescript,
    SiWindows11,
} from "react-icons/si";

const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 size={50} /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt size={50} /> },
    { id: 3, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 4, name: "TailwindCss", icon: <RiTailwindCssFill size={50} /> },
    { id: 5, name: "Mui", icon: <SiMui size={50} /> },
    { id: 6, name: "ChakraUI", icon: <SiChakraui size={50} /> },
    { id: 7, name: "Nextjs", icon: <SiNextdotjs size={50} /> },
    { id: 8, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 9, name: "React", icon: <FaReact size={50} /> },
    { id: 10, name: "Redux", icon: <SiRedux size={50} /> },
    { id: 11, name: "Typescript", icon: <SiTypescript size={50} /> },
    { id: 12, name: "Python", icon: <FaPython size={50} /> },
    { id: 13, name: "Rust", icon: <FaRust size={50} /> },
    { id: 14, name: "Golang", icon: <FaGolang size={50} /> },
    { id: 15, name: "Linux", icon: <SiLinux size={50} /> },
    { id: 16, name: "MacOs", icon: <SiMacos size={50} /> },
    { id: 17, name: "Windows", icon: <SiWindows11 size={50} /> },
    { id: 18, name: "Axios", icon: <SiAxios size={50} /> },
    { id: 19, name: "ReactQuery", icon: <SiReactquery size={50} /> },
    { id: 20, name: "Formik", icon: <SiFormik size={50} /> },
    // Qo'shimcha skilllar qo'shishingiz mumkin
];

const Skills = () => {
    return (
        <div className="py-[120px] " id="skills">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
                    My Skills
                </h2>

                {/* Marquee for skills */}
                <div className="mb-12">
                    <Marquee speed={50} gradient={false}>
                        {skills.map((skill) => (
                            <div key={skill.id} className="mx-4 py-8 px-4">
                                <motion.div
                                    className="w-[200px] flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4"
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow:
                                            "0 10px 20px rgba(0, 0, 0, 0.2)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {skill.name}
                                    </h3>
                                </motion.div>
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
                            whileHover={{
                                scale: 1.05,
                                rotate: 2,
                                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-24 h-24 mb-4 flex items-center justify-center">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
