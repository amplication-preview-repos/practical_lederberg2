import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { IdeaCreateNestedManyWithoutUsersInput } from "./IdeaCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VoteCreateNestedManyWithoutUsersInput } from "./VoteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  ideas?: IdeaCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  level?: number | null;
  password: string;
  points?: number | null;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  username: string;
  votes?: VoteCreateNestedManyWithoutUsersInput;
};
