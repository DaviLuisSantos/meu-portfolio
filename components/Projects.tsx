import { FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiNextdotjs, SiSqlite } from "react-icons/si";
import { SiExpress, SiSequelize, SiEjs } from "react-icons/si";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import { useTranslation } from "react-i18next";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: React.ReactNode[]; // List of technology icons used
}

const Projects = () => {
  const { t } = useTranslation();

  const projects: ProjectProps[] = [
    {
      title: t("project_wallet_manager_title"),
      description: t("project_wallet_manager_description"),
      image: "/images/wallet-manager.png", // Change the image path to the correct one
      githubLink: "https://github.com/DaviLuisSantos/wallet-frontend",
      liveLink: "https://www.walletmanager.com",
      technologies: [
        <SiNextdotjs key="nextjs" />,
        <SiDotnet key="dotnet" />,
        <SiSqlite key="sqlite" />,
      ],
    },
    {
      title: t("project_visitor_control_title"),
      description: t("project_visitor_control_description"),
      image: "/images/controle-visitantes.png",
      githubLink: "https://github.com/DaviLuisSantos/controle-visitantes",
      liveLink: "https://www.controle-visitantes.com",
      technologies: [
        <SiEjs key="ejs" />,
        <SiExpress key="express" />,
        <SiSequelize key="sequelize" />,
      ],
    },
    {
      title: t("project_license_plate_title"),
      description: t("project_license_plate_description"),
      image: "/images/license-plate-system.png", // Adjust the image path if necessary
      githubLink: "https://github.com/DaviLuisSantos/Servidor_LPR_Alphadigi",
      liveLink: "https://www.licenseplatesystem.com",
      technologies: [
        <FaNodeJs key="nodejs" />,
        <SiSequelize key="sequelize" />,
        <SiSqlite key="sqlite" />,
      ],
    },
  ];

  return (
    <section className="py-16 bg-background px-4" id="projects">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">{t("projects_title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
