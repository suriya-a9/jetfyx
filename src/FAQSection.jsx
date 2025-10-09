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
            "JetFyX is designed for brokers, financial institutions, and traders looking for advanced trading tools and seamless integration.",
    },
    {
        question: "What makes JetFyX different from other trading platforms?",
        answer:
            "JetFyX offers advanced features like multi-asset trading, CRM integration, and risk management tools, making it a comprehensive solution for brokers.",
    },
    {
        question: "What are the key principles of UX design?",
        answer:
            "The key principles of UX design include usability, accessibility, and creating intuitive interfaces that enhance user satisfaction.",
    },
];

const additionalFAQs = [
    {
        question: "How does JetFyX ensure security?",
        answer:
            "JetFyX uses advanced encryption and blockchain technology to ensure secure transactions and data protection.",
    },
    {
        question: "Can JetFyX be customized for specific needs?",
        answer:
            "Yes, JetFyX offers customizable solutions tailored to meet the specific needs of brokers and financial institutions.",
    },
    {
        question: "What makes JetFyX different from other trading platforms?",
        answer:
            "JetFyX offers advanced features like multi-asset trading, CRM integration, and risk management tools, making it a comprehensive solution for brokers.",
    },
    {
        question: "What are the key principles of UX design?",
        answer:
            "The key principles of UX design include usability, accessibility, and creating intuitive interfaces that enhance user satisfaction.",
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