import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RiskManagementSection() {
    const initialFeatures = [
        {
            title: "Real-Time Risk Monitoring",
            description: "Track exposure across accounts, instruments, and markets instantly.",
            icon: "/assets/manage-img-1.webp",
        },
        {
            title: "Automated Stop-Out Systems",
            description: "Protect brokers from excessive client losses with automated margin calls and stop-outs.",
            icon: "/assets/manage-img-2.webp",
        },
        {
            title: "Multiple Take Profit & Stop-Loss Levels",
            description: "Flexible trade exits to manage client and broker risk effectively.",
            icon: "/assets/manage-img-3.webp",
        },
        {
            title: "Hedging Support",
            description: "Balance positions and minimize exposure across assets.",
            icon: "/assets/manage-img-4.webp",
        },
        {
            title: "Advanced Reporting & Analytics",
            description: "Access detailed risk, P&L, and exposure reports for smarter decision-making.",
            icon: "/assets/manage-img-5.webp",
        },
        {
            title: "Customizable Risk Parameters",
            description: "Set leverage limits, margin requirements, and trading restrictions per client or group.",
            icon: "/assets/manage-img-6.webp",
        },
        {
            title: "Liquidity Risk Controls",
            description: "Aggregated Tier-1 liquidity feeds for tighter spreads and reduced slippage.",
            icon: "/assets/manage-img-7.webp",
        },
        {
            title: "Portfolio Risk Display",
            description: "View and manage real-time portfolio risk levels at individual and group levels.",
            icon: "/assets/manage-img-8.webp",
        },
    ];

    const additionalFeatures = [
        {
            title: "Advanced Reporting & Analytics",
            description: "Access detailed risk, P&L, and exposure reports for smarter decision-making.",
            icon: "/assets/manage-img-5.webp",
        },
        {
            title: "Customizable Risk Parameters",
            description: "Set leverage limits, margin requirements, and trading restrictions per client or group.",
            icon: "/assets/manage-img-6.webp",
        },
        {
            title: "Liquidity Risk Controls",
            description: "Aggregated Tier-1 liquidity feeds for tighter spreads and reduced slippage.",
            icon: "/assets/manage-img-7.webp",
        },
        {
            title: "Portfolio Risk Display",
            description: "View and manage real-time portfolio risk levels at individual and group levels.",
            icon: "/assets/manage-img-8.webp",
        },
    ];

    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <section
                className="relative py-16"
                style={{
                    marginTop: "60px",
                    backgroundImage: "url('/assets/banner-section-bg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay",
                    backgroundColor: '#D9D9D933'
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        zIndex: 5,
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-left mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-red-600">JetFyX</span> Risk Management<br />for Brokers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {initialFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center p-4 rounded-lg"
                            >
                                <div
                                    className="flex-shrink-0 rounded-full flex items-center justify-center"
                                    style={{
                                        width: "25%",
                                        height: "80%",
                                        backgroundColor: "#D9D9D9",
                                        boxShadow: "rgb(38, 57, 77) 0px 8px 30px -10px",
                                    }}
                                >
                                    <img src={feature.icon} alt={feature.title} style={{ width: "30%" }} />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold" style={{ color: "#252525" }}>{feature.title}</h3>
                                    <p style={{ color: "#252525" }}>{feature.description}</p>
                                </div>
                            </div>
                        ))}

                        <AnimatePresence>
                            {showMore &&
                                additionalFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center p-4 rounded-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div
                                            className="flex-shrink-0 rounded-full flex items-center justify-center"
                                            style={{
                                                width: "25%",
                                                height: "80%",
                                                backgroundColor: "#D9D9D9",
                                                boxShadow: "rgb(38, 57, 77) 0px 8px 30px -10px",
                                            }}
                                        >
                                            <img src={feature.icon} alt={feature.title} style={{ width: "30%" }} />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold" style={{ color: "#252525" }}>{feature.title}</h3>
                                            <p style={{ color: "#252525" }}>{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>

                    <div className="text-right mt-8">
                        <button
                            onClick={handleToggle}
                            className="font-semibold text-red-600 hover:underline"
                        >
                            {showMore ? "Show Less....." : "Read More....."}
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}