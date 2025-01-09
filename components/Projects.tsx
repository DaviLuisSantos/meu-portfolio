import { FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiNextdotjs, SiSqlite } from "react-icons/si";
import { SiExpress, SiSequelize, SiEjs } from "react-icons/si";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: React.ReactNode[]; // List of technology icons used
}

const projects: ProjectProps[] = [
  {
    title: "Wallet Manager",
    description:
      "Crypto wallet management project, developed with ASP.NET Core on the backend, integrated with major market APIs such as Binance, CoinMarketCap, and Coingecko. Returns values, charts, trends, and purchase and sale insights. The frontend was built with Next.js and styled with Tailwind CSS, using Entity Framework for database management.",
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
    title: "Visitor Control",
    description:
      "Monolithic system for visitor management, developed with Express and EJS. It has JWT authentication, data storage in Firebird for legacy systems, and uses Sequelize with SQLite to save dynamic information, image processing, and integration with facial recognition equipment APIs for registration and access validation.",
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
    title: "License Plate Processing and Access Control System",
    description:
      "System integrated with license plate recognition cameras (LPR) for identification and access control. Allows registration of plates on devices, management of parking spaces, and integration with a legacy system. Uses Firebird for operations in the legacy system and SQLite as the main database.",
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

const Projects = () => {
  return (
    <section className="py-16 bg-background px-4" id="projects">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">My Projects</h2>
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