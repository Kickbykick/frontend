import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY || '',
});

export const sentFrom  = new Sender("business@iddtstudios.com", "iDDt Website Contact");

export const recipients = [
  new Recipient("kiibati@iddtstudios.com", "Potential Client")
];

export const EmailParamsObj = new EmailParams();

export const sendEmailNew = async () => {
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("This is a Subject")
    .setHtml("<strong>This is the HTML content</strong>")
    .setText("This is the text content");

  await mailerSend.email.send(emailParams);
}
