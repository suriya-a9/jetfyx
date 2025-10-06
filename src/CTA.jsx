import { link } from "framer-motion/client";

export default function CEOSection() {
    const buttonClick = () => {
        const url = "https://bing.com";
        window.open(url, "_blank");
    }
    return (
        <section className="py-8 bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-[#555555] rounded-lg p-6 shadow-lg" style={{ position: 'relative' }}>
                    <h2 className="text-3xl font-bold text-center text-white" style={{ letterSpacing: '1px', textShadow: 'rgb(0, 0, 0) 2px 4px 5px' }}>From the Desk of the CEO</h2>
                    <button onClick={buttonClick} className="text-sm font-semibold hover:underline" style={{ position: 'absolute', bottom: '-25px', right: '0px', color: '#555555' }}>
                        Click Here To Read The CEO’s Letter....
                    </button>
                </div>
            </div>
        </section>
    );
}