import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function SignInSignUp() {
    const location = useLocation();
    const initialTab = location.state?.tab === "signup" ? "signup" : "login";
    const [tab, setTab] = useState(initialTab);
    const [country, setCountry] = useState(null);

    const countryOptions = countryList().getData();

    return (
        <div className="min-h-screen relative flex overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/banner-section-bg.webp')" }}
            />
            <div className="absolute inset-0 bg-white/40" />

            <div className="relative z-10 flex flex-col md:flex-row w-full min-h-screen">
                <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-12">
                    <div className="w-full max-w-md bg-white/90 p-6">
                        <div className="flex mb-6 justify-center">
                            <img src="/assets/logo.webp" alt="JET Logo" className="w-20 h-20" />
                        </div>
                        {tab === "login" ? (
                            <form className="space-y-4">
                                <h2 className="text-2xl font-bold">Welcome Back!</h2>
                                <p className="text-gray-600">Enter your credentials to access your account</p>
                                <div>
                                    <label className="block text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-1">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-200"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Remember me
                                    </label>
                                    <a href="#" className="text-red-600 hover:underline">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-[15px] font-semibold hover:bg-red-700 transition">Login</button>
                                <div className="flex items-center my-2">
                                    <div className="flex-grow border-t" />
                                    <span className="mx-2 text-gray-400 text-xs">or</span>
                                    <div className="flex-grow border-t" />
                                </div>
                                <div className="display-block md:flex gap-[15px]">
                                    <button type="button" className="flex-1 w-full flex items-center justify-center border rounded-[15px] py-2 hover:bg-gray-50 mt-2">
                                        <img src="/assets/google-login-icon.webp" alt="Google" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">Sign in with Google</span>
                                    </button>
                                    <button type="button" className="flex-1 w-full flex items-center justify-center border rounded-[15px] py-2 hover:bg-gray-50 mt-2">
                                        <img src="/assets/apple-login-icon.webp" alt="Apple" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">Sign in with Apple</span>
                                    </button>
                                </div>
                                <div className="text-center text-sm mt-2">
                                    Don&apos;t have an account?{" "}
                                    <button type="button" className="text-red-600 hover:underline" onClick={() => setTab("signup")}>
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form className="space-y-4">
                                <h2 className="text-2xl font-bold">Create Account</h2>
                                <p className="text-gray-600">Sign up to get started with Jet</p>
                                <div>
                                    <label className="block text-gray-700 mb-1">Full Name</label>
                                    <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-200" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-1">Email</label>
                                    <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-200" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-200" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-1">Company Name</label>
                                    <input type="text" placeholder="Company Name" className="w-full px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-200" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-1">Website</label>
                                    <input type="url" placeholder="Website" className="w-full px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-200" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-1">Country</label>
                                    <Select
                                        options={countryOptions}
                                        value={country}
                                        onChange={setCountry}
                                        className="react-select-container rounded-[15px]"
                                        classNamePrefix="react-select"
                                        placeholder="Choose Country"
                                        isClearable
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                borderRadius: 15,
                                                minHeight: 40,
                                                borderColor: "#d1d5db",
                                                boxShadow: "none",
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                borderRadius: 15,
                                            }),
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-1">Password</label>
                                    <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-200" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-1">Confirm Password</label>
                                    <input type="password" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-200" required />
                                </div>

                                <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-[15px] font-semibold hover:bg-red-700 transition">Sign Up</button>
                                <div className="flex items-center my-2">
                                    <div className="flex-grow border-t" />
                                    <span className="mx-2 text-gray-400 text-xs">or</span>
                                    <div className="flex-grow border-t" />
                                </div>
                                <div className="display-block md:flex gap-[15px]">
                                    <button type="button" className="flex-1 w-full flex items-center justify-center border rounded-[15px] py-2 hover:bg-gray-50 mt-2">
                                        <img src="/assets/google-login-icon.webp" alt="Google" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">Sign up with Google</span>
                                    </button>
                                    <button type="button" className="flex-1 w-full flex items-center justify-center border rounded-[15px] py-2 hover:bg-gray-50 mt-2">
                                        <img src="/assets/apple-login-icon.webp" alt="Apple" className="w-5 h-5 mr-2" />
                                        <span className="text-sm">Sign up with Apple</span>
                                    </button>
                                </div>
                                <div className="text-center text-sm mt-2">
                                    Already have an account?{" "}
                                    <button type="button" className="text-red-600 hover:underline" onClick={() => setTab("login")}>
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
                <div className="hidden md:flex md:w-1/2 items-center justify-center relative rounded-[30px] bg-[#f8e7e880]">
                    <div className="absolute inset-0 bg-[url('/assets/bg-candles.png')] bg-cover bg-center opacity-20" />
                    <div className="relative flex flex-col items-center z-10">
                        <img src="/assets/logo.webp" alt="JET Logo" className="w-80 h-80 mb-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}