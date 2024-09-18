import { StringFilter } from "../../util/StringFilter";
import { IdeaWhereUniqueInput } from "../idea/IdeaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoteWhereInput = {
  id?: StringFilter;
  idea?: IdeaWhereUniqueInput;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
