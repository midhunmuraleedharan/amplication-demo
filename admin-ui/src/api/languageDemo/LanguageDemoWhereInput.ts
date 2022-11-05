import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LanguageDemoWhereInput = {
  bcp_47LanguageTag?: StringNullableFilter;
  description?: IntNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  languageName?: StringNullableFilter;
  region?: StringNullableFilter;
};
