import React, { useEffect } from "react";

export default function BlogModal({ open, onClose, content }) {
    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [open]);

    if (!open) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full max-h-[80vh] overflow-auto">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}