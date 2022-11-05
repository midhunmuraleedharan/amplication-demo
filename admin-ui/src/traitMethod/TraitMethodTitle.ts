import { TraitMethod as TTraitMethod } from "../api/traitMethod/TraitMethod";

export const TRAITMETHOD_TITLE_FIELD = "display";

export const TraitMethodTitle = (record: TTraitMethod): string => {
  return record.display || record.id;
};
