import React, { useState } from "react";
import { motion } from "framer-motion";

const Check = ({ className = "w-5 h-5 text-red-600" }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4 10.5L8 14.5L16 6.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function PricingSection() {
    const [selectedPlan, setSelectedPlan] = useState("free");

    const freeFeatures = [
        "Limited broker access",
        "Basic trading terminal",
        "Standard support",
        "Core platform features",
        "Mobile & web access",
    ];

    const proFeatures = [
        "Unlimited broker access",
        "Full trading terminal suite",
        "Priority support",
        "All advanced features",
        "White label solutions",
        "PAMM & MAM systems",
        "Advanced analytics",
        "Multi-language support",
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.2 },
        }),
    };

    return (
        <section className="py-16 bg-white md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]">
            <div className="max-w-6xl">
                <div className="grid grid-cols-1 bg-[#fcfcfc] md:grid-cols-2 gap-6 mr-0 ml-0 md:mr-[10%] md:ml-[15%]">
                    <motion.div
                        onClick={() => setSelectedPlan("free")}
                        className={`cursor-pointer rounded-xl bg-[#fcfcfc] shadow-md p-6 flex flex-col transition-all duration-200 ${selectedPlan === "free"
                            ? "border-[3px] border-red-500"
                            : "border border-gray-200 bg-white hover:border-red-300"
                            }`}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={0}
                        // whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.25 }}
                    >
                        <div style={{ textAlign: "center", margin: "0px auto" }}>
                            <div className="text-xl font-bold text-gray-900">Free Trial</div>
                            <div className="flex items-baseline gap-3 mt-2 justify-center">
                                <span className="text-5xl font-extrabold text-gray-900">Free</span>
                                <span className="text-gray-500">3 months</span>
                            </div>
                            <p className="text-gray-600 mt-3">
                                Perfect for testing our platform with
                                <br />
                                basic broker access
                            </p>
                            <p className="text-sm text-orange-500 mt-2">
                                Limited broker connections available
                            </p>
                            <br />
                            <ul className="mt-6 space-y-3">
                                {freeFeatures.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-1">
                                            <Check className="w-4 h-4 text-red-500" />
                                        </span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${selectedPlan === "free"
                                ? "bg-red-600 text-white hover:bg-red-700"
                                : "border border-red-400 text-red-600 hover:bg-red-50"
                                }`}
                        >
                            Start Free Trial
                        </button>
                    </motion.div>

                    <motion.div
                        onClick={() => setSelectedPlan("pro")}
                        className={`cursor-pointer rounded-xl shadow-md p-6 bg-[#fcfcfc] flex flex-col transition-all duration-200 relative ${selectedPlan === "pro"
                            ? "border-[3px] border-red-500"
                            : "border border-gray-200 bg-white hover:border-red-300"
                            }`}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        // whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.25 }}
                    >
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                            <div className="bg-red-600 text-white text-sm px-4 py-1 rounded-full font-semibold">
                                Most Popular
                            </div>
                        </div>
                        <div style={{ textAlign: "center", margin: "0px auto" }}>
                            <div className="text-xl font-bold text-gray-900">Monthly Plan</div>
                            <div className="flex items-baseline gap-3 mt-2 justify-center">
                                <span className="text-5xl font-extrabold text-gray-900">$2000</span>
                                <span className="text-gray-500">per month</span>
                            </div>
                            <p className="text-gray-600 mt-3">
                                Full access to all JetFyX features with
                                <br />
                                monthly flexibility
                            </p>
                            <p className="text-sm text-gray-500 mt-2">Billed Monthly</p>
                            <br />
                            <ul className="mt-6 space-y-3">
                                {proFeatures.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-1">
                                            <Check className="w-4 h-4 text-red-500" />
                                        </span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${selectedPlan === "pro"
                                ? "bg-red-600 text-white hover:bg-red-700"
                                : "border border-red-400 text-red-600 hover:bg-red-50"
                                }`}
                        >
                            Get Started
                        </button>
                    </motion. div>
                </div>
            </div>
        </section>
    );
}