import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PopupModal({ open, onClose }) {
    if (!open) return null;
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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-sm w-full">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img
                    src="/assets/offer.webp"
                    alt="Floating Icon"
                    className="w-full h-full z-20"
                />
                <form className="rounded-xl space-y-4 mt-4 w-full">
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
                        // to="contactSection"
                        smooth={true}
                        duration={800}
                        offset={-50}
                        className="w-full"
                        onClick={onClose}
                    >
                        <button
                            type="button"
                            className="w-full mt-[15px] bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
                        >
                            Book Demo
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}