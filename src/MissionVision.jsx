import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionVisionSection() {
    const [showParaMore, setShowParaMore] = useState(false);
    const [showListMore, setShowListMore] = useState(false);

    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const listVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: i * 0.2 },
        }),
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <section className="py-16 bg-white md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]">
                <div className=" px-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
                        <div className="md:w-3/10">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-0">
                                Our Mission & <br />
                                <span className="text-red-600">Vision</span>
                            </h2>
                        </div>

                        <div className="md:w-7/10">
                            <p className="text-gray-700 md:ml-8 max-w-3xl">
                                At <span className="text-red-600 font-semibold">JetFyX</span>, we believe every trade is more than just numbers on a screen—it's a step toward financial freedom.
                                Whether you're a seasoned broker navigating global markets or a trader sharpening your edge, <span className="text-red-600 font-semibold">JetFyX</span> is here to fuel your journey.
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
                                            &nbsp;Our mission is to empower every user with cutting-edge technology, reliable support, and transparent analytics.
                                            We envision a world where trading is accessible, secure, and rewarding for everyone.
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

                    <div className="grid grid-cols-1 md:grid-cols-2 md:items-start items-center">
                        <motion.div
                            className="relative flex justify-center items-center self-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={imageVariants}
                        >
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full bg-red-300 opacity-30 blur-2xl z-0"></div>
                            <img
                                src="/assets/mission-icon-247.webp"
                                alt="24/7 Icon"
                                className="absolute top-8 w-14 h-14 z-10"
                                style={{ left: '15rem' }}
                            />
                            <img
                                src="/assets/mission-img-1.webp"
                                alt="24/7 Support"
                                className="w-[75%] object-cover rounded-xl -scale-x-100 relative z-10"
                            />
                        </motion.div>

                        <motion.div
                            className="flex flex-col md:flex-row md:items-start gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={imageVariants}
                            custom={1}
                        >
                            <div className="w-full md:w-[35%] flex flex-col justify-center">
                                <ul className="space-y-2 text-gray-800 text-base font-bold">
                                    {["Always Available", "Email Support", "Phone Hotline", "Onboarding Assistance", "Knowledge Base", "VIP Support"].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            variants={listVariants}
                                            custom={i}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.5 }}
                                        >
                                            • {item}
                                        </motion.li>
                                    ))}
                                    <AnimatePresence>
                                        {showListMore && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                {["Dedicated Account Managers", "Priority Issue Resolution", "Personalized Training"].map((item, i) => (
                                                    <motion.li
                                                        key={i}
                                                        variants={listVariants}
                                                        custom={i + 6}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{ once: true, amount: 0.5 }}
                                                    >
                                                        • {item}
                                                    </motion.li>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </ul>
                                {!showListMore ? (
                                    <button
                                        className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition w-fit mt-2"
                                        onClick={() => setShowListMore(true)}
                                    >
                                        Read More
                                    </button>
                                ) : (
                                    <button
                                        className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition w-fit mt-2"
                                        onClick={() => setShowListMore(false)}
                                    >
                                        Read Less
                                    </button>
                                )}
                            </div>

                            <motion.div
                                className="w-full md:w-[100%] relative mt-4 md:mt-0 flex justify-center items-center self-start"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={imageVariants}
                                custom={2}
                            >
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full bg-blue-200 opacity-30 blur-2xl z-0"></div>
                                <img
                                    src="/assets/mission-icon-todo.webp"
                                    alt="To Do Icon"
                                    className="absolute top-4 right-4 w-12 h-12 z-10"
                                />
                                <img
                                    src="/assets/mission-img-2.webp"
                                    alt="Analytics"
                                    className="w-full h-full object-cover rounded-xl relative z-10"
                                    style={{ minHeight: "200px", minWidth: "200px" }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}