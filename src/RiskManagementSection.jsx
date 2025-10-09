import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function RiskManagementSection() {
    const initialFeatures = [
        {
            title: "Real-Time Risk Monitoring",
            description: "Track exposure across accounts, instruments, and markets instantly.",
            icon: "/assets/manage-img-1.webp",
        },
        {
            title: "Automated Stop-Out Systems",
            description: "Protect brokers from excessive client losses with automated margin calls and stop-outs.",
            icon: "/assets/manage-img-2.webp",
        },
        {
            title: "Multiple Take Profit & Stop-Loss Levels",
            description: "Flexible trade exits to manage client and broker risk effectively.",
            icon: "/assets/manage-img-3.webp",
        },
        {
            title: "Hedging Support",
            description: "Balance positions and minimize exposure across assets.",
            icon: "/assets/manage-img-4.webp",
        },
        {
            title: "Advanced Reporting & Analytics",
            description: "Access detailed risk, P&L, and exposure reports for smarter decision-making.",
            icon: "/assets/manage-img-5.webp",
        },
        {
            title: "Customizable Risk Parameters",
            description: "Set leverage limits, margin requirements, and trading restrictions per client or group.",
            icon: "/assets/manage-img-6.webp",
        },
        {
            title: "Liquidity Risk Controls",
            description: "Aggregated Tier-1 liquidity feeds for tighter spreads and reduced slippage.",
            icon: "/assets/manage-img-7.webp",
        },
        {
            title: "Portfolio Risk Display",
            description: "View and manage real-time portfolio risk levels at individual and group levels.",
            icon: "/assets/manage-img-8.webp",
        },
    ];

    const additionalFeatures = [
        {
            title: "Price Deviation & Slippage Controls",
            description: "Protects against abnormal market volatility.",
            icon: "/assets/manage-img-5.webp",
        },
        {
            title: "Compliance & Alerts",
            description: "Real-time notifications for margin breaches, high exposure, and regulatory compliance triggers.",
            icon: "/assets/manage-img-6.webp",
        },
        {
            title: "PAMM/MAM Account Risk Tools",
            description: "Manage multiple client accounts with role-based risk allocation.",
            icon: "/assets/manage-img-7.webp",
        },
        {
            title: "Capital Protection Tools",
            description: "Built-in safeguards to minimize broker-side losses in extreme conditions.",
            icon: "/assets/manage-img-8.webp",
        },
    ];

    const [showMore, setShowMore] = useState(false);

    return (
        <section
            className="relative py-16 md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]"
            style={{
                marginTop: "60px",
                backgroundImage: "url('/assets/banner-section-bg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                backgroundColor: "#D9D9D933",
            }}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    zIndex: 5,
                }}
            ></div>

            <div className="relative z-10">
                <div className="text-left mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-red-600">JetFyX</span> Risk Management<br />for Brokers
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[...initialFeatures, ...(showMore ? additionalFeatures : [])].map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>

                <div className="text-right mt-8">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="font-semibold text-red-600 hover:underline"
                    >
                        {showMore ? "Show Less....." : "Read More....."}
                    </button>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature, index }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <motion.div
                className="
                    flex-shrink-0 flex items-center justify-center
                    rounded-full
                    mb-4 md:mb-0
                    w-[120px] h-[120px] md:rounded-[50px] md:w-[30%] md:h-full
                    bg-[#D9D9D9]
                    shadow-[0_8px_30px_-10px_rgba(38,57,77,0.8)]
                    p-4 md:p-[10px]
                "
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-1/2 md:w-[40%]"
                />
            </motion.div>

            <div className="md:ml-4">
                <h3 className="text-lg font-bold text-[#252525]">
                    {feature.title}
                </h3>
                <p className="text-[#252525]">{feature.description}</p>
            </div>
        </motion.div>
    );
}