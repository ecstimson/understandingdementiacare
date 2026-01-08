import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const contactEmail = import.meta.env.CONTACT_EMAIL || 'mary@understandingdementiacare.com';

    // Send admin notification to Mary
    await resend.emails.send({
      from: 'Understanding Dementia Care <noreply@understandingdementiacare.com>',
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

---
Submitted via understandingdementiacare.com
      `.trim(),
    });

    // Send confirmation email to submitter
    await resend.emails.send({
      from: 'Mary Donnelly <noreply@understandingdementiacare.com>',
      to: email,
      subject: 'Thank you for contacting me',
      text: `
Hi ${name},

Thank you for reaching out. I've received your message and will get back to you as soon as possible, typically within 24 hours.

If your inquiry is time-sensitive, please feel free to call or reply to this email directly.

With gratitude,
Mary Donnelly

---
Understanding Dementia Care
Asheville, NC
understandingdementiacare.com
      `.trim(),
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit form' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

