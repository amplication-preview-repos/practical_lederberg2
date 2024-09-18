import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { IdeaUpdateManyWithoutUsersInput } from "./IdeaUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VoteUpdateManyWithoutUsersInput } from "./VoteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  ideas?: IdeaUpdateManyWithoutUsersInput;
  lastName?: string | null;
  level?: number | null;
  password?: string;
  points?: number | null;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
  votes?: VoteUpdateManyWithoutUsersInput;
};
