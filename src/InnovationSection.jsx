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
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
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
                            className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-extrabold text-gray-200 relative hover-shine leading-none"
                        >
                            INNOVATION
                        </h1>

                    </div>

                    <div className="grid gap-6 md:justify-center">
                        {initialFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={
                                    `md:w-[498px] sm:w-full flex flex-col items-start text-left p-4 sm:p-5 md:p-[0.5rem] lg:p-[0.5rem] lg:pl-[15px] lg:pr-[15px] rounded-xl shadow hover:shadow-lg transition 
                ${expandedCard === index ? "bg-red-50" : "bg-gray-50"} 
                ${index === 2 ? "md:col-span-2 md:mx-auto md:max-w-[60%]" : ""}`
                                }
                                style={{
                                    borderRadius: "25px",
                                    backgroundColor: index === 2 ? "#F8F8F8" : undefined,
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-lg md:text-xl font-bold text-red-600 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-[0.9rem] md:text-[0.9rem]">
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
                    </div>

                </div>
            </section>
        </motion.div>
    );
}