import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionVisionSection() {
    const [showParaMore, setShowParaMore] = useState(false);
    const [showListMore, setShowListMore] = useState(false);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2 md:mb-0">
                        Our Mission & <br /><span className="text-red-600">Vision</span>
                    </h2>
                    <p className="text-gray-700 md:ml-8 max-w-2xl">
                        At <span className="text-red-600 font-semibold">JetFyX</span>, we believe every trade is more than just numbers on a screen—it's a step toward financial freedom. Whether you're a seasoned broker navigating global markets or a trader sharpening your edge, <span className="text-red-600 font-semibold">JetFyX</span> is here to fuel your journey.
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
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="relative flex justify-center items-center">
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
                            className="w-84 h-64 object-cover rounded-xl -scale-x-100 relative z-10"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div>
                            <ul className="space-y-2 text-gray-800 text-base">
                                <li>• Always Available</li>
                                <li>• Email Support</li>
                                <li>• Phone Hotline</li>
                                <li>• Onboarding Assistance</li>
                                <li>• Knowledge Base</li>
                                <li>• VIP Support</li>
                                <AnimatePresence>
                                    {showListMore && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <li>• Dedicated Account Managers</li>
                                            <li>• Priority Issue Resolution</li>
                                            <li>• Personalized Training</li>
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
                        <div className="relative mt-4 flex justify-center items-center">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full bg-blue-200 opacity-30 blur-2xl z-0"></div>
                            <img
                                src="/assets/mission-icon-todo.webp"
                                alt="To Do Icon"
                                className="absolute top-4 right-4 w-12 h-12 z-10"
                            />
                            <img
                                src="/assets/mission-img-2.webp"
                                alt="Analytics"
                                className="w-84 h-64 object-cover rounded-xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}