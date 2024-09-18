import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IdeaWhereUniqueInput } from "../idea/IdeaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  idea?: IdeaWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
