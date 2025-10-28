import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import countryList from "react-select-country-list";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import countryTelephoneCode from "country-telephone-code";
import "./SignInSignUp.css";

export default function SignInSignUp() {
    const location = useLocation();
    const initialTab = location.state?.tab === "signup" ? "signup" : "login";
    const [tab, setTab] = useState(initialTab);
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();
    const countryOptions = countryList().getData();

    const rightImage =
        tab === "login"
            ? "/assets/siggnnnn.webp"
            : "/assets/sign-up.webp";

    const handleOnClick = () => {
        window.location.href = "https://jetfyx.com"
    }
    return (
        <div className="min-h-screen flex">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2">
                <div className="w-full max-w-sm p-5 border-[3px] rounded-[10px] bg-[#FBFBFB]">
                    <div className="flex justify-center mb-3" style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/fav-icon.webp" alt="JET Logo" className="w-[30%] h-[30%] object-contain rounded-full" />
                        <span className="text-red-600 text-sm mt-2">JetFyX—Precision. Speed. Confidence</span>
                        <span className="text-xl font-medium mt-2">Welcome to your broker portal.</span>
                    </div>
                    {/* <div className="flex justify-end mb-4">
                        <button
                            className="bg-red-600 w-full text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition" disabled
                        // onClick={() => setTab(tab === "login" ? "signup" : "login")}
                        >
                            {tab === "login" ? "Log in" : "Sign Up"}
                        </button>
                    </div> */}
                    {tab === "login" ? (
                        <form className="space-y-4">
                            <div className="floating-label-group">
                                <input type="email" className="form-control" required placeholder=" " />
                                <label>Email Address</label>
                            </div>
                            <div className="floating-label-group">
                                <input type="password" className="form-control" required placeholder=" " />
                                <label>Password</label>
                            </div>
                            <div className="flex items-center justify-between mt-1 mb-2">
                                <label className="flex items-center text-sm">
                                    <input type="checkbox" className="mr-2" />
                                    Remember me
                                </label>
                                <button type="button" className="text-red-600 text-sm hover:underline">
                                    Forgot password?
                                </button>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaGoogle />
                                </button>
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaApple />
                                </button>
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaFacebookF />
                                </button>
                                <div className="flex-1"></div>
                                <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition">
                                    Log in
                                </button>
                            </div>
                            <div className="text-center text-sm mt-2">
                                Don&apos;t have an account?{" "}
                                <button type="button" className="text-red-600 hover:underline" onClick={() => setTab("signup")}>
                                    Sign Up
                                </button>
                            </div>
                            <div className="text-center text-sm cursor-pointer">
                                <a onClick={handleOnClick} target="blank" className="text-red-600 underline">www.jetfyx.com</a>
                            </div>
                        </form>
                    ) : (
                        <form className="space-y-4">
                            <div className="floating-label-group">
                                <input type="text" className="form-control" required placeholder=" " />
                                <label>Full Name</label>
                            </div>

                            <div className="floating-label-group">
                                <input type="email" className="form-control" required placeholder=" " />
                                <label>Email Address</label>
                            </div>

                            <div className="floating-label-group">
                                <PhoneInput
                                    country={'us'}
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
                                <label
                                    style={{
                                        top: "-10px",
                                        left: "12px",
                                        fontSize: "12px",
                                        background: "#FBFBFB",
                                        padding: "0 4px",
                                    }}
                                >
                                    Phone Number
                                </label>
                            </div>

                            <div className="floating-label-group flex-1">
                                <input type="text" className="form-control" placeholder=" " />
                                <label>Company Name</label>
                            </div>

                            <div className="floating-label-group mt-2 md:mt-0 flex-1">
                                <input type="url" className="form-control" placeholder=" " />
                                <label>Website</label>
                            </div>

                            <div className="block md:flex gap-2">
                                <div className="floating-label-group flex-1">
                                    <input type="password" className="form-control" required placeholder=" " />
                                    <label>Password</label>
                                </div>

                                <div className="floating-label-group mt-2 md:mt-0 flex-1">
                                    <input type="password" className="form-control" required placeholder=" " />
                                    <label>Confirm Password</label>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaGoogle />
                                </button>
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaApple />
                                </button>
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaFacebookF />
                                </button>
                                <div className="flex-1"></div>
                                <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition">
                                    Sign Up
                                </button>
                            </div>
                            <div className="text-center text-sm mt-2">
                                Already have an account?{" "}
                                <button type="button" className="text-red-600 hover:underline" onClick={() => setTab("login")}>
                                    Sign In
                                </button>
                            </div>
                            <div className="text-center text-sm cursor-pointer">
                                <a onClick={handleOnClick} target="blank" className="text-red-600 underline">www.jetfyx.com</a>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
                <img
                    src={rightImage}
                    alt="JET Side Visual"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
            </div>
        </div>
    );
}