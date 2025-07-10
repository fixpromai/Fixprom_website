import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800 bg-white font-sans leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Effective Date: June 3, 2012<br />
        Company: Nirbhavi Tech Innovations Private Limited
      </p>

      <p className="mb-4">
        We value your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use FixProm.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>We do not collect any personally identifiable information unless you explicitly provide it.</li>
        <li>Anonymous usage statistics (such as browser type, extension usage frequency).</li>
        <li>Email ID if you reach out for support or purchases.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Improve FixProm’s performance and features.</li>
        <li>Communicate with users who reach out for support.</li>
        <li>Troubleshoot bugs or compatibility issues.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>SSL encryption.</li>
        <li>Limited third-party access.</li>
        <li>Secure hosting and data management practices.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        FixProm integrates with third-party platforms like ChatGPT, Claude, Gemini, etc. We are not responsible for the privacy policies of these external services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
      <p className="mb-4">
        We do not use cookies directly within the extension. However, our website may use cookies for analytics and improving user experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Retention</h2>
      <p className="mb-4">
        We retain collected data only as long as necessary for the purposes stated above or to comply with legal obligations.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Request access to or deletion of your data.</li>
        <li>Withdraw consent for any data processing.</li>
      </ul>
      <p className="mb-4">
        To exercise these rights, contact us at{' '}
        <a href="mailto:fixpromai@gmail.com" className="text-blue-600 hover:underline">
          fixpromai@gmail.com
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to this Policy</h2>
      <p className="mb-4">
        We reserve the right to update this policy. When changes are made, the “Last Updated” date will be revised. Continued use of the Extension after changes indicates your agreement.
      </p>

      <a href="/" className="inline-block mt-8 text-blue-600 hover:underline text-sm">
        &larr; Back to Home
      </a>
    </main>
  );
}
