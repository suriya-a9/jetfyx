import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
    {
        title: "Freedom in Trading",
        desc: "React in real time, use voice commands, and stay fully in control.",
        image: "/assets/carousel-img-1.webp",
        icon: "/assets/carousel-sub-img-1.webp",
    },
    {
        title: "Future-Ready Technology",
        desc: "Experience next-gen tools and automation for smarter trading.",
        image: "/assets/feature2.webp",
        icon: "/assets/icon2.webp",
    },
    {
        title: "Effortless & Powerful",
        desc: "Designed for beginners to trade with confidence and professionals with precision.",
        image: "/assets/feature3.webp",
        icon: "/assets/icon3.webp",
    },
    {
        title: "Smart Tools",
        desc: "Advanced analytics and risk management at your fingertips.",
        image: "/assets/feature4.webp",
        icon: "/assets/icon4.webp",
    },
];

export default function FeatureCarousel() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const prev = () => setIndex((i) => (i === 0 ? features.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === features.length - 1 ? 0 : i + 1));

    const getPosition = (i) => {
        if (i === index) return "center";
        if (i === (index - 1 + features.length) % features.length) return "left";
        if (i === (index + 1) % features.length) return "right";
        return "hidden";
    };

    return (
        <section className="py-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Welcome to <span className="text-red-600">JetFyX</span>?
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto inline">
                    Welcome to <span className="text-red-600">JetFyX</span>—the modern trading platform designed for multi-asset brokers! Enjoy a sleek, user-friendly experience with powerful risk management tools and round-the-clock support to keep your brokerage running smoothly.
                    {!showMore && (
                        <>
                            &nbsp;
                            <button
                                className="font-semibold focus:outline-none"
                                onClick={() => setShowMore(true)}
                                style={{ color: "#555555" }}
                            >
                                Read More..
                            </button>
                        </>
                    )}
                    <AnimatePresence>
                        {showMore && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="inline"
                            >
                                &nbsp;JetFyX offers advanced charting, instant execution, and seamless integration with your favorite tools. Our platform is built for speed, security, and flexibility, empowering both new and experienced traders to reach their goals. Enjoy 24/7 support, regular updates, and a growing community of successful users.
                                &nbsp;
                                <button
                                    className="font-semibold focus:outline-none"
                                    onClick={() => setShowMore(false)}
                                    style={{ color: "#555555" }}
                                >
                                    Read Less
                                </button>
                            </motion.span>
                        )}
                    </AnimatePresence>
                </p>
            </div>
            <div className="relative flex items-center justify-center">
                <div className="flex items-center justify-center w-full max-w-5xl overflow-hidden relative h-[400px]">
                    {features.map((f, i) => {
                        const pos = getPosition(i);
                        if (pos === "center") {
                            return (
                                <motion.div
                                    key={i}
                                    className={`absolute transition-all duration-500 scale-100 opacity-100 z-20`}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative w-72 h-[22rem] shadow-xl overflow-hidden bg-white flex flex-col justify-end rounded-tl-[20px]">
                                        <div className="absolute z-20" style={{ top: '0px', left: '0px' }}>
                                            <div className="bg-white rounded-tl-[24px] rounded-br-[24px] p-1 shadow-md">
                                                <div className="bg-[#C3272E] rounded-tl-[20px] rounded-br-[20px] p-3 flex items-center justify-center">
                                                    <img src={f.icon} alt="" className="w-8 h-8" />
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            src={f.image}
                                            alt={f.title}
                                            className="absolute inset-0 w-full h-full object-cover rounded-tl-[20px]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-tl-[20px]" />
                                        <div className="relative z-10 p-6 pb-8 text-white">
                                            <h3 className="text-xl font-bold mb-1 drop-shadow">{f.title}</h3>
                                            <p className="text-sm opacity-90">{f.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        } else if (pos === "left" || pos === "right") {
                            return (
                                <motion.div
                                    key={i}
                                    className={`absolute transition-all duration-500 scale-75 opacity-100 z-10`}
                                    animate={{ x: pos === "left" ? -300 : 300 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative w-64 h-[18rem] bg-white rounded-2xl shadow-lg flex flex-col pt-4 pb-4 px-4">
                                        <div className="absolute -top-4 -left-4 z-20">
                                            <div className="bg-white rounded-tl-[20px] rounded-br-[20px] p-1 shadow">
                                                <div className="bg-[#C3272E] rounded-tl-[16px] rounded-br-[16px] p-2 flex items-center justify-center">
                                                    <img src={f.icon} alt="" className="w-7 h-7" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full h-24 bg-[#C3272E] rounded-xl flex items-center justify-center mt-6 mb-3 overflow-hidden">
                                            <img src={f.image} alt={f.title} className="object-cover w-full h-full opacity-80" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-1 text-gray-900">{f.title}</h3>
                                        <p className="text-sm text-gray-700">{f.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className="flex space-x-6 mt-8 justify-center">
                <button
                    onClick={prev}
                    className="bg-white border rounded-full shadow p-2 hover:bg-red-100 z-10"
                >
                    <ChevronLeft className="w-6 h-6 text-red-600" />
                </button>
                <button
                    onClick={next}
                    className="bg-white border rounded-full shadow p-2 hover:bg-red-100 z-10"
                >
                    <ChevronRight className="w-6 h-6 text-red-600" />
                </button>
            </div>
        </section>
    );
}