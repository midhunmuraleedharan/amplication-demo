import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TraitMethodWhereInput = {
  display?: StringNullableFilter;
  id?: StringFilter;
  method?: StringNullableFilter;
  sortFactor?: IntNullableFilter;
  totalPoints?: IntNullableFilter;
  types?: JsonFilter;
};
