import React from "react";

export default function PageLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="w-full max-w-7xl mx-auto px-4 flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
}