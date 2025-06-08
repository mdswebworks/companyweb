import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    scale={1.05}
    transitionSpeed={800} 
    gyroscope={true}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      At ZEUS,we turn your ideas into powerful digital experiences. Whether you're a startup looking to build your first website or an established business aiming to elevate your online presence, we're here to make it happen.With a passion for clean design, smart functionality, and cutting-edge technology, we specialize in creating custom websites that are not only visually stunning but also optimized for performance and results.Let's build something extraordinary—together.

      </motion.p>

       <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

      we build more than just websites — we craft digital experiences that drive results. Founded with a passion for innovation and precision, we are a full-service web development company committed to helping businesses grow online.

Our team of skilled developers, designers, and digital strategists specialize in creating fast, responsive, and scalable websites tailored to meet your unique business goals.
</motion.p>

   <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
Hi, I'm Monesh D., the founder of ZEUS. I hold a Bachelor of Computer Applications (BCA) from SRM University 


</motion.p>

 <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

Hi, I'm Divakar R., the CO-founder of ZEUS. I hold a Bachelor of Engineering in Computer and communication (CCE) from Panimalar Engineering College
</motion.p>

  <div>    
 <h4 className={styles.sectionHeadText}>Services </h4>
 <h1
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
 >
 Web design, development, SEO, e-commerce, branding, UI/UX, mobile optimization, WordPress, hosting, maintenance, logo design, content creation, social media integration, analytics, and performance tuning.
  </h1>

</div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
