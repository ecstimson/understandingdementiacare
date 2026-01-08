import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, organization, eventType, eventDate, audienceSize, message } = data;

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
      subject: `New Speaking Inquiry from ${organization || name}`,
      text: `
New Speaking Engagement Inquiry

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${organization ? `Organization: ${organization}` : ''}
${eventType ? `Event Type: ${eventType}` : ''}
${eventDate ? `Event Date: ${eventDate}` : ''}
${audienceSize ? `Audience Size: ${audienceSize}` : ''}

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
      subject: 'Thank you for your speaking inquiry',
      text: `
Hi ${name},

Thank you for your interest in booking me for a speaking engagement. I've received your inquiry and will get back to you within 24 hours to discuss your event and how I can best serve your audience.

I look forward to learning more about your organization and event goals.

With appreciation,
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
    console.error('Error submitting speaking inquiry:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit form' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

