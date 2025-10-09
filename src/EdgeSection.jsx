import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function EdgeSection() {
  const [showMore, setShowMore] = useState(false);

  const features = [
    { title: "Multiple Take Profit Levels", description: "Automate strategies with multi-level profit booking and loss control to close trades smartly." },
    { title: "Lock in Profits Step-by-Step", description: "Secure gains at set prices while letting the rest ride." },
    { title: "Flexible Settings", description: "Choose exact prices, quantities, or percentages for partial closes." },
    { title: "Fully Automated", description: "Executes instantly, even when you’re offline." },
  ];

  const additionalFeatures = [
    { title: "Risk Managed", description: "Remaining positions stay protected with stop-loss or new targets." },
    { title: "Strategic Scaling", description: "Maximize profits while reducing exposure, no constant monitoring needed." },
    { title: "Trailing Stop Orders", description: "Protect gains automatically as markets move." },
    { title: "Hedging Options", description: "Balance risk with multiple positions in the same instrument." },
    { title: "Copy Trading", description: "Mirror top traders’ strategies with full risk control." },
    { title: "API Integration", description: "Build and connect advanced algorithmic systems." },
    { title: "Advanced Order Types", description: "Market, limit, stop, OCO, and more." },
    { title: "Custom Alerts & Notifications", description: "Real-time updates via SMS, email, or in-app." },
    { title: "Portfolio Analytics", description: "Track performance, diversification, and exposure clearly." },
    { title: "Seamless Deposits & Withdrawals", description: "Multiple gateways with fast, secure processing." },
  ];

  return (
    <section
      className="relative md:mt-[200px] sm:mt-0 md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]"
      style={{ backgroundColor: "#D9D9D933", borderRadius: "20px" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:overflow-visible overflow-hidden">
        <div className="md:w-1/2 mb-8 md:mb-0 relative top-0 md:-top-[100px] transition-all duration-500">
          <img src="/assets/edge-img.webp" alt="JetFyX Edge" className="w-full" />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-600">JetFyX</span> Edge
          </h2>

          <ul className="space-y-4 relative">
            {[...features, ...(showMore ? additionalFeatures : [])].map((feature, index) => (
              <FeatureItem key={feature.title} feature={feature} index={index} />
            ))}
          </ul>

          <button
            onClick={() => setShowMore(!showMore)}
            className="font-semibold text-red-600 hover:underline mt-4"
          >
            {showMore ? "Read Less....." : "Read More....."}
          </button>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.li
      ref={ref}
      className="flex items-start relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="w-4 h-4 bg-red-600 rounded-full mt-1 mr-4"></div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
        <p className="text-gray-700">{feature.description}</p>
      </div>

      <div
        className="absolute h-full border-l-4"
        style={{
          top: "20px",
          left: "7px",
          color: "#D9D9D9",
        }}
      ></div>
    </motion.li>
  );
}