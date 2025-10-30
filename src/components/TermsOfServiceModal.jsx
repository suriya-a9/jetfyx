export default function TermsOfServiceModal({ open, onClose }) {
    if (!open) return null;
    return (
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
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}