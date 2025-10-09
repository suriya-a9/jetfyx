import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TradersSection() {
    const [showMore, setShowMore] = useState(false);
    const [showParaMore, setShowParaMore] = useState(false);
    const features = [
        {
            title: "Real-Time Market Data",
            description: "Instant access to live currency pair quotes and global market trends.",
        },
        {
            title: "Advanced Charting Tools",
            description: "Customizable indicators, drawing tools, and multiple chart types for precise technical analysis.",
        },
        {
            title: "AI-Powered Trade Insights",
            description: "Smart algorithms to help identify trading opportunities and minimize risk.",
        },
        {
            title: "One-Click Trading",
            description: "Lightning-fast execution with minimal slippage.",
        },
        {
            title: "Risk Management Tools",
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
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <section
                className="relative md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]"
                style={{
                    backgroundColor: "#D9D9D933",
                    marginTop: "100px",
                    borderRadius: "20px",
                    paddingBottom: '2rem'
                }}
            >
                <div className="max-w-7xl mx-auto relative z-10" style={{ borderRadius: "20px" }}>
                    <div className="flex flex-col md:flex-row md:items-center mb-10">
                        <h2
                            className="text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-0 md:w-1/3"
                            style={{ paddingLeft: "20px" }}
                        >
                            <span className="text-red-600">JetFyX</span> for<br />Traders
                        </h2>
                        <p
                            className="text-gray-700 md:w-2/3 bg-white rounded-2xl p-5"
                            style={{ marginLeft: "0", marginTop: "0" }}
                        >
                            At <span className="text-red-600 font-semibold">JetFyX</span>, we believe every trade is more than just numbers on a screen—it's a step toward financial freedom. Whether you're a seasoned broker navigating global markets or a trader sharpening your edge, <span className="text-red-600 font-semibold">JetFyX</span> is here to fuel your journey.
                            {!showParaMore && (
                                <>
                                    &nbsp;
                                    <button
                                        className="font-semibold focus:outline-none"
                                        onClick={() => setShowParaMore(true)}
                                        style={{ color: "#555555" }}
                                    >
                                        Read More..
                                    </button>
                                </>
                            )}
                            <AnimatePresence>
                                {showParaMore && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="inline"
                                    >
                                        &nbsp;Our mission is to empower every user with cutting-edge technology, reliable support, and transparent analytics. We envision a world where trading is accessible, secure, and rewarding for everyone.
                                        &nbsp;
                                        <button
                                            className="font-semibold focus:outline-none"
                                            onClick={() => setShowParaMore(false)}
                                            style={{ color: "#555555" }}
                                        >
                                            Read Less
                                        </button>
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pl-[25px] md:pr-[25px]">
                        <ul className="space-y-4 relative">
                            {[...features, ...(showMore ? additionalFeatures : [])].map(
                                (feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.4, delay: index * 0.2 }}
                                        className="flex items-start relative"
                                    >
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
                            className="font-semibold text-red-600 hover:underline mt-4 text-left"
                        >
                            {showMore ? "Read Less....." : "Read More....."}
                        </button>
                    </div>
                    <div
                        className="md:w-1/2 mb-8 md:mb-0 relative"
                    >
                        <img
                            src="/assets/traders-section-img.webp"
                            alt="JetFyX Edge"
                            className="w-full"
                            style={{borderRadius:'26px'}}
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
}