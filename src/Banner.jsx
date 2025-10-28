import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Banner() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState(null);
    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then(res => res.json())
            .then(data => {
                if (data && data.country_code) {
                    setCountryCode(data.country_code.toLowerCase());
                }
            })
            .catch(() => setCountryCode("us"));
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-20 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:py-12 overflow-hidden md:top-[-100px] 2xl:top-[-150px] sm:top-0 pl-0 pr-0 md:pl-[10%] md:pr-[6%] 2xl:pl-[15%] 2xl:pr-[10%]">
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
                    <h1 className="text-3xl md:text-5xl font-bold" style={{ lineHeight: "1.2" }}>
                        <span className="whitespace-nowrap">
                            <span className="text-red-600">JetFyX</span>
                            <span className="text-gray-700 font-medium">: The&nbsp;Multi-Asset</span>
                        </span>
                        <span className="text-gray-700 font-medium"> Trading Platform<br /> for Brokers</span>
                    </h1>
                    <p className="text-gray-600">
                        JetFyX Empowers New Brokers—Low Cost.<br />All Power.
                    </p>
                    <form className="bg-gray-100 rounded-xl p-6 space-y-4 shadow md:w-[85%]">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                        />
                        <PhoneInput
                            country={countryCode}
                            value={phone}
                            onChange={(value, countryData) => {
                                setPhone(value);
                            }}
                            enableSearch={true}
                            disableDropdown={false}
                            disableCountryGuess={true}
                            inputClass="form-control"
                            containerStyle={{
                                width: "100%",
                                borderRadius: "8px",
                            }}
                            inputStyle={{
                                width: "100%",
                                borderRadius: "8px",
                                height: "40px",
                                paddingLeft: '15%'
                            }}
                            buttonStyle={{
                                borderRadius: "8px 0 0 8px",
                            }}
                            dropdownStyle={{
                                borderRadius: "8px",
                                maxHeight: "200px",
                            }}
                            placeholder="Enter phone number"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                        />
                        <Link
                            to="contactSection"
                            smooth={true}
                            duration={800}
                            offset={-50}
                            className="w-full"
                        >
                            <button
                                type="button"
                                className="w-full mt-[15px] bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
                            // onClick={() => navigate("/auth")}
                            >
                                Book Demo
                            </button>
                        </Link>
                    </form>
                    {/* <div className="flex space-x-4 md:w-[85%]" style={{ justifyContent: 'space-between' }}>
                        <Link
                            to="contactSection"
                            smooth={true}
                            duration={800}
                            offset={-50}
                            className="w-full"
                        >
                            <button className="bg-red-600 w-full text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                                CONTACT US
                            </button></Link>
                        <Link
                            to="contactSection"
                            smooth={true}
                            duration={800}
                            offset={-50}
                            className="w-full"
                        >
                            <button className="border w-full border-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                BOOK DEMO
                            </button></Link>
                    </div> */}
                </motion.div>
                <motion.div
                    className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] md:w-[600px] md:h-[500px] rounded-full bg-red-300 opacity-40 blur-2xl z-0"></div>
                    <img
                        src="/assets/new-banner-2.webp"
                        alt="Trading Platform Devices"
                        className="relative z-10 md:top-[-50px] sm:top-0 md:w-xl 2xl:top-[0px]"
                    />

                    {/* <img
                        src="/assets/jet.webp"
                        alt="Jet"
                        className="absolute -top-10 md:top-[-105px] left-[96px] w-40 md:w-[45%] z-20 pointer-events-none select-none"
                        // style={{ left: '79px' }}
                    /> */}
                </motion.div>
            </div>
            {/* <img
                src="/assets/float-img.webp"
                alt="Floating Icon"
                className="absolute bottom-0 right-0 md:w-[12%] md:h-[13%] w-[80px] h-[60px]] z-20 cursor-pointer hover:scale-110 transition-transform duration-300"
                style={{ maxWidth: '180px', maxHeight: '120px' }}
            /> */}
        </motion.div>
    );
}