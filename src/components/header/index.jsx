import React from "react";
import Hero from "./hero";
import Navbar from "./navbar";

const Header = () => {
    return (
        <header className="w-full h-auto bg-gradient-to-r from-teal-400 to-yellow-200">
            <Navbar />
            <Hero />
        </header>
    );
};

export default Header;
