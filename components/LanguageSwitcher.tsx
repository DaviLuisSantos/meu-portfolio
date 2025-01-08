import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    router.push(router.asPath, router.asPath, { locale: lang }); // Mantém a URL após a troca de idioma
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button onClick={() => handleLanguageChange("pt")}>PT</button>
      <button onClick={() => handleLanguageChange("en")}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;
