import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export async function sendContactEmail({ name, email, message }) {
    const result = await resend.emails.send({
        from: 'Contact Form <contact@aryanpro.com>',
        to: ['aryan@aryanpro.com'],
        subject: `New contact from ${name}`,
        reply_to: email,
        html: `
      <h2>New contact form submission on aryanpro.com</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `
    });

    console.log('Resend result:', result);

    if (result.error) {
        console.error('Resend error:', result.error);
        throw new Error(result.error.message);
    }
}
