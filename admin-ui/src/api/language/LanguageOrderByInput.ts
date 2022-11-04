import { SortOrder } from "../../util/SortOrder";

export type LanguageOrderByInput = {
  bcp_47LanguageTag?: SortOrder;
  dbValue?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  languageName?: SortOrder;
  linkedinUrn?: SortOrder;
  region?: SortOrder;
};
