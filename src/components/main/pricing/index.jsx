import { motion } from "framer-motion";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PricingCard = ({ title, price, features, duration, highlight }) => {
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
            <section className="flex flex-col items-center min-h-screen px-4 py-24 bg-gray-100">
                <motion.div
                    className="mb-16"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-3xl font-bold text-center mb-8">
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
                            title={plan.title}
                            price={plan.price}
                            features={plan.features}
                            duration={plan.duration}
                            highlight={plan.highlight}
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
                                title={extra.title}
                                price={extra.price}
                                features={extra.features}
                                duration={extra.duration}
                                highlight={extra.highlight}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
