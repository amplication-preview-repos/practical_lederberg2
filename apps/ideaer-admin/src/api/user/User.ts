import { Comment } from "../comment/Comment";
import { Idea } from "../idea/Idea";
import { JsonValue } from "type-fest";
import { Vote } from "../vote/Vote";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  ideas?: Array<Idea>;
  lastName: string | null;
  level: number | null;
  points: number | null;
  profilePicture: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  votes?: Array<Vote>;
};
