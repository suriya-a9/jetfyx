import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function TradersSection() {
    const [showMore, setShowMore] = useState(false);
    const [showScrollHint, setShowScrollHint] = useState(false);
    const listRef = useRef(null);

    const features = [
        { title: "Real-Time Market Data", description: "Instant access to live currency pair quotes and global market trends." },
        { title: "Advanced Charting Tools", description: "Customizable indicators, drawing tools, and multiple chart types for precise technical analysis." },
        { title: "AI-Powered Trade Insights", description: "Smart algorithms to help identify trading opportunities and minimize risk." },
        { title: "One-Click Trading", description: "Lightning-fast execution with minimal slippage." },
        { title: "Risk Management Tools", description: "Set stop-loss, take-profit, and trailing stops with ease." },
    ];

    const additionalFeatures = [
        { title: "Multi-Device Access", description: "Trade seamlessly across desktop, mobile, VR, and AR platforms." },
        { title: "Multi-Accounts", description: "Multiple accounts in a single login, and you can log in individually with the master and investor passwords." },
        { title: "Educational Hub", description: "Tutorials, webinars, and interactive learning modules for all skill levels." },
        { title: "24/7 Customer Support", description: "A dedicated forex support team available anytime, anywhere." },
        { title: "Integrated Accounts", description: "Access all your accounts in one single terminal. Avoid multiple logins and logouts." },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (listRef.current && listRef.current.scrollTop > 10) {
                setShowScrollHint(false);
            }
        };

        const listEl = listRef.current;
        if (listEl) listEl.addEventListener("scroll", handleScroll);
        return () => listEl && listEl.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (showMore) {
            setShowScrollHint(true);
            if (listRef.current) listRef.current.scrollTop = 0;
        } else {
            setShowScrollHint(false);
        }
    }, [showMore]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <section
                className="relative md:ml-[6%] md:mr-[6%] 2xl:ml-[10%] 2xl:mr-[10%]"
                style={{
                    backgroundColor: "#D9D9D933",
                    marginTop: "100px",
                    borderRadius: "20px",
                    paddingBottom: "2rem",
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
                        <p className="text-gray-700 md:w-2/3 bg-white rounded-2xl p-5">
                            For <span className="text-red-600 font-semibold">traders</span> and game changers alike, JetFyX is your gateway to global forex success, delivering insight to execution with precision, turning volatility into opportunity, and helping you navigate the market with confidence—because every second counts.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-stretch">
                    <div className="md:w-1/2 md:pl-[25px] md:pr-[25px] relative">
                        <div
                            ref={listRef}
                            className="overflow-y-auto max-h-[500px] pr-2 hide-scrollbar"
                        >
                            <ul className="space-y-4 relative">
                                {[...features, ...(showMore ? additionalFeatures : [])].map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start relative"
                                    >
                                        <div className="w-4 h-4 bg-red-600 rounded-full mt-1 mr-4"></div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
                                            <p className="text-gray-700">{feature.description}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="font-semibold text-red-600 hover:underline mt-4 text-left"
                        >
                            {showMore ? "Read Less....." : "Read More....."}
                        </button>

                        {showScrollHint && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"
                            >
                                <ChevronDown className="animate-bounce text-gray-600 w-6 h-6" />
                            </motion.div>
                        )}
                    </div>

                    <div
                        className="md:w-1/2 mb-8 md:mb-0 relative flex justify-center items-center"
                        style={{
                            position: "sticky",
                            top: "100px",
                            alignSelf: "flex-start",
                        }}
                    >
                        <img
                            src="/assets/traders-section-img.webp"
                            alt="JetFyX Edge"
                            className="w-full rounded-[26px]"
                            style={{ maxHeight: "500px", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
}