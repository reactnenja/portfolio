import Images from "../../../assets/my-images.png";
import "./index.scss";
const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h1>About</h1>
                <div className="about__body">
                    <div className="about__body-left">
                        <h3>Hello!</h3>
                        <p>
                            <strong>I'm Ulug'bek Eshnazarov.</strong> I am a
                            passionate frontend developer dedicated to creating
                            dynamic and user-friendly web applications. With a
                            strong foundation in HTML, CSS, and JavaScript, I
                            specialize in utilizing modern frameworks like React
                            to build interactive user interfaces.
                        </p>
                        <p>
                            I began my journey in web development a few years
                            ago, and since then, I have continuously honed my
                            skills and expanded my knowledge in the field. I am
                            particularly interested in the latest frontend
                            technologies and enjoy experimenting with new tools
                            and techniques to enhance the user experience.
                            <br />
                            <br />
                            In addition to my technical skills, I have a keen
                            eye for design and a deep appreciation for
                            aesthetics. I believe that a well-designed interface
                            not only looks good but also provides an intuitive
                            and enjoyable experience for users. This philosophy
                            drives me to pay attention to every detail and
                            strive for perfection in all my projects.
                        </p>
                        <h3>My Expertise Includes:</h3>
                        <p>
                            <ul>
                                <li>
                                    <b>Frontend Development:</b> Proficient in
                                    HTML, CSS, JavaScript, and modern frameworks
                                    like React.
                                </li>
                                <li>
                                    <b>UI/UX Design:</b> Skilled in creating
                                    visually appealing and user-friendly
                                    interfaces.
                                </li>
                                <li>
                                    <b>Responsive Design:</b> Ensuring that
                                    websites work seamlessly across all devices
                                    and screen sizes.
                                </li>
                                <li>
                                    <b>Version Control:</b> Experienced with Git
                                    and GitHub for efficient collaboration and
                                    code management.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <strong>My Goals:</strong>I aspire to become a
                            highly skilled full-stack developer, capable of
                            building complete web applications from the ground
                            up. I am also interested in cybersecurity and aim to
                            explore this field further in the future.
                            Ultimately, my dream is to become a leading
                            developer and have the opportunity to work with
                            innovative companies like Elon Musk's enterprises.
                        </p>
                        <h3>Personal Interests:</h3>
                        <p>
                            <ul>
                                <li>
                                    <b>Learning:</b> I am always eager to learn
                                    new programming languages and technologies.
                                </li>
                                <li>
                                    <b>Travel:</b> I enjoy exploring new places
                                    and cultures, with a particular fondness for
                                    Switzerland and Germany.
                                </li>
                                <li>
                                    <b> Sharing Knowledge:</b> I am passionate
                                    about helping others learn programming
                                    through blog posts and video tutorials.
                                </li>
                            </ul>
                            <br />
                            Thank you for taking the time to learn more about
                            me. If you have any questions or would like to
                            collaborate, feel free to get in touch!
                        </p>
                    </div>

                    <div className="about__body-right">
                        <img src={Images} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
