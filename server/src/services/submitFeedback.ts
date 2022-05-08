import { MailAdpter } from "../adpaters/mailAdpter";
import { FeedbacksRepositories } from "../repositories/feedbacksRepository";

export interface SubmitFeedbackCasesRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedback {
  constructor(
    private feedbacksRepository: FeedbacksRepositories,
    private mailAdapter: MailAdpter
  ) {}

  async execute(req: SubmitFeedbackCasesRequest) {
    const { type, comment, screenshot } = req;

    await this.feedbacksRepository.create({
      comment,
      type,
      screenshot,
    });
    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family:sans-serif; color:#222;"></div>`,
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img width=500px src=${screenshot}>` : null,
      ].join("\n"),
    });
  }
}
