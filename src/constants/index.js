import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import jabnex from "../assets/company/tekisky.png";
import ytse from "../assets/YTSE logo.png";
import kering from "../assets/company/kering.png";
import quarre from "../assets/company/quarre.png";
import chatgptLogo from "../assets/company/Chatgpt logo.png";
import swiggyLogo from "../assets/company/Swiggy logo.png";
import metaLogo from "../assets/company/meta.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Strategy Consultant(Capstone Project)",
    company_name: "Kering",
    icon: kering,
    iconBg: "#383E56",
    date: "Aug 2025 - May 2026",
    location: "New York, USA",
    points: [
      "Automated Kering's multi-brand supply chain forecasting workflow by designing a Microsoft Forms to Power Automate to Excel Online pipeline that standardized forecast submissions across 6 luxury brands and reduced projected manual operational effort by 95%.",
      "Built an end-to-end forecasting automation system that normalized inconsistent Excel-based inputs, automated weekly aggregation logic across channels including DOS, Outlet, RTV, and Wholesale, and routed outputs into centralized planning files using Power Automate and Office Scripts.",
      "Developed scalable daily forecasting workflows by integrating historical 3PL logistics data into master forecasting sheets, enabling automated weekly-to-daily forecast distribution, operational planning visibility, and standardized reporting across brand-level forecasting operations.",
    ],
  },
  {
    title: "Product Manager(Capstone Project)",
    company_name: "Quarre",
    icon: quarre,
    iconBg: "#383E56",
    date: "Aug 2025 - May 2026",
    location: "New York, USA",
    points: [
      "Built automated development monitoring system pulling real-time data from multiple NYC government APIs (Department of Buildings, PLUTO, Open Data portals) to track construction permits, zoning changes, and regulatory filings with real-time alert framework.",
      "Developed an AI-driven property intelligence system that streamlined investment signal analysis across 500+ NYC properties, reducing manual research time by 80%.",
      "Automated marketing and sales workflows using Make.com and AI-powered voice agents, reducing manual content posting time by 70% across LinkedIn and Instagram while enabling CRM-integrated outbound sales prioritization and call tracking.",
    ],
  },
  {
    title: "Product Manager",
    company_name: "Jabnex",
    icon: jabnex,
    iconBg: "#383E56",
    date: "Nov 2023 - June 2025",
    points: [
      "Conducted in-depth customer surveys and interviews to drive a 30% improvement in targeted sales strategies.",
      "Leveraged insights to inform product enhancements and tailored campaigns, boosting sales conversion rates by 15% and enhancing customer loyalty.",
      "Utilized data-driven segmentation to refine sales strategies, resulting in a 20% increase in customer acquisition.",
      "Collaborated with cross-functional teams to streamline the sales funnel, reducing lead-to-sale conversion time by 15%."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "YTSE TECHNOLOGIES",
    icon: ytse,
    iconBg: "#383E56",
    date: "June 2023 - October 2023",
    location: "Chennai, India",
    points: [
      "Designed and implemented interactive and adaptive web pages using HTML, CSS, and JavaScript, ensuring seamless functionality, optimal usability, and accessibility across various devices and platforms.",
      "Built efficient back-end systems with Node.js, streamlining API communication, implementing advanced caching strategies, and reducing response times by 25%, significantly enhancing overall application performance.",
      "Collaborated within a cross-functional Agile team to improve task prioritisation and streamline workflows, resulting in a 20% reduction in project completion time while maintaining high-quality deliverables."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Harsh’s research on emotion recognition and data privacy was impressive. He’s technically strong and always delivers thoughtful, well-structured work.",
    name: "Menaka S",
    designation: "Assistant Professor, Department of CSE",
    company: "SRM University",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Harsh approaches technical challenges with clarity and responsibility. His work on traffic sign detection and malicious traffic analysis was reliable and well-regarded.",
    name: "Santosh Kumar",
    designation: "Assistant Professor, Department of CSE",
    company: "SRM University",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Harsh stands out for his dedication and research skills. His contributions to our projects were insightful and consistently exceeded expectations.",
    name: "Ashwini Chakravarthi",
    designation: "Assistant Professor, Department of CSE",
    company: "SRM University",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Meta",
    description:
      "Meta is a comprehensive analytics dashboard designed to visualize and interpret complex datasets with ease. It empowers users to generate insightful reports, track key performance indicators, and make data-driven decisions.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "dashboard", color: "white-text-gradient" },
      { name: "analytics", color: "pink-text-gradient" },
      { name: "data-visualization", color: "green-text-gradient" },
    ],
    image: metaLogo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Swiggy",
    description:
      "Swiggy is an intuitive food delivery platform that connects users with a wide range of local restaurants and eateries. The application offers real-time order tracking, secure payment options, and personalized recommendations to enhance the user experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "food-delivery", color: "white-text-gradient" },
      { name: "ecommerce", color: "pink-text-gradient" },
      { name: "user-experience", color: "green-text-gradient" },
    ],
    image: swiggyLogo,
    source_code_link: "https://github.com/",
  },
  {
    name: "ChatGPT",
    description:
      "ChatGPT is an AI-powered conversational assistant designed to provide instant, intelligent responses to user queries. The platform leverages advanced natural language processing to understand context and deliver relevant information or assistance.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "ai", color: "white-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
      { name: "automation", color: "green-text-gradient" },
    ],
    image: chatgptLogo,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
