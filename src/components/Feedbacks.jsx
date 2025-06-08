import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-gray-900 rounded-[20px] px-8`}>
      <div
        className={`bg-gray-900 rounded-2xl  ${styles.padding} self-start `}
      >
        <motion.div variants={textVariant()}>
        
          <h2 className={styles.heroHeadText}>Sevices & Pricing.</h2>
        </motion.div>
      </div>
    
      
  <div className="max-w-7xl mx-auto ">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-lg text-white-600 max-w-2xl mx-auto mb-8">
        Choose the perfect plan that suits your needs. No hidden fees, no surprises
      </p>
    </div>
  </div>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 ">
    <div className="rounded-2xl shadow-lg p-8 transition hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-600">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 ">Basic</h3>
    <p className="flex items-center text-4xl font-bold text-gray-900 mb-6 gap-2">
  12000
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
  <span className="text-gray-500 text-lg">/Plans</span>
</p>

      <ul className="space-y-4 text-gray-700 mb-6">
        {["Up to 5 pages", "Mobile-friendly design ","Static Website", "Business Email Setup"].map((feature, i) => (
          <li key={i} className="flex items-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth={1.5}
                 stroke="currentColor"
                 className="w-6 h-6 text-green-500 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

     
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 transition hover:scale-110 relative text-white">
      <span class="absolute top-4 right-4 bg-indigo-700 text-sm py-1 px-3 rounded-full">Popular</span>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium</h3>
       <p className="flex items-center text-4xl font-bold text-gray-900 mb-6 gap-2">
  25000
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
  <span className="text-grey-900 text-lg">/Plans</span>
</p>

      <ul className="space-y-4 text-white mb-6">
        {["Upto 10 pages", "Social media integration","Responsive Website","Blog Setup","regular update","Bug fix","Backup And Security"].map((feature, i) => (
          <li key={i} className="flex items-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth={1.5}
                 stroke="currentColor"
                 className="w-6 h-6 text-white mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

     
    </div>
   <div className="group [perspective:1000px] w-full h-[450px]">
  <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

    {/* FRONT SIDE */}
    <div className="absolute w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 [backface-visibility:hidden]">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Marketing</h3>
      <p className="flex items-center text-4xl font-bold text-white mb-6 gap-2">
        8000
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
        <span className="text-white text-lg">/Plans</span>
      </p>
      <ul className="space-y-4 text-white mb-6">
        {["Search Engine Optimization ('SEO')", "Content Writing", "Social Media Setup", "Google Analytics & Reporting"].map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth={1.5} stroke="currentColor"
                 className="w-6 h-6 text-green-500 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
     
    </div>

    {/* BACK SIDE */}
    <div className="absolute w-full h-full bg-white text-black rounded-2xl p-8 flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
  <h3 className="text-center mb-4 text-white text-2xl font-bold rounded-md p-4 ">
  Search Engine Optimization - 5000
</h3>


      <p className="text-center mb-6">Content Writing -500</p>
      <p className="text-center mb-6">Social Media Setup -1000</p>
      <p className="text-center mb-6">Google Analytics & Reporting -1500</p>
      
    </div>

  </div>
</div>


  </div>
</div>

   
  );
};

export default SectionWrapper(Feedbacks, "feedback");
