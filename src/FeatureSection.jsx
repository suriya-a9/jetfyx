import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const features = [
    { title: 'Fully Integrated Platform', description: 'Execution, risk management, reporting, CRM, and IB portal in one system.', image: '/assets/broker-img-1.webp' },
    { title: 'Lightning-Fast Execution', description: 'Ultra-low latency for optimal performance.', image: '/assets/lightning.jpg' },
    { title: 'Deep Liquidity Access', description: 'Tier-1 providers for forex, commodities, indices, and crypto with tighter spreads.', image: '/assets/business-person-looking-finance-graphs (1).jpg' },
    { title: 'White Label Solutions', description: 'Proprietary JetFyX platforms branded to your identity.', image: '/assets/White.webp' },
    { title: 'Regulatory & Company Setup', description: 'Support with licensing, incorporations, and infrastructure.', image: '/assets/contract-fair-agreement-webpage-interface.jpg' },
    { title: 'Website & Payment Gateway', description: 'Custom broker sites with secure, multi-option funding.', image: '/assets/payment-benefits-bookkeeping-budget-payday-concept.webp' },
    { title: 'Risk Management Tools', description: 'Protect your business and boost profitability.', image: '/assets/Risk.webp' },
    { title: 'Advanced Back-Office', description: 'KYC, compliance, dashboards, and analytics.', image: '/assets/Backoffice.jpg' },
    { title: 'JetFyX CRM', description: 'Lead scoring, predictive insights, automated onboarding, IB automation, multilingual communication, and real-time alerts.', image: '/assets/crm.webp' },
];

const FeatureSection = () => {
    const [activeFeature, setActiveFeature] = useState(features[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [arrowTop, setArrowTop] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const [showParaMore, setShowParaMore] = useState(false);
    const listRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) return;
        const activeItem = itemRefs.current[activeIndex];
        const list = listRef.current;
        if (activeItem && list) {
            const listRect = list.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const relativeTop = itemRect.top - listRect.top + itemRect.height / 1;
            setArrowTop(relativeTop);
        }
    }, [activeIndex, isMobile]);

    const scrollTabs = (direction) => {
        if (listRef.current) {
            listRef.current.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };
    const listVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: i * 0.2 },
        }),
    };
    if (isMobile) {
        return (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ backgroundColor: "#f9f9f9", marginTop: '60px', padding: '45px' }}>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        <span className="text-red-600">JetFyX</span>
                        <br />For Brokers
                    </h2>
                    <p className="text-gray-700 max-w-2xl">
                        <span className="text-red-600 font-semibold">JetFyX</span> offers a fully integrated platform that combines trade execution, risk management, reporting, and CRM into one seamless system—complete with lightning-fast performance,
                        {!showParaMore && (
                            <>
                                &nbsp;&nbsp;&nbsp;
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
                                    &nbsp;expert regulatory guidance, customizable white-label branding, and 24/7 technical support to keep your operations running smoothly.&nbsp;&nbsp;&nbsp;
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
                <div style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <button
                            onClick={() => scrollTabs('left')}
                            style={{ border: 'none', background: '#C3282E', color: '#fff', padding: '8px 12px', borderRadius: '6px', marginRight: '10px', cursor: 'pointer' }}
                        >
                            ←
                        </button>
                        <ul
                            ref={listRef}
                            style={{ display: 'flex', overflowX: 'auto', listStyle: 'none', padding: 0, margin: 0, flex: 1 }}
                        >
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    onClick={() => { setActiveFeature(feature); setActiveIndex(index); }}
                                    style={{
                                        flex: '0 0 auto',
                                        padding: '10px 20px',
                                        marginRight: '10px',
                                        borderRadius: '8px',
                                        backgroundColor: activeIndex === index ? '#C3282E' : '#fff',
                                        color: activeIndex === index ? '#fff' : '#333',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {feature.title}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => scrollTabs('right')}
                            style={{ border: 'none', background: '#C3282E', color: '#fff', padding: '8px 12px', borderRadius: '6px', marginLeft: '10px', cursor: 'pointer' }}
                        >
                            →
                        </button>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{ borderRadius: '26px', border: '6px solid #C3282E38', }}>
                            <img
                                src={activeFeature.image}
                                alt={activeFeature.title}
                                style={{ width: '100%', objectFit: 'cover', borderRadius: '16px' }}
                                className='filter grayscale'
                            />
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#252525' }}>{activeFeature.title}</h3>
                            <p style={{ fontSize: '15px', color: '#555555' }}>{activeFeature.description}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-row justify-between md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]" style={{ backgroundColor: "#f9f9f9", marginTop: '60px', padding: '45px', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    <span className="text-red-600">JetFyX</span>
                    <br />For Brokers
                </h2>
                <div className="md:w-7/10">
                    <p className="text-gray-700 md:ml-8 max-w-3xl">
                        <span className="text-red-600 font-semibold">JetFyX</span> offers a fully integrated platform that combines trade execution, risk management, reporting, and CRM into one seamless system—complete with lightning-fast performance,
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
                                    &nbsp;expert regulatory guidance, customizable white-label branding, and 24/7 technical support to keep your operations running smoothly.
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

            <div
                style={{
                    backgroundColor: "#f9f9f9",
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "16px",
                    padding: "40px",
                    paddingTop: '0px',
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    position: "relative",
                }}
                className="md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]"
            >
                <div
                    style={{
                        flex: '1 1 25%',
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <div style={{
                        position: "relative", height: "100%", border: "10px solid #C3282E38",
                        borderRadius: "35px",
                    }}>
                        <img
                            src={activeFeature.image}
                            alt={activeFeature.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "25px",
                                objectFit: "cover",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",

                            }}
                            className='filter grayscale'
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                left: "20px",
                                right: "20px",
                                padding: "15px",
                                borderRadius: "12px",
                                textAlign: "left",
                                backgroundColor: 'rgb(0 0 0 / 0.6)'
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "35px",
                                    width: '60%',
                                    fontWeight: "bold",
                                    margin: 0,
                                    color: "white",
                                }}
                            >
                                {activeFeature.title}
                            </h3>
                            <p style={{ fontSize: "16px", margin: 0, color: "white" }}>
                                {activeFeature.description}
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: `${arrowTop}px`,
                            right: "-49px",
                            width: 0,
                            height: 0,
                            borderTop: "8px solid transparent",
                            borderBottom: "15px solid transparent",
                            borderLeft: "50px solid #C3282E38",
                            transform: "translateY(-50%)",
                            transition: "top 0.3s ease",
                        }}
                    ></div>
                </div>

                <div style={{ flex: 1, padding: "20px" }}>
                    <ul
                        ref={listRef}
                        style={{
                            listStyleType: "none",
                            padding: 0,
                            margin: 0,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                        }}
                    >
                        {features.map((feature, index) => (
                            <motion.li
                                key={index}
                                ref={(el) => (itemRefs.current[index] = el)}
                                onClick={() => {
                                    setActiveFeature(feature);
                                    setActiveIndex(index);
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={listVariants}
                                custom={index}
                                style={{
                                    cursor: "pointer",
                                    padding: "10px 20px",
                                    marginBottom: "10px",
                                    borderRadius: "25px",
                                    backgroundColor: activeIndex === index ? "#C3282E" : "#fff",
                                    color: activeIndex === index ? "#fff" : "#333",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                    transition: "background-color 0.3s, color 0.3s",
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        width: "10px",
                                        height: "10px",
                                        borderRight: `2px solid ${activeIndex === index ? "#fff" : "#333"}`,
                                        borderBottom: `2px solid ${activeIndex === index ? "#fff" : "#333"}`,
                                        transform: "rotate(310deg)",
                                        marginRight: '15px'
                                    }}
                                ></span>
                                {feature.title}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default FeatureSection;