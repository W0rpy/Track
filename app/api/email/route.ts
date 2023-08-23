import {NextResponse} from 'next/server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: Request) {
  const email = await req.json();
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Form email',
      text: 'User email',
      html: `<b>${email}</b>`,
    });
    return NextResponse.json({success: true});
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({message: e.message});
  }
}
