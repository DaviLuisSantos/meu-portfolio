import React, { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import Image from "next/image";

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  bgColor: string;
  description: string; // Descrição da skill
  experience: string; // Tempo de uso
  projects: string[]; // Projetos relacionados
  imageUrl: string; // URL da imagem da skill
}

const SkillCard = ({
  icon,
  label,
  color,
  bgColor,
  description,
  experience,
  projects,
  imageUrl,
}: SkillCardProps) => {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleCardClick = () => {
    openModal(
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-white">{label}</h3>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-200 text-xl font-bold"
          >
            &times;
          </button>
        </div>
        <div>
          <div className="relative w-full h-64 mb-4">
            <Image
              src={imageUrl}
              alt={label}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-300 text-lg mb-4">{description}</p>
          <p className="text-gray-400 text-sm mb-2">
            <strong>Experience:</strong> {experience}
          </p>
          <div>
            <strong className="text-gray-400">Projects:</strong>
            <ul className="list-disc pl-5 text-gray-300 mt-2">
              {projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <li
      onClick={handleCardClick}
      className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg hover:shadow-md transform hover:scale-95 transition-all duration-300 ${bgColor} backdrop-blur-lg bg-opacity-60 border border-gray-300 w-full sm:w-auto cursor-pointer`}
      style={{ zIndex: 1 }}
    >
      <span
        className={`text-4xl sm:text-5xl md:text-6xl ${color} mb-4`}
        aria-label={label}
      >
        {icon}
      </span>
      <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-300">
        {label}
      </span>
    </li>
  );
};

export default SkillCard;
