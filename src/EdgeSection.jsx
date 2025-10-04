import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EdgeSection() {
    const [showMore, setShowMore] = useState(false);

    const features = [
        {
            title: "Multiple Take Profit Levels",
            description: "Automate strategies with multi-level profit booking and loss control to close trades smartly.",
        },
        {
            title: "Lock in Profits Step-by-Step",
            description: "Secure gains at set prices while letting the rest ride.",
        },
        {
            title: "Flexible Settings",
            description: "Choose exact prices, quantities, or percentages for partial closes.",
        },
        {
            title: "Fully Automated",
            description: "Executes instantly, even when you’re offline.",
        },
    ];

    const additionalFeatures = [
        {
            title: "Advanced Risk Management",
            description: "Optimize trading strategies with real-time risk analysis tools.",
        },
        {
            title: "Customizable Alerts",
            description: "Set alerts for price movements and trading conditions.",
        },
        {
            title: "Portfolio Optimization",
            description: "Maximize returns with advanced portfolio management tools.",
        },
    ];

    return (
        <section
            className="relative"
            style={{
                backgroundColor: "#D9D9D933",
                paddingBottom: "4rem",
                marginTop: "100px",
                borderRadius: "20px",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
                <div
                    className="md:w-1/2 mb-8 md:mb-0 relative"
                    style={{ top: "-100px" }}
                >
                    <img
                        src="/assets/edge-img.webp"
                        alt="JetFyX Edge"
                        className="w-full"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-red-600">JetFyX</span> Edge
                    </h2>
                    <ul className="space-y-4 relative">
                        {[...features, ...(showMore ? additionalFeatures : [])].map(
                            (feature, index, arr) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-start relative"
                                >
                                    {index !== arr.length - 1 && (
                                        <div
                                            className="absolute h-full border-l-4"
                                            style={{ top: "20px", left: "7px", color: '#D9D9D9' }}
                                        ></div>
                                    )}
                                    <div className="w-4 h-4 bg-red-600 rounded-full mt-1 mr-4"></div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-700">{feature.description}</p>
                                    </div>
                                </motion.li>
                            )
                        )}
                    </ul>
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="font-semibold text-red-600 hover:underline mt-4"
                    >
                        {showMore ? "Read Less....." : "Read More....."}
                    </button>
                </div>
            </div>
        </section>
    );
}