import React from 'react';

export default function RefundPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 bg-white text-gray-800 font-sans leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Effective Date: June 3, 2012<br />
        Company: Nirbhavi Tech Innovations Private Limited
      </p>

      <p className="mb-4">
        We offer a fair and transparent refund policy to ensure user satisfaction.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. 7-Day Refund Guarantee</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You are unsatisfied with the service.</li>
        <li>You have not used the service extensively (e.g., no more than 30 prompt submissions).</li>
        <li>You submit a refund request with a valid reason.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How to Request a Refund</h2>
      <p className="mb-2">To request a refund:</p>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          Email us at{' '}
          <a href="mailto:fixpromai@gmail.com" className="text-blue-600 hover:underline">
            fixpromai@gmail.com
          </a>
        </li>
        <li>Include your order ID, date of purchase, and reason for the refund.</li>
      </ol>
      <p className="mb-4">We aim to process all refund requests within 5–7 business days.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Refund Exceptions</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>After 7 days from the purchase date.</li>
        <li>If the service was used extensively or abused.</li>
        <li>For requests without a valid purchase ID or clear justification.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Subscription Cancellations</h2>
      <p className="mb-4">
        If you are on a monthly plan, you can cancel at any time. The cancellation will be effective at the end of the current billing cycle. You will not be charged again, but no partial refunds will be issued.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
      <p className="mb-1">
        Email:{' '}
        <a href="mailto:fixpromai@gmail.com" className="text-blue-600 hover:underline">
          fixpromai@gmail.com
        </a>
      </p>
      <p>
        Phone:{' '}
        <a href="tel:984801150" className="text-blue-600 hover:underline">
          984801150
        </a>
      </p>

      <a href="/" className="inline-block mt-8 text-blue-600 hover:underline text-sm">
        &larr; Back to Home
      </a>
    </main>
  );
}
