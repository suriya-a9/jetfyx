import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
    {
        title: "Best Multi-Asset Trading Platform",
        description: "Discover the best trading platform for multi-asset brokers.",
        image: "/assets/blog-img-1.webp",
    },
    {
        title: "Wealth Expo Mexico City",
        description: "Meet top professionals and discover the latest in investment innovation.",
        image: "/assets/blog-img-2.webp",
    },
    {
        title: "Wealth Expo Mexico Cities",
        description: "Explore advanced trading strategies and tools for brokers.",
        image: "/assets/blog-img-3.webp",
    },
];

export default function BlogSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevBlog = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogs.length - 1 : prevIndex - 1));
    };

    const nextBlog = () => {
        setCurrentIndex((prevIndex) => (prevIndex === blogs.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Blog</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative col-span-2">
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={blogs[currentIndex].image}
                                alt={blogs[currentIndex].title}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-[#D0D0D0] opacity-50"></div>
                            <div className="absolute inset-0 flex flex-col justify-between p-6">
                                <div className="text-white p-4 rounded-lg" style={{backgroundColor:'#D9D9D9'}}>
                                    <h3 className="text-xl font-bold">{blogs[currentIndex].title}</h3>
                                </div>
                                <div className="flex justify-end">
                                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                            <button
                                onClick={prevBlog}
                                className="bg-white border rounded-full shadow p-2 hover:bg-red-100"
                            >
                                <ChevronLeft className="w-6 h-6 text-red-600" />
                            </button>
                            <button
                                onClick={nextBlog}
                                className="bg-white border rounded-full shadow p-2 hover:bg-red-100"
                            >
                                <ChevronRight className="w-6 h-6 text-red-600" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {blogs
                            .filter((_, index) => index !== currentIndex) 
                            .map((blog, index) => (
                                <div
                                    key={index}
                                    className="relative flex items-center gap-4 p-4 rounded-lg shadow-lg bg-white transition"
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-[#D0D0D0] opacity-50 rounded-lg"></div>
                                    <div className="relative">
                                        <h4 className="text-lg font-bold text-gray-800">{blog.title}</h4>
                                        <p className="text-sm text-gray-600">{blog.description}</p>
                                    </div>
                                </div>
                            ))} 
                    </div>
                </div>
            </div>
        </section>
    );
}