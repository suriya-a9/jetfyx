import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import countryList from "react-select-country-list";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import countryTelephoneCode from "country-telephone-code";
import "./SignInSignUp.css";

export default function SignInSignUp() {
    const location = useLocation();
    const initialTab = location.state?.tab === "signup" ? "signup" : "login";
    const [tab, setTab] = useState(initialTab);
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState(null);
    const navigate = useNavigate();
    const countryOptions = countryList().getData();
    const [showTermsPopup, setShowTermsPopup] = useState(false);
    const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const rightImage =
        tab === "login"
            ? "/assets/siggnnnn.webp"
            : "/assets/sign-up.webp";

    const handleOnClick = () => {
        window.location.href = "https://jetfyx.com"
    }
    useEffect(() => {
        if (tab === "signup") {
            fetch("https://ipapi.co/json/")
                .then(res => res.json())
                .then(data => {
                    if (data && data.country_code) {
                        setCountryCode(data.country_code.toLowerCase());
                    }
                })
                .catch(() => setCountryCode("us"));
        }
    }, [tab]);
    return (
        <div className="min-h-screen flex">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2">
                <div className="w-full max-w-sm p-5 border-[3px] rounded-[10px] bg-[#FBFBFB]">
                    <div className="flex justify-center mb-3" style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/assets/fav-icon.webp" alt="JET Logo" className="w-[30%] h-[30%] object-contain rounded-full" />
                        {tab === "login" ? (<span className="text-red-600 text-[13px] text-center mt-2">Effortless and Exceptional Experience</span>) : (<span className="text-red-600 text-center text-[13px] mt-2">JetFyX—Precision. Speed. Confidence</span>)}
                        {tab === "login" ? (<span className="text-[17px] text-center font-medium mt-2">Welcome back. Great to see you again</span>) : (<span className="text-[17px] text-center font-medium mt-2">Welcome to your broker portal.</span>)}
                    </div>
                    {/* <div className="flex justify-end mb-4">
                        <button
                            className="bg-red-600 w-full text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition" disabled
                        // onClick={() => setTab(tab === "login" ? "signup" : "login")}
                        >
                            {tab === "login" ? "Log in" : "Sign Up"}
                        </button>
                    </div> */}
                    {tab === "login" ? (
                        <form className="space-y-4">
                            <div className="floating-label-group">
                                <input type="email" className="form-control" required placeholder=" " />
                                <label>Email Address</label>
                            </div>
                            <div className="floating-label-group">
                                <input type="password" className="form-control" required placeholder=" " />
                                <label>Password</label>
                            </div>
                            <div className="flex items-center justify-between mt-1 mb-2">
                                <label className="flex items-center text-sm">
                                    <input type="checkbox" className="mr-2" />
                                    Remember me
                                </label>
                                <button type="button" className="text-red-600 text-sm hover:underline">
                                    Forgot password?
                                </button>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaGoogle className="hover:text-red-600" />
                                </button>
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaApple className="hover:text-red-600" />
                                </button>
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaFacebookF className="hover:text-red-600" />
                                </button>
                                <div className="flex-1"></div>
                                <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition">
                                    Log in
                                </button>
                            </div>
                            <div className="text-center text-sm mt-2">
                                Don&apos;t have an account?{" "}
                                <button type="button" className="text-red-600 hover:underline" onClick={() => setTab("signup")}>
                                    Sign Up
                                </button>
                            </div>
                            <div className="text-center text-sm cursor-pointer">
                                <a onClick={handleOnClick} target="blank" className="text-red-600 underline">www.jetfyx.com</a>
                            </div>
                        </form>
                    ) : (
                        <form className="space-y-4">
                            <div className="floating-label-group">
                                <input type="text" className="form-control" required placeholder=" " />
                                <label>Full Name</label>
                            </div>

                            <div className="floating-label-group">
                                <input type="email" className="form-control" required placeholder=" " />
                                <label>Email Address</label>
                            </div>

                            <div className="floating-label-group">
                                <PhoneInput
                                    country={countryCode}
                                    value={phone}
                                    onChange={(value, countryData) => {
                                        setPhone(value);
                                    }}
                                    enableSearch={true}
                                    disableDropdown={false}
                                    disableCountryGuess={true}
                                    inputClass="form-control"
                                    containerStyle={{
                                        width: "100%",
                                        borderRadius: "8px",
                                    }}
                                    inputStyle={{
                                        width: "100%",
                                        borderRadius: "8px",
                                        height: "40px",
                                        paddingLeft: '15%'
                                    }}
                                    buttonStyle={{
                                        borderRadius: "8px 0 0 8px",
                                    }}
                                    dropdownStyle={{
                                        borderRadius: "8px",
                                        maxHeight: "200px",
                                    }}
                                    placeholder="Enter phone number"
                                />
                                <label
                                    style={{
                                        top: "-10px",
                                        left: "12px",
                                        fontSize: "12px",
                                        background: "#FBFBFB",
                                        padding: "0 4px",
                                    }}
                                >
                                    Phone Number
                                </label>
                            </div>

                            <div className="floating-label-group flex-1">
                                <input type="text" className="form-control" placeholder=" " />
                                <label>Company Name</label>
                            </div>

                            <div className="floating-label-group mt-2 md:mt-0 flex-1">
                                <input type="url" className="form-control" placeholder=" " />
                                <label>Website</label>
                            </div>

                            <div className="block md:flex gap-2">
                                <div className="floating-label-group flex-1">
                                    <input type="password" className="form-control" required placeholder=" " />
                                    <label>Password</label>
                                </div>

                                <div className="floating-label-group mt-2 md:mt-0 flex-1">
                                    <input type="password" className="form-control" required placeholder=" " />
                                    <label>Confirm Password</label>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="agreeTerms"
                                    className="mr-2"
                                    checked={agreeTerms}
                                    onChange={e => setAgreeTerms(e.target.checked)}
                                    required
                                />
                                <label htmlFor="agreeTerms" className="text-[12px]">
                                    I agree to the{" "}
                                    <span
                                        className="text-blue-600 underline cursor-pointer"
                                        onClick={e => {
                                            e.preventDefault();
                                            setShowTermsPopup(true);
                                        }}
                                    >
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span
                                        className="text-blue-600 underline cursor-pointer"
                                        onClick={e => {
                                            e.preventDefault();
                                            setShowPrivacyPopup(true);
                                        }}
                                    >
                                        Privacy Policy
                                    </span>
                                </label>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaGoogle className="hover:text-red-600" />
                                </button>
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaApple className="hover:text-red-600" />
                                </button>
                                <button type="button" className="flex items-center justify-center border rounded-full w-10 h-10 hover:bg-gray-100">
                                    <FaFacebookF className="hover:text-red-600" />
                                </button>
                                <div className="flex-1"></div>
                                <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition">
                                    Sign Up
                                </button>
                            </div>
                            <div className="text-center text-sm mt-2">
                                Already have an account?{" "}
                                <button type="button" className="text-red-600 hover:underline" onClick={() => setTab("login")}>
                                    Sign In
                                </button>
                            </div>
                            <div className="text-center text-sm cursor-pointer">
                                <a onClick={handleOnClick} target="blank" className="text-red-600 underline">www.jetfyx.com</a>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
                <img
                    src={rightImage}
                    alt="JET Side Visual"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
            </div>
            {showTermsPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[99999]">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative max-h-[90vh] overflow-y-hidden">
                        <h2 className="text-xl font-bold mb-4">JetFyX Registration Terms & Conditions<br /><span className="text-sm text-gray-500 font-medium">Last Updated: 10/30/2025</span></h2>
                        <div className="mb-6 max-h-[60vh] overflow-y-auto text-sm text-gray-700 space-y-3 text-justify">
                            <p>
                                Welcome to JetFyX, a multi-asset trading platform provider.<br />
                                By creating an account with us, you ("User," “you”) agree to comply with and be bound by the following Registration Terms and Conditions (“Agreement”).<br />
                                Please read them carefully before registering.
                            </p>
                            <h3 className="font-semibold mt-4">1. Acceptance of Terms</h3>
                            <ul className="list-disc ml-6">
                                <li>Confirm that you have read, understood, and accepted these terms;</li>
                                <li>Acknowledge that you are also bound by our Website Terms of Use and Privacy Policy;</li>
                                <li>Consent to the collection and processing of your data in accordance with applicable laws, including the General Data Protection Regulation (GDPR) and other international privacy standards.</li>
                            </ul>
                            <p>If you do not agree, please do not register for or use JetFyX services.</p>
                            <h3 className="font-semibold mt-4">2. Eligibility</h3>
                            <ul className="list-disc ml-6">
                                <li>Be at least 18 years of age (or the legal age in your jurisdiction);</li>
                                <li>Have the legal capacity to enter into binding agreements;</li>
                                <li>Not be restricted from accessing financial services under applicable law.</li>
                            </ul>
                            <p>JetFyX reserves the right to verify your identity and eligibility before activating your account.</p>
                            <h3 className="font-semibold mt-4">3. Account Creation and Security</h3>
                            <ul className="list-disc ml-6">
                                <li>Provide accurate, current, and complete information during registration;</li>
                                <li>Maintain and promptly update your details to ensure accuracy;</li>
                                <li>Keep your login credentials secure and confidential;</li>
                                <li>Notify JetFyX immediately of any unauthorized access or security breach.</li>
                            </ul>
                            <p>You are solely responsible for any activity that occurs under your account.</p>
                            <h3 className="font-semibold mt-4">4. Personal Data and Privacy</h3>
                            <p>
                                By registering, you consent to the collection, use, and processing of your personal data as outlined in our Privacy Policy.
                            </p>
                            <ul className="list-disc ml-6">
                                <li>Create and manage your account;</li>
                                <li>Provide access to platform features;</li>
                                <li>Comply with legal and regulatory requirements (including anti-fraud and anti-money laundering laws);</li>
                                <li>Communicate with you about services, updates, and security alerts.</li>
                            </ul>
                            <p>
                                You have the right to access, correct, delete, or restrict processing of your data, in accordance with global data protection laws (GDPR, UK GDPR, etc.).
                            </p>
                            <h3 className="font-semibold mt-4">5. Use of JetFyX Services</h3>
                            <p>Your registration grants you access to JetFyX’s multi-asset trading platform and related tools. You agree not to:</p>
                            <ul className="list-disc ml-6">
                                <li>Use the platform for illegal or unauthorized purposes;</li>
                                <li>Attempt to gain unauthorized access to other users’ data or JetFyX systems;</li>
                                <li>Engage in fraudulent, abusive, or misleading activities;</li>
                                <li>Violate any applicable trading, financial, or data protection regulations.</li>
                            </ul>
                            <p>Violation of this section may lead to suspension or termination of your account.</p>
                            <h3 className="font-semibold mt-4">6. Verification (KYC/AML Compliance)</h3>
                            <p>
                                To comply with international regulatory standards, JetFyX may require you to complete Know Your Customer (KYC) and Anti-Money Laundering (AML) checks before granting full access to the platform.
                                You agree to provide valid identification and supporting documentation when requested.
                            </p>
                            <p>
                                Failure to provide accurate verification details may result in denial or termination of your account.
                            </p>
                            <h3 className="font-semibold mt-4">7. Communications and Notifications</h3>
                            <p>
                                By registering, you consent to receive service-related emails, SMS messages, or notifications regarding your account, transactions, and security updates.
                                You may unsubscribe from marketing communications at any time via your account settings or by contacting <a href="mailto:support@jetfyx.com" className="text-blue-600 underline">support@jetfyx.com</a>
                            </p>
                            <h3 className="font-semibold mt-4">8. Suspension or Termination</h3>
                            <ul className="list-disc ml-6">
                                <li>You provide false or misleading information;</li>
                                <li>You breach these Terms or any applicable law;</li>
                                <li>Your activity poses a security, reputational, or legal risk to JetFyX.</li>
                            </ul>
                            <h3 className="font-semibold mt-4">9. Limitation of Liability</h3>
                            <p>
                                JetFyX provides access to its platform “as is” and “as available.” We make no warranties regarding performance, accuracy, or uninterrupted availability.
                                JetFyX shall not be liable for any loss or damage resulting from:
                            </p>
                            <ul className="list-disc ml-6">
                                <li>Unauthorized access to your account;</li>
                                <li>Errors or interruptions in platform availability;</li>
                                <li>Decisions or trades made using the platform.</li>
                            </ul>
                            <h3 className="font-semibold mt-4">10. Changes to These Terms</h3>
                            <p>
                                We may update these Registration Terms from time to time.
                                Continued use of your account after updates indicates your acceptance of the revised terms.
                                We encourage you to review them periodically.
                            </p>
                            <h3 className="font-semibold mt-4">11. Governing Law and Jurisdiction</h3>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction—e.g., England and Wales], without regard to conflict of law principles.
                                Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of [Insert City, Country].
                            </p>
                            <h3 className="font-semibold mt-4">12. Contact Us</h3>
                            <p>
                                If you have any questions about these registration terms, please contact:<br />
                                JetFyX<br />
                                Email: <a href="mailto:support@jetfyx.com" className="text-blue-600 underline">support@jetfyx.com</a><br />
                                Website: <a href="https://jetfyx.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://jetfyx.com</a>
                            </p>
                        </div>
                        <button
                            className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition mt-4"
                            onClick={() => setShowTermsPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {showPrivacyPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[99999]">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative max-h-[90vh] overflow-y-hidden">
                        <h2 className="text-xl font-bold mb-4">Privacy Policy<br /><span className="text-sm text-gray-500 font-medium">Last Updated: 10/30/2025</span></h2>
                        <div className="mb-6 max-h-[60vh] overflow-y-auto text-sm text-gray-700 space-y-3 text-justify">
                            <p>
                                Welcome to JetFyx. At JetFyx, accessible from <a href="https://jetfyx.cnxhub.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://jetfyx.cnxhub.in/</a> we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our technology and services.
                            </p>
                            <p>
                                By using our platform, you agree to the terms of this Privacy Policy.
                            </p>
                            <h3 className="font-semibold mt-4">1. Information We Collect</h3>
                            <p>We collect different types of information to provide and improve our services:</p>
                            <strong>A. Personal Information</strong>
                            <ul className="list-disc ml-6">
                                <li>Full name, email address, phone number, and contact details.</li>
                                <li>Company name, account details, and billing or payment information.</li>
                                <li>Identification documents or verification data (if required for compliance or KYC).</li>
                            </ul>
                            <strong>B. Technical Data</strong>
                            <ul className="list-disc ml-6">
                                <li>IP address, browser type, operating system, and device identifiers.</li>
                                <li>Access times, referring URLs, and interaction data with our platform.</li>
                            </ul>
                            <strong>C. Usage Data</strong>
                            <ul className="list-disc ml-6">
                                <li>Details of how you use our services, including transactions, preferences, and communications.</li>
                            </ul>
                            <strong>D. Cookies and Tracking Technologies</strong>
                            <p>
                                We use cookies, pixels, and analytics tools (such as Google Analytics and third-party integrations) to improve functionality, measure usage, and personalize your experience.
                            </p>
                            <h3 className="font-semibold mt-4">2. How We Use Your Information</h3>
                            <ul className="list-disc ml-6">
                                <li>Provide and maintain our technology and services.</li>
                                <li>Process transactions and manage accounts securely.</li>
                                <li>Comply with legal, regulatory, and anti-fraud requirements (including KYC/AML checks).</li>
                                <li>Communicate with you about updates, offers, or support.</li>
                                <li>Improve performance, develop new features, and enhance user experience.</li>
                                <li>Ensure the security and integrity of our systems and data.</li>
                            </ul>
                            <h3 className="font-semibold mt-4">3. Legal Basis for Processing (GDPR Compliance)</h3>
                            <p>
                                If you are located in the European Economic Area (EEA), JetFyx processes your personal information based on one or more of the following legal grounds:
                            </p>
                            <ul className="list-disc ml-6">
                                <li>Your consent.</li>
                                <li>The necessity of data processing for contract performance.</li>
                                <li>Compliance with legal obligations.</li>
                                <li>Our legitimate interests (e.g., improving services, ensuring security).</li>
                            </ul>
                            <h3 className="font-semibold mt-4">4. Data Sharing and Disclosure</h3>
                            <p>We do not sell or trade your personal data. However, we may share information with:</p>
                            <ul className="list-disc ml-6">
                                <li>Service providers who help us operate our business (hosting, analytics, payment gateways, email communication, etc.).</li>
                                <li>Regulatory or legal authorities, when required by applicable law.</li>
                                <li>Business partners or affiliates who assist in providing our services, under strict confidentiality obligations.</li>
                            </ul>
                            <p>All third parties are required to use your personal data only for the purpose of providing contracted services.</p>
                            <h3 className="font-semibold mt-4">5. Data Security</h3>
                            <p>
                                We use appropriate administrative, technical, and physical security measures to protect your data against unauthorized access, disclosure, alteration, or destruction. However, no online system can guarantee absolute security, and you acknowledge this inherent risk when using our services.
                            </p>
                            <h3 className="font-semibold mt-4">6. Data Retention</h3>
                            <p>
                                We retain your personal data only as long as necessary to fulfill the purposes described in this policy or as required by law, regulation, or legitimate business needs.
                            </p>
                            <h3 className="font-semibold mt-4">7. International Data Transfers</h3>
                            <p>
                                As a global technology provider, your data may be transferred and processed outside your country of residence. We ensure appropriate safeguards (such as standard contractual clauses) to protect your information when transferred internationally.
                            </p>
                            <h3 className="font-semibold mt-4">8. Your Data Rights</h3>
                            <p>Depending on your location, you may have the following rights:</p>
                            <ul className="list-disc ml-6">
                                <li>Access and obtain a copy of your personal data.</li>
                                <li>Request correction or deletion of inaccurate data.</li>
                                <li>Object to or restrict data processing.</li>
                                <li>Withdraw consent at any time (where processing is based on consent).</li>
                                <li>Request data portability.</li>
                            </ul>
                            <p>
                                To exercise these rights, contact us at <a href="mailto:support@jetfyx.com" className="text-blue-600 underline">support@jetfyx.com</a>.
                            </p>
                            <h3 className="font-semibold mt-4">9. Children’s Privacy</h3>
                            <p>
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that a minor has provided personal data, we will delete it promptly.
                            </p>
                            <h3 className="font-semibold mt-4">10. Third-Party Services</h3>
                            <p>
                                Our website may include links or integrations to third-party websites or services (such as analytics, payment processors, or plugins). We are not responsible for their privacy practices or content. Please review their respective privacy policies.
                            </p>
                            <h3 className="font-semibold mt-4">11. Changes to This Policy</h3>
                            <p>
                                We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. The updated version will be posted on this page with a revised “Last Updated” date.
                            </p>
                            <h3 className="font-semibold mt-4">12. Contact Us</h3>
                            <p>
                                If you have any questions, requests, or concerns about this Privacy Policy or our data practices, please contact us at:<br />
                                📧 <a href="mailto:support@jetfyx.com" className="text-blue-600 underline">support@jetfyx.com</a><br />
                                🌐 <a href="https://jetfyx.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://jetfyx.com</a><br />
                                🏢 JetFyx – Unit 7B, Cranbrook House, 61 Cranbrook Road, Ilford, Essex, England, IG1 4PG
                            </p>
                        </div>
                        <button
                            className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition mt-4"
                            onClick={() => setShowPrivacyPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}