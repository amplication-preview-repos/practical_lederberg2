import { Comment } from "../comment/Comment";
import { User } from "../user/User";
import { Vote } from "../vote/Vote";

export type Idea = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
  votes?: Array<Vote>;
};
