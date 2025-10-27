import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import BlogModal from "./components/BlogModal";

const blogs = [
    {
        title: "JetFyX Is Coming Soon: The Future of Forex Is Taking Off",
        description: "Discover the best trading platform for multi-asset brokers.",
        image: "/assets/blog-img-1.webp",
        fullDescription: `<p>There’s a moment before takeoff when everything goes quiet—the engines hum, the air tightens, and for a second, you can almost feel the future leaning forward.That’s where we are right now.</p>`,
    },
    {
        title: "Welcome to JetFyX—Your Gateway to a New Era in Forex",
        description: "Meet top professionals and discover the latest in investment innovation.",
        image: "/assets/blog-img-2.webp",
        fullDescription: `<p>JetFyX isn’t another trading platform. It’s the full flight deck—built for brokers, traders, partners, and anyone ready to move faster than the market itself. Whether you’re starting your own brokerage or expanding your global reach, JetFyX gives you the complete ecosystem to launch, scale, and lead—all from one unified platform.</p>`,
    },
    {
        title: "Our philosophy is simple: precision, speed, and transparency should belong to everyone.",
        description: "Explore advanced trading strategies and tools for brokers.",
        image: "/assets/blog-img-3.webp",
        fullDescription: `<p>From registration to revenue, from the first click to the final execution—we've built JetFyX to take the friction out of Forex.</p>`,
    },
    // {
    //     title: "Wealth Expo Mexico City",
    //     description: "Meet top professionals and discover the latest in investment innovation.",
    //     image: "/assets/blog-img-2.webp",
    //     fullDescription: `<h1>Wealth Expo Mexico City</h1>
    //         <p>Meet top professionals and discover the latest in investment innovation at our <b>Mexico City Expo</b>.</p>`,
    // },
];

export default function BlogSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const sideBlogs = [
        blogs[(currentIndex + 1) % blogs.length],
        blogs[(currentIndex + 2) % blogs.length],
    ];

    const prevBlog = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
        );
        setShowDropdown(false);
    };

    const nextBlog = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
        );
        setShowDropdown(false);
    };

    const handleSideBlogClick = (blog) => {
        const newIndex = blogs.findIndex((b) => b.title === blog.title);
        setCurrentIndex(newIndex);
        setShowDropdown(false);
    };

    return (
        <section className="py-16 bg-[#D9D9D933]" style={{ borderRadius: "25px" }}>
            <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[15%] md:pl-[5%] md:pr-[5%] sm:gap-0  md:ml-[4%] md:mr-[4%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]">
                <div className="col-span-2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Blog</h2>
                    <div
                        className="relative overflow-hidden rounded-lg shadow-lg"
                        style={{ borderRadius: "25px" }}
                    >
                        <img
                            src={blogs[currentIndex].image}
                            alt={blogs[currentIndex].title}
                            className="w-full h-64 md:h-[400px] object-cover filter grayscale"
                        />
                        <div className="absolute inset-0 bg-[#D0D0D0] opacity-50"></div>
                        <div className="absolute inset-0 flex flex-col justify-between p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <span className="px-3 py-1 rounded bg-black/60 w-fit">
                                    <h2 className="w-full font-bold text-white text-[14px] m-0 p-4">
                                        {blogs[currentIndex].title}
                                    </h2>
                                </span>
                                <button
                                    className="bg-red-600 text-white px-4 py-2 text-[15px] rounded-lg hover:bg-red-700 transition mt-2 md:mt-0 md:ml-4 self-start md:self-auto flex items-center gap-2"
                                    onClick={() => setShowModal(true)}
                                >
                                    Read More
                                    {/* {showDropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />} */}
                                </button>
                            </div>
                            <BlogModal
                                open={showModal}
                                onClose={() => setShowModal(false)}
                                content={blogs[currentIndex].fullDescription}
                            />
                            {showDropdown && (
                                <div
                                    className="relative mt-4 bg-white rounded-lg shadow-xl border-t-4 border-red-600 p-4 overflow-auto animate-fadeIn"
                                    style={{
                                        maxHeight: "320px",
                                        zIndex: 30,
                                    }}
                                >
                                    <div
                                        className="prose max-w-none"
                                        dangerouslySetInnerHTML={{
                                            __html: blogs[currentIndex].fullDescription,
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="absolute bottom-[0.5rem] right-4 flex gap-4">
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
                </div>

                <div className="space-y-4 flex flex-col justify-start mt-2">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block bg-red-600 text-white text-lg font-semibold px-4 py-2 rounded">
                            Latest Blogs:
                        </span>
                    </div>
                    <div className="relative">
                        {sideBlogs.map(
                            (blog, index) =>
                                blog && (
                                    <div
                                        key={index}
                                        className="relative rounded-lg shadow-lg overflow-hidden bg-white mb-4 cursor-pointer"
                                        onClick={() => handleSideBlogClick(blog)}
                                    >
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-48 object-cover filter grayscale"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                                        <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
                                            <h4 className="font-bold text-[13px] text-gray-900">
                                                {blog.title}
                                            </h4>
                                            <p className="text-gray-700 text-[12px]">
                                                {blog.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}