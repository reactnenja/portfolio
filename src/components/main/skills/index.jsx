import React from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import TypeIt from "typeit-react";

const Skills = () => {
    return (
        <section
            id="skills"
            className="w-full h-[100vh] max-md:h-auto bg-slate-900"
        >
            <div className="container mx-auto  max-w-[1380px] px-[15px]">
                <h2 className="text-5xl font-bold text-slate-50">
                    <TypeIt
                        options={{
                            strings: ["Mening o'zlashtirgan ko'nikmalarim...."],
                            speed: 200,
                            loop: true,
                            cursorSpeed: 1000,
                            cursor: false,
                        }}
                    />
                </h2>

                <div className="mt-10 grid grid-cols-3 gap-4 max-md:grid-cols-1">
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <FaHtml5 />
                            </span>{" "}
                            HTML5
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <FaCss3 />
                            </span>{" "}
                            CSS3
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <IoLogoJavascript />
                            </span>{" "}
                            JavaScript
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>

                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <FaSass />
                            </span>{" "}
                            SASS / SCSS
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <IoLogoNodejs />
                            </span>{" "}
                            Tailwind Css
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <IoLogoNodejs />
                            </span>{" "}
                            Bulma
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <FaBootstrap />
                            </span>{" "}
                            Bootstrap
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <IoLogoNodejs />
                            </span>{" "}
                            AntDesign
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <IoLogoNodejs />
                            </span>{" "}
                            Nodejs
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <SiTypescript />
                            </span>{" "}
                            TypeScript
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <FaReact />
                            </span>{" "}
                            Reactjs
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                    <div className="max-md:text-center max-md:hover:scale-90 border-2 border-white p-10 hover:bg-green-600 hover:border-green-600 rounded-md hover:scale-125 duration-200 cursor-pointer">
                        <h3 className="text-3xl font-bold text-slate-50 flex gap-4 items-center">
                            <span className="text-5xl">
                                <SiNextdotjs />
                            </span>{" "}
                            Nextjs
                        </h3>
                        <p className="text-xl font-sora text-slate-50 mt-10"></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
