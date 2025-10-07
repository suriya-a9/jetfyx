import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PAMMSection() {
    const [expandedCard, setExpandedCard] = useState(null);

    const features = [
        {
            title: "Partner Support & Resources",
            description: "Access exclusive resources and tools to support partners in managing accounts effectively.",
        },
        {
            title: "PAMM (Percent Allocation Management Module)",
            description: "Allocate trades proportionally across multiple accounts with ease and precision.",
        },
        {
            title: "MAM (Multi-Account Manager)",
            description: "Manage multiple accounts simultaneously with advanced tools for streamlined operations.",
        },
        {
            title: "Social Trading",
            description: "Collaborate with other traders and share strategies in real-time.",
        },
        {
            title: "Copy Trading",
            description: "Replicate trades automatically without requiring additional servers.",
        },
    ];

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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-red-600">JetFyX</span> PAMM, MAM & Social Trading
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src="/assets/pamm-section-img.webp"
                                alt="JetFyX PAMM, MAM & Social Trading"
                                className="w-full"
                            />
                        </div>

                        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col p-4 ${expandedCard === index ? "bg-red-50 rounded-lg" : ""
                                        }`}
                                >
                                    <h3 style={{ borderRadius: '50px', padding: '10px 25px', fontSize: '15px' }}
                                        className={`text-lg font-bold w-full text-gray-800 mb-2 p-2 rounded-md ${expandedCard === index ? "bg-red-50" : "bg-gray-100"
                                            }`}
                                    >
                                        {feature.title}
                                    </h3>
                                    {expandedCard === index && (
                                        <p className="text-gray-700 mb-4">{feature.description}</p>
                                    )}
                                    <div className="mt-4 text-right">
                                        <button
                                            onClick={() =>
                                                setExpandedCard(expandedCard === index ? null : index)
                                            }
                                            className="font-semibold text-red-600 hover:underline"
                                        >
                                            {expandedCard === index ? "Show Less.." : "More Info here.."}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}