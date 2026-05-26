import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  threejs,
  python,
  C,
  java,
  canva,
  photoshop,
  premierpro,
  php,
  zydus,
  puna,
  Iste,
  gdsc,
  sal,
  astniq,
  brw,
  cheesebox,
  lb2,
  dlogo,
  sb,
  z,
  baxa,
  gn,
  si,
  baxa1,
  image,
  docker,
  nextjs,
  postgresql,
  googlecloud,
  opencv,
  aws,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Backend Developer", icon: backend },
  { title: "Full Stack Developer", icon: web },
  { title: "Computer Vision & ML", icon: mobile },
  { title: "Cloud & DevOps", icon: creator },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "C", icon: C },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Spring Boot", icon: sb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Docker", icon: docker },
  { name: "GCP", icon: googlecloud },
  { name: "AWS", icon: aws },
  { name: "OpenCV", icon: opencv },
  { name: "Three JS", icon: threejs },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "PHP", icon: php },
  { name: "Canva", icon: canva },
  { name: "Premiere Pro", icon: premierpro },
  { name: "Photoshop", icon: photoshop },
];

const workExperiences = [
  {
    title: "California State University, Long Beach",
    company_name: "Computer Vision & Autonomous Systems Engineer",
    icon: image,
    iconBg: "#E6DEDD",
    date: "Feb 2026 – Present",
    points: [
      "Developing OpenCV and YOLOv8 pipelines for real-time object detection and autonomous mission execution on a competition quadcopter.",
      "Configured Pixhawk and Mission Planner for autonomous waypoint navigation; recalibrated RC, servos, and LiDAR across quadcopter and thermal UAV platforms.",
      "Collaborating with a multidisciplinary team to build and field-test autonomous UAV systems for UASC competition readiness.",
    ],
  },
  {
    title: "Zeitech IT Services Pvt. Ltd.",
    company_name: "Software Development Intern",
    icon: z,
    iconBg: "#E6DEDD",
    date: "Jan 2025 – Apr 2025",
    points: [
      "Built and maintained backend microservices using REST APIs, improving scalability and reducing response times by 30%.",
      "Developed Python-based internal APIs and automation scripts for data processing and workflow optimization, improving developer efficiency.",
      "Designed multithreaded endpoints capable of sustaining 200+ concurrent requests at under 250ms latency in load tests.",
    ],
  },
  {
    title: "Baxa Agency Pvt. Ltd.",
    company_name: "Full Stack Developer",
    icon: baxa1,
    iconBg: "#E6DEDD",
    date: "Aug 2024 – Dec 2024",
    points: [
      "Developed a Spring Boot + React real estate platform, improving API latency for 450+ listings through query optimization.",
      "Built a high-performance React/Node.js marketing site, boosting page-load speed by 40% and improving SEO ranking.",
      "Implemented structured logging, health checks, and a unit testing suite around critical APIs, improving uptime by 15%.",
    ],
  },
  {
    title: "Astniq Solutions Private Limited",
    company_name: "Web Designing Intern",
    icon: astniq,
    iconBg: "#E6DEDD",
    date: "June 2024 - July 2024",
    points: [
      "Completed the Summer Internship, mastering skills like ReactJS, Bootstrap, PHP and Three.js to create and display 3D Models.",
      "Strengthened core frontend skills in HTML, CSS, and JavaScript under professional guidance.",
      "Gained hands-on experience in front-end development and static WordPress website development.",
    ],
  },
  {
    title: "CheeseBox Studios",
    company_name: "Graphic Designer / Event Promotion Intern",
    icon: cheesebox,
    iconBg: "#E6DEDD",
    date: "Nov 2022 – Aug 2024",
    points: [
      "Managed screening of the FIFA World Cup 2022 at CheeseBox Studios, Ahmedabad, attracting an average audience of 120–150 people.",
      "Designed visual and marketing assets in Photoshop and Illustrator to promote comedy, music, and live football screenings.",
      "Created posters, banners, and digital media that increased event attendance and brand visibility.",
    ],
  },
  {
    title: "ISTE & GDSC - GTU",
    company_name: "Graphic Design Assistant",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "June 2022 – January 2024",
    points: [
      "Part of the graphics teams of GDSC and ISTE; created visual content to communicate technical and event messages effectively.",
      "Collaborated with faculty and web teams using Figma and WordPress to prototype and implement responsive layouts.",
      "Contributed to user testing, color contrast verification, and UX improvements across multiple university websites.",
    ],
  },
];

const educationExperiences = [
  {
    title: "Masters of Science in Computer Science",
    company_name: "California State University, Long Beach",
    icon: lb2,
    iconBg: "#E6DEDD",
    date: "Aug 2025 – May 2027",
    points: [
      "Pursuing graduate studies with a focus on backend engineering, computer vision, and AI/ML systems.",
      "Actively applying coursework to real-world projects, including autonomous UAV systems and real-time detection pipelines.",
      "Engaging with research opportunities and building expertise in distributed systems and scalable software architecture.",
    ],
  },
  {
    title: "B.Tech in Computer Science Engineering",
    company_name: "Sal Institute of Technology and Engineering Research",
    icon: sal,
    iconBg: "#E6DEDD",
    date: "Sept 2021 – May 2025",
    points: [
      "Graduated with a focus on software engineering, data structures, and full-stack web development.",
      "Built a Book Recommendation System using a Personality Quiz as a final-year project.",
      "Active member of ISTE and GDSC chapters; contributed to technical events and design work.",
      "Achieved a cumulative CGPA of 7.0 over four years.",
    ],
  },
  {
    title: "Intermediate (Class XII)",
    company_name: "Puna International School",
    icon: puna,
    iconBg: "#E6DEDD",
    date: "March 2021",
    points: [
      "Completed 12th grade under CBSE curriculum with a score of 82%.",
      "Prepared for competitive engineering entrance exams (JEE Mains & Advanced) alongside board studies.",
    ],
  },
  {
    title: "High School (Class X)",
    company_name: "Zydus School For Excellence",
    icon: zydus,
    iconBg: "#E6DEDD",
    date: "March 2019",
    points: [
      "Scored 87% in the 10th CBSE Board Examination.",
      "Active participant in school football team, reaching the finals of the Khel Mahakumbh Tournament.",
      "Involved in cultural events including Founders Day and elocution competitions.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Golden Nest – Real Estate Platform (Buy/Sell/Rent)",
    description: "Developed a full-stack real estate web app with a user-first design approach and responsive interface.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "springboot", color: "pink-text-gradient" },
    ],
    image: gn,
    source_code_link: "https://golden-nest.vercel.app/",
  },
  {
    name: "Creative Baxa – Event & Branding Agency Website",
    description: "Designed and developed a modern, responsive site for a creative agency, aligning visuals with brand identity.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "typescript", color: "blue-text-gradient" },
    ],
    image: baxa,
    source_code_link: "https://www.creativebaxa.com/",
  },
  {
    name: "Shrinal Industries",
    description: "Created a website for Shrinal Industries, dealing in Pharmaceutical, Paint, and Construction Chemicals.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "drupal", color: "pink-text-gradient" },
    ],
    image: si,
    source_code_link: "https://www.shrinalindustries.com/",
  },
];

export { services, technologies, workExperiences, educationExperiences, testimonials, projects };