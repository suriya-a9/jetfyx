import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationSection() {
    const initialFeatures = [
        {
            title: "Company Formation",
            description: "Expert help with registering your brokerage in a reputable jurisdiction.",
        },
        {
            title: "Website & CRM",
            description: "Professional website and powerful CRM system to manage your clients.",
        },
        {
            title: "License Consulting",
            description: "Guidance on securing the necessary licenses for legal operation.",
        },
        {
            title: "IB & Affiliate Portals",
            description: "Portals for your partners to track commissions and client activity.",
        },
    ];

    const additionalFeatures = [
        {
            title: "Marketing Support",
            description: "Expert guidance on creating effective marketing strategies for your brokerage.",
        },
        {
            title: "Compliance Assistance",
            description: "Ensure your brokerage meets all regulatory requirements with expert compliance support.",
        },
    ];

    const [showMore, setShowMore] = useState(false);

    const handleReadMore = () => {
        setShowMore(!showMore);
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
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="md:w-1/2 place-items-center">
                            <img
                                src="/assets/consultation-img.webp"
                                alt="Consultation Image"
                                className="md:w-[80%] sm:w-full"
                            />
                        </div>

                        <div className="md:w-1/2 md:mt-[5%]">
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    <span className="text-red-600">JetFyX</span> Consultation - Ask our expert the A-Z of brokerage
                                </h2>
                                <p className="text-gray-700">
                                    Running a successful brokerage requires more than just a trading platform. <span className="text-red-600">JetFyX</span> offers a full suite of services to help you build and grow your entire forex business.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {initialFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-start text-left "
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-700">{feature.description}</p>
                                    </motion.div>
                                ))}

                                <AnimatePresence>
                                    {showMore &&
                                        additionalFeatures.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex flex-col items-start text-left"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-700">{feature.description}</p>
                                            </motion.div>
                                        ))}
                                </AnimatePresence>
                            </div>

                            <div className="text-right mt-8">
                                <button
                                    onClick={handleReadMore}
                                    className="font-semibold text-red-600 hover:underline"
                                >
                                    {showMore ? "Show Less....." : "Read More....."}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}