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
      to: "business@iddtstudios.com",
      subject: "Welcome to iDDt Studios",
      html: req.body,
    });
    res.status(200).json({ message: "Success", success: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error, success: false });
  }
  
  

  // switch (requestMethod) {
  //   case 'POST':
  //     res.send('Hello World!');
  //     // res.status(200).json({ message: `You submitted the following data: ${body}` })
  //   // default:
  //   //   res.status(200).json({ message: 'Welcome to API Routes!'})
  // }

 

  // return res.status(200).json({ message: "Email sent successfully" });
}