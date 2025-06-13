import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-gray-900 rounded-[20px] px-4 sm:px-6 md:px-8">
      <div className={`bg-gray-900 rounded-2xl ${styles.padding} self-start`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.heroHeadText} text-[24px] sm:text-[30px] md:text-[40px]`}>
            Services & Pricing.
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Choose the perfect plan that suits your needs. No hidden fees, no surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-8 sm:py-12">
        {/* Basic Plan */}
        <div className="rounded-2xl shadow-lg p-6 sm:p-8 transition hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-600">
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Basic</h3>
          <p className="flex items-center text-3xl sm:text-4xl font-bold text-black mb-6 gap-2">
            12000
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="text-base">/Plan</span>
          </p>

          <ul className="space-y-3 text-white text-sm sm:text-base mb-6">
            {["Up to 5 pages", "Mobile-friendly design", "Static Website", "Business Email Setup"].map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 sm:p-8 transition hover:scale-105 relative text-white">
          <span className="absolute top-4 right-4 bg-indigo-700 text-xs sm:text-sm py-1 px-3 rounded-full">Popular</span>
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Premium</h3>
          <p className="flex items-center text-3xl sm:text-4xl font-bold text-black mb-6 gap-2">
            25000
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="text-base">/Plan</span>
          </p>

          <ul className="space-y-3 text-white text-sm sm:text-base mb-6">
            {[
              "Upto 10 pages",
              "Social media integration",
              "Responsive Website",
              "Blog Setup",
              "Regular updates",
              "Bug fixing",
              "Backup & Security",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Digital Marketing Flip Card */}
        {/* Digital Marketing Plan */}
<div className="group [perspective:1000px] w-full h-auto max-w-full">
  <div className="relative w-full h-full min-h-[460px] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-lg">
    
    {/* FRONT SIDE */}
    <div className="absolute w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 sm:p-8 [backface-visibility:hidden]">
      <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Digital Marketing</h3>
      <p className="flex items-center text-3xl sm:text-4xl font-bold text-black mb-6 gap-3">
        8000
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 sm:w-8 h-6 sm:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="text-sm sm:text-base">/Plan</span>
      </p>
      <ul className="space-y-3 text-white text-sm sm:text-base mb-6">
        {[
          "Search Engine Optimization (SEO)",
          "Content Writing",
          "Social Media Setup",
          "Google Analytics & Reporting",
        ].map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-green-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>

    {/* BACK SIDE */}
    <div className="absolute w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-start [transform:rotateY(180deg)] [backface-visibility:hidden] space-y-3 text-sm sm:text-base">
      <h3 className="font-semibold text-lg sm:text-xl">Breakdown</h3>
      <p>SEO - ₹5000</p>
      <p>Content Writing - ₹500</p>
      <p>Social Media Setup - ₹1000</p>
      <p>Analytics & Reporting - ₹1500</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");
