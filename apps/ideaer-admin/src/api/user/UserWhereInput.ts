import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IdeaListRelationFilter } from "../idea/IdeaListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { VoteListRelationFilter } from "../vote/VoteListRelationFilter";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  ideas?: IdeaListRelationFilter;
  lastName?: StringNullableFilter;
  level?: IntNullableFilter;
  points?: IntNullableFilter;
  profilePicture?: JsonFilter;
  username?: StringFilter;
  votes?: VoteListRelationFilter;
};
