import { JsonValue } from "type-fest";

export type TraitMethod = {
  createdAt: Date;
  display: string | null;
  id: string;
  method: string | null;
  sortFactor: number | null;
  totalPoints: number | null;
  types: JsonValue;
  updatedAt: Date;
};
