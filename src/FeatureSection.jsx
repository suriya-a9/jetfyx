import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const features = [
    {
        title: 'Fully Integrated Platform',
        description: 'Execution, risk management, reporting, CRM, and IB portal in one system.',
        image: '/assets/broker-img-1.webp',
    },
    {
        title: 'Lightning-Fast Execution',
        description: 'Trade with unparalleled speed and accuracy.',
        image: '/assets/broker-img-1.webp',
    },
    {
        title: 'Deep Liquidity Access',
        description: 'Access deep liquidity pools for better trading opportunities.',
        image: '/assets/broker-img-1.webp',
    },
    {
        title: 'White Label Solutions',
        description: 'Customizable solutions for brokers and businesses.',
        image: '/assets/broker-img-1.webp',
    },
    {
        title: 'Regulatory & Company Setup',
        description: 'Comprehensive support for regulatory compliance and company setup.',
        image: '/assets/broker-img-1.webp',
    },
    {
        title: 'Website & Payment Gateway',
        description: 'Integrated website and payment gateway solutions.',
        image: '/assets/broker-img-1.webp',
    },
    {
        title: 'Risk Management Tools',
        description: 'Advanced tools for managing trading risks effectively.',
        image: '/assets/broker-img-1.webp',
    },
    {
        title: 'Advanced Back-Office',
        description: 'Streamlined back-office operations for brokers.',
        image: '/assets/broker-img-1.webp',
    },
    {
        title: 'JetFyX CRM',
        description: 'Powerful CRM tools for managing client relationships.',
        image: '/assets/broker-img-1.webp',
    },
];

const FeatureSection = () => {
    const [activeFeature, setActiveFeature] = useState(features[0]);
    const [showParaMore, setShowParaMore] = useState(false);

    return (
        <>
            <div
                className="feature-section"
                style={{
                    backgroundColor: '#f9f9f9',
                    borderRadius: '16px',
                }}
            >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10" style={{ marginTop: '60px', backgroundColor: '#f9f9f9', paddingTop: "45px", paddingLeft: '25px' }}>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2 md:mb-0">
                        <span className="text-red-600">JetFyX</span><br />For Brokers
                    </h2>
                    <p className="text-gray-700 md:ml-8 max-w-2xl">
                        <span className="text-red-600 font-semibold">JetFyX</span>offers a fully integrated platform that combines trade execution, risk management, reporting, and CRM into one seamless system—complete with lightning-fast performance
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
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '40px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '16px',
                }}>
                    <div
                        className="feature-image-container"
                        style={{
                            flex: '1',
                            textAlign: 'center',
                            padding: '20px',
                            position: 'relative'
                        }}
                    >
                        <img
                            src={activeFeature.image}
                            alt={activeFeature.title}
                            style={{
                                width: '100%',
                                borderRadius: '16px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <div style={{ position: 'absolute', bottom: '40px', textAlign: 'left', padding: '15px' }}>
                            <h3
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    marginTop: '20px',
                                    color: '#333',
                                }}
                            >
                                {activeFeature.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: '#555',
                                    marginTop: '10px',
                                }}
                            >
                                {activeFeature.description}
                            </p>
                        </div>
                    </div>
                    <div
                        className="feature-list-container"
                        style={{
                            flex: '1',
                            padding: '20px',
                        }}
                    >
                        <ul
                            style={{
                                listStyleType: 'none',
                                padding: '0',
                                margin: '0',
                            }}
                        >
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    onClick={() => setActiveFeature(feature)}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '10px 20px',
                                        marginBottom: '10px',
                                        backgroundColor:
                                            activeFeature.title === feature.title
                                                ? '#d32f2f'
                                                : '#ffffff',
                                        color:
                                            activeFeature.title === feature.title
                                                ? '#ffffff'
                                                : '#333',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        transition: 'background-color 0.3s, color 0.3s',
                                    }}
                                >
                                    {feature.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default FeatureSection;