import React from "react";

export default function AccountAccessSection() {
    const features = [
        {
            title: "Unified or Individual Account Access",
            icon: "/assets/account-img-1.webp",
            tooltip: "Access multiple accounts under one login or manage them separately.",
        },
        {
            title: "Single Sign-In",
            icon: "/assets/account-img-2.webp",
            tooltip: "Simplify login with one credential for all connected accounts.",
        },
        {
            title: "Dual Access Modes",
            icon: "/assets/account-img-3.webp",
            tooltip: "Switch between manager and investor modes easily.",
        },
        {
            title: "Social Trading",
            icon: "/assets/account-img-4.webp",
            tooltip: "Connect and follow top traders seamlessly.",
        },
        {},
        {
            title: "Copy Trading (No Extra Server Required)",
            icon: "/assets/account-img-5.webp",
            tooltip: "Mirror trades instantly without additional setup.",
        },
    ];

    return (
        <section className="py-16 bg-[#D9D9D933]" style={{ marginTop: "60px" }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                        Account Access & <br />Management{" "}
                        <span className="text-red-600">Features</span>
                    </h2>
                    <p className="text-gray-700 text-right">
                        JetFyX for Partners & Money Managers
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 object-contain">
                        <img
                            src="/assets/account-img.webp"
                            alt="Account Access Features"
                            className="w-full rounded-[50px] shadow-lg"
                        />
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`relative group flex flex-col items-center text-center p-4 rounded-lg ${!feature.title ? "invisible" : ""
                                    }`}
                            >
                                {feature.title && (
                                    <>
                                        <div
                                            className="w-[5rem] h-[5rem] bg-[#E7E7E7] rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                                            style={{
                                                boxShadow:
                                                    "rgb(38, 57, 77) 0px 8px 30px -10px",
                                            }}
                                        >
                                            <img
                                                src={feature.icon}
                                                alt={feature.title}
                                                className="w-[60%] h-[60%]"
                                            />
                                        </div>

                                        <h3 className="text-lg font-bold text-red-600">
                                            {feature.title}
                                        </h3>

                                        {feature.tooltip && (
                                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 pointer-events-none">
                                                <div className="bg-white text-gray-800 text-sm font-medium rounded-lg shadow-xl px-4 py-2 border border-gray-200 relative w-max max-w-[200px]">
                                                    {feature.tooltip}
                                                    <div className="absolute left-1/2 bottom-[-6px] transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-200"></div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}