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
    title: "Product Marketing & Sales Management Intern",
    company_name: "Jabnex",
    icon: jabnex,
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "Conducted in-depth customer surveys and interviews to drive a 30% improvement in targeted sales strategies.",
      "Leveraged insights to inform product enhancements and tailored campaigns, boosting sales conversion rates by 15% and enhancing customer loyalty.",
      "Utilized data-driven segmentation to refine sales strategies, resulting in a 20% increase in customer acquisition.",
      "Collaborated with cross-functional teams to streamline the sales funnel, reducing lead-to-sale conversion time by 15%."
    ],
  },
  {
    title: "Web Development Intern",
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
