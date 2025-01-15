import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiDotnet,
  SiPostgresql,
  SiSqlite,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t, i18n } = useTranslation();

  const experienceSuffix = i18n.language === 'pt' ? ' anos' : ' years';

  return [
    {
      icon: <FaReact />,
      label: "React",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      description: t("skill_react_description"),
      experience: `3${experienceSuffix}`,
      projects: ["Frontend of Wallet Manager", "Visitor Control"],
      imageUrl: "https://cdn.thexcodes.com/imgs/reactJS.png",
    },
    {
      icon: <FaNodeJs />,
      label: "Node.js / Express.js",
      color: "text-green-500",
      bgColor: "bg-green-100",
      description: t("skill_node_description"),
      experience: `4${experienceSuffix}`,
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
      description: t("skill_dotnet_description"),
      experience: `7${experienceSuffix}`,
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
      description: t("skill_docker_description"),
      experience: `2${experienceSuffix}`,
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
      description: t("skill_postgresql_description"),
      experience: `3${experienceSuffix}`,
      projects: ["ERP System", "Condominium Management System"],
      imageUrl: "https://kinsta.com/wp-content/uploads/2022/02/postgres-logo.png",
    },
    {
      icon: <SiSqlite />,
      label: "SQLite",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      description: t("skill_sqlite_description"),
      experience: `2${experienceSuffix}`,
      projects: ["Mobile Application", "Inventory System", "Local Test Tool"],
      imageUrl:
        "https://codigofacil.com.br/wp-content/uploads/2024/11/sqlite-imagem.jpg",
    },
    {
      icon: <SiNextdotjs />,
      label: "Next.js",
      color: "text-black",
      bgColor: "bg-gray-100",
      description: t("skill_nextjs_description"),
      experience: `3${experienceSuffix}`,
      projects: ["Wallet Manager", "Portfolio", "Virtual Library"],
      imageUrl:
        "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",
    },
    {
      icon: <SiTailwindcss />,
      label: "Tailwind CSS",
      color: "text-teal-500",
      bgColor: "bg-teal-100",
      description: t("skill_tailwind_description"),
      experience: `2${experienceSuffix}`,
      projects: ["Wallet Manager", "Dashboard", "Landing Page"],
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQG3dIXxE2ZinQ/article-cover_image-shrink_720_1280/0/1683048555462?e=2147483647&v=beta&t=1J8dv9hksUgI5X9ZIINJvW_g1eEc8GN0nyJGfIl0vRU",
    },
  ];
};