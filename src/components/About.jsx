import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { sectionwrapper } from '../hoc'
import { Tilt } from 'react-tilt';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className= "xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * 
        index, 0.75)}
        className='w-full green-pink-gradient
        p-[1px] rounded-[20px] shadow-card '
        >
          <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] 
          py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col' 
          >
            <img src={icon} alt={title}
            className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] 
            font-bold text-center'>{title}</h3>
             

          </div>

        </motion.div>
    </Tilt>
  )
}


const About = () => {

  // Function to open the default email client with a pre-filled subject and body
  function openEmail() {
    var subject = "Employment Inquiry"; // Set the subject of the email
    var body =
      "I am YOUR_NAME from COMPANY-NAME and I'm reaching out to inquire about potential employment opportunities..."; // Set the body of the email

    // Encode subject and body for URL
    var encodedSubject = encodeURIComponent(subject);
    var encodedBody = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink =
      "mailto:dev.trivedi0523@gmail.com?subject=" + 
      encodedSubject +
      "&body=" +
      encodedBody;

    // Open default email client
    window.location.href = mailtoLink;
  }


  return (
    <>
    <motion.div variants={textVariant()}> 
      <p className={styles.sectionSubText}
      >Introduction</p>
      <h2  className={styles.sectionHeadText}
      >Overview</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]'
    >
      I'm a Skilled Developer with experience in HTML, CSS and 
      Javascript and understanding of frameworks and libraries 
      like React, Tailwindcss and Three.js.
      I'm a quick learner and collaborate with my friends and 
      peers to create efficient, scalable and user-frindly solutions. 
      Lets work together to bring new ideas to life !! 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index=
        {index} {...service} /> 
      ))}

    </div>
    <div className='mt-10 flex gap-4 mb-4'>
        {/* <button className='px-6 py-2 bg-black-100 text-white rounded-full hover:bg-tertiary cursor-pointer'
         onClick={openEmail} >
          Hire Me
        </button> */}
        <a
          href="public/Dev Trivedi.pdf"  // Make sure this path is correct
          download="Dev_Trivedi_Resume"
          className='px-6 py-2 bg-black-100 text-white rounded-full hover:bg-tertiary cursor pointer border border-secondary'
        >
          Download CV
        </a>
        </div>

    </>
  )
}

export default sectionwrapper 
(About, "about")