import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaBriefcase, FaInfoCircle, FaTelegramPlane } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Card = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const Contact = () => {
    const token = "7103836301:AAEq2lPNXG8qpC9DOpS-lAr-Vc7VX67ZE3U";
    const chat_id = "7103836301";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        telegram: "",
        jobInterest: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const sendToTelegram = async (data) => {
        const text = `
Yangi xabar:
Ism: ${data.name}
Email: ${data.email}
Telegram: ${data.telegram}
Xabar: ${data.message}
Ish taklifi: ${data.jobInterest ? "Ha" : `Yo'q`}
        `;

        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const params = {
            chat_id: chat_id,
            text: text,
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            });

            if (!response.ok) {
                throw new Error("Telegram botga yuborishda xatolik yuz berdi");
            }

            return true;
        } catch (error) {
            console.error("Xatolik:", error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = await sendToTelegram(formData);

        if (success) {
            toast.success("Xabar muvaffaqiyatli yuborildi!");
            setFormData({
                name: "",
                email: "",
                message: "",
                telegram: "",
                jobInterest: false,
            });
        } else {
            toast.error(
                "Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
            );
        }
    };

    return (
        <div className="h-auto py-[60px] bg-gray-100" id="contact">
            <div className="container mx-auto p-5">
                <div className="flex flex-col items-center ">
                    <h2 className="text-5xl mb-5 py-12 font-extrabold">
                        Contact
                    </h2>
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full mb-16"
                        variants={contactVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-center">
                            Biz bilan bog'laning
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label
                                        htmlFor="name"
                                        className="mb-2 font-semibold text-gray-700"
                                    >
                                        Ism
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 font-semibold text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="telegram"
                                    className="mb-2 font-semibold text-gray-700"
                                >
                                    Telegram Username
                                </label>
                                <input
                                    type="text"
                                    id="telegram"
                                    name="telegram"
                                    value={formData.telegram}
                                    onChange={handleChange}
                                    className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="message"
                                    className="mb-2 font-semibold text-gray-700"
                                >
                                    Xabar
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="jobInterest"
                                    name="jobInterest"
                                    checked={formData.jobInterest}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label
                                    htmlFor="jobInterest"
                                    className="text-gray-700"
                                >
                                    Ish taklifi uchun qiziqasizmi?
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Yuborish
                            </button>
                        </form>
                        <ToastContainer />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card
                            title="Telegram"
                            description="Telegram orqali biz bilan bog'laning."
                            icon={<FaTelegramPlane />}
                        />
                        <Card
                            title="Ish Taklifi"
                            description="Agar ish taklifi bo'lsa, bu yerda belgilab qo'ying."
                            icon={<FaBriefcase />}
                        />
                        <Card
                            title="Qo'shimcha Ma'lumot"
                            description="Bizning xizmatlarimiz yoki boshqa savollar uchun bu yerda ma'lumot olish."
                            icon={<FaInfoCircle />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
