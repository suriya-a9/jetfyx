import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export default function ConsultationSection() {
    const initialFeatures = [
        {
            title: "Company Formation",
            description: "Expert help with registering your brokerage in a reputable jurisdiction.",
        },
        {
            title: "License Consulting",
            description: "Guidance on securing the necessary licenses for legal operation.",
        },
        {
            title: "Website & CRM",
            description: "Professional website and powerful CRM system to manage your clients.",
        },
        {
            title: "IB & Affiliate Portals",
            description: "Portals for your partners to track commissions and client activity.",
        },
    ];

    const additionalFeatures = [
        {
            title: "Back-Office Solutions",
            description: "Streamlined system for handling client accounts, payments, and reporting.",
        },
        {
            title: "Legal Consulting",
            description: "Access to legal experts specializing in forex regulations.",
        },
        {
            title: "Digital Marketing",
            description: "Targeted campaigns and social media management to reach your audience.",
        },
        {
            title: "Lead Generation",
            description: "Services to help you acquire high-quality, pre-qualified leads.",
        },
        {
            title: "Liquidity Solutions",
            description: "Secure reliable and competitive liquidity for your clients.",
        },
        {
            title: "Payment Gateway Integration",
            description: "A wide range of secure payment options for your clients.",
        },
        {
            title: "Social Media Profiling",
            description: "We help you reach the world through social media and marketing stuff.",
        },
    ];

    const [showMore, setShowMore] = useState(false);

    const handleReadMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section
            className=" py-16 md:ml-[4%] md:mr-[4%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]"
            style={{ marginTop: "60px" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8 }}
                className="px-4"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="md:w-1/2 justify-center place-items-end mt-0 mr-0 md:mr-[2%]">
                        <motion.img
                            src="/assets/consultation-img.webp"
                            alt="Consultation Image"
                            className="md:w-[80%] sm:w-full rounded-2xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6 }}
                        />
                        <div className="">
                            <Link
                                to="contactSection"
                                smooth={true}
                                duration={800}
                                offset={-50}
                                className="w-full"
                            >
                                <button
                                    className="bg-red-600 text-white mt-[35px] px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                                >
                                    CONTACT US
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-1/2 md:mt-[5%]">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                <span className="text-red-600">JetFyX</span> Consultation -{" "}
                                Ask our expert the A-Z of brokerage
                            </h2>
                            <p className="text-gray-700">
                                Running a successful brokerage requires more than just a trading platform.{" "}
                                <span className="text-red-600 font-semibold">JetFyX</span> offers a full suite of services to help you build and grow your entire forex business.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[...initialFeatures, ...(showMore ? additionalFeatures : [])].map(
                                (feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-start text-left"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-700">{feature.description}</p>
                                    </motion.div>
                                )
                            )}
                        </div>

                        <div className="text-right mt-8">
                            <button
                                onClick={handleReadMore}
                                className="font-semibold text-red-600 hover:underline"
                            >
                                {showMore ? "Show Less....." : "Read More....."}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}