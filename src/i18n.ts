import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Define interface for i18n configuration options
interface I18nConfig {
  fallbackLng: string;
  whitelist: string[];
  debug: boolean;
  interpolation: {
    escapeValue: boolean;
  };
}

// Initialize i18n with the specified configuration
const i18nConfig: I18nConfig = {
  fallbackLng: "ru",
  whitelist: ["re", "en"],
  debug: false,
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
