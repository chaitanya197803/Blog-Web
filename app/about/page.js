import React from 'react'

// export default function page() {
//   return (
//     <div>
//       About 
//     </div>
//   )
// }

// pages/about.js
import Head from 'next/head';

const page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us on this page." />
      </Head>
      <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our about page! Here you can learn more about our mission and values.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Our Mission</h2>
      <p className="text-gray-600 mb-4">To provide the best service possible.</p>
      <h2 className="text-2xl font-semibold mt-4">Our Values</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Customer Satisfaction</li>
      </ul>
    </div>
  );
};

export default page;
