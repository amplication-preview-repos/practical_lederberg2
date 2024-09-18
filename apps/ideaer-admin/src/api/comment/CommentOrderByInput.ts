import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ideaId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
