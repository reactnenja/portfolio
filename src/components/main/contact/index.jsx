import { BiSolidMessageDetail } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TypeIt from "typeit-react";
import "./index.scss";
const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__title">
                <h2>
                    <TypeIt
                        options={{
                            strings: [
                                "Contact me",
                                "Get in touch",
                                "Get in touch",
                                "Get in touch",
                                "Get in touch",
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
            </div>
            <div className="contact__content">
                <div className="contact__content__right">
                    <form action="">
                        <div className="mb-4">
                            <label
                                className="form__contact__label"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <div className="form__contact__email__wrapper">
                                <input
                                    className="form__contact__name"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                                <FaUserEdit className="icons" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="form__contact__label"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <div className="form__contact__email__wrapper">
                                <input
                                    className="form__contact__email"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <MdEmail className="icons" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="form__contact__label"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <div
                                className="
                                form__contact__email__textarea__wrapper"
                            >
                                <textarea
                                    className="form__contact__message"
                                    id="message"
                                    placeholder="Enter your message"
                                ></textarea>
                                <BiSolidMessageDetail className="icons-text" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <button
                                className="contact__form__submit"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
