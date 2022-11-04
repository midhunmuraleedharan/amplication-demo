import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LanguageWhereInput = {
  description?: StringNullableFilter;
  display?: StringNullableFilter;
  id?: StringFilter;
  region?: StringNullableFilter;
};
