import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

import { motion } from 'framer-motion';
import { useState } from 'react';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { workExperiences, educationExperiences } from '../constants';
import { sectionwrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[90%] h-[90%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work"); // default tab

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Have Done So Far</p>
        <h2 className={styles.sectionHeadText}>My Experience & Education</h2>
      </motion.div>

      {/* Toggle Buttons */}
      <div className="flex gap-5 mt-10">
        <button
          onClick={() => setActiveTab("work")}
          className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "work"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Work Experience
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "education"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Education
        </button>
      </div>

      {/* Timeline */}
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {(activeTab === "work" ? workExperiences : educationExperiences).map(
            (experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            )
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default sectionwrapper(Experience, "work");
