import { Idea } from "../idea/Idea";
import { User } from "../user/User";

export type Vote = {
  createdAt: Date;
  id: string;
  idea?: Idea | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
