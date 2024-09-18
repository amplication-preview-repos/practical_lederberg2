import { CommentUpdateManyWithoutIdeasInput } from "./CommentUpdateManyWithoutIdeasInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VoteUpdateManyWithoutIdeasInput } from "./VoteUpdateManyWithoutIdeasInput";

export type IdeaUpdateInput = {
  comments?: CommentUpdateManyWithoutIdeasInput;
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  votes?: VoteUpdateManyWithoutIdeasInput;
};
