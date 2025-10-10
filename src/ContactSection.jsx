import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./ContactSection.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function ContactSection() {
    const locations = [
        // { name: "New York", position: [40.7128, -74.006] },
        // { name: "London", position: [51.5074, -0.1278] },
        // { name: "Tokyo", position: [35.6762, 139.6503] },
        // { name: "Sydney", position: [-33.8688, 151.2093] },
        // { name: "Iceland", position: [64.963051, -19.020835] },
        // { name: "Greenland", position: [71.706936, -42.604303] },
        // { name: "United States", position: [38.9072, -77.0369] },
        // { name: "Canada", position: [45.4215, -75.6972] },
        // { name: "Mexico", position: [19.4326, -99.1332] },
        // { name: "Brazil", position: [-15.7939, -47.8828] },
        // { name: "Argentina", position: [-34.6037, -58.3816] },
        // { name: "Colombia", position: [4.7110, -74.0721] },
        // { name: "Chile", position: [-33.4489, -70.6693] },
        // { name: "Peru", position: [-12.0464, -77.0428] },
        // { name: "Venezuela", position: [10.4806, -66.9036] },
        // { name: "Ecuador", position: [-0.1807, -78.4678] },
        { name: "China (Beijing)", img: "/assets/china.webp", position: [39.9042, 116.4074] },
        // { name: "Japan (Tokyo)", position: [35.6762, 139.6503] },
        // { name: "South Korea (Seoul)", position: [37.5665, 126.9780] },
        { name: "India (New Delhi)", img: "/assets/India.webp", position: [28.6139, 77.2090] },
        // { name: "Pakistan (Islamabad)", position: [33.6844, 73.0479] },
        // { name: "Bangladesh (Dhaka)", position: [23.8103, 90.4125] },
        // { name: "Vietnam (Hanoi)", position: [21.0285, 105.8544] },
        // { name: "Thailand (Bangkok)", position: [13.7563, 100.5018] },
        // { name: "Singapore", position: [1.3521, 103.8198] },
        // { name: "Malaysia (Kuala Lumpur)", position: [3.1390, 101.6869] },
        // { name: "Indonesia (Jakarta)", position: [-6.2088, 106.8456] },
        // { name: "Philippines (Manila)", position: [14.5995, 120.9842] },
        { name: "Nepal (Kathmandu)", img: "/assets/Nepal.webp", position: [27.7172, 85.3240] },
        // { name: "Sri Lanka (Colombo)", position: [6.9271, 79.8612] },
        // { name: "Myanmar (Yangon)", position: [16.8409, 96.1735] },
        // { name: "Mongolia (Ulaanbaatar)", position: [47.8864, 106.9057] },
        // { name: "Kazakhstan (Astana)", position: [51.1605, 71.4704] },
        // { name: "Uzbekistan (Tashkent)", position: [41.2995, 69.2401] },
        // { name: "Iran (Tehran)", position: [35.6892, 51.3890] },
        // { name: "Saudi Arabia (Riyadh)", position: [24.7136, 46.6753] },
        // { name: "United Arab Emirates (Dubai)", position: [25.276987, 55.296249] },
        // { name: "Qatar (Doha)", position: [25.2854, 51.5310] },
        // { name: "Turkey (Ankara)", position: [39.9334, 32.8597] },
        // { name: "Israel (Jerusalem)", position: [31.7683, 35.2137] },
        // { name: "Lebanon (Beirut)", position: [33.8938, 35.5018] },
        // { name: "Jordan (Amman)", position: [31.9454, 35.9284] },
        // { name: "Oman (Muscat)", position: [23.5880, 58.3829] },
        // { name: "Kuwait (Kuwait City)", position: [29.3759, 47.9774] },
    ];

    const redDotIcon = new L.DivIcon({
        html: `<div style="width:12px; height:12px; background-color:#C3282E; border-radius:50%; border: 2px solid white;"></div>`,
        className: "",
        iconSize: [12, 12],
        iconAnchor: [6, 6],
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <section className="relative py-16 overflow-hidden" style={{ marginTop: '60px' }}>
                <div className="hidden md:block md:absolute inset-0 z-10">
                    <MapContainer
                        center={[10, 90]}
                        zoom={3}
                        scrollWheelZoom={true}
                        zoomControl={true}
                        dragging={true}
                        doubleClickZoom={true}
                        className="h-full w-full opacity-80"
                    >
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                            subdomains="abcd"
                            attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                        />

                        {locations.map((loc, i) => (
                            <Marker
                                key={i}
                                position={loc.position}
                                icon={redDotIcon}
                                eventHandlers={{
                                    mouseover: (e) => e.target.openTooltip(),
                                    mouseout: (e) => e.target.closeTooltip(),
                                }}
                            >
                                <Tooltip
                                    direction="top"
                                    offset={[0, -10]}
                                    opacity={1}
                                    permanent={false}
                                    className="!bg-transparent !border-0 !shadow-none"
                                >
                                    <motion.div
                                        className="flex flex-col items-center"
                                        initial={{ scale: 0, opacity: 0, y: 10 }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 12,
                                            duration: 0.4,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { type: "spring", stiffness: 300 },
                                        }}
                                    >
                                        {loc.img && (
                                            <motion.img
                                                src={loc.img}
                                                alt={loc.name}
                                                className="w-24 h-16 object-cover rounded-lg shadow-lg border border-white"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                        <motion.span
                                            className="font-semibold text-xs text-gray-900 bg-white px-2 py-1 mt-1 rounded-md shadow"
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {loc.name}
                                        </motion.span>
                                    </motion.div>
                                </Tooltip>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <div className="md:hidden w-full h-64 mb-6 relative z-10">
                    <MapContainer
                        center={[10, 90]}
                        zoom={1}
                        scrollWheelZoom={true}
                        className="h-full w-full opacity-80"
                    >
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                            subdomains="abcd"
                            attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                        />

                        {locations.map((loc, i) => (
                            <Marker
                                key={i}
                                position={loc.position}
                                icon={redDotIcon}
                                eventHandlers={{
                                    mouseover: (e) => e.target.openTooltip(),
                                    mouseout: (e) => e.target.closeTooltip(),
                                }}
                            >
                                <Tooltip
                                    direction="top"
                                    offset={[0, -10]}
                                    opacity={1}
                                    permanent={false}
                                    className="!bg-transparent !border-0 !shadow-none"
                                >
                                    <motion.div
                                        className="flex flex-col items-center"
                                        initial={{ scale: 0, opacity: 0, y: 10 }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 12,
                                            duration: 0.4,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { type: "spring", stiffness: 300 },
                                        }}
                                    >
                                        {loc.img && (
                                            <motion.img
                                                src={loc.img}
                                                alt={loc.name}
                                                className="w-24 h-16 object-cover rounded-lg shadow-lg border border-white"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                        <motion.span
                                            className="font-semibold text-xs text-gray-900 bg-white px-2 py-1 mt-1 rounded-md shadow"
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {loc.name}
                                        </motion.span>
                                    </motion.div>
                                </Tooltip>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-transparent pointer-events-none"></div>

                    <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                        <div
                            className="md:w-3/4 bg-[#C3282E] text-white shadow-lg relative z-20 pointer-events-auto px-5 md:px-8 left-0 md:left-[20%]"
                            style={{ padding: "15px 20px", borderRadius: '26px' }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to trade without limits?
                            </h2>
                            <button className="bg-white text-[#C3282E] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                Start your journey with JetFyX now.
                            </button>
                        </div>

                        <div className="w-full md:w-[30%]  bg-[#999999] p-8 shadow-lg relative z-20 pointer-events-auto" style={{ borderRadius: '26px' }}>
                            <form>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-400"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-400"
                                    />
                                    <select className="w-full px-4 py-2 rounded-lg border border-gray-400">
                                        <option value="">Location</option>
                                        <option value="New York">New York</option>
                                        <option value="London">London</option>
                                        <option value="Tokyo">Tokyo</option>
                                        <option value="Sydney">Sydney</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Mobile No:"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-400"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-400"
                                    />
                                    <textarea
                                        placeholder="Your Message"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-400"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-[#2C2C2C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
                                >
                                    Contact Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}