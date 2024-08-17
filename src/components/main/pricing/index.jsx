import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaCheckCircle, FaTimes, FaUpload } from "react-icons/fa";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const PricingCard = ({
    title,
    price,
    features,
    duration,
    highlight,
    onOrder,
}) => {
    return (
        <motion.div
            className={`${
                highlight ? "bg-blue-600 text-white" : "bg-white text-gray-900"
            } p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
        >
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-4xl font-bold mb-2">{price}</p>
            <p
                className={`${
                    highlight ? "text-gray-200" : "text-gray-500"
                } mb-6`}
            >
                {duration}
            </p>
            <ul className="mb-6 space-y-2">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-center"
                    >
                        <FaCheckCircle
                            className={`${
                                highlight ? "text-white" : "text-green-500"
                            } mr-2`}
                        />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => onOrder(title)}
                className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                    highlight
                        ? "bg-white text-blue-600 hover:bg-gray-100"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
                Buyurtma berish
            </button>
        </motion.div>
    );
};

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        platform: "",
        additionalInfo: "",
        design: null,
    });

    const handleOrder = (plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, design: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form ma'lumotlarini Telegram botga yuborish
        const token = "YOUR_TELEGRAM_BOT_TOKEN"; // Bu yerda o'zingizning bot tokeningizni kiriting
        const chat_id = "YOUR_CHAT_ID"; // Bu yerda chat ID ni kiriting

        const message = `
            Yangi buyurtma:
            Ism: ${formData.name}
            Email: ${formData.email}
            Telefon: ${formData.phone}
            Loyihaning turi: ${formData.projectType}
            Platforma: ${formData.platform}
            Qo'shimcha ma'lumot: ${formData.additionalInfo}
            Tanlangan reja: ${selectedPlan}
        `;

        try {
            await axios.post(
                `https://api.telegram.org/bot${token}/sendMessage`,
                {
                    chat_id: chat_id,
                    text: message,
                }
            );
            console.log("Buyurtma yuborildi.");
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
        }

        setIsModalOpen(false);
    };

    const plans = [
        {
            title: "Oylik Paket",
            price: "$50",
            duration: "Oylik to'lov",
            features: [
                "Responsive dizayn",
                "1 ta sahifa",
                "Email va telefon orqali qo'llab-quvvatlash",
            ],
            highlight: false,
        },
        {
            title: "Yillik Paket",
            price: "$500",
            duration: "Yillik to'lov",
            features: [
                "Responsive dizayn",
                "10 ta sahifa",
                "Email va telefon orqali qo'llab-quvvatlash",
                "Maxsus dizayn",
            ],
            highlight: true,
        },
        {
            title: "Maxsus Paket",
            price: "$1000+",
            duration: "Bir martalik to'lov",
            features: [
                "Cheksiz sahifalar",
                "Maxsus dizayn",
                "SEO optimizatsiya",
                "To'liq qo'llab-quvvatlash",
            ],
            highlight: false,
        },
    ];

    const extras = [
        {
            title: "Telegram Bot Yaratish",
            price: "$200+",
            duration: "Bir martalik to'lov",
            features: [
                "Bot dizayni va dasturlanishi",
                "Bot integratsiyasi",
                "Xabarlarni avtomatlashtirish",
            ],
            highlight: true,
        },
        {
            title: "E-commerce Do'kon",
            price: "$1500+",
            duration: "Bir martalik to'lov",
            features: [
                "To'liq do'kon yaratish",
                "Maxsus dizayn",
                "To'lov tizimi integratsiyasi",
                "SEO optimizatsiya",
            ],
            highlight: false,
        },
        {
            title: "Korporativ Email Sozlash",
            price: "$100+",
            duration: "Bir martalik to'lov",
            features: [
                "Korporativ email manzillarini sozlash",
                "Email server integratsiyasi",
                "Qo'llab-quvvatlash",
            ],
            highlight: false,
        },
    ];

    return (
        <div className="p-2">
            <section className="flex flex-col items-center min-h-auto px-4 py-24 bg-gray-100">
                <motion.div
                    className="mb-16"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-5xl font-bold text-center mb-8">
                        Narxlar
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Sayt yaratish bo'yicha eng yaxshi narxlar va xizmatlar
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            {...plan}
                            onOrder={handleOrder}
                        />
                    ))}
                </div>
                <div className="mt-16 w-full">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Qo'shimcha xizmatlar
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {extras.map((extra, index) => (
                            <PricingCard
                                key={index}
                                {...extra}
                                onOrder={handleOrder}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                    >
                        <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-screen overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold">
                                    Buyurtma berish
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block font-semibold mb-2">
                                        Ism
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2">
                                        Loyihaning turi
                                    </label>
                                    <input
                                        type="text"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2">
                                        Platforma
                                    </label>
                                    <input
                                        type="text"
                                        name="platform"
                                        value={formData.platform}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2">
                                        Qo'shimcha ma'lumot
                                    </label>
                                    <textarea
                                        name="additionalInfo"
                                        value={formData.additionalInfo}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block mb-2">
                                        Dizayn yuklash
                                    </label>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <FaUpload className="w-8 h-8 mb-4 text-gray-500" />
                                                <p className="mb-2 text-sm text-gray-500">
                                                    <span className="font-semibold">
                                                        Faylni tanlang
                                                    </span>{" "}
                                                    yoki bu yerga tashlang
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG yoki PDF (MAX. 5MB)
                                                </p>
                                            </div>
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={handleFileChange}
                                                accept=".png,.jpg,.jpeg,.pdf"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 hover:bg-blue-700"
                                >
                                    Buyurtma yuborish
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Pricing;
