// components/ProjectCard.tsx

import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 transform transition-all duration-300">
      {/* Imagem do projeto */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl hover:text-gray-800 transition-colors" />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Live Demo"
          >
            <FaLink className="text-2xl hover:text-gray-800 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
