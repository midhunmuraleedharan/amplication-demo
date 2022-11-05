import { LanguageDemoWhereInput } from "./LanguageDemoWhereInput";
import { LanguageDemoOrderByInput } from "./LanguageDemoOrderByInput";

export type LanguageDemoFindManyArgs = {
  where?: LanguageDemoWhereInput;
  orderBy?: Array<LanguageDemoOrderByInput>;
  skip?: number;
  take?: number;
};
