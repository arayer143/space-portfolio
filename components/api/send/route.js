
import { Resend } from "resend";

const resend = new Resend(re_CKJ8GYqw_mTnU5dBoSTtkRTTcTAsNxSDD);

await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'hello world',
  text: 'it works!',
  attachments: [
    {
      filename: 'invoice.pdf',
      content: invoiceBuffer,
    },
  ],
  headers: {
    'X-Entity-Ref-ID': '123456789',
  },
  tags: [
    {
      name: 'category',
      value: 'confirm_email',
    },
  ],
});
