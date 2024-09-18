import { Idea } from "../idea/Idea";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  idea?: Idea | null;
  updatedAt: Date;
  user?: User | null;
};
