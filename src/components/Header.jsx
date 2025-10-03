import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", href: "#" },
        { name: "Features", href: "#" },
        { name: "Exclusive", href: "#" },
        { name: "Deals", href: "#" },
        { name: "Contact Us", href: "#" },
    ];

    return (
        <header className="w-full bg-white fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
                <a href="#" className="flex items-center space-x-2">
                    <img
                        src="/assets/logo.webp"
                        alt="Logo"
                        style={{ height: "80px", width: "80px" }}
                    />
                </a>

                <nav className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-red-600 transition font-normal text-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a
                        href="#"
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-normal"
                        style={{ borderRadius: "10px" }}
                    >
                        Sign In
                    </a>
                </div>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-gray-700 hover:text-red-600 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="block w-full text-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Sign In
                    </a>
                </div>
            )}
        </header>
    );
}