import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaYoutube,
} from "react-icons/fa";
import Images from "../../../assets/my-images.png";
import "./index.scss";
const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__menu">
                    <div className="hero__menu-images">
                        <img src={Images} alt="hero-image" />
                    </div>
                    <h1>Ulug'bek Eshnazarov</h1>
                    <p>Frontend Developer</p>
                    <div className="hero__socails">
                        <a href="https://github.com/ulugbekeshnazarov">
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/reactnenja/"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.t.me/ulugbekeshnazarovuz"
                            target="_blank"
                        >
                            <FaTelegram />
                        </a>
                        <a
                            href="https://www.youtube.com/@ulugbekeshnazarovuz"
                            target="_blank"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://www.instagram.com/ulugbekeshnazarovuz"
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                    <a href="#contact" className="hero__menu-contactme">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
