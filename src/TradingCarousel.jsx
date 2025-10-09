import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TradingCarousel.css";

const PrevArrow = ({ className, onClick }) => (
    <div
        className={`${className} custom-arrow prev`}
        onClick={onClick}
        style={{
            width: '40px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            left: '-50px',
            background: '#f2e3e4',
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px',
        }}
    >
        <ChevronLeft size={24} style={{ color: '#852221' }} />
    </div>
);

const NextArrow = ({ className, onClick }) => (
    <div
        className={`${className} custom-arrow next`}
        onClick={onClick}
        style={{
            width: '40px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            right: '-50px',
            background: '#f2e3e4',
            borderTopLeftRadius: '30px',
            borderBottomLeftRadius: '30px',
        }}
    >
        <ChevronRight size={24} style={{ color: '#852221' }} />
    </div>
);
const getSlidesForWidth = (w) => {
    if (w <= 600) return 1;
    if (w <= 768) return 1;
    if (w <= 1024) return 2;
    return 4;
};
const TradingCarousel = () => {
    const [slidesToShow, setSlidesToShow] = useState(
        typeof window !== "undefined" ? getSlidesForWidth(window.innerWidth) : 3
    );

    useEffect(() => {
        let rafId = null;
        const onResize = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const newVal = getSlidesForWidth(window.innerWidth);
                setSlidesToShow((prev) => (prev !== newVal ? newVal : prev));
            });
        };
        window.addEventListener("resize", onResize);
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        centerMode: slidesToShow >= 3,
        centerPadding: "0px",
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const carouselItems = [
        {
            title: "Real-Time Market Data",
            description:
                "Trade anywhere with live quotes, global trends, and up-to-the-second updates.",
            icon: "/assets/trade-icon-1.webp",
        },
        {
            title: "One-Click Trading",
            description: "Execute instantly with lightning speed and minimal slippage.",
            icon: "/assets/trade-icon-2.webp",
        },
        {
            title: "Advanced Trading Tools",
            description: "Charts, indicators, and custom mappings on one screen.",
            icon: "/assets/trade-icon-3.webp",
        },
        {
            title: "Customizable Alerts",
            description: "Set alerts for price movements and market trends.",
            icon: "/assets/trade-icon-1.webp",
        },
        {
            title: "Secure Transactions",
            description: "Trade with confidence using encrypted and secure platforms.",
            icon: "/assets/trade-icon-2.webp",
        },
    ];
    return (
        <div
            className="trading-carousel-section"
            style={{
                backgroundColor: '#f7f7f7',
                padding: '60px 20px',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                borderRadius: '20px',
                marginTop: '60px',
                paddingBottom: '20px',
            }}
        >
            <h2 className="section-heading">
                <span className="highlight">JetFyX</span> Forex and Crypto <br />
                Trading Platform
            </h2>
            <div className="trading-carousel md:py-[20px] sm:w-full md:mt-[-100px] sm:mt-[-50px]">
                <Slider {...settings}>
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className="carousel-item sm:w-full"
                            style={{
                                background: '#E6E6E6',
                                borderRadius: '16px',
                                padding: '20px',
                                textAlign: 'center',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                margin: '0 auto',
                                maxWidth: '90%',
                            }}
                        >
                            <div className="item-content">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="icon"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '15px',
                                        display: 'block',
                                        margin: '0 auto',
                                    }}
                                />
                                <h3
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        marginBottom: '10px',
                                        color: '#333',
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <hr className="hr" />
                                <p
                                    style={{
                                        fontSize: '12px',
                                        color: '#555',
                                    }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TradingCarousel;