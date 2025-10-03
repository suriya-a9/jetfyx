import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [activeIndex, setActiveIndex] = useState(0); // Track the active feature index

    return (
        <div
            className="feature-section"
            style={{
                backgroundColor: '#f9f9f9',
                borderRadius: '16px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {/* Left Side: Image with Red Background and Arrow */}
            <div
                className="feature-image-container"
                style={{
                    flex: '1',
                    textAlign: 'center',
                    padding: '20px',
                    position: 'relative',
                }}
            >
                {/* Red Background */}
                <div
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#d32f2f',
                        borderRadius: '16px',
                        zIndex: '0',
                    }}
                ></div>

                {/* Arrow */}
                <div
                    style={{
                        position: 'absolute',
                        top: `${activeIndex * 50 + 20}px`, // Dynamically adjust arrow position
                        left: '-20px',
                        width: '0',
                        height: '0',
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        borderRight: '20px solid #d32f2f',
                        zIndex: '1',
                    }}
                ></div>

                {/* Image */}
                <img
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    style={{
                        width: '100%',
                        height:'100%',
                        borderRadius: '16px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        zIndex: '1',
                        position: 'relative',
                    }}
                />
                <div style={{ marginTop: '20px', }}>
                    <h3
                        style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#333',
                        }}
                    >
                        {activeFeature.title}
                    </h3>
                    <p
                        style={{
                            fontSize: '16px',
                            color: '#555',
                        }}
                    >
                        {activeFeature.description}
                    </p>
                </div>
            </div>

            {/* Right Side: List of Features */}
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
                            onClick={() => {
                                setActiveFeature(feature);
                                setActiveIndex(index); // Update the active index
                            }}
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
    );
};

export default FeatureSection;