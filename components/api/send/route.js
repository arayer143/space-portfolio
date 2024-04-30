"use client";

import { NextResponse } from 'next/server'
import { Resend } from "resend";

const resend = new Resend(re_CKJ8GYqw_mTnU5dBoSTtkRTTcTAsNxSDD);

resend.apiKeys.list();


export async function POST(req, _res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: {email},
      to: 'alexrayer7@gmail.com',
      subject: 'Hello World',
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
