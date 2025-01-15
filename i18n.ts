import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import en from "./locales/en.json";
import pt from "./locales/pt.json";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      pt: {
        translation: pt,
      },
    },
    lng: "pt", // Idioma padrão
    fallbackLng: "en", // Idioma de fallback
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Adicione esta linha para evitar problemas com suspense
    },
  });

export default i18n;
