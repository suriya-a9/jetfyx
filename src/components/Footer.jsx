import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaFacebook, FaInstagramSquare, FaYoutube, FaTelegram } from "react-icons/fa";
const sections = [
    { name: "Home", to: "banner" },
    { name: "Features", to: "tradingCarousel" },
    { name: "Exclusive", to: "featureSection" },
];
const sectionss = [
    { name: "Deals", to: "edgeSection" },
    { name: "Contact", to: "contactSection" },
];
export default function Footer() {
    return (
        <>
            <footer className="bg-white py-8" style={{ borderTop: '1px solid #C3282E', borderBottom: '1px solid #C3282E', marginTop: "60px" }}>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">

                    <div className="space-y-2">
                        <h3 className="font-semibold mb-2">Navigation</h3>
                        <ul className="space-y-1">
                            {sections.map(section => (
                                <li key={section.to}>
                                    <Link
                                        to={section.to}
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer hover:text-red-600"
                                    >
                                        {section.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <img src="/assets/footer_logo.webp" alt="JetFyX Logo" className="w-32" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold mb-2">&nbsp;</h3>
                        <ul className="space-y-1">
                            {sectionss.map(section => (
                                <li key={section.to}>
                                    <Link
                                        to={section.to}
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer hover:text-red-600"
                                    >
                                        {section.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-2" style={{ fontSize: '12px' }}>
                        <p><span className="text-red-600 font-semibold">General Support:</span> support@jetfyx.com</p>
                        <p><span className="text-red-600 font-semibold">Sales:</span> sales@jetfyx.com</p>
                        <p><span className="text-red-600 font-semibold">Technical Support:</span> tech@jetfyx.com</p>
                        <p><span className="text-red-600 font-semibold">Partnerships:</span> partners@jetfyx.com</p>
                        <p><span className="text-red-600 font-semibold">Careers:</span> careers@jetfyx.com</p>
                        <p><span className="text-red-600 font-semibold">Website:</span> www.jetfyx.com</p>
                    </div>

                    <div className="space-y-2" style={{ fontSize: '12px' }}>
                        <p><span className="bg-red-600 text-white px-2 rounded">Dubai:</span> +971 50 290 5860</p>
                        <p><span className="bg-red-600 text-white px-2 rounded">Corporate Office:</span> 908, 9th Floor, Fifty-One Tower, Marasi Drive, Business Bay, Dubai, United Arab Emirates</p>
                        <div className="flex flex-row space-x-4 gap-5 mb-4 md:mb-0">
                            <a target="blank" href="https://www.facebook.com/profile.php?id=61581931895634"><FaFacebook size={20} /></a>
                            <a target="blank" href="https://www.linkedin.com/company/jetfyx/about/?viewAsMember=true"><FaLinkedin size={20} /></a>
                            <a target="blank" href="https://www.instagram.com/jetfyx/"><FaInstagramSquare size={21} /></a>
                            <a target="blank" href="https://www.youtube.com/@JetFyX"><FaYoutube size={23} /></a>
                            <a target="blank" href="https://t.me/jetfyxofficial"><FaTelegram size={20} /></a>
                        </div>
                    </div>

                    <div className="space-y-2" style={{ fontSize: '12px' }}>
                        <p><span className="bg-red-600 text-white px-2 rounded">London:</span> +44 7444 468968</p>
                        <p><span className="bg-red-600 text-white px-2 rounded">London Branch:</span> Unit 7B, Cranbrook House, 61 Cranbrook Road, Ilford, Essex, England, IG1 4PG</p>
                        {/* <div className="flex flex-row space-x-4 gap-5 mt-4 md:mt-0">
                            <a target="blank" href="#"><img src="/assets/caller.webp" alt="Caller" className="w-5 h-4" /></a>
                            <a target="blank" href="#"><img src="/assets/telegram.webp" alt="Telegram" className="w-5 h-4" /></a>
                            <a target="blank" href="#"><img src="/assets/whatsapp.webp" alt="Whatsapp" className="w-5 h-4" /></a>
                        </div> */}
                    </div>

                </div>

            </footer>
            <div className="footer-text text-[#555555] md:ml-[5%] md:mr-[5%] sm:ml-[0] sm:mr-[0] 2xl:ml-[10%] 2xl:mr-[10%]" style={{ fontSize: '12px', marginTop: '25px', marginBottom: '25px', padding: '20px' }}>
                <p>© 2025 JETFYX (A NaFa Groups) Ltd. Copyright—All Rights Reserved</p><br />
                <p>Risk warning: There is a significant degree of risk involved in trading leveraged financial products, such as futures, CFDs, and forex. This type of trading may not be appropriate for all investors. Losses from trading in these financial products may surpass your initial investment. Before dealing in such financial products, you should carefully examine your degree of experience, risk tolerance, and investment objectives. It is your duty to make sure you are completely aware of the dangers and, if needed, to obtain independent legal counsel. You affirm and guarantee that you are at least eighteen years old and possess the mental ability necessary to engage in legally binding contracts by using our website.</p><br />
                <p>Trading: The JETFYX platform allows users to trade a range of financial assets, such as indices, commodities, and currencies. Please remember that trading entails risk, and you should never invest money you cannot afford to lose.</p><br />
                <p>Complaints: Please get in touch with our customer service staff right away if you have any concerns or complaints. Our goal is to address your problem as quickly as we can and in a fair amount of time.</p><br />
                <p>Privacy Policy: We value your privacy and are dedicated to safeguarding your personal information. Your personal information is collected, used, and protected in accordance with our privacy policy. Please carefully review our privacy policy before entrusting us with any personal data.</p><br />
                <p>Terms and Conditions: You accept our terms and conditions, which regulate how you use our services, by using our website. Before using our website, please carefully read our terms and conditions.</p><br />
                <p>Risk Disclosure: Future outcomes cannot be predicted based on past performance. Our website's content is offered solely for informative reasons; it is not intended to be interpreted as financial advice. Prior to making any investment decisions, you should consult an independent advisor. Afghanistan, Belarus, Burma, Burundi, Central African Republic, China, Congo, Cuba, Egypt, Guinea, Guinea-Bissau, Iraq, Iran, Indonesia, Lebanon, Lesotho, Libya, Malaysia, Maldives, Mali, Moldova, Nicaragua, Nigeria, North Korea, Pakistan, Russia, Somalia, Sudan, South Sudan, Syria, Tunisia, Turkey, Vanuatu, Venezuela, Yemen, and Zimbabwe are among the countries from which JetFyX does not accept their clients. At its own discretion, JetFyX may reject any candidate from any jurisdiction without having to provide a justification.</p><br />
                <p>Contact Us: For any inquiries or worries regarding our offerings, do reach out to us at [www.jetfyx.com, support@jetfyx.com]. Our customer service staff is here to help you around the clock.</p><br />
                <p>UK (London), UAE (Dubai), India (Hyderabad), Malaysia (Kuala Lumpur).</p>
            </div>
        </>
    );
}