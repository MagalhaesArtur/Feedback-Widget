import { prisma } from "../../prisma";
import {
  FeedbackCreateProps,
  FeedbacksRepositories,
} from "../feedbacksRepository";

export class PrismaFeedbackRepository implements FeedbacksRepositories {
  async create({ comment, type, screenshot }: FeedbackCreateProps) {
    await prisma.feedback.create({
      data: {
        comment,
        type,
        screenshot,
      },
    });
  }
}
