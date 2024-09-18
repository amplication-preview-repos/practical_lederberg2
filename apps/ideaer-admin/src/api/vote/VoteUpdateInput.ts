import { IdeaWhereUniqueInput } from "../idea/IdeaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoteUpdateInput = {
  idea?: IdeaWhereUniqueInput | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
