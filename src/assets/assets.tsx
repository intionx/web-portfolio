import user_image from "./profile_img.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile_img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import about_me from "./about-me.jpeg";
import dbeaver from "./DBeaver.png";
import mysql from "./mysql.png";
import postman from "./Postman.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  about_me,
  dbeaver,
  mysql,
  postman,
};

export const workData = [
  {
    title: "Carolus Connect",
    description: "Fullstack Project",
    bgImage: "/cc/cc-2.png",
    fullDesc:
      "Carolus Connect is an internal web application developed for RS St. Carolus, designed to streamline patient administration workflows for doctors and nurses. The system centralizes patient data, digital documents, and administrative processes to improve hospital efficiency and reduce manual errors. I specifically contributed to the development of the Informed Consent module which is one of the three core features of the platform (built using Next.js, TypeScript, and Laravel). I integrated frontend designs from Figma with backend REST APIs to enable dynamic retrieval and updating of patient records. In addition, I implemented dynamic patient documentation templates in Laravel using HTML, CSS, and Laravel DOMPDF Library allowing automatic population of data from the MySQL database to minimize repetitive manual input by medical staff. The project followed an Agile development process, where I collaborated closely with developers, UI/UX designers, system analysts, and project managers. I also participated in frontend code reviews to maintain clean, consistent, and maintainable code across the entire platform",
    images: ["/cc/cc-3.png"],
    techStack: [
      "Next.js",
      "React",
      "Laravel",
      "MySQL",
      "REST API",
      "TypeScript",
      "HTML",
      "CSS",
      "Axios",
      "DOMPDF",
      "Ant Design",
    ],
    github: "",
    figma: "",
  },
  {
    title: "KosInfo",
    description: "Fullstack Project",
    bgImage: "/kosinfo/kosinfo-1.png",
    fullDesc:
      "KosInfo is a fullstack web application built to help university students find reliable and comfortable places to live (“kos”). Working in a team of five, I contributed to both the frontend and backend. I designed the database schema in MySQL, developed backend services using Laravel, and integrated RESTful APIs with the frontend. I also implemented authentication and authorization to ensure only registered users could post reviews or join forum discussions. On the frontend, I used React (Vite) to build search and dashboard features for a smooth user experience.",
    images: [
      "/kosinfo/kosinfo-1.png",
      "/kosinfo/kosinfo-2.png",
      "/kosinfo/kosinfo-3.png",
      "/kosinfo/kosinfo-4.png",
      "/kosinfo/kosinfo-5.png",
    ],
    techStack: [
      "React (Vite)",
      "Laravel",
      "MySQL",
      "REST API",
      "JavaScript",
      "CSS",
    ],
    github: "https://github.com/intionx/KosInfo",
    figma: "",
  },

  {
    title: "VKellogs",
    description: "Web Design",
    bgImage: "/vk/vk-1.png",
    fullDesc:
      "VKellogs is a front-end web development project created with the goal to design and build a mock website for a fictional cereal brand, focusing on web design fundamentals and responsive layout techniques. The website consists of multiple pages, including Home, Products, Recipes, About, and Contact which were all built using plain HTML, CSS, and JavaScript without any frameworks. The project involved translating a Figma prototype into a fully functional website, emphasizing clean design, visual consistency, and accessibility across devices. I implemented responsiveness using CSS media queries, enabling the layout to adapt dynamically at different screen widths. Interactive elements such as hover effects and form validation were developed using JavaScript, while consistent color palettes and typography reinforced the brand identity. This project strengthened my understanding of core web technologies and front-end best practices.",
    images: [
      "/vk/vk-1.png",
      "/vk/vk-2.png",
      "/vk/vk-3.png",
      "/vk/vk-4.png",
      "/vk/vk-5.png",
      "/vk/vk-6.png",
      "/vk/vk-7.png",
      "/vk/vk-8.png",
      "/vk/vk-9.png",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Figma"],
    github: "https://github.com/intionx/VKellogs",
    figma: "",
  },
  {
    title: "NUTRI-FIT",
    description: "Mobile UI/UX Design",
    bgImage: "/nf/nf-logo.png",
    fullDesc:
      "Nutri-Fit is a mobile health application prototype designed to help users manage their diet, sleep, and workout routines in one place. As the team leader, I coordinated a group of five members, organized meetings, and ensured the design met both usability and project requirements. I was responsible for creating the dashboard/home page, food diary, and sleep tracking sections of the app. The food diary allows users to input their daily meals and view nutritional breakdowns such as calories, proteins, carbohydrates, and fats. I also designed the recommended restaurants and gyms feature, which suggests options aligned with the user’s diet and fitness goals. The project was developed entirely in Figma, where we built an interactive prototype and conducted basic usability testing before presenting it in class. Through this project, I practiced applying human–computer interaction principles to create intuitive and user-friendly mobile interfaces.",
    images: [
      "/nf/nf-1.png",
      "/nf/nf-2.png",
      "/nf/nf-3.png",
      "/nf/nf-4.png",
      "/nf/nf-5.png",
      "/nf/nf-6.png",
      "/nf/nf-7.png",
      "/nf/nf-8.png",
      "/nf/nf-9.png",
    ],
    techStack: ["Figma"],
    github: "",
    figma:
      "https://www.figma.com/proto/CfAUwzLqeFKBztMHJM0W3I/NUTRI-FIT?node-id=8-14&p=f&t=99ZqTNt5TYFLwsgf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A14&show-proto-sidebar=1",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "TypeScript/JavaScript, Next.js (React), Laravel, HTML, CSS",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Creating web projects with Next.js and Laravel.",
  },
];

export const toolsData = [
  assets.vscode,
  assets.dbeaver,
  assets.figma,
  assets.mysql,
  assets.postman,
  assets.git,
];
