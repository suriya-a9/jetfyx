import React, { useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaGoogle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const allCountries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
    "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export default function SignInSignUp() {
    const location = useLocation();
    const initialTab = location.state?.tab || "login";
    const [activeTab, setActiveTab] = useState(initialTab);
    const [country, setCountry] = useState("");
    const [timeSlot, setTimeSlot] = useState("");

    const countryTimeSlots = {
        India: "9am - 5pm EST",
        UK: "10am - 6pm IST",
        Malaysia: "9am - 5pm GMT",
        UAE: "8am - 4pm AEST",
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setTimeSlot(countryTimeSlots[e.target.value] || "");
    };

    const variants = {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -40 },
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7]">
            <div className="flex w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="w-1/2 flex flex-col items-center justify-center bg-white p-8">
                    <img
                        src="/assets/fav-icon.webp"
                        alt="Logo"
                        style={{ height: "250px", width: "250px" }}
                        className="mx-auto"
                    />
                </div>
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex mt-2 mb-6">
                        <button
                            className={`flex-1 py-2 rounded-l-lg font-semibold ${activeTab === "login" ? "bg-[#C3282E] text-white" : "bg-gray-100 text-gray-700"}`}
                            onClick={() => setActiveTab("login")}
                        >
                            Login
                        </button>
                        <button
                            className={`flex-1 py-2 rounded-r-lg font-semibold ${activeTab === "signup" ? "bg-[#C3282E] text-white" : "bg-gray-100 text-gray-700"}`}
                            onClick={() => setActiveTab("signup")}
                        >
                            Signup
                        </button>
                    </div>
                    <AnimatePresence mode="wait">
                        {activeTab === "login" ? (
                            <motion.form
                                key="login"
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                />
                                <div className="flex justify-between items-center">
                                    <a href="#" className="text-[#C3282E] text-sm hover:underline">Forgot password?</a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#C3282E] text-white font-semibold py-2 rounded-lg hover:bg-[#C3282E] transition"
                                >
                                    Login
                                </button>
                                <div className="text-center text-gray-500 text-sm mt-2">Or Continue With:</div>
                                <div className="flex space-x-2 justify-center mt-2">
                                    <button type="button" className="bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"><FaGooglePlusG fontSize={"25px"} color="#C3282E" /></button>
                                    <button type="button" className="bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"><FaFacebookF color="#C3282E" /></button>
                                    <button type="button" className="bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"><FaGoogle color="#C3282E" /></button>
                                </div>
                                <div className="text-center mt-4 text-sm">
                                    Not a member? <span className="text-[#C3282E] cursor-pointer hover:underline" onClick={() => setActiveTab("signup")}>Signup now</span>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.form
                                key="signup"
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Website"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                />
                                <select
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                    value={country}
                                    onChange={handleCountryChange}
                                >
                                    <option value="">Select Country</option>
                                    {allCountries.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                                {timeSlot && (
                                    <div className="text-sm text-gray-600">
                                        Preferred time slot for a call: <span className="font-semibold">{timeSlot}</span>
                                    </div>
                                )}
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
                                />
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="verify" className="accent-blue-600" />
                                    <label htmlFor="verify" className="text-sm text-gray-700">Email Verification</label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#C3282E] text-white font-semibold py-2 rounded-lg hover:bg-[#C3282E] transition"
                                >
                                    Signup
                                </button>
                                <div className="text-center mt-4 text-sm">
                                    Already have an account? <span className="text-[#C3282E] cursor-pointer hover:underline" onClick={() => setActiveTab("login")}>Login</span>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}