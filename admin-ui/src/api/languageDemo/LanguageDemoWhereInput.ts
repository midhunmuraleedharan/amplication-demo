import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LanguageDemoWhereInput = {
  bcp_47LanguageTag?: StringNullableFilter;
  dbValue?: IntNullableFilter;
  description?: StringNullableFilter;
  display?: StringNullableFilter;
  id?: StringFilter;
  languageName?: StringNullableFilter;
  region?: StringNullableFilter;
  sortFactor?: StringNullableFilter;
};
