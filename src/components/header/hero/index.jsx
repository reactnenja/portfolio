import React from "react";
import {
    FaArrowCircleDown,
    FaGithubAlt,
    FaInstagram,
    FaTelegram,
    FaYoutube,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import TypeIt from "typeit-react";
import Logo from "../../../assets/hero__logo.png";
import "./index.scss";
const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="layout">
                    <div className="layout__left">
                        <h1 className="hero__title">
                            <TypeIt
                                options={{
                                    strings: [
                                        "Hello, I'm Ulugbek",
                                        "I am a Frontend Developer",
                                        "I am a Frontend Developer",
                                        "I am a Frontend Developer",
                                        "I am a Frontend Developer",
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
                        </h1>
                        <p className="hero__subtitle">
                            I am a Frontend Developer. I am happy to help you
                            with any questions you might have. Feel free to
                            contact me.
                        </p>
                        <div className="hero__button-container">
                            <a href="#contact" className="hero__button">
                                <span>
                                    <FaArrowCircleDown />
                                </span>
                                <span>My Resume</span>
                            </a>
                            <a
                                href="https://t.me/ulugbekeshnazarovuz"
                                className="socail__button"
                            >
                                <FaTelegram />
                            </a>
                            <a
                                href="https://youtube.com/@ulugbekeshnazarovuz"
                                className="socail__button"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://instagram.com/ulugbekeshnazarovuz"
                                className="socail__button"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://linkedin.com/ulugbekeshnazarovuz"
                                className="socail__button"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/reactnenja"
                                className="socail__button"
                            >
                                <FaGithubAlt />
                            </a>
                        </div>
                    </div>
                    <div className="layout__right">
                        <div className="hero__image">
                            <img src={Logo} alt="my-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
