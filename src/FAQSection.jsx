import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialFAQs = [
    {
        question: "What is JetFyX?",
        answer:
            "JetFyX is an all-in-one Forex and crypto trading platform designed for brokers and financial institutions. It combines advanced trade execution, CRM, risk management, back office, and reporting tools into one seamless system.",
    },
    {
        question: "Who is JetFyX designed for?",
        answer:
            "The platform is built specifically for forex brokers, prop firms, liquidity providers, and financial institutions looking for reliable, scalable, and transparent trading technology.",
    },
    {
        question: "What makes JetFyX different from other trading platforms?",
        answer:
            "JetFyX offers real-time monitoring, customizable dashboards, multi-server coverage, and advanced risk management tools in a single, integrated solution—streamlining operations while reducing costs.",
    },
    {
        question: "What are the key features of JetFyX?",
        answer:
            "Real-time dealing desk monitoring and analytics Advanced risk management with instant alerts CRM and back-office integration Trading session control with PnL breakdowns Account aggregation and fraud detection Hedge account integration (JetFyX, FIX, and more) Transparent quotes monitoring and feed comparison White-label and branding options 24/7 technical support",
    },
];

const additionalFAQs = [
    {
        question: "Does JetFyX support A/B/C book models?",
        answer:
            "Yes. JetFyX aggregates net volumes from multiple trading platforms into consolidated A/B/C books, making it easy to analyze exposures and compare hedge account coverage.",
    },
    {
        question: "Can I customize the platform to my brokerage’s needs?",
        answer:
            "Absolutely. JetFyX dashboards are fully customizable with widgets so dealers can track the exact metrics they need. White-label branding is also available.",
    },
    {
        question: "Does JetFyX support both demo and live trading?",
        answer:
            "Yes. Brokers can manage both demo and live environments under one portal.",
    },
    {
        question: "Is there integration with hedge accounts?",
        answer:
            "Yes. JetFyX directly connects with hedge accounts to build exposure, net volume, and session metrics across multiple platforms.",
    },
    {
        question: "How does JetFyX help with risk management?",
        answer:
            "JetFyX acts as a real-time “antivirus” for your brokerage, detecting toxic trading, insider risks, scalping, arbitrage, and account manipulations. It instantly alerts dealers to activity outside safe thresholds.",
    },
    {
        question: "Can JetFyX detect organized cheating groups?",
        answer:
            "Yes. By analyzing IPs, CIDs, and online sessions, JetFyX detects related accounts and suspicious trader clusters.",
    },
    {
        question: "How does JetFyX ensure data security?",
        answer:
            "The platform uses enterprise-grade encryption, secure APIs, and multi-server redundancy to protect sensitive data and ensure uptime.",
    },
    {
        question: "Does JetFyX come with CRM and back-office tools?",
        answer:
            "Yes. JetFyX provides an integrated CRM for client onboarding, KYC, deposits, withdrawals, and account management, along with automated reporting for the back office.",
    },
    {
        question: "Can JetFyX generate reports for compliance?",
        answer:
            "Yes. JetFyX provides ready-made historical and live reports covering transactions, PnL, balances, equities, deposits, withdrawals, and trading activity.",
    },
    {
        question: "Does the platform support multi-currency operations?",
        answer:
            "Yes. JetFyX fully supports multi-currency transactions and reporting.",
    },
    {
        question: "How fast is JetFyX trade execution?",
        answer:
            "The platform is built with ultra-low latency connections for lightning-fast order execution.",
    },
    {
        question: "Is JetFyX compatible with JetFyX and FIX APIs?",
        answer:
            "Yes. JetFyX integrates with JetFyX, FIX connections, and other major platforms.",
    },
    {
        question: "Does JetFyX provide 24/7 technical support?",
        answer:
            "Yes. Brokers have access to 24×7 support to resolve issues immediately.",
    },
    {
        question: "Can JetFyX operate across multiple servers?",
        answer:
            "Yes. JetFyX supports multi-server and multi-platform coverage under one consolidated web portal.",
    },
    {
        question: "In which regions is JetFyX currently available?",
        answer:
            "JetFyX is already operating in key global markets, supporting brokers and institutions across Asia, Europe, Africa, and the Middle East.",
    },
    {
        question: "Does JetFyX plan to expand further?",
        answer:
            "Yes. Our plan is to spread JetFyX across all markets and regions, creating a truly global standard for forex technology.",
    },
    {
        question: "Can JetFyX help with regulatory licensing in new regions?",
        answer:
            "Yes. JetFyX provides regulatory support and guidance on company registration, licensing, and compliance in top jurisdictions.",
    },
    {
        question: "How much does JetFyX cost?",
        answer:
            "Pricing depends on the size of your brokerage, required features, and level of customization. Tailored packages are available.",
    },
    {
        question: "How long does it take to set up JetFyX?",
        answer:
            "Implementation timelines vary, but in most cases, JetFyX can be deployed and integrated within a few weeks.",
    },
    {
        question: "Do you provide training for staff?",
        answer:
            "Yes. Comprehensive onboarding and training are included to ensure your team can maximize all platform features.",
    },
];

export default function FAQSection() {
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const faqs = showMore ? [...initialFAQs, ...additionalFAQs] : initialFAQs;

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const handleShowMore = () => setShowMore(!showMore);

    return (
        <section className="py-16 bg-white sm:ml-[0] sm:mr-[0] md:ml-[4%] md:mr-[4%] 2xl:ml-[10%] 2xl:mr-[10%]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8 }}
                className="px-4 place-items-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-600">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4 md:w-[80%]">
                    <AnimatePresence>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                style={{
                                    borderRadius: expandedFAQ === index ? "30px" : "50px",
                                    padding: "20px 30px",
                                }}
                                className={`p-4 rounded-lg shadow transition-all duration-300 ${expandedFAQ === index ? "bg-[#f0f0f0]" : "bg-[#D9D9D9]"
                                    }`}
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="text-lg font-bold text-gray-800 flex-1">
                                        {faq.question}
                                    </h3>
                                    <div className="flex-shrink-0 ml-4">
                                        {expandedFAQ === index ? (
                                            <ChevronUp
                                                className="w-6 h-6 text-red-600"
                                                style={{ border: "2px solid", borderRadius: "50px" }}
                                            />
                                        ) : (
                                            <ChevronDown
                                                className="w-6 h-6 text-red-600"
                                                style={{ border: "2px solid", borderRadius: "50px" }}
                                            />
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedFAQ === index && (
                                        <motion.p
                                            key="answer"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-4 text-gray-700 overflow-hidden"
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center mt-8">
                    <motion.button
                        onClick={handleShowMore}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
                    >
                        {showMore ? "Show Less FAQ" : "Show More FAQ"}
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
}