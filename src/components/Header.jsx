import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const links = [
        { name: "Home", to: "banner" },
        {
            name: "Features", to: "featureCarousel",
            dropdown: [
                { name: "Platform", to: "tradingCarousel" },
                { name: "PAMM/MAM", to: "pammSection" },
                { name: "Copy Trading", to: "pammSection" },
                { name: "Social Trading", to: "pammSection" },
            ],
        },
        {
            name: "Exclusive", to: "innovationSection",
            dropdown: [
                { name: "Exclusive Offers", to: "innovationSection" },
                { name: "Download Corporate Brochure", to: "innovationSection" },
                { name: "Download Client Brochure", to: "innovationSection" },
                { name: "Other Services", to: "innovationSection" },
            ],
        },
        {
            name: "Deals", to: "PricingSection",
            dropdown: [
                { name: "For Brokers", to: "featureSection" },
                { name: "For Dealers", to: "featureSection" },
            ],
        },
        { name: "Contact", to: "contactSection" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full top-0 left-0 z-50 sticky transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
                <a href="#" className="flex items-center space-x-2">
                    <img
                        src="/assets/logo.webp"
                        alt="Logo"
                        style={{ height: "80px", width: "80px" }}
                    />
                </a>
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <nav className="hidden md:flex flex-1 justify-center space-x-8 relative">
                    {links.map((link, index) => (
                        <div key={index} className="relative group">
                            <Link
                                to={link.to || ""}
                                smooth={true}
                                duration={500}
                                offset={-130}
                                className="text-gray-700 hover:text-red-600 transition font-normal text-sm cursor-pointer"
                            >
                                {link.name}
                            </Link>

                            {link.dropdown && (
                                <div
                                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 p-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                                >
                                    {link.dropdown.map((dropdownItem, dropdownIndex) => (
                                        <Link
                                            key={dropdownIndex}
                                            to={dropdownItem.to}
                                            smooth={true}
                                            duration={500}
                                            offset={-130}
                                            className="block text-gray-700 hover:text-red-600 transition font-normal text-sm cursor-pointer px-4 py-2 whitespace-nowrap"
                                        >
                                            {dropdownItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                    ))}
                </nav>
                <div className="hidden md:flex space-x-4">
                    <button
                        className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                        onClick={() => navigate("/auth", { state: { tab: "login" } })}
                    >
                        Log In
                    </button>
                    <button
                        className="border border-gray-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-gray-700"
                        onClick={() => navigate("/auth", { state: { tab: "signup" } })}
                    >
                        Sign Up
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div className="fixed top-[15%] left-0 w-full h-full bg-white shadow-md md:hidden z-50">
                        <nav className="flex flex-col space-y-4 p-4">
                            {links.map((link, index) => (
                                <div key={index}>
                                    <Link
                                        to={link.to || ""}
                                        smooth={true}
                                        duration={500}
                                        offset={-130}
                                        className="text-gray-700 hover:text-red-600 transition font-normal text-sm cursor-pointer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4">
                                            {link.dropdown.map((dropdownItem, dropdownIndex) => (
                                                <Link
                                                    key={dropdownIndex}
                                                    to={dropdownItem.to}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-130}
                                                    className="block text-gray-700 hover:text-red-600 transition font-normal text-sm cursor-pointer"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {dropdownItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <button
                                className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    navigate("/auth", { state: { tab: "login" } });
                                }}
                            >
                                Log In
                            </button>
                            <button
                                className="border border-gray-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-gray-700"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    navigate("/auth", { state: { tab: "signup" } });
                                }}
                            >
                                Sign Up
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}