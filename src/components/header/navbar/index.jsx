import { useState } from "react";
import { FaBars } from "react-icons/fa";
import ImageLogo from "../../../assets/logos.jpg";
import "./index.scss";
const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleNavbars = () => {
        setActive(!active);
    };
    const closeMobileMenu = () => {
        setActive(false);
    };
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__menu">
                    <a href="#" className="navbar__menu-logo__link">
                        <img src={ImageLogo} alt="" />
                    </a>
                    <div className="navbar__menu-box">
                        <ul className="navbar__menu-box__list">
                            <li className="navbar__menu-box__list-item">
                                <a href="#home">Home</a>
                            </li>
                            <li className="navbar__menu-box__list-item">
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="navbar__menu-box__list-item">
                                <a href="#portfolio">Portfolio</a>
                            </li>

                            <li className="navbar__menu-box__list-item">
                                <a href="#about">About</a>
                            </li>
                            <li className="navbar__menu-box__list-item">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className="navbar__menu-box__button">
                            <button className="button" onClick={handleNavbars}>
                                <FaBars />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`navbar__menu-mobile ${active ? "active" : ""}`}
                >
                    <ul className="navbar__menu-mobile__list">
                        <li className="navbar__menu-mobile__list-item">
                            <a href="#home" onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className="navbar__menu-mobile__list-item">
                            <a href="#skills" onClick={closeMobileMenu}>
                                Skills
                            </a>
                        </li>
                        <li className="navbar__menu-mobile__list-item">
                            <a href="#portfolio" onClick={closeMobileMenu}>
                                Portfolio
                            </a>
                        </li>
                        <li className="navbar__menu-mobile__list-item">
                            <a href="#about" onClick={closeMobileMenu}>
                                About
                            </a>
                        </li>
                        <li className="navbar__menu-mobile__list-item">
                            <a href="#contact" onClick={closeMobileMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
