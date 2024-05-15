import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Logos from "../../../assets/logos.jpg";
import "./index.scss";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (isDark) {
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
        }
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const handleBurger = () => {
        setIsOpen(!isOpen);
    };
    const handleDark = () => {
        setIsDark(!isDark);
    };
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navigation">
                    <a href="#" className="logo__link">
                        <img src={Logos} className="logo" alt="logo" />
                    </a>
                    <button onClick={handleBurger} className="burger">
                        {open ? <IoMenu /> : <IoClose />}
                    </button>
                    <div className="menu">
                        <div className="menu__links">
                            <ul>
                                <li>
                                    <a href="#hero" className="nav__link">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#portfolio" className="nav__link">
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="nav__link">
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a href="#blog" className="nav__link">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="nav__link">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="nav__link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="dark__mode" onClick={handleDark}>
                        {isDark ? (
                            <MdOutlineLightMode />
                        ) : (
                            <MdOutlineDarkMode />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
