import {
    FaInstagram,
    FaLocationArrow,
    FaPhoneAlt,
    FaTelegram,
    FaUser,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import "./index.scss";
const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h1>Contact</h1>
                <div className="contact__main">
                    <div className="contact__main-left">
                        <p className="contact__main-left-item">
                            <strong>
                                <i>
                                    <mark>
                                        <FaUser />
                                        Full Name:
                                    </mark>
                                </i>
                            </strong>{" "}
                            Ulug'bek Eshnazarov
                        </p>
                        <p className="contact__main-left-item">
                            <strong>
                                <i>
                                    <mark>
                                        <MdAlternateEmail />
                                        Email:
                                    </mark>
                                </i>
                            </strong>{" "}
                            <a href="mailto:reactnenja@gmail.com">Hire me</a>
                        </p>
                        <p className="contact__main-left-item">
                            <strong>
                                <i>
                                    <mark>
                                        <FaPhoneAlt />
                                        Phone:
                                    </mark>
                                </i>
                            </strong>{" "}
                            <a href="tel:+998 88 638 07 11">Call me!</a>
                        </p>
                    </div>
                    <div className="contact__main-right">
                        <p className="contact__main-right-item">
                            <strong>
                                <i>
                                    <mark>
                                        <FaLocationArrow /> Address:
                                    </mark>
                                </i>
                            </strong>{" "}
                            Uzbekistan, Tashkent
                        </p>
                        <p className="contact__main-right-item">
                            <strong>
                                <i>
                                    <mark>
                                        <FaInstagram /> Instagram
                                    </mark>
                                </i>
                            </strong>{" "}
                            <a href="https://www.instagram.com/ulugbekeshnazarovuz/">
                                @ulugbekeshnazarovuz
                            </a>
                        </p>
                        <p className="contact__main-right-item">
                            <strong>
                                <i>
                                    <mark>
                                        <FaTelegram />
                                        Telegram:
                                    </mark>
                                </i>
                            </strong>{" "}
                            <a href="https://t.me/ulugbek_eshnazarov">
                                {" "}
                                @ulugbek_eshnazarov
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
