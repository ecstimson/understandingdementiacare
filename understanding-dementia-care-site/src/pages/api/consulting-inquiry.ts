import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, message, sessionLength } = data;

    // Validate required fields
    if (!name || !email || !phone || !message || !sessionLength) {
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
      subject: `New Consulting Inquiry from ${name}`,
      text: `
New Consulting Inquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Preferred Session Length: ${sessionLength}

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
      subject: 'Thank you for your consultation inquiry',
      text: `
Hi ${name},

Thank you for reaching out about family consulting services. I've received your inquiry and will get back to you within 24 hours to discuss your situation and schedule a consultation.

In the meantime, if you have urgent questions, please feel free to reply to this email.

With compassion,
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
    console.error('Error submitting consulting inquiry:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit form' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

