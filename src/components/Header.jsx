import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { name: "Home", to: "banner" },
        { name: "Features", to: "featureCarousel" },
        { name: "Mission", to: "missionVision" },
        { name: "Contact", to: "contactSection" },
    ];

    return (
        <header className="w-full top-0 left-0 z-50">
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
                <nav className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-gray-700 hover:text-red-600 transition font-normal text-sm cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                        <nav className="flex flex-col space-y-4 p-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="text-gray-700 hover:text-red-600 transition font-normal text-sm cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}