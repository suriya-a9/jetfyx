export default function PrivacyPolicyModal({ open, onClose }) {
    if (!open) return null;
    return (
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
                    onClick={onClose}
                >
                    Accept and Close
                </button>
            </div>
        </div>
    );
}