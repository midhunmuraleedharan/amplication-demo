import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
