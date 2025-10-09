import React from "react";
import { motion } from "framer-motion";

export default function AccountAccessSection() {
    const features = [
        {
            title: "Unified or Individual Account Access",
            icon: "/assets/account-img-1.webp",
            tooltip: "Choose between one login for all accounts or separate logins for account-by-account control.",
        },
        {
            title: "Single Sign-In",
            icon: "/assets/account-img-2.webp",
            tooltip: "Log in once to instantly access every account linked to your name.",
        },
        {
            title: "Individual Account Login",
            icon: "/assets/account-img-3.webp",
            tooltip: "Manage accounts separately for focused trading.",
        },
        {
            title: "Dual Access Modes",
            icon: "/assets/account-img-4.webp",
            tooltip: "Secure role-based access: fund managers use a Master Login to control multiple accounts, while investors use Investor Login to view and track portfolios.",
        },
        {
            title: "Copy Trading",
            icon: "/assets/account-img-5.webp",
            tooltip: "Real-time, transparent copy trading with zero price mismatch between master and slave accounts under the same broker.",
        },
        {
            title: "PAMM & MAM",
            icon: "/assets/account-img-5.webp",
            tooltip: "Flexible systems for managing multiple client accounts efficiently.",
        },
    ];

    return (
        <section
            className="bg-[#D9D9D933] pt-[25px] pb-[25px] min-h-[400px]"
            style={{ marginTop: "60px" }}
        >
            <div className="px-4 md:ml-[4%] md:mr-[4%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]">
                <div className="mb-[0.5rem] flex flex-col md:flex-row items-start md:items-center justify-between md:pl-[5%] md:pr-[5%]">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-0 text-left">
                        Account Access & <br />Management{" "}
                        <span className="text-red-600">Features</span>
                    </h2>
                    <p className="text-gray-700 md:text-right text-sm md:text-base">
                        JetFyX for Partners & Money Managers
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                        <img
                            src="/assets/account-img.webp"
                            alt="Account Access Features"
                            className="md:w-[80%] md:h-[350px] rounded-[50px] shadow-lg object-cover"
                        />
                    </div>

                    <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative group flex flex-col items-center text-center p-4 rounded-lg"
                            >
                                <div
                                    className="w-[5rem] h-[5rem] bg-[#E7E7E7] rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                                    style={{
                                        boxShadow:
                                            "rgb(38, 57, 77) 0px 8px 19px -10px",
                                    }}
                                >
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-[60%] h-[60%]"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-red-600 text-[15px]">
                                    {feature.title}
                                </h3>

                                {feature.tooltip && (
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pointer-events-none">
                                        <div className="bg-white text-gray-800 text-sm font-medium rounded-lg shadow-xl px-4 py-2 border border-gray-200 relative w-max max-w-[200px]">
                                            {feature.tooltip}
                                            <div className="absolute left-1/2 bottom-[-6px] transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-200"></div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}