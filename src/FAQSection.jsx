import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const initialFAQs = [
    {
        question: "What is JetFyX?",
        answer: "JetFyX is an all-in-one Forex and crypto trading platform designed for brokers and financial institutions. It combines advanced trade execution, CRM, risk management, back office, and reporting tools into one seamless system.",
    },
    {
        question: "Who is JetFyX designed for?",
        answer: "JetFyX is designed for brokers, financial institutions, and traders looking for advanced trading tools and seamless integration.",
    },
    {
        question: "What makes JetFyX different from other trading platforms?",
        answer: "JetFyX offers advanced features like multi-asset trading, CRM integration, and risk management tools, making it a comprehensive solution for brokers.",
    },
    {
        question: "What are the key principles of UX design?",
        answer: "The key principles of UX design include usability, accessibility, and creating intuitive interfaces that enhance user satisfaction.",
    },
];

const additionalFAQs = [
    {
        question: "How does JetFyX ensure security?",
        answer: "JetFyX uses advanced encryption and blockchain technology to ensure secure transactions and data protection.",
    },
    {
        question: "Can JetFyX be customized for specific needs?",
        answer: "Yes, JetFyX offers customizable solutions tailored to meet the specific needs of brokers and financial institutions.",
    },
    {
        question: "What makes JetFyX different from other trading platforms?",
        answer: "JetFyX offers advanced features like multi-asset trading, CRM integration, and risk management tools, making it a comprehensive solution for brokers.",
    },
    {
        question: "What are the key principles of UX design?",
        answer: "The key principles of UX design include usability, accessibility, and creating intuitive interfaces that enhance user satisfaction.",
    },
];

export default function FAQSection() {
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [faqs, setFaqs] = useState(initialFAQs);
    const [additionalAdded, setAdditionalAdded] = useState(false);

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const handleShowMore = () => {
        if (additionalAdded) {
            setFaqs(initialFAQs);
        } else {
            setFaqs((prevFaqs) => [...prevFaqs, ...additionalFAQs]);
        }
        setAdditionalAdded(!additionalAdded);
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-600">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                style={{ borderRadius: '50px', padding: '20px 30px' }}
                                className={`p-4 rounded-lg shadow transition ${expandedFAQ === index ? "bg-[#D9D9D9]" : "bg-[#D9D9D9]"
                                    }`}
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {faq.question}
                                    </h3>
                                    {expandedFAQ === index ? (
                                        <ChevronUp
                                            className="w-6 h-6 text-red-600"
                                            style={{ border: '2px solid', borderRadius: '50px' }}
                                        />
                                    ) : (
                                        <ChevronDown
                                            className="w-6 h-6 text-red-600"
                                            style={{ border: '2px solid', borderRadius: '50px' }}
                                        />
                                    )}
                                </div>
                                {expandedFAQ === index && (
                                    <p className="mt-4 text-gray-700">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button
                            onClick={handleShowMore}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                        >
                            {additionalAdded ? "Less FAQ" : "More FAQ"}
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}