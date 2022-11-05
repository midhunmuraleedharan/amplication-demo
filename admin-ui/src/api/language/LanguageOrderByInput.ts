import { SortOrder } from "../../util/SortOrder";

export type LanguageOrderByInput = {
  bcp_47LanguageTag?: SortOrder;
  createdAt?: SortOrder;
  dbValue?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  languageName?: SortOrder;
  linkedinUrn?: SortOrder;
  name?: SortOrder;
  region?: SortOrder;
  sortFactor?: SortOrder;
  updatedAt?: SortOrder;
};
