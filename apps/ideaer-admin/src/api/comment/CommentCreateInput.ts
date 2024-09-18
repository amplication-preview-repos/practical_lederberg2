import { IdeaWhereUniqueInput } from "../idea/IdeaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  idea?: IdeaWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
