import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CRMSection() {
    const initialFeatures = [
        {
            title: "Lead Scoring",
            description: "Prioritize prospects with intelligent scoring models.",
        },
        {
            title: "Predictive Insights",
            description: "AI-driven forecasts to improve conversions and retention.",
        },
        {
            title: "Automated Onboarding",
            description: "Streamlined client verification, KYC, and account setup.",
        },
        {
            title: "IB Commission Automation",
            description: "Automatic tracking and payouts for introducing brokers.",
        },
    ];

    const additionalFeatures = [
        {
            title: "Advanced Analytics",
            description: "Gain insights with powerful analytics tools.",
        },
        {
            title: "Customizable Dashboards",
            description: "Tailor dashboards to suit your business needs.",
        },
    ];

    const [features, setFeatures] = useState(initialFeatures);
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        if (showMore) {
            setFeatures(initialFeatures);
        } else {
            setFeatures([...initialFeatures, ...additionalFeatures]);
        }
        setShowMore(!showMore);
    };

    // Variants for list item animations
    const listVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: i * 0.2 },
        }),
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <section
                className="bg-white relative overflow-hidden"
                style={{ borderRadius: "20px", marginTop: "60px", paddingTop: "4rem" }}
            >
                <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-r from-red-200 via-red-50 to-transparent pointer-events-none z-0"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10" style={{ borderRadius: "20px" }}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2 md:mb-0">
                            <span className="text-red-600">JetFyX</span> CRM and<br />Back Office
                        </h2>
                        <p className="text-gray-700 md:ml-8 max-w-2xl">
                            At <span className="text-red-600 font-semibold">JetFyX</span>, we believe every trade is more than just numbers on a screen—it's a step toward financial freedom. Whether you're a seasoned broker navigating global markets or a trader sharpening your edge, <span className="text-red-600 font-semibold">JetFyX</span> is here to fuel your journey.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 relative">
                            <img
                                src="/assets/crm-img.webp"
                                alt="JetFyX CRM and Back Office"
                                className="w-full relative"
                            />
                        </div>

                        <div className="md:w-1/2 space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"
                                        }`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={listVariants}
                                    custom={index} // Custom delay for each feature
                                >
                                    <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition w-3/4">
                                        <h3 className="text-lg font-bold text-red-600 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-700">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="text-right mt-8">
                        <button
                            onClick={handleToggle}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                        >
                            {showMore ? "Less Information" : "More Information"}
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}