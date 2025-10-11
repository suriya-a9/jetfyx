import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./EdgeSection.css"

export default function EdgeSection() {
  const listRef = useRef(null);

  const allFeatures = [
    { title: "Multiple Take Profit Levels", description: "Automate strategies with multi-level profit booking and loss control to close trades smartly." },
    { title: "Lock in Profits Step-by-Step", description: "Secure gains at set prices while letting the rest ride." },
    { title: "Flexible Settings", description: "Choose exact prices, quantities, or percentages for partial closes." },
    { title: "Fully Automated", description: "Executes instantly, even when you’re offline." },
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
      className="relative mt-[60px] md:ml-[6%] md:mr-[6%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%] pt-[25px] pb-[25px]"
      style={{ backgroundColor: "#D9D9D933", borderRadius: "20px" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:gap-10 overflow-hidden">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="flex justify-center items-start md:sticky md:top-[100px] h-fit">
            <motion.img
              src="/assets/edge-img.webp"
              alt="JetFyX Edge"
              className="w-[100%] object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        <div className="md:w-1/2 overflow-y-auto max-h-[calc(100vh-150px)] pr-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-red-600">JetFyX</span> Edge
          </h2>

          <ul ref={listRef} className="space-y-4 relative overflow-visible">
            {allFeatures.map((feature, index) => (
              <FeatureItem key={feature.title} feature={feature} index={index} />
            ))}
          </ul>
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-4 h-4 bg-red-600 rounded-full mt-1 mr-4"></div>

      <div>
        <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
        <p className="text-gray-700">{feature.description}</p>
      </div>

      {index !== 13 && (
        <div
          className="absolute h-full border-l-4"
          style={{
            top: "20px",
            left: "7px",
            color: "#D9D9D9",
          }}
        ></div>
      )}
    </motion.li>
  );
}