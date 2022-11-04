import { Language as TLanguage } from "../api/language/Language";

export const LANGUAGE_TITLE_FIELD = "sortFactorlanguageName";

export const LanguageTitle = (record: TLanguage): string => {
  return record.sortFactorlanguageName || record.id;
};
