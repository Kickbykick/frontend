import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let body;
  try {
    const requestMethod = req.method;
    const body = JSON.parse(req.body);
    console.log(req.body);

    await sendEmail({
      to: "iddtstudiosss@gmail.com",
      subject: "Welcome to iDDt Studios",
      html: req.body,
    });
    res.status(200).json({ message: "Success", success: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error, success: false });
  }
}