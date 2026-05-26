import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionwrapper } from '../hoc';
import { Tilt } from 'react-tilt';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Computer Science graduate student at Cal State Long Beach with hands-on experience in backend engineering and real-time AI-powered systems. Proficient in Python, Java, REST APIs, and SQL databases, with applied work in computer vision using OpenCV and YOLOv8. I build scalable full-stack applications and enjoy solving hard problems at the intersection of software and machine intelligence.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='mt-10 flex gap-4 mb-4'>
        <a
          href="/Dev_Trivedi_Resume.pdf"
          download="Dev_Trivedi_Resume"
          className='px-6 py-2 bg-black-100 text-white rounded-full hover:bg-tertiary cursor-pointer border border-secondary'
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default sectionwrapper(About, "about");