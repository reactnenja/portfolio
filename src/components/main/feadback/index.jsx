import "./index.scss";
const Feadback = () => {
    return (
        <section className="feadback">
            <div className="feadback__content-header">
                <h2 className="feadback__title">Feadback</h2>
                <p>
                    <h3>
                        <mark>Hello!</mark>
                    </h3>
                    My name is Ulugbek, and I am a frontend developer. I'm happy
                    to help you with any questions you might have! Below are
                    answers to some of the most frequently asked questions, but
                    feel free to ask if you have any other queries.
                </p>
            </div>
            <div className="feadback__content">
                <div className="feadback__content-card">
                    <div className="feadback__content-card__text">
                        <h2>What does a frontend developer do?</h2>
                    </div>
                    <div className="feadback__content-card__body">
                        <p>
                            A frontend developer creates the visual and
                            interactive aspects of websites. They use
                            technologies like HTML, CSS, and JavaScript to
                            design user-friendly and aesthetically pleasing
                            interfaces.
                        </p>
                    </div>
                </div>
                <div className="feadback__content-card">
                    <div className="feadback__content-card__text">
                        <h2>Which technologies do you work with?</h2>
                    </div>
                    <div className="feadback__content-card__body">
                        <p>
                            I primarily work with React, Redux, TypeScript, and
                            Zustand. Additionally, I use HTML, CSS, JavaScript,
                            and several UI libraries.
                        </p>
                    </div>
                </div>
                <div className="feadback__content-card">
                    <div className="feadback__content-card__text">
                        <h2>How do you manage projects?</h2>
                    </div>
                    <div className="feadback__content-card__body">
                        <p>
                            I manage projects using Agile methodology. This
                            involves breaking the process into short sprints,
                            allowing for regular review and improvement at each
                            stage.
                        </p>
                    </div>
                </div>
                <div className="feadback__content-card">
                    <div className="feadback__content-card__text">
                        <h2>What is responsive design?</h2>
                    </div>
                    <div className="feadback__content-card__body">
                        <p>
                            Responsive design ensures that a web page adapts to
                            different screen sizes (desktops, tablets,
                            smartphones). This is achieved through CSS media
                            queries to make the page flexible.
                        </p>
                    </div>
                </div>
                <div className="feadback__content-card">
                    <div className="feadback__content-card__text">
                        <h2>What are Git and GitHub, and how are they used?</h2>
                    </div>
                    <div className="feadback__content-card__body">
                        <p>
                            Git is a version control system that manages and
                            stores different versions of a project. GitHub is a
                            hosting service for Git repositories, allowing
                            collaborative development and code storage.
                        </p>
                    </div>
                </div>
                <div className="feadback__content-card">
                    <div className="feadback__content-card__text">
                        <h2> What should you know about JavaScript?</h2>
                    </div>
                    <div className="feadback__content-card__body">
                        <p>
                            JavaScript is a programming language that enables
                            interactivity on web pages. It can be used to create
                            dynamic content, handle user events, and communicate
                            with servers.
                        </p>
                    </div>
                </div>
                <div className="feadback__content-card">
                    <div className="feadback__content-card__text">
                        <h2>What should you know about CSS?</h2>
                    </div>
                    <div className="feadback__content-card__body">
                        <p>
                            CSS controls the appearance of web pages. It allows
                            you to set colors, fonts, layouts, and other style
                            properties.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feadback;
