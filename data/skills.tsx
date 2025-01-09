import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiDotnet,
  SiPostgresql,
  SiVuedotjs,
  SiSqlite,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export const skills = [
  {
    icon: <FaReact />,
    label: "React",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    description:
      "A JavaScript library for building user interfaces. I've been using it since 2022, mainly as a base for Next.js.",
    experience: "3 years",
    projects: ["Frontend of Wallet Manager", "Visitor Control", ""],
    imageUrl: "https://cdn.thexcodes.com/imgs/reactJS.png",
  },
  {
    icon: <FaNodeJs />,
    label: "Node.js / Express.js",
    color: "text-green-500",
    bgColor: "bg-green-100",
    description:
      "A backend platform I've been using since 2021, focusing on the Express framework for building robust APIs.",
    experience: "4 years",
    projects: [
      "Visitor Control System",
      "WhatsApp Chatbot",
      "License Plate Processing and Access Control System",
    ],
    imageUrl:
      "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/05/node.webp",
  },
  {
    icon: <SiDotnet />,
    label: ".NET / C#",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    description:
      "A framework for robust and scalable applications. My favorite language for APIs, where I learned the pillars of OOP. I've been using it since 2018.",
    experience: "7 years",
    projects: [
      "Wallet Manager API",
      "Condominium Management System",
      "Inventory Control System",
    ],
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*7I6oONv2fGLQJcNEFA4QSw.png",
  },
  {
    icon: <FaDocker />,
    label: "Docker",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    description:
      "A tool for creating, managing, and deploying containers. I use it in projects for CI/CD and consistent development environments.",
    experience: "2 years",
    projects: [
      "API Infrastructure",
      "CI/CD Pipeline",
      "Multicontainer Project",
    ],
    imageUrl:
      "https://www.criacaodesiteseaplicativos.com.br/upload/noticias/original/o-que-e-docker-Em_CIZ_fd3F524g.jpg",
  },
  {
    icon: <SiPostgresql />,
    label: "PostgreSQL",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    description:
      "An advanced open-source relational database. My favorite for large projects due to its scalability and reliability.",
    experience: "3 years",
    projects: ["ERP System", "Condominium Management System"],
    imageUrl: "https://kinsta.com/wp-content/uploads/2022/02/postgres-logo.png",
  },
  {
    icon: <SiSqlite />,
    label: "SQLite",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    description:
      "A lightweight embedded relational database. My favorite for quick and compact projects due to its practicality and speed.",
    experience: "2 years",
    projects: ["Mobile Application", "Inventory System", "Local Test Tool"],
    imageUrl:
      "https://codigofacil.com.br/wp-content/uploads/2024/11/sqlite-imagem.jpg",
  },
  {
    icon: <SiNextdotjs />,
    label: "Next.js",
    color: "text-black",
    bgColor: "bg-gray-100",
    description:
      "A React framework for production and server-side rendering. I've been using it since 2021, but started to delve deeper in 2023.",
    experience: "3 years",
    projects: ["Wallet Manager", "Portfolio", "Virtual Library"],
    imageUrl:
      "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",
  },
  {
    icon: <SiTailwindcss />,
    label: "Tailwind CSS",
    color: "text-teal-500",
    bgColor: "bg-teal-100",
    description:
      "A utility-first CSS framework for rapid styling. I discovered it in 2022, but delved deeper in 2023, along with Next.js.",
    experience: "2 years",
    projects: ["Wallet Manager", "Dashboard", "Landing Page"],
    imageUrl:
      "https://media.licdn.com/dms/image/D4D12AQG3dIXxE2ZinQ/article-cover_image-shrink_720_1280/0/1683048555462?e=2147483647&v=beta&t=1J8dv9hksUgI5X9ZIINJvW_g1eEc8GN0nyJGfIl0vRU",
  },
];
