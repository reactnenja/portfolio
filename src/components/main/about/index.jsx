import TypeIt from "typeit-react";
import "./index.scss";
const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__content">
                <div className="about__content__text">
                    <h2>
                        <TypeIt
                            options={{
                                strings: [
                                    "About me",
                                    "Who I am",
                                    "What I do",
                                    "What I like",
                                ],
                                speed: 100, // typing speed
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
                </div>

                <div className="about__content__text">
                    <div className="about__content__left">
                        <p>
                            I am a Frontend Developer. I have experience in
                            JavaScript, React, Nodejs. I am always learning new
                            skills.
                        </p>
                        <p>
                            I am a Frontend Developer. I have experience in
                            JavaScript, React, Nodejs. I am always learning new
                            skills.
                        </p>

                        <p>
                            I am a Frontend Developer. I have experience in
                            JavaScript, React, Nodejs. I am always learning new
                            skills.
                        </p>
                    </div>
                    <div className="about__content__right"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
