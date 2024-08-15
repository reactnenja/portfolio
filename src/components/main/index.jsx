import React from "react";
import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Skills from "./skills";

const Main = () => {
    return (
        <main className="w-full h-auto bg-gradient-to-r from-emerald-400 to-cyan-400">
            <Portfolio />
            <About />
            <Skills />
            <Contact />
        </main>
    );
};

export default Main;
