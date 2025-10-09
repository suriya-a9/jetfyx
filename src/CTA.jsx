import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CEOSection() {
    const [showLetter, setShowLetter] = useState(false);

    const handleToggle = () => {
        setShowLetter(!showLetter);
    };

    return (
        <section className="py-8 bg-gray-200">
            <div className="px-4">
                <div
                    className="bg-[#555555] rounded-lg p-6 shadow-lg relative md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[15%] 2xl:mr-[15%]"
                    style={{ position: "relative" }}
                >
                    <h2
                        className="text-3xl font-bold text-center text-white"
                        style={{ letterSpacing: "1px" }}
                    >
                        From the Desk of the CEO
                    </h2>

                    <button
                        onClick={handleToggle}
                        className="text-sm font-semibold hover:underline"
                        style={{
                            position: "absolute",
                            bottom: "-25px",
                            right: "0px",
                            color: "#555555",
                        }}
                    >
                        {showLetter
                            ? "Close the CEO’s Letter..."
                            : "Click Here To Read The CEO’s Letter...."}
                    </button>
                </div>

                <AnimatePresence>
                    {showLetter && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="bg-white mt-10 rounded-lg shadow-md p-6 overflow-hidden"
                        >
                            <blockquote className="text-gray-800 leading-relaxed">
                                <h5 className="text-lg font-bold mb-3 text-red-600">
                                    From the Desk of the CEO — The Future of Forex Is Here
                                </h5>
                                <p className="text-sm md:text-base">
                                    Dear Future Partner,<br /><br />
                                    At <strong>JetFyX</strong>, we believe your success in the forex and crypto
                                    market starts with the right foundation. Your brokerage, powered
                                    by JetFyX, isn’t just an idea—it’s a proven reality. With our
                                    technology, you can launch, scale, and dominate the forex market
                                    faster than ever before. We’ve built the complete broker solution
                                    so you can focus on growth, not guesswork. From registration to
                                    revenue—we’ve got you covered, offering deep liquidity, instant
                                    execution, and total control over your operations.
                                    <br /><br />
                                    From white-label solutions that streamline setup to advanced tools
                                    for professional traders, JetFyX is packed with features that put
                                    you ahead of the competition. Whether you’re a broker or a trader,
                                    we’ve designed this platform with one goal in mind: to give you an
                                    edge in every market. JetFyX supports multiple logins in one
                                    window, so you can easily manage multiple accounts or strategies
                                    without juggling platforms.
                                    <br /><br />
                                    With account merging options, you can seamlessly consolidate your
                                    operations for smooth and efficient management. And with PAMM, MAM,
                                    and copy trading features, you can offer your clients the ability
                                    to invest and follow top traders, adding a new layer of service
                                    and flexibility to your offering.
                                    <br /><br />
                                    Our powerful search functions make it easy to find exactly what
                                    you need, while the ability to add and star your favorite currency
                                    pairs lets you personalize your trading experience for speed and
                                    convenience. <em>With social trading capabilities</em>, you can
                                    connect with a community of traders, share insights, and replicate
                                    strategies that work.
                                    <br /><br />
                                    We’ve engineered liquidity without limits, so you get faster
                                    execution, tighter spreads, and deeper market access—all while
                                    scaling up your business without slowing down. JetFyX is built for
                                    speed, efficiency, and performance, ensuring that every second
                                    counts.
                                    <br /><br />
                                    This is the future of trading. With JetFyX, you get faster trades,
                                    bigger opportunities, and a comprehensive suite of tools designed
                                    to keep you ahead of every market move.
                                    <br /><br />
                                    Whether you're managing clients, automating strategies, or trading
                                    for yourself, JetFyX is the platform that empowers you to do more,
                                    with zero compromise.
                                    <br /><br />
                                    From charts to profits—simplified. To all the charts, all the
                                    signals, all in one, JetFyX ensures execution you can trust.
                                    Whether you’re a newbie or a pro, trading freedom is in your
                                    hands. And when speed meets precision, you can turn market moves
                                    into profit moves every single day.
                                    <br /><br />
                                    Whether you’re a broker seeking to grow your client base or a
                                    trader chasing your next big opportunity, JetFyX is here to help
                                    you go from vision to victory.
                                    <br /><br />
                                    Let’s build the future of forex—together.
                                    <br />
                                    Yours sincerely,<br />
                                    <strong>Zak</strong><br />
                                    Founder & CEO, JetFyX Forex Trading Platform
                                </p>
                            </blockquote>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}