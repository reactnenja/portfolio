import { motion } from "framer-motion";
import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTelegramPlane,
    FaTwitter,
} from "react-icons/fa";

const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
    return (
        <motion.footer
            className="bg-gray-800  text-white py-6"
            variants={footerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">
                        Biz bilan bog'laning
                    </h3>
                    <p>
                        &copy; 2024 Sayt Yozamiz. Barcha huquqlar himoyalangan.
                    </p>
                </div>
                <div className="flex space-x-4">
                    <a
                        href="https://t.me/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaTelegramPlane size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-500"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <FaTwitter size={24} />
                    </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
