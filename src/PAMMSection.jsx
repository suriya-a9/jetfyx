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
            <section className="py-16 bg-[#D9D9D933] md:pt-[2rem]" style={{ marginTop: '60px', paddingBottom: '0px' }}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-red-600">JetFyX</span> PAMM, MAM & Social Trading
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:pl-[2%] md:pr-[2%]">
                        <div className="md:w-1/2 mb-8 md:mb-0 place-items-center">
                            <img
                                src="/assets/pamm-section-img.webp"
                                alt="JetFyX PAMM, MAM & Social Trading"
                                style={{ width: '80%' }}
                            />
                        </div>

                        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col p-[4px] ${expandedCard === index ? "bg-red-50 rounded-lg" : ""
                                        }`}
                                >
                                    <h3
                                        style={{
                                            borderRadius: '50px',
                                            fontSize: '15px',
                                            boxShadow: expandedCard === index
                                                ? 'none'
                                                : 'rgb(38, 57, 77) 0px 8px 19px -10px',
                                            padding: expandedCard === index ? '10px 0px' : '10px 25px',
                                        }}
                                        className={`text-lg font-bold w-full text-gray-800 mb-2 rounded-md ${expandedCard === index ? "bg-red-50" : "bg-[#e7e7e7]"
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