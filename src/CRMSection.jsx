import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CRMSection() {
    const initialFeatures = [
        { title: "Lead Scoring", description: "Prioritize prospects with intelligent scoring models." },
        { title: "Predictive Insights", description: "AI-driven forecasts to improve conversions and retention." },
        { title: "Automated Onboarding", description: "Streamlined client verification, KYC, and account setup." },
    ];

    const additionalFeatures = [
        { title: "IB Commission Automation", description: "Automatic tracking and payouts for introducing brokers." },
        { title: "Multi-Language Communication", description: "Engage clients in their preferred language." },
        { title: "Real-Time Compliance Alerts", description: "Instant notifications for regulatory and operational checks." },
        { title: "Integrated Performance Dashboards", description: "Monitor leads, clients, and IBs with clear analytics." },
        { title: "Custom CRM Integration", description: "Sync seamlessly with trading platforms and back-office systems." },
        { title: "Data Security", description: "Bank-grade encryption and secure handling of client data." },
    ];

    const [features, setFeatures] = useState(initialFeatures);
    const [showMore, setShowMore] = useState(false);
    const [showParaMore, setShowParaMore] = useState(false);
    const [showScrollHint, setShowScrollHint] = useState(false);
    const featureContainerRef = useRef(null);

    const handleToggle = () => {
        if (showMore) {
            setFeatures(initialFeatures);
            setShowScrollHint(false);
        } else {
            setFeatures([...initialFeatures, ...additionalFeatures]);
            setShowScrollHint(true);
        }
        setShowMore(!showMore);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (featureContainerRef.current && featureContainerRef.current.scrollTop > 10) {
                setShowScrollHint(false);
            }
        };

        const el = featureContainerRef.current;
        if (el) el.addEventListener("scroll", handleScroll);
        return () => el && el.removeEventListener("scroll", handleScroll);
    }, []);

    const listVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: i * 0.2 },
        }),
    };

    return (
        <>
            <section
                className="bg-white relative overflow-hidden md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]"
                style={{ borderRadius: "20px", marginTop: "60px", paddingTop: "4rem" }}
            >
                <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-r from-red-200 via-red-50 to-transparent pointer-events-none z-0"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10" style={{ borderRadius: "20px" }}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2 md:mb-0">
                            <span className="text-red-600">JetFyX</span> CRM and<br />Back Office
                        </h2>
                        <div className="md:w-7/10">
                            <p className="text-gray-700 md:ml-8 max-w-3xl">
                                <span className="text-red-600 font-semibold">JetFyX</span> Forex Trading Platform includes a powerful CRM and back-office system that streamlines client onboarding, KYC, deposits, withdrawals, and account management. With real-time risk controls, automated reporting, and customizable dashboards,
                                {!showParaMore && (
                                    <button
                                        className="font-semibold focus:outline-none"
                                        onClick={() => setShowParaMore(true)}
                                        style={{ color: "#555555" }}
                                    >
                                        {" "}Read More..
                                    </button>
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
                                            &nbsp;it connects traders, dealers, and administrators in one seamless workflow—making brokerage operations smarter, faster, and more efficient.
                                            <button
                                                className="font-semibold focus:outline-none"
                                                onClick={() => setShowParaMore(false)}
                                                style={{ color: "#555555" }}
                                            >
                                                {" "}Read Less
                                            </button>
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center relative">
                        <div className="md:w-1/2 mb-8 md:mb-0 relative">
                            <img
                                src="/assets/crm-img.webp"
                                alt="JetFyX CRM and Back Office"
                                className="w-full relative left-[-20px] bottom-[-14px] 2xl:left-[-18%]"
                            />
                        </div>

                        <div
                            ref={featureContainerRef}
                            className="md:w-1/2 space-y-6 max-h-[400px] overflow-y-auto pr-2 hide-scrollbar relative"
                        >
                            <style>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={listVariants}
                                    custom={index}
                                >
                                    <div
                                        className="bg-[#F8F8F8] p-[10px] rounded-lg shadow hover:shadow-lg transition w-3/4"
                                        style={{ borderRadius: "20px" }}
                                    >
                                        <h3 className="text-lg font-bold text-red-600 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-700">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Scroll hint arrow */}
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
                    </div>
                </div>
            </section>

            <div className="text-right mt-8 md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]">
                <button
                    onClick={handleToggle}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                    {showMore ? "Less Information" : "More Information"}
                </button>
            </div>
        </>
    );
}