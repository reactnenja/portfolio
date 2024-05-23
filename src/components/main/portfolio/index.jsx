import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./index.scss";
const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <h1>Portfolio</h1>
                <div className="portfolio__body">
                    <div className="portfolio__body-items">
                        <div className="header">
                            <img
                                src="https://picsum.photos/400"
                                alt="portfolio images"
                            />
                        </div>
                        <div className="body">
                            <h3>Portfolio</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Optio repellendus at nobis
                                reprehenderit mollitia minus.
                            </p>
                            <div className="body__links">
                                <a href="#">
                                    Live Demo <BsArrowUpRight />
                                </a>
                                <a href="#">
                                    Source Code <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio__body-items">
                        <div className="header">
                            <img
                                src="https://picsum.photos/400"
                                alt="portfolio images"
                            />
                        </div>
                        <div className="body">
                            <h3>Portfolio</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Optio repellendus at nobis
                                reprehenderit mollitia minus.
                            </p>
                            <div className="body__links">
                                <a href="#">
                                    Live Demo <BsArrowUpRight />
                                </a>
                                <a href="#">
                                    Source Code <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio__body-items">
                        <div className="header">
                            <img
                                src="https://picsum.photos/400"
                                alt="portfolio images"
                            />
                        </div>
                        <div className="body">
                            <h3>Portfolio</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Optio repellendus at nobis
                                reprehenderit mollitia minus.
                            </p>
                            <div className="body__links">
                                <a href="#">
                                    Live Demo <BsArrowUpRight />
                                </a>
                                <a href="#">
                                    Source Code <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio__body-items">
                        <div className="header">
                            <img
                                src="https://picsum.photos/400"
                                alt="portfolio images"
                            />
                        </div>
                        <div className="body">
                            <h3>Portfolio</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Optio repellendus at nobis
                                reprehenderit mollitia minus.
                            </p>
                            <div className="body__links">
                                <a href="#">
                                    Live Demo <BsArrowUpRight />
                                </a>
                                <a href="#">
                                    Source Code <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
