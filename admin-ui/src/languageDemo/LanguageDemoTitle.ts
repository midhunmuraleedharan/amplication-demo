import { LanguageDemo as TLanguageDemo } from "../api/languageDemo/LanguageDemo";

export const LANGUAGEDEMO_TITLE_FIELD = "languageName";

export const LanguageDemoTitle = (record: TLanguageDemo): string => {
  return record.languageName || record.id;
};
