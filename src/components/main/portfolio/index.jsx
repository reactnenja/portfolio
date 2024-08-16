import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { portfolioData } from "../../../assets/data/portfolioData";

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        "all",
        ...new Set(portfolioData.map((project) => project.category)),
    ];

    const filteredProjects = portfolioData
        .filter((project) => filter === "all" || project.category === filter)
        .filter((project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const handleOpenModal = (project) => setSelectedProject(project);
    const handleCloseModal = () => setSelectedProject(null);

    return (
        <section
            id="portfolio"
            className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                    My Portfolio
                </h2>

                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
                    <div className="relative w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    filter === category
                                        ? "bg-indigo-600 text-white"
                                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                                } transition-colors duration-200`}
                            >
                                {category.charAt(0).toUpperCase() +
                                    category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {project.description.slice(0, 100)}...
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

                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
                                initial={{ y: "-100vh" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100vh" }}
                            >
                                <div className="relative p-6">
                                    <button
                                        onClick={handleCloseModal}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                    >
                                        <FaTimes className="w-6 h-6" />
                                    </button>
                                    <img
                                        src={selectedProject.imageUrl}
                                        alt={selectedProject.title}
                                        className="w-full h-64 object-cover rounded-lg mb-6"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {selectedProject.description}
                                    </p>
                                    <div className="space-y-2">
                                        <p>
                                            <strong>Author:</strong>{" "}
                                            {selectedProject.author}
                                        </p>
                                        <p>
                                            <strong>Tech Stack:</strong>{" "}
                                            {selectedProject.techStack}
                                        </p>
                                        <p>
                                            <strong>Technologies:</strong>{" "}
                                            {selectedProject.technologies}
                                        </p>
                                        <p>
                                            <strong>Features:</strong>{" "}
                                            {selectedProject.features}
                                        </p>
                                    </div>
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                                    >
                                        Visit Project
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Portfolio;
