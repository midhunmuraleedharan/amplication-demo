import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LanguageWhereInput = {
  bcp_47LanguageTag?: StringNullableFilter;
  dbValue?: IntNullableFilter;
  description?: StringNullableFilter;
  display?: StringNullableFilter;
  id?: StringFilter;
  linkedinUrn?: StringNullableFilter;
  region?: StringNullableFilter;
  sortFactorlanguageName?: StringNullableFilter;
};
