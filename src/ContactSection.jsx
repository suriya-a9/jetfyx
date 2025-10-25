import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { motion } from "framer-motion";
import Select from "react-select";
import countryList from "react-select-country-list";
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
        { name: "London", img: "/assets/flags/UK_flag.png", position: [51.5074, -0.1278] },
        { name: "Hyderabad", img: "/assets/flags/in-flag.jpg", position: [17.387140, 78.491684] },
        { name: "Kuala Lumpur", img: "/assets/flags/Flag_of_Malaysia.svg.png", position: [3.1390, 101.6869] },
        { name: "Dubai", img: "/assets/flags/uae flag.jpg", position: [25.276987, 55.296249] },
    ];

    const [country, setCountry] = useState("");
    const countryOptions = countryList().getData();
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
                        center={[1, 75]}
                        zoom={1.5}
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
                                icon={redDotIcon}
                            // eventHandlers={{
                            //     mouseover: (e) => e.target.openTooltip(),
                            //     mouseout: (e) => e.target.closeTooltip(),
                            // }}
                            >
                                <Tooltip
                                    direction="top"
                                    offset={[0, -10]}
                                    opacity={1}
                                    permanent={true}
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
                                    // whileHover={{
                                    //     scale: 1.1,
                                    //     transition: { type: "spring", stiffness: 300 },
                                    // }}
                                    >
                                        {loc.img && (
                                            <motion.img
                                                src={loc.img}
                                                alt={loc.name}
                                                className="w-10 h-10 object-cover rounded-lg shadow-lg border border-white"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                        <motion.span
                                            className="font-semibold text-xs text-gray-900 bg-white px-2 py-1 mt-1 rounded-md shadow"
                                            initial={{ opacity: 0, y: 1 }}
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
                        center={[40, 50]}
                        zoom={1.5}
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
                                icon={redDotIcon}
                            // eventHandlers={{
                            //     mouseover: (e) => e.target.openTooltip(),
                            //     mouseout: (e) => e.target.closeTooltip(),
                            // }}
                            >
                                <Tooltip
                                    direction="top"
                                    offset={[0, -10]}
                                    opacity={1}
                                    permanent={true}
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
                                    // whileHover={{
                                    //     scale: 1.1,
                                    //     transition: { type: "spring", stiffness: 300 },
                                    // }}
                                    >
                                        {loc.img && (
                                            <motion.img
                                                src={loc.img}
                                                alt={loc.name}
                                                className="w-10 h-10 object-cover rounded-lg shadow-lg border border-white"
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
                            className="md:w-3/4 bg-[#C3282E] text-white shadow-lg relative z-20 pointer-events-auto px-5 md:px-8 left-0 md:left-[20%] top-0 md:top-[120px]"
                            style={{ padding: "15px 20px", borderRadius: '26px' }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to own a brokerage?
                            </h2>
                            <button disabled className="bg-white text-[#C3282E] px-6 py-2 rounded-lg font-semibold">
                                Start a brokerage in a few days
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
                                    <Select
                                        options={countryOptions}
                                        value={country}
                                        onChange={setCountry}
                                        className="react-select-container rounded-lg"
                                        classNamePrefix="react-select"
                                        placeholder="Choose Country"
                                        isClearable
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                borderRadius: 8,
                                                minHeight: 40,
                                                borderColor: "#d1d5db",
                                                boxShadow: "none",
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                            }),
                                        }}
                                    />
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