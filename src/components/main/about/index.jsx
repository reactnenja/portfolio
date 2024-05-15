import TypeIt from "typeit-react";
import "./index.scss";
const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__content">
                <div className="about__content__heading">
                    <h2>
                        <TypeIt
                            options={{
                                strings: [
                                    "About me",
                                    "Who I am",
                                    "What I do",
                                    "What I like",
                                    "Welcome to My World of Frontend Development!",
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
                            <h3>About Me</h3>
                            Hello, I’m Ulugbek. I recently completed my
                            education in frontend development and have a deep
                            passion for creating websites. My journey into the
                            world of development began with a keen interest in
                            understanding how websites are made. I have mastered
                            essential technologies such as HTML, CSS, and
                            JavaScript.
                        </p>
                        <p>
                            In my work, I utilize modern technologies like
                            React, Redux, and Zustand. I also enjoy using
                            Tailwind CSS to make my websites visually appealing
                            and responsive. My goal is to create websites that
                            are not only functional but also aesthetically
                            pleasing and user-friendly.
                        </p>
                        <p>
                            Responsive design ensures that my websites look and
                            perform perfectly on all devices. Creating intuitive
                            and easy-to-use interfaces enhances the user
                            experience. I focus on writing clean and efficient
                            code to ensure fast loading times and smooth
                            performance. Ensuring that websites are accessible
                            to everyone is also a key priority.
                        </p>
                        <p>
                            During my learning journey, I have worked on various
                            projects. My personal portfolio website showcases my
                            skills and projects. I have developed an e-commerce
                            site with product listings and a shopping cart
                            feature. I also created a blog platform for new
                            developers, featuring daily news and video
                            tutorials.
                        </p>
                        <p>
                            I am eager to take on new challenges and contribute
                            to exciting projects. I plan to explore advanced
                            topics such as server-side rendering, progressive
                            web apps, and web performance optimization. I am
                            also passionate about sharing my knowledge and plan
                            to create video tutorials and blog posts.
                        </p>
                        <p>
                            I am open to new opportunities and collaborations.
                            If you have a project in mind or want to discuss
                            frontend development, feel free to reach out to me.
                            You can contact me via email or connect with me on
                            social media.
                        </p>
                    </div>

                    <div className="about__content__right">
                        <img
                            src="https://media.licdn.com/dms/image/D4D03AQG-L7HbJCMyDA/profile-displayphoto-shrink_800_800/0/1691846550611?e=2147483647&v=beta&t=wLEIL1uwmyw6Zg7nIe8tVtHjYvmvsqYGi9lhtM6goU8"
                            alt="my images"
                        />
                        <img
                            src="https://img2.teletype.in/files/52/aa/52aa8199-2ba3-481a-afa4-dfc5cf954329.jpeg"
                            alt="my-images"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
