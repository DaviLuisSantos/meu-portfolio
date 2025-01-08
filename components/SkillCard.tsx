interface SkillCardProps {
    icon: React.ReactNode;
    label: string;
    color: string;
    bgColor: string;
  }
  
  const SkillCard = ({ icon, label, color, bgColor }: SkillCardProps) => {
    return (
      <li
        className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${bgColor} border border-gray-300 w-full sm:w-auto`}
      >
        {/* Ícone com ajuste de tamanho responsivo */}
        <span className={`text-4xl sm:text-5xl md:text-6xl ${color} mb-4`} aria-label={label}>
          {icon}
        </span>
  
        {/* Label com ajuste de tamanho responsivo */}
        <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
          {label}
        </span>
      </li>
    );
  };
  
  export default SkillCard;
  