import express from "express";
import { prisma } from "./prisma";
import { SubmitFeedback } from "./services/submitFeedback";
import { PrismaFeedbackRepository } from "./repositories/prisma/prismaFeedbackRepository";
import { NodemailerAdapter } from "./adpaters/nodemailer/nodemailerAdapter";

export const routes = express.Router();

routes.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const PrismaFeedbackRepositories = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodemailerAdapter();

  const submitFeedbackService = new SubmitFeedback(
    PrismaFeedbackRepositories,
    nodemailerMailAdapter
  );

  await submitFeedbackService.execute({ type, comment, screenshot });

  return res.status(201).send();
});
