import { TraitMethodWhereInput } from "./TraitMethodWhereInput";
import { TraitMethodOrderByInput } from "./TraitMethodOrderByInput";

export type TraitMethodFindManyArgs = {
  where?: TraitMethodWhereInput;
  orderBy?: Array<TraitMethodOrderByInput>;
  skip?: number;
  take?: number;
};
