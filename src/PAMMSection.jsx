import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PAMMSection() {
    const [expandedCard, setExpandedCard] = useState(null);

    const features = [
        {
            title: "Partner Support & Resources",
            description:
                "Dedicated account manager, custom CRM integration, ROI dashboards, and training webinars to sharpen trading leadership.",
        },
        {
            title: "PAMM",
            description:
                "Trade from one master account with profits/losses distributed proportionally among investors. A hands-off solution for professional traders.",
        },
        {
            title: "MAM (Multi-Account Manager)",
            description:
                "Flexible lot allocation for different client risk profiles, perfect for money managers.",
        },
        {
            title: "Social Trading",
            description:
                "Build a trading community where followers can view, learn, and engage in real time—boosting reputation and attracting clients.",
        },
        {
            title: "Copy Trading",
            description:
                "Clients automatically mirror your trades for easy strategy scaling without extra workload.",
        },
        {
            title: "Advanced Analytics",
            description: "Empowering your team with answers, not just data"
        }
    ];

    return (
        <section
            className="bg-[#D9D9D933] md:pt-[2rem] py-16 min-h-[400px]"
            style={{ marginTop: "60px", paddingBottom: "0px" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8 }}
                className="px-4 md:ml-[4%] md:mr-[4%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]"
            >
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-red-600">JetFyX</span> PAMM, MAM & Social Trading
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center md:pl-[2%] md:pr-[2%]">
                    <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-start"
                        style={{ top: "100px", alignSelf: "flex-start" }}>
                        <motion.img
                            src="/assets/pamm-section-img.webp"
                            alt="JetFyX PAMM, MAM & Social Trading"
                            style={{ width: "80%", borderRadius: "20px" }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6 }}
                        />
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`flex flex-col p-[4px] transition-all duration-300 ${expandedCard === index ? "bg-red-50 rounded-lg" : ""
                                    }`}
                            >
                                <h3
                                    onClick={() =>
                                        setExpandedCard(expandedCard === index ? null : index)
                                    }
                                    style={{
                                        borderRadius: "50px",
                                        boxShadow:
                                            expandedCard === index
                                                ? "none"
                                                : "rgb(38, 57, 77) 0px 8px 19px -10px",
                                        padding: expandedCard === index ? "10px 0px" : "10px 25px",
                                        cursor: "pointer",
                                        justifyContent: "space-between",
                                    }}
                                    className={`text-lg font-bold w-full text-gray-800 mb-2 rounded-md ${expandedCard === index ? "bg-red-50" : "bg-[#e7e7e7]"
                                        }`}
                                >
                                    <span style={{ height: expandedCard === index ? "0px" : "60px", display: expandedCard === index ? "inline" : "block" }}>{feature.title}<br /></span>
                                    {expandedCard !== index && (
                                        <div className="text-right text-sm">
                                            <span className="text-red-600 text-right font-semibold hover:underline">
                                                More Info here..
                                            </span>
                                        </div>
                                    )}
                                </h3>

                                {expandedCard === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-gray-700 mb-4">{feature.description}</p>

                                        <div className="mt-2 text-right">
                                            <button
                                                onClick={() =>
                                                    setExpandedCard(expandedCard === index ? null : index)
                                                }
                                                className="font-semibold text-red-600 hover:underline"
                                            >
                                                Show Less..
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}

                    </div>
                </div>
            </motion.div>
        </section>
    );
}