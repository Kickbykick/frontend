import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const MailerSendObj = new MailerSend({
  apiKey: process.env.API_KEY || '',
});

export const SentFrom = new Sender("business@iddtstudios.com", "iDDt Website Contact");

export const Recipients = [
  new Recipient("business@iddtstudios.com", "Potential Client")
];

export const EmailParamsObj = new EmailParams();
