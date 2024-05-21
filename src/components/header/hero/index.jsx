import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaYoutube,
} from "react-icons/fa";
import TypeIt from "typeit-react";
import HeroImages from "../../../assets/hero.png";
const Hero = () => {
    return (
        <div className="w-full bg-black h-[100vh] max-md:h-[900px] ">
            <div className="container mx-auto max-w-[1380px] px-[15px] max-md:py-[130px] pt-[280px]">
                <div className="flex items-center justify-between max-md:gap-28  h-full max-md:flex-col ">
                    <div className="max-md:text-center w-full">
                        <h1
                            className="text-5xl h-[300px] max-md:h-[150px] leading-[70px] max-md:text-2xl font-bold text-slate-50"
                            id="heading"
                        >
                            <TypeIt
                                options={{
                                    strings: [
                                        "Assalomu alaykum! Mening ismim",
                                        "Ulug'bek Eshnazarov",
                                        "Men React Next TypeScript Dasturchisiman",
                                    ],
                                    speed: 200,
                                    loop: true,
                                    cursorSpeed: 1000,
                                    cursor: false,
                                }}
                            />
                        </h1>
                        <div className="flex items-center gap-6 mt-5 max-md:justify-center">
                            <a
                                href="https://www.github.com/reactnenja"
                                target="_blink"
                                className="text-3xl text-slate-50"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/reactnenjauz/"
                                target="_blink"
                                className="text-3xl text-slate-50"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.youtube.com/@ulugbekeshnazarovuz"
                                target="_blink"
                                className="text-3xl text-slate-50"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://t.me/ulugbekeshnazarovuz"
                                target="_blink"
                                className="text-3xl text-slate-50"
                            >
                                <FaTelegram />
                            </a>
                            <a
                                href="https://www.instagram.com/ulugbekeshnazarovuz"
                                target="_blink"
                                className="text-3xl text-slate-50"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div>
                        <img
                            src={HeroImages}
                            alt="hero"
                            className="w-[500px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
