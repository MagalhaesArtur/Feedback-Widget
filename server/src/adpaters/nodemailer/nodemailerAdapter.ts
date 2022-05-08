import { MailAdpter, SendMailData } from "../mailAdpter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4db1e06e124784",
    pass: "4b39fc6e26ff14",
  },
});

export class NodemailerAdapter implements MailAdpter {
  async sendMail(data: SendMailData) {
    await transport.sendMail({
      from: "teste <zezedocabon@gmail.com>",
      to: "João Artur <joaoartur4590@gmail.com>",

      subject: data.subject,
      html: data.body,
    });
  }
}
