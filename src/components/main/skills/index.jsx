import { BiLogoPostgresql } from "react-icons/bi";
import {
    FaBootstrap,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaLinux,
    FaNodeJs,
    FaReact,
    FaSass,
} from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { MdAnimation } from "react-icons/md";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import {
    SiArchlinux,
    SiBulma,
    SiJsonwebtokens,
    SiMongodb,
    SiMysql,
    SiPrisma,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiSemanticui,
    SiTailwindcss,
    SiWebpack,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import TypeIt from "typeit-react";
import "./index.scss";
const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2 className="skills__title">
                <TypeIt
                    options={{
                        strings: [
                            "My Skills...",
                            "Here are some of my skills",
                            "And my skills..",
                            "I am always learning new skills",
                        ],
                        speed: 100,
                        waitUntilVisible: true,
                        cursor: false,
                        loop: true,
                        loopDelay: 5000,
                        startDelay: 1000,
                        breakLines: false,
                        nextStringDelay: 3000,
                    }}
                />
            </h2>

            <p>Here are some of my skills</p>

            <div className="skills__content">
                <div
                    className="skills__content__item"
                    title="HTML || www.3wschools.com"
                >
                    <IoLogoHtml5 className="icons" />
                    <p>HTML5</p>
                </div>
                <div className="skills__content__item">
                    <FaCss3Alt className="icons" />
                    <p>CSS3</p>
                </div>
                <div className="skills__content__item">
                    <FaSass className="icons" />
                    <p>SCSS / SASS </p>
                </div>
                <div className="skills__content__item">
                    <FaBootstrap className="icons" />
                    <p>Bootstrap</p>
                </div>
                <div className="skills__content__item">
                    <SiBulma className="icons" />
                    <p>Bulma</p>
                </div>
                <div className="skills__content__item">
                    <SiSemanticui className="icons" />
                    <p>Semantic UI</p>
                </div>
                <div className="skills__content__item">
                    <SiTailwindcss className="icons" />
                    <p>Tailwind Css</p>
                </div>
                <div className="skills__content__item">
                    <FaGitAlt className="icons" />
                    <p>Git Cli</p>
                </div>
                <div className="skills__content__item">
                    <FaGithub className="icons" />
                    <p>GitHub</p>
                </div>
                <div className="skills__content__item">
                    <SiWebpack className="icons" />
                    <p>Webpack</p>
                </div>
                <div className="skills__content__item">
                    <IoLogoJavascript className="icons" />
                    <p>JavaScript</p>
                </div>
                <div className="skills__content__item">
                    <MdAnimation className="icons" />
                    <p> Splidejs</p>
                </div>
                <div className="skills__content__item">
                    <FaReact className="icons" />
                    <p>React</p>
                </div>
                <div className="skills__content__item">
                    <TbBrandRedux className="icons" />
                    <p>Redux</p>
                </div>
                <div className="skills__content__item">
                    <TbBrandRedux className="icons" />
                    <p>Redux Toolkit</p>
                </div>
                <div className="skills__content__item">
                    <SiReactquery className="icons" />
                    <p>TanStack Query</p>
                </div>
                <div className="skills__content__item">
                    <GiBearFace className="icons" />
                    <p>Zustand</p>
                </div>
                <div className="skills__content__item">
                    <SiJsonwebtokens className="icons" />
                    <p>JWT</p>
                </div>
                <div className="skills__content__item">
                    <SiReactrouter className="icons" />
                    <p>React Router Dom</p>
                </div>
                <div className="skills__content__item">
                    <SiReacthookform className="icons" />
                    <p>React Formik</p>
                </div>
                <div className="skills__content__item">
                    <FaNodeJs className="icons" />
                    <p>Nodejs</p>
                </div>
                <div className="skills__content__item">
                    <RiNextjsFill className="icons" />
                    <p>Nextjs</p>
                </div>
                <div className="skills__content__item">
                    <RiNextjsFill className="icons" />
                    <p>Nextjs Auth</p>
                </div>
                <div className="skills__content__item">
                    <SiPrisma className="icons" />
                    <p>Prisma ORM</p>
                </div>
                <div className="skills__content__item">
                    <FaLinux className="icons" />
                    <p>Linux</p>
                </div>
                <div className="skills__content__item">
                    <SiArchlinux className="icons" />
                    <p>Arch</p>
                </div>
                <div className="skills__content__item">
                    <SiMysql className="icons" />
                    <p>MySql</p>
                </div>
                <div className="skills__content__item">
                    <SiMongodb className="icons" />
                    <p>MongoDB</p>
                </div>
                <div className="skills__content__item">
                    <BiLogoPostgresql className="icons" />
                    <p>PostgreSql</p>
                </div>
                <div className="skills__content__item">
                    <RiSupabaseFill className="icons" />
                    <p>SupaBase</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
