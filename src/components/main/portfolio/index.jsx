import { FaGithub } from "react-icons/fa";
import { LuMoveUpRight } from "react-icons/lu";
import TypeIt from "typeit-react";
import "./index.scss";
const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="portfolio__title">
                <TypeIt
                    options={{
                        strings: [
                            "My Portfolio",
                            "Some of my projects",
                            "And my projects..",
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
            <p className="portfolio__subtitle">Some of my projects</p>

            <div className="portfolio__content">
                <div className="portfolio__content-card">
                    <div className="card__image">
                        <img
                            src="https://daryo.uz/cache/2022/04/600-4-600x400.png"
                            alt=""
                        />
                    </div>
                    <div className="card__links">
                        <a
                            href="https://github.com/reactnenja/alifshopuz"
                            className="cool-link"
                            target="_blank"
                        >
                            <span>
                                <FaGithub />
                            </span>
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://alifshopuz.vercel.app"
                            className="cool-link"
                            target="_blank"
                        >
                            <span>Real Live</span>
                            <span>
                                <LuMoveUpRight />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="portfolio__content-card">
                    <div className="card__image">
                        <img src="" alt="" />
                    </div>
                    <div className="card__links">
                        <a href="" className="cool-link" target="_blank">
                            <span>
                                <FaGithub />
                            </span>
                            <span>GitHub</span>
                        </a>
                        <a
                            href="shops-web-nine.vercel.app"
                            className="cool-link"
                            target="_blank"
                        >
                            <span>Real Live</span>
                            <span>
                                <LuMoveUpRight />
                            </span>
                        </a>
                    </div>
                </div>
                <div className="portfolio__content-card">
                    <div className="card__image">
                        <img
                            src="https://assets-global.website-files.com/64830736e7f43d491d70ef30/64bfca46b1569eeda774403d_64a57f4512ee9430c0ea7cf8_64a2cf43ee15ed8228d585a0_Business_Model_Examples-Spotify.webp"
                            alt="spotfy image"
                        />
                    </div>
                    <div className="card__links">
                        <a
                            href="https://github.com/reactnenja/exam_7"
                            className="cool-link"
                            target="_blank"
                        >
                            <span>
                                <FaGithub />
                            </span>
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://exam-7-iota.vercel.app/"
                            className="cool-link"
                            target="_blank"
                        >
                            <span>Real Live</span>
                            <span>
                                <LuMoveUpRight />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
