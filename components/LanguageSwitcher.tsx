import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-900 rounded-full shadow-lg">
      <FaGlobe className="text-white text-2xl" />
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded-full transition-colors duration-300 ${
          i18n.language === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("pt")}
        className={`px-3 py-1 rounded-full transition-colors duration-300 ${
          i18n.language === "pt"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
