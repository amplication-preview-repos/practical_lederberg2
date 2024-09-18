/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Vote as PrismaVote,
  Idea as PrismaIdea,
  User as PrismaUser,
} from "@prisma/client";

export class VoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.VoteCountArgs, "select">): Promise<number> {
    return this.prisma.vote.count(args);
  }

  async votes(args: Prisma.VoteFindManyArgs): Promise<PrismaVote[]> {
    return this.prisma.vote.findMany(args);
  }
  async vote(args: Prisma.VoteFindUniqueArgs): Promise<PrismaVote | null> {
    return this.prisma.vote.findUnique(args);
  }
  async createVote(args: Prisma.VoteCreateArgs): Promise<PrismaVote> {
    return this.prisma.vote.create(args);
  }
  async updateVote(args: Prisma.VoteUpdateArgs): Promise<PrismaVote> {
    return this.prisma.vote.update(args);
  }
  async deleteVote(args: Prisma.VoteDeleteArgs): Promise<PrismaVote> {
    return this.prisma.vote.delete(args);
  }

  async getIdea(parentId: string): Promise<PrismaIdea | null> {
    return this.prisma.vote
      .findUnique({
        where: { id: parentId },
      })
      .idea();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.vote
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
