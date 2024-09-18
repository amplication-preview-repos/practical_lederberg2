import { Idea as TIdea } from "../api/idea/Idea";

export const IDEA_TITLE_FIELD = "title";

export const IdeaTitle = (record: TIdea): string => {
  return record.title?.toString() || String(record.id);
};
