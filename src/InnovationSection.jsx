import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./InnovationSection.css";

export default function InnovationSection() {
    const initialFeatures = [
        {
            title: "Blockchain-Protected Trading",
            shortDescription: "Every order execution and trade transaction is secured on the blockchain, ensuring full transparency - ",
            fullDescription: "Every order execution and trade transaction is secured on the blockchain, ensuring full transparency, immutability, and security for traders.",
        },
        {
            title: "VR Metaverse Technology",
            shortDescription: "Step into a virtual world where trading becomes immersive, interactive, and visually engaging - ",
            fullDescription: "Step into a virtual world where trading becomes immersive, interactive, and visually engaging, revolutionizing the trading experience.",
        },
        {
            title: "Metaverse Voice Command (Coming Soon)",
            shortDescription: "Enter a 3D virtual trading floor and control trades with natural voice commands - ",
            fullDescription: "Enter a 3D virtual trading floor and control trades with natural voice commands, making trading faster and more intuitive.",
        },
    ];

    const [expandedCard, setExpandedCard] = useState(null);

    const handleReadMore = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        The Next Big Leap in Trading<br />Technology
                    </h1>
                    <p className="text-gray-700 mb-4">
                        Innovations that will transform how the world trades:
                    </p>
                    <h1
                        className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-extrabold text-gray-200 relative hover-shine leading-none"
                    >
                        INNOVATION
                    </h1>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {initialFeatures.slice(0, 2).map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`w-full flex flex-col items-start text-left p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow hover:shadow-lg transition ${expandedCard === index ? "bg-red-50" : "bg-gray-50"}`}
                            style={{ borderRadius: "25px" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-lg md:text-xl font-bold text-red-600 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-base">
                                {expandedCard === index
                                    ? feature.fullDescription
                                    : feature.shortDescription}
                                {expandedCard !== index && (
                                    <button
                                        onClick={() => handleReadMore(index)}
                                        className="font-semibold text-red-600 hover:underline ml-1"
                                    >
                                        Read More...
                                    </button>
                                )}
                            </p>
                            {expandedCard === index && (
                                <button
                                    onClick={() => handleReadMore(index)}
                                    className="font-semibold text-red-600 hover:underline mt-4"
                                >
                                    Show Less...
                                </button>
                            )}
                        </motion.div>
                    ))}

                    <motion.div
                        className={`flex flex-col items-start text-left p-4 sm:p-6 md:p-8 rounded-lg shadow hover:shadow-lg transition ${expandedCard === 2 ? "bg-red-50" : ""} col-span-2 mx-auto`}
                        style={{ borderRadius: "25px", backgroundColor: "#F8F8F8" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg font-bold text-red-600 mb-2">
                            {initialFeatures[2].title}
                        </h3>
                        <p className="text-gray-700">
                            {expandedCard === 2
                                ? initialFeatures[2].fullDescription
                                : initialFeatures[2].shortDescription}
                            {expandedCard !== 2 && (
                                <button
                                    onClick={() => handleReadMore(2)}
                                    className="font-semibold text-red-600 hover:underline"
                                >
                                    Read More...
                                </button>
                            )}
                        </p>
                        {expandedCard === 2 && (
                            <button
                                onClick={() => handleReadMore(2)}
                                className="font-semibold text-red-600 hover:underline mt-4"
                            >
                                Show Less...
                            </button>
                        )}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}