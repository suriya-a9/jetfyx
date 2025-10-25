import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-xl mb-6">Page Not Found</p>
            <Link to="/" className="text-blue-500 underline">
                Go Home
            </Link>
        </div>
    );
}