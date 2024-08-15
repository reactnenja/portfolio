import { motion } from "framer-motion";
import React, { useState } from "react";
import { portfolioData } from "../../../assets/data/portfolioData";

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    // Dinamik tablarni olish
    const categories = [
        ...new Set(portfolioData.map((project) => project.category)),
        "all",
    ];

    const filteredProjects = portfolioData
        .filter((project) => filter === "all" || project.category === filter)
        .filter((project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="w-full h-screen text-white p-44" id="portfolio">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
                    My Portfolio
                </h2>

                {/* Search */}
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-md px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600"
                    />
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 mx-2 rounded-lg ${
                                filter === category
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-200 dark:bg-gray-700"
                            }`}
                        >
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Portfolio Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300"
                            whileHover={{
                                scale: 1.05,
                                rotate: 2,
                                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => handleOpenModal(project)}
                        >
                            <div className="relative">
                                <motion.img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <button
                                    onClick={() => handleOpenModal(project)}
                                    className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black backdrop-blur-xl bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-4xl flex"
                            initial={{ y: "-100vh" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100vh" }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-1/2 p-6">
                                <img
                                    src={selectedProject.imageUrl}
                                    alt={selectedProject.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-1/2 p-6 flex flex-col justify-between">
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-8 right-8 bg-green-600 p-4 text-white text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <h3 className="text-2xl font-semibold mb-2">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {selectedProject.description}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                    <strong>Author:</strong>{" "}
                                    {selectedProject.author}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                    <strong>Tech Stack:</strong>{" "}
                                    {selectedProject.techStack}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                    <strong>Technologies:</strong>{" "}
                                    {selectedProject.technologies}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                    <strong>Features:</strong>{" "}
                                    {selectedProject.features}
                                </p>
                                <a
                                    href={selectedProject.link}
                                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                >
                                    Visit Project
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
