import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type LanguageWhereInput = {
  bcp_47LanguageTag?: StringNullableFilter;
  dbValue?: IntNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  languageName?: StringNullableFilter;
  linkedinUrn?: FloatNullableFilter;
  name?: StringNullableFilter;
  region?: StringNullableFilter;
  sortFactor?: StringNullableFilter;
};
