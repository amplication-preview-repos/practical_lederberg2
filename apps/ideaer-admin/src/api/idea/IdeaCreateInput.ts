import { CommentCreateNestedManyWithoutIdeasInput } from "./CommentCreateNestedManyWithoutIdeasInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VoteCreateNestedManyWithoutIdeasInput } from "./VoteCreateNestedManyWithoutIdeasInput";

export type IdeaCreateInput = {
  comments?: CommentCreateNestedManyWithoutIdeasInput;
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  votes?: VoteCreateNestedManyWithoutIdeasInput;
};
