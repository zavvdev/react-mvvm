import { type FlatNamespace, init, type KeyPrefix, use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  type FallbackNs,
  initReactI18next,
  type UseTranslationOptions,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  type NAMESPACES,
} from "@/ui/services/i18n/i18n.config";
import { resources } from "@/ui/services/i18n/i18n.resources";

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: "languageDetector",
  lookup() {
    const detectedLang = window.navigator.language.split(/_|-/)[0];
    return Object.values(LANGUAGES).includes(detectedLang)
      ? detectedLang
      : DEFAULT_LANGUAGE;
  },
});

use(languageDetector);
use(initReactI18next);

init({
  resources,
  fallbackLng: DEFAULT_LANGUAGE,
  react: {
    useSuspense: true,
  },
  detection: {
    order: ["localStorage", "languageDetector"],
  },
});

export function useTranslation<
  Ns extends FlatNamespace | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(ns: keyof typeof NAMESPACES, options?: UseTranslationOptions<KPrefix>) {
  return useTranslationOrg(ns, options);
}
