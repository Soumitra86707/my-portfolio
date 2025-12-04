// Importing Skill Images
import html from "../assets/html5.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import cn from "../assets/cn.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import nodejs from "../assets/nodejs.png";
import php from "../assets/php.png";
import c from "../assets/images.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github1.png";
import tailwind from "../assets/tailwind.png";
import mongo from "../assets/mongo.png";
import linux from "../assets/linux.png";
import netlify from "../assets/netlify.png";
import firebase from "../assets/firebase.png";
import laravel from "../assets/laravel.png";


// Importing Project Images
import clinicImg from "../assets/clinicImg.png";
import ecomImg from "../assets/ecom.png";
import great from "../assets/great.png";
import seomaster from "../assets/seomaster.png";
import groceryImg from "../assets/travisa.png";
import music from "../assets/music.png";
import attendanceImg from "../assets/folio.png";
import weatherImg from "../assets/weather-report.png";
import newp from "../assets/soumitra-port.png";



// Skills Data ----------------------------------------------
const Data = [
    // Each object represents a skill with its details
  {
    id: 1,
    image: c,
    title: "C",
    subtitle:
      "C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie.",
    num: 75,
  },

   {
    id: 2,
    image: firebase,
    title: "Firebase",
    subtitle:
      "Java is a programming language. It was created by James Gosling, and released in 1995.",
    num: 60,
  }, 

  /* {
      id:3,
      image: cn,
      title:"Computer Networking",
      subtitle:"Computer networking connects devices to share data, resources, and communication using wired or wireless technologies.",
      num:91
  }, */

  {
    id: 3,
    image: html,
    title: "HTML5",
    subtitle:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    num: 85,
  },

  {
    id: 4,
    image: css,
    title: "CSS3",
    subtitle:
      "CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language.",
    num: 65,
  },

  {
    id: 5,
    image: tailwind,
    title: "Tailwind CSS",
    subtitle:
      "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap.",
    num: 50,
  },

  {
    id: 6,
    image: js,
    title: "JavaScript",
    subtitle:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia and everything else.",
    num: 70,
  },

  {
    id: 7,
    image: react,
    title: "Reactjs",
    subtitle:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    num: 70,
  },

  {
    id: 8,
    image: nodejs,
    title: "Nodejs",
    subtitle:
      "Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
    num: 40,
  },

  {
    id: 9,
    image: php,
    title: "PHP",
    subtitle:
      "PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993.",
    num: 80,
  },
  {
    id: 10,
    image: laravel,
    title: "Laravel",
    subtitle:
      "Laravel is a PHP framework for web artisans, providing an elegant syntax and tools for web application development.",
    num: 60,
  },

  {
    id: 11,
    image: mysql,
    title: "MySql",
    subtitle:
      "MySQL is an open-source relational database management system. Its name is a co-founder Michael Widenius's and SQL (Structured Query Language).",
    num: 80,
  },

  {
    id: 12,
    image: mongo,
    title: "MongoDB",
    subtitle:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program.",
    num: 30,
  },
  {
  id: 11,
  image: firebase,
  title: "Firebase",
  subtitle:
    "Firebase is a Backend-as-a-Service (BaaS) platform by Google that provides real-time database, authentication, cloud storage, hosting, and serverless functions for building modern web and mobile applications.",
  num: 50,
},

    {
       id:13,
       image: linux,
       title:"Kali Linux",
       subtitle:"Kali Linux is a powerful, Debian-based operating system designed for penetration testing, cybersecurity, ethical hacking, digital forensics, and security auditing, featuring numerous pre-installed security tools.",
       num:25
    },

  {
    id: 14,
    image: netlify,
    title: "Netlify",
    subtitle:
      "Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy.",
    num: 50,
  },

  {
    id: 15,
    image: github,
    title: "GitHub",
    subtitle:
      "GitHub is an Internet hosting service for software development and version control using Git.",
    num: 80,
  },
];

// Education Data----------------------------------

const education = [
  {
    id: 1,
    course: "Master's Of Computer Application (MCA)",
    college: "Pondicherry University, Pondicherry",
    percentage: "77",
    year: "Oct 2023 - May 2025",
    summary:
      "Completed Master's Degree from Pondicherry University, Pondicherry. I got overall 77% in my MCA Degree.",
    
  },
  {
    id: 2,
    course: "Bachelor's Of Computer Science (BSc-CS)",
    college: "Chandernagore College, West Bengal",
    percentage: 83,
    year: "Aug 2020 - July 2023",
    summary:
      "Completed Bachelor's Degree from Chandernagore College, West Bengal. I got overall 83% in my BSc-CS Degree.",
    
  },
  {
    id: 3,
    course: "High School (Intermediate)",
    college: "Kalna Maharaja's High School, West Bengal",
    percentage: 72,
    year: "July 2017 - June 2019",
    summary:
      "Completed Intermediate from Kalna Maharaja's High School, West Bengal. I got overall 72% in Board.",
    
  }
];

// Project Data-set ------------------------------------------------

const projectData = [
  {
    id: 1,
    imgsrc: clinicImg,
    title: "Doctor’s Clinic Portal",
    details:
      "A full stack web application built for a real dental clinic to manage appointments, lab reports, and patient history. It handles 500+ monthly patient interactions, automates scheduling, and provides doctors with analytics for smarter clinical decisions.",
    github: "",
  },

  {
    id: 2,
    imgsrc: ecomImg,
    title: "NourishNow",
    details:
      "A full stack grocery e-commerce platform with product listings, shopping cart, checkout, and secure authentication via PHPMailer. Integrated payment APIs for 1,000+ orders and optimized database design for 10,000+ products, improving engagement and retention.",
    github: "https://github.com/Soumitra86707/NourishNow.git",
  },

  {
    id: 3,
    imgsrc: newp,
    title: "Portfolio - Latest Technology",
    details:
      "A modern portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Features a sleek, responsive UI with smooth animations to showcase skills, projects, and achievements in an engaging and professional manner.",
    github: "https://github.com/",
  },

  {
    id: 4,
    imgsrc: weatherImg, // replace with your actual import
    title: "Weather View App",
    details:
      "A simple and interactive weather application built using HTML, CSS, JavaScript, and WeatherAPI. It displays real-time temperature, humidity, wind speed, and city-wise forecasts with a clean and user-friendly interface.",
    github: "https://github.com/Soumitra86707/Weather-App.git", // add your repo link if available
  },
];



  // Experience Data ----------------------------------------------
const experienceData = [
  {
    id: 1,
    designation: "Backend Developer",
    company: "Acetians Technologies Pvt. Ltd.",
    techStack: "Laravel, PHP, MySQL, ReactJS, REST API",
    year: "Feb 2025 - Present",
    rolesAndResponsibilities: [
      {
        id: 1,
        Name: "School ERP (Backend - Laravel)",
        roleRes: [
          {
            id: 1,
            label:
              "Developed scalable RESTful APIs for core ERP modules including student creation, staff management, admissions, attendance, leave requests, subject management, and class–teacher assignments."
          },
          {
            id: 2,
            label:
              "Designed optimized MySQL database structures and implemented role-based access workflows, ensuring accuracy, security, and high performance across the ERP system."
          }
        ]
      },
      {
        id: 2,
        Name: "E-commerce Web Application (Fullstack - Laravel)",
        roleRes: [
          {
            id: 1,
            label:
              "Built a fully functional e-commerce backend supporting guest checkout, user authentication, product browsing, cart operations, and order management."
          },
          {
            id: 2,
            label:
              "Implemented secure payment workflows and integrated essential e-commerce features to deliver a seamless shopping experience."
          }
        ]
      },
      {
        id: 3,
        Name: "Admin Dashboard for Matchmaking Platform (Fullstack - ReactJS & Firebase)",
        roleRes: [
          {
            id: 1,
            label:
              "Developed admin-side APIs and dashboards to display user statistics, revenue metrics, and activity analytics for efficient monitoring."
          },
          {
            id: 2,
            label:
              "Implemented secure backend modules for managing users, subscriptions, reports, and platform insights."
          }
        ]
      },
      {
        id: 4,
        Name: "Task Management Web Application (Fullstack - ReactJS & Laravel)",
        roleRes: [
          {
            id: 1,
            label:
              "Developed a React-based task management system where admin can assign tasks to users with real-time status updates."
          },
          {
            id: 2,
            label:
              "Implemented backend logic for tracking task progress, notifications, and overall workflow productivity."
          }
        ]
      }
    ]
  }
];
// Exporting Data for use in other components
export default Data;
export { education };
export { projectData };
export { experienceData };
