import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: React.ReactNode[]; // Lista de ícones das tecnologias utilizadas
}

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  liveLink,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 transform transition-all duration-300 flex flex-col justify-between">
      {/* Imagem do projeto */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-80 transition-opacity duration-300 rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-t-lg"></div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm flex-grow">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <div className="flex space-x-2">
            {technologies.map((icon, index) => (
              <span
                key={index}
                className="text-2xl text-gray-400 hover:text-gray-200 transition-colors"
              >
                {icon}
              </span>
            ))}
          </div>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Live Demo"
          >
            <FaLink className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
