import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-20 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12 overflow-hidden md:top-[-100px] sm:top-0">
                <div
                    className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none"
                    style={{
                        backgroundImage: "url('/assets/banner-section-bg.webp')",
                        opacity: 0.25,
                        zIndex: 0,
                    }}
                    aria-hidden="true"
                />
                <motion.div
                    className="flex-1 max-w-lg space-y-6 relative z-10"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold" style={{ lineHeight: '1.2' }}>
                        <span className="text-red-600">JetFyx</span>
                        <span className="text-black">: The Multi-Asset Trading Platform of Choice</span>
                    </h1>
                    <p className="text-gray-600">
                        Trusted by millions of traders and hundreds of<br />brokers around the world.
                    </p>
                    <form className="bg-gray-100 rounded-xl p-6 space-y-4 shadow md:w-[85%]">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Mobile No"
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
                        >
                            DOWNLOAD PLATFORM
                        </button>
                    </form>
                    <div className="flex space-x-4 md:w-[85%]" style={{justifyContent:'space-between'}}>
                        <button className="bg-red-600 w-full text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                            CONTACT US
                        </button>
                        <button className="border w-full border-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                            BOOK DEMO
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] md:w-[600px] md:h-[500px] rounded-full bg-red-300 opacity-40 blur-2xl z-0"></div>
                    <img
                        src="/assets/new-banner-1.webp"
                        alt="Trading Platform Devices"
                        className="relative z-10 md:top-[-50px] sm:top-0 md:w-xl"
                    />
                    {/* <img
                        src="/assets/jet.webp"
                        alt="Jet"
                        className="absolute -top-10 md:top-[-105px] left-[96px] w-40 md:w-[45%] z-20 pointer-events-none select-none"
                        // style={{ left: '79px' }}
                    /> */}
                </motion.div>
            </div>
        </motion.div>
    );
}