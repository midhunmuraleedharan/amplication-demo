import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type LanguageWhereInput = {
  bcp_47LanguageTag?: StringFilter;
  dbValue?: IntNullableFilter;
  description?: StringFilter;
  id?: StringFilter;
  languageName?: StringNullableFilter;
  linkedinUrn?: FloatNullableFilter;
  region?: StringNullableFilter;
};
