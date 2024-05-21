import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 w-full h-[80px] fixed top-0 shadow-md z-50">
            <div className="container mx-auto max-w-[1380px] px-[15px] ">
                <div className="flex items-center justify-between h-[80px] w-full">
                    <a href="#" className="decoration-none">
                        <h1 className="text-[25px] leading-xl font-sora font-bold text-white">
                            UE
                        </h1>
                    </a>
                    <div className="hidden md:flex h-[80px]">
                        <ul className="flex items-center justify-between gap-11">
                            <li>
                                <a
                                    href="#boshsahifa"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                >
                                    Bosh sahifa
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#loyihalar"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                >
                                    Loyihalar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                >
                                    Ko'nikmalar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#menhaqimda"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                >
                                    Men Haqimda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#kontakt"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                >
                                    Kontakt
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white">
                            {isOpen ? (
                                <FaTimes size={28} />
                            ) : (
                                <FaBars size={28} />
                            )}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden bg-gray-900 w-full">
                        <ul className="flex flex-col items-center gap-4 py-5">
                            <li>
                                <a
                                    href="#"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                    onClick={toggleMenu}
                                >
                                    Bosh sahifa
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                    onClick={toggleMenu}
                                >
                                    Loyihalar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                    onClick={toggleMenu}
                                >
                                    Ko'nikmalar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                    onClick={toggleMenu}
                                >
                                    Men Haqimda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="decoration-none hover:text-slate-500 duration-200 text-white text-[20px]"
                                    onClick={toggleMenu}
                                >
                                    Kontakt
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
