import React from "react";
import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Skills from "./skills";

const Main = () => {
    return (
        <main>
            <Skills />
            <Portfolio />
            <About />
            <Contact />
        </main>
    );
};

export default Main;
