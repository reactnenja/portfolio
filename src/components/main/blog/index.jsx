import { Link } from "react-router-dom";
import TypeIt from "typeit-react";
import "./index.scss";
const Blog = () => {
    return (
        <section className="blog" id="blog">
            <div className="blog__header">
                <h2>
                    <TypeIt
                        options={{
                            strings: [
                                "My Blog",
                                "Some of my posts",
                                "And my blogs about    programming languages!",
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
                <p>Some of my posts</p>
            </div>
            <div className="blog__content">
                <div className="blog__content__item ">
                    <div className="card__header">
                        <div className="card__image"></div>
                    </div>
                    <div className="card__body">
                        <div className="card__body__text">
                            <h3>HTML & CSS </h3>
                            <p>
                                <TypeIt
                                    options={{
                                        strings: [
                                            "Why I am interested in programming?",
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
                            </p>
                        </div>

                        <div className="card__body__link">
                            <Link
                                to="/blogs"
                                className="card__body__link__read"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blog__content__item ">
                    <div className="card__header">
                        <div className="card__image"></div>
                    </div>
                    <div className="card__body">
                        <div className="card__body__text">
                            <h3>HTML & CSS </h3>
                            <p>
                                <TypeIt
                                    options={{
                                        strings: [
                                            "Why I am interested in programming?",
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
                            </p>
                        </div>

                        <div className="card__body__link">
                            <Link
                                to="/blogs"
                                className="card__body__link__read"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blog__content__item ">
                    <div className="card__header">
                        <div className="card__image"></div>
                    </div>
                    <div className="card__body">
                        <div className="card__body__text">
                            <h3>HTML & CSS </h3>
                            <p>
                                <TypeIt
                                    options={{
                                        strings: [
                                            "Why I am interested in programming?",
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
                            </p>
                        </div>

                        <div className="card__body__link">
                            <Link
                                to="/blogs"
                                className="card__body__link__read"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blog__content__item ">
                    <div className="card__header">
                        <div className="card__image"></div>
                    </div>
                    <div className="card__body">
                        <div className="card__body__text">
                            <h3>HTML & CSS </h3>
                            <p>
                                <TypeIt
                                    options={{
                                        strings: [
                                            "Why I am interested in programming?",
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
                            </p>
                        </div>

                        <div className="card__body__link">
                            <Link
                                to="/blogs"
                                className="card__body__link__read"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blog__content__item ">
                    <div className="card__header">
                        <div className="card__image"></div>
                    </div>
                    <div className="card__body">
                        <div className="card__body__text">
                            <h3>HTML & CSS </h3>
                            <p>
                                <TypeIt
                                    options={{
                                        strings: [
                                            "Why I am interested in programming?",
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
                            </p>
                        </div>

                        <div className="card__body__link">
                            <Link
                                to="/blogs"
                                className="card__body__link__read"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blog__content__item ">
                    <div className="card__header">
                        <div className="card__image"></div>
                    </div>
                    <div className="card__body">
                        <div className="card__body__text">
                            <h3>HTML & CSS </h3>
                            <p>
                                <TypeIt
                                    options={{
                                        strings: [
                                            "Why I am interested in programming?",
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
                            </p>
                        </div>

                        <div className="card__body__link">
                            <Link
                                to="/blogs"
                                className="card__body__link__read"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
