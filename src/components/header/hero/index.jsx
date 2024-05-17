import { BsTelegram, BsYoutube } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import TypeIt from "typeit-react";
import Logo from "../../../assets/hero__logo.png";
import "./index.scss";
const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__title">
                        <h1>
                            <TypeIt
                                options={{
                                    strings: [
                                        "My name is Ulugbek, I am 21 years old",
                                        "I am a frontend developer",
                                        "i love programming!",
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
                            I am a frontend developer
                        </p>
                        <div className="socails">
                            <a
                                href="https://github.com/reactnenja"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.t.me/ulugbekeshnazarovuz"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsTelegram />
                            </a>
                            <a
                                href="https://www.youtube.com/ulugbekeshnazarovuz"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsYoutube />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ulugbekeshnazarov/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <CiLinkedin />
                            </a>
                            <a
                                href="https://www.instagram.com/ulugbekeshnazarovuz"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div className="hero__content__image">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
