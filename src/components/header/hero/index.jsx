import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import TypeIt from "typeit-react";
import HeroImages from "../../../assets/hero__logo.png";
import "./index.scss";
const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__content__text">
                        <p className="hero__content__text__subtitle">
                            I'm a Frontend Developer
                        </p>
                        <h1 className="hero__content__text__title">
                            <TypeIt
                                options={{
                                    strings: [
                                        "Hi, I'm Ulugbek Eshnazarov",
                                        "Frontend React Developer",
                                        "My interests",
                                        `JavaScript, React,     Nodejs!`,
                                        `Python FastAPI!`,
                                        `Rust!`,
                                    ],
                                    speed: 100,
                                    waitUntilVisible: true,
                                    cursor: false,
                                    loop: true,
                                    loopDelay: 5000,
                                    startDelay: 1000,
                                    breakLines: false,
                                    nextStringDelay: 3000,
                                    onFinished: () => {
                                        console.log("finished");
                                    },
                                }}
                            />
                        </h1>
                        <div className="socails">
                            <a
                                href="https://github.com/ulugbekeshnazarov"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ulugbek-eshnazarov/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://t.me/ulugbekeshnazarov"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTelegram />
                            </a>
                            <a
                                href="https://youtube.com/c/ulugbekeshnazarovuz"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IoLogoYoutube />
                            </a>
                        </div>
                    </div>
                    <div className="hero__content__image">
                        <img src={HeroImages} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
