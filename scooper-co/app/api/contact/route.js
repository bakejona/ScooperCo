export const runtime = 'nodejs';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Scooper Co." <no-reply@scooperco.com>',
    to: 'youremail@example.com',
    subject: 'New Contact Request',
    text: JSON.stringify(data, null, 2),
  });

  return NextResponse.json({ success: true });
}
