import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
    {
        title: "Beyond a Platform",
        desc: "Not just another trading tool, but a reimagined forex experience.",
        image: "/assets/Smart Tools.jpg",
        icon: "/assets/carousel-sub-img-1.webp",
    },
    {
        title: "Effortless & Powerful",
        desc: "Designed for beginners to trade with confidence and professionals with precision.",
        image: "/assets/Effortless powerful.jpg",
        icon: "/assets/carousel-sub-img-1.webp",
    },
    {
        title: "Smart Tools",
        desc: "AI-driven insights and advanced features for every level of trader.",
        image: "/assets/Smartool.jpg",
        icon: "/assets/carousel-sub-img-1.webp",
    },
    {
        title: "Future-Ready Technology",
        desc: "From lightning-fast execution to immersive metaverse environments.",
        image: "/assets/Future ready.jpg",
        icon: "/assets/carousel-sub-img-1.webp",
    },
    {
        title: "Freedom in Trading",
        desc: "React in real time, use voice commands, and stay fully in control.",
        image: "/assets/Freedom in Trading.jpg",
        icon: "/assets/carousel-sub-img-1.webp",
    },
    {
        title: "More Than Currency",
        desc: "Trading as an experience, not just buying and selling.",
        image: "/assets/carousel-img-1.webp",
        icon: "/assets/carousel-sub-img-1.webp",
    },
    {
        title: "Your Launchpad",
        desc: "Sleek, feature-rich, and scalable—built to grow with you.",
        image: "/assets/Launchpad.jpg",
        icon: "/assets/carousel-sub-img-1.webp",
    },
];

export default function FeatureCarousel() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const prev = () => setIndex((i) => (i === 0 ? features.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === features.length - 1 ? 0 : i + 1));

    const getPosition = (i) => {
        const total = features.length;
        if (i === index) return "center";
        if (i === (index - 1 + total) % total) return "left";
        if (i === (index + 1) % total) return "right";
        if (i === (index - 2 + total) % total) return "far-left";
        if (i === (index + 2) % total) return "far-right";
        return "hidden";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            onViewportEnter={() => setIsInView(true)}
            onViewportLeave={() => setIsInView(false)}
        >
            <section className="py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Welcome to <span className="text-red-600">JetFyX</span>
                    </h2>
                    <p className="text-gray-700 md:w-[60%] sm:w-[100%] mx-auto inline" style={{ display: 'block' }}>
                        Welcome to <span className="text-red-600">JetFyX</span>—the modern trading platform designed for multi-asset brokers! Enjoy a sleek, user-friendly experience with powerful risk management tools and round-the-clock support to keep your brokerage running smoothly.
                        {!showMore && (
                            <>
                                &nbsp;&nbsp;&nbsp;
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
                                    &nbsp;Best of all? You can get up and running in less than two weeks! Ready to see it in action? Request a demo today—we’d love to show you around!
                                    &nbsp;&nbsp;&nbsp;
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
                <motion.div
                    className="relative flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center w-full max-w-5xl overflow-hidden md:overflow-visible relative h-[400px]">

                        {features.map((f, i) => {
                            const pos = getPosition(i);
                            const isCenter = pos === "center";

                            const baseMotion = {
                                transition: { duration: 0.5 },
                                onClick: () => setIndex(i),
                                className: "absolute cursor-pointer",
                            };

                            if (pos === "center") {
                                return (
                                    <motion.div
                                        key={i}
                                        {...baseMotion}
                                        className={`${baseMotion.className} scale-100 opacity-100 z-20`}
                                        animate={isInView ? { x: 0, scale: 1 } : { x: -300 }}
                                    >
                                        <div className="relative w-72 h-[22rem] shadow-xl overflow-hidden bg-white flex flex-col justify-end rounded-tl-[20px]" style={{ borderRadius: '25px' }}>
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
                            }

                            if (pos === "left" || pos === "right") {
                                return (
                                    <motion.div
                                        key={i}
                                        {...baseMotion}
                                        className={`${baseMotion.className} scale-75 opacity-100 z-10`}
                                        animate={isInView ? { x: pos === "left" ? -300 : 300 } : { x: 0 }}
                                    >
                                        <div className="relative w-64 h-[18rem] bg-[#eddede] rounded-2xl shadow-lg flex flex-col pt-4 pb-4 px-4">
                                            <div className="absolute top-0 left-0 z-20">
                                                <div className="bg-white rounded-tl-[20px] rounded-br-[20px] p-1 shadow">
                                                    <div className="bg-[#C3272E] rounded-tl-[16px] rounded-br-[16px] p-2 flex items-center justify-center">
                                                        <img src={f.icon} alt="" className="w-7 h-7" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold mb-1 text-gray-900 text-center">{f.title}</h3>
                                            <div className="w-full h-24 bg-[#C3272E] rounded-xl flex items-center justify-center mt-6 mb-3 overflow-hidden">
                                                <img src={f.image} alt={f.title} className="object-cover w-full h-full opacity-80" />
                                            </div>
                                            <p className="text-sm text-gray-700">{f.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            }

                            if (pos === "far-left" || pos === "far-right") {
                                return (
                                    <motion.div
                                        key={i}
                                        {...baseMotion}
                                        className={`${baseMotion.className} scale-50 opacity-80 z-0`}
                                        animate={isInView ? { x: pos === "far-left" ? -500 : 500 } : { x: 0 }}
                                    >
                                        <div
                                            className="relative w-48 h-[12rem] rounded-xl flex items-center justify-center overflow-hidden"
                                            style={{
                                                backgroundImage: `url(${f.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-[#e3cbc5] opacity-60"></div>
                                            <h3 className="relative text-sm font-bold text-white text-center px-2 py-1 rounded z-10">
                                                {f.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                );
                            }

                            return null;
                        })}
                    </div>
                </motion.div>
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
        </motion.div>
    );
}