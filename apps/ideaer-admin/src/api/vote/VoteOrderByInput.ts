import { SortOrder } from "../../util/SortOrder";

export type VoteOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ideaId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
