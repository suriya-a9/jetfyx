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
        { name: "New York", position: [40.7128, -74.006] },
        { name: "London", position: [51.5074, -0.1278] },
        { name: "Tokyo", position: [35.6762, 139.6503] },
        { name: "Sydney", position: [-33.8688, 151.2093] },
        { name: "Iceland", position: [64.963051, -19.020835] },
        { name: "Greenland", position: [71.706936, -42.604303] },
        { name: "United States", position: [38.9072, -77.0369] },
        { name: "Canada", position: [45.4215, -75.6972] },
        { name: "Mexico", position: [19.4326, -99.1332] },
        { name: "Brazil", position: [-15.7939, -47.8828] },
        { name: "Argentina", position: [-34.6037, -58.3816] },
        { name: "Colombia", position: [4.7110, -74.0721] },
        { name: "Chile", position: [-33.4489, -70.6693] },
        { name: "Peru", position: [-12.0464, -77.0428] },
        { name: "Venezuela", position: [10.4806, -66.9036] },
        { name: "Ecuador", position: [-0.1807, -78.4678] }
    ];

    const redDotIcon = new L.DivIcon({
        html: `<div style="width:12px; height:12px; background-color:#C3282E; border-radius:50%; border: 2px solid white;"></div>`,
        className: "", // remove default class
        iconSize: [12, 12],
        iconAnchor: [6, 6], // center the dot
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
                        center={[20, 0]}
                        zoom={2}
                        scrollWheelZoom={false}
                        zoomControl={false}
                        dragging={false}
                        doubleClickZoom={false}
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
                                icon={redDotIcon} // use red dot icon
                                eventHandlers={{
                                    mouseover: (e) => e.target.openTooltip(),
                                    mouseout: (e) => e.target.closeTooltip(),
                                }}
                            >
                                <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                                    <span className="font-semibold text-sm">{loc.name}</span>
                                </Tooltip>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <div className="md:hidden w-full h-64 mb-6 relative z-10">
                    <MapContainer
                        center={[20, 0]}
                        zoom={2}
                        scrollWheelZoom={false}
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
                                icon={redDotIcon} // red dot for mobile too
                                eventHandlers={{
                                    mouseover: (e) => e.target.openTooltip(),
                                    mouseout: (e) => e.target.closeTooltip(),
                                }}
                            >
                                <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                                    <span className="font-semibold text-sm">{loc.name}</span>
                                </Tooltip>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-transparent pointer-events-none"></div>

                    <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                        <div
                            className="md:w-3/4 bg-[#C3282E] text-white rounded-lg shadow-lg relative z-20 pointer-events-auto px-5 md:px-8 left-0 md:left-[5%]"
                            style={{ padding: "10px 20px" }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to trade without limits?
                            </h2>
                            <button className="bg-white text-[#C3282E] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                Start your journey with JetFyX now.
                            </button>
                        </div>

                        <div className="w-full md:w-1/2 bg-[#999999] p-8 rounded-lg shadow-lg relative z-20 pointer-events-auto">
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