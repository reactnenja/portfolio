import {
    FaBootstrap,
    FaCss3,
    FaHtml5,
    FaNodeJs,
    FaReact,
    FaSass,
} from "react-icons/fa";
import {
    RiBearSmileLine,
    RiNextjsFill,
    RiTailwindCssFill,
} from "react-icons/ri";
import {
    SiAntdesign,
    SiAxios,
    SiBem,
    SiBulma,
    SiChakraui,
    SiJavascript,
    SiMui,
    SiShadcnui,
    SiTypescript,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import "./index.scss";
const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <h1>Skills</h1>
                <div className="skills__content">
                    <div className="skills__content-left">
                        <p className="skills__content-left__item">
                            <strong>
                                <i>
                                    <mark>HTML:</mark>
                                </i>
                            </strong>{" "}
                            HTML (HyperText Markup Language) is the standard
                            markup language used to create web pages. It
                            provides the structure of a webpage, allowing you to
                            define elements like headings, paragraphs, images,
                            links, and more.
                        </p>

                        <p className="skills__content-left__item">
                            <strong>
                                <i>
                                    <mark>Sass:</mark>
                                </i>
                            </strong>{" "}
                            Sass (Syntactically Awesome Style Sheets) is a
                            preprocessor scripting language that is interpreted
                            or compiled into CSS. It allows you to use
                            variables, nested rules, mixins, and functions,
                            making CSS more maintainable and extendable.
                        </p>
                        <p className="skills__content-left__item">
                            <strong>
                                <i>
                                    <mark>JavaScript: </mark>
                                </i>
                            </strong>
                            JavaScript is a versatile, high-level programming
                            language commonly used in web development. It
                            enables interactive elements, dynamic content, and
                            enhances the user experience by manipulating the
                            DOM.
                        </p>
                        <p className="skills__content-left__item">
                            <strong>
                                <i>
                                    <mark>TypeScript: </mark>
                                </i>
                            </strong>
                            TypeScript is a strongly typed superset of
                            JavaScript that compiles to plain JavaScript. It
                            adds static types, classes, interfaces, and other
                            features, enhancing the development experience and
                            helping catch errors early.
                        </p>
                        <p className="skills__content-left__item">
                            <strong>
                                <i>
                                    <mark>React.js</mark>
                                </i>
                            </strong>{" "}
                            React.js is a JavaScript library for building user
                            interfaces, particularly single-page applications.
                            It allows developers to create reusable UI
                            components and manage the state efficiently, leading
                            to fast and scalable web apps.
                        </p>

                        <p className="skills__content-left__item">
                            <strong>
                                <i>
                                    <mark>Next.js</mark>
                                </i>
                            </strong>{" "}
                            Next.js is a React framework that enables
                            server-side rendering and static site generation. It
                            provides features like API routes, automatic code
                            splitting, and optimized performance, making it
                            ideal for building modern web applications.
                        </p>
                    </div>
                    <div className="skills__content-right">
                        <p className="skills__content-right__item">
                            <FaHtml5 className="icons" />
                            <span className="text">HTML5</span>
                        </p>
                        <p className="skills__content-right__item">
                            <FaCss3 className="icons" />
                            <span className="text">CSS</span>
                        </p>
                        <p className="skills__content-right__item">
                            <SiBem className="icons" />
                            <span className="text">BEM</span>
                        </p>
                        <p className="skills__content-right__item">
                            <FaSass className="icons" />
                            <span className="text">SASS/SCSS</span>
                        </p>
                        <p className="skills__content-right__item">
                            <FaBootstrap className="icons" />
                            <span className="text">Bootstrap5</span>
                        </p>
                        <p className="skills__content-right__item">
                            <RiTailwindCssFill className="icons" />
                            <span className="text">TailwindCss</span>
                        </p>
                        <p className="skills__content-right__item">
                            <SiBulma className="icons" />
                            <span className="text">Bulma</span>
                        </p>
                        <p className="skills__content-right__item">
                            <SiShadcnui className="icons" />
                            <span className="text">ShadcnUI</span>
                        </p>
                        <p className="skills__content-right__item">
                            <SiMui className="icons" />
                            <span className="text">MUI</span>
                        </p>
                        <p className="skills__content-right__item">
                            <SiAntdesign className="icons" />
                            <span className="text">ANT</span>
                        </p>

                        <p className="skills__content-right__item">
                            <SiChakraui className="icons" />
                            <span className="text">ChakraUI</span>
                        </p>
                        <p className="skills__content-right__item">
                            <SiJavascript className="icons" />
                            <span className="text">JavaScript</span>
                        </p>
                        <p className="skills__content-right__item">
                            <FaReact className="icons" />
                            <span className="text">Reactjs</span>
                        </p>
                        <p className="skills__content-right__item">
                            <FaNodeJs className="icons" />
                            <span className="text">Nodejs</span>
                        </p>
                        <p className="skills__content-right__item">
                            <TbBrandRedux className="icons" />
                            <span className="text">Redux</span>
                        </p>
                        <p className="skills__content-right__item">
                            <TbBrandRedux className="icons" />
                            <span className="text">R/T</span>
                        </p>
                        <p className="skills__content-right__item">
                            <RiBearSmileLine className="icons" />
                            <span className="text">Zustand</span>
                        </p>
                        <p className="skills__content-right__item">
                            <RiNextjsFill className="icons" />
                            <span className="text">Nextjs</span>
                        </p>
                        <p className="skills__content-right__item">
                            <SiAxios className="icons" />
                            <span className="text">Axios</span>
                        </p>
                        <p className="skills__content-right__item">
                            <SiTypescript className="icons" />
                            <span className="text">TypeScript</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
