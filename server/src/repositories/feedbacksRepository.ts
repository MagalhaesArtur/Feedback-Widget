export interface FeedbackCreateProps {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepositories {
  create: (data: FeedbackCreateProps) => Promise<void>;
}
