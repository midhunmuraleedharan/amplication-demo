import { Language as TLanguage } from "../api/language/Language";

export const LANGUAGE_TITLE_FIELD = "display";

export const LanguageTitle = (record: TLanguage): string => {
  return record.display || record.id;
};
