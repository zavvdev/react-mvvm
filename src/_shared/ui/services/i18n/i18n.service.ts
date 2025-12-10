import { init, use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  initReactI18next,
  useTranslation,
  type UseTranslationOptions,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import {
  FALLBACK_LNG,
  LANGUAGES,
  NAMESPACES,
} from "@/_shared/ui/services/i18n/i18n.config";

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: "languageDetector",
  lookup() {
    const detectedLang = window?.navigator?.language?.split(/_|-/)[0];
    return Object.values(LANGUAGES).includes(detectedLang)
      ? detectedLang
      : FALLBACK_LNG;
  },
});

use(languageDetector);
use(initReactI18next);
use(
  resourcesToBackend(
    (language: string, namespace: string) =>
      import(`../../../../${namespace}/ui/services/i18n/${language}.json`),
  ),
);

init({
  fallbackLng: FALLBACK_LNG,
  react: {
    useSuspense: true,
  },
  detection: {
    order: ["localStorage", "languageDetector"],
  },
  ns: Object.values(NAMESPACES),
});

export function createUseTranslation(namespace: keyof typeof NAMESPACES) {
  return (options?: UseTranslationOptions<string>) => {
    return useTranslation(namespace, options);
  };
}

export const useSharedTranslation = createUseTranslation("shared");
