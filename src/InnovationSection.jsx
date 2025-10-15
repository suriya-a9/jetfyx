import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./InnovationSection.css";

export default function InnovationSection() {
    const initialFeatures = [
        {
            title: "Blockchain-Protected Trading",
            shortDescription:
                "Every order execution and trade transaction is secured on the blockchain, ensuring full transparency ",
            fullDescription:
                "and eliminating any chance of manipulation.",
        },
        {
            title: "VR Metaverse Technology",
            shortDescription:
                "Step into a virtual world where trading becomes immersive, interactive, and visually dynamic—bringing data ",
            fullDescription:
                "and market movements to life like never before.",
        },
        {
            title: "Metaverse Voice Command (Coming Soon)",
            shortDescription:
                "Enter a 3D virtual trading floor and control trades with natural voice commands. ",
            fullDescription:
                "Place orders, request data, and analyze trends—all hands-free and fully immersive.",
        },
    ];

    const [expandedCard, setExpandedCard] = useState(null);

    const handleReadMore = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <section
            className="py-16 md:ml-[4%] md:mr-[4%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%] bg-[#fcfcfc]"
            style={{ marginTop: "60px" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8 }}
                className="px-4"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        The Next Big Leap in Trading <br /> Technology
                    </h1>
                    <p className="text-gray-700 mb-4">
                        Innovations that will transform how the world trades:
                    </p>
                    {/* <h1 className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-extrabold text-gray-200 relative hover-shine leading-none">
                        INNOVATION
                    </h1> */}
                    <img src="/assets/01_Jet and Static animation.gif" />
                </div>

                <div className="grid gap-6 md:justify-center">
                    {initialFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`md:w-[498px] sm:w-full flex flex-col items-start text-left p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300 ${expandedCard === index ? "bg-red-50" : "bg-gray-50"
                                } ${index === 2 ? "md:col-span-2 md:mx-auto md:max-w-[60%]" : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <h3 className="text-lg md:text-xl font-bold text-red-600 mb-2">
                                {feature.title}
                            </h3>

                            <p className="text-gray-700 text-sm sm:text-[0.9rem] md:text-[0.9rem]">
                                {feature.shortDescription}
                                {expandedCard === index && feature.fullDescription}
                                {expandedCard !== index && (
                                    <button
                                        onClick={() => handleReadMore(index)}
                                        className="font-semibold text-red-600 hover:underline ml-1"
                                    >
                                        Read More...
                                    </button>
                                )}
                            </p>

                            <AnimatePresence>
                                {expandedCard === index && (
                                    <motion.button
                                        key="showLess"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => handleReadMore(index)}
                                        className="font-semibold text-red-600 hover:underline mt-2"
                                    >
                                        Show Less...
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}