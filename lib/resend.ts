import { Resend } from "resend"

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is required")
}

export const resend = new Resend(process.env.RESEND_API_KEY)

// Use environment variable for the from email, with fallback
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "lewis.gerrard@outlook.com"

export interface ContactFormData {
  name: string
  email: string
  business?: string
  service?: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, business, service, message } = data

  console.log("Attempting to send email with config:", {
    from: FROM_EMAIL,
    to: CONTACT_EMAIL,
    replyTo: email,
    resendApiKey: process.env.RESEND_API_KEY ? "Set" : "Not set",
  })

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .container {
                background-color: white;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%);
                color: white;
                padding: 30px 20px;
                text-align: center;
              }
              .content {
                padding: 30px 20px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: #f8fafc;
                border-radius: 6px;
                border-left: 4px solid #0f766e;
              }
              .field-label {
                font-weight: 600;
                color: #1e3a8a;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field-value {
                color: #334155;
                font-size: 16px;
              }
              .message-field {
                background: #f1f5f9;
                padding: 20px;
                border-radius: 6px;
                border-left: 4px solid #0f766e;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                color: #64748b;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">From Nexus Shift Website</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value">
                    <a href="mailto:${email}" style="color: #0f766e; text-decoration: none;">${email}</a>
                  </div>
                </div>
                
                ${
                  business
                    ? `
                  <div class="field">
                    <div class="field-label">Business</div>
                    <div class="field-value">${business}</div>
                  </div>
                `
                    : ""
                }
                
                ${
                  service
                    ? `
                  <div class="field">
                    <div class="field-label">Service Interest</div>
                    <div class="field-value">${service}</div>
                  </div>
                `
                    : ""
                }
                
                <div class="message-field">
                  <div class="field-label">Message</div>
                  <div class="field-value" style="white-space: pre-wrap; margin-top: 10px;">${message}</div>
                </div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the Nexus Shift contact form.</p>
                <p>Reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    console.log("Email sent successfully:", result)
    return { success: true, data: result }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

// Auto-reply email to the person who submitted the form
export async function sendAutoReply(data: ContactFormData) {
  const { name, email } = data

  console.log("Attempting to send auto-reply to:", email)

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "Thank you for contacting Nexus Shift",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank you for contacting Nexus Shift</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .container {
                background-color: white;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%);
                color: white;
                padding: 40px 20px;
                text-align: center;
              }
              .content {
                padding: 40px 30px;
              }
              .cta-button {
                display: inline-block;
                background: #0f766e;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                margin: 20px 0;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                color: #64748b;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">Thank you, ${name}!</h1>
                <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">We've received your message</p>
              </div>
              
              <div class="content">
                <p style="font-size: 18px; margin-bottom: 20px;">Hi ${name},</p>
                
                <p>Thank you for reaching out to Nexus Shift. We've received your message and appreciate you taking the time to contact us.</p>
                
                <p><strong>What happens next?</strong></p>
                <ul style="margin: 20px 0; padding-left: 20px;">
                  <li>We'll review your message within the next few hours</li>
                  <li>One of our team members will get back to you within 1 business day</li>
                  <li>We'll discuss your project needs and how we can help</li>
                </ul>
                
                <p>In the meantime, feel free to explore our website to learn more about our services and previous work.</p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://nexusshift.co.uk" class="cta-button">Visit Our Website</a>
                </div>
                
                <p>If you have any urgent questions, you can also reach us directly at <a href="mailto:${CONTACT_EMAIL}" style="color: #0f766e;">${CONTACT_EMAIL}</a>.</p>
                
                <p style="margin-top: 30px;">Best regards,<br><strong>The Nexus Shift Team</strong></p>
              </div>
              
              <div class="footer">
                <p><strong>Nexus Shift</strong></p>
                <p>Digital Transformation • Website Production • Web Applications</p>
                <p><a href="mailto:${CONTACT_EMAIL}" style="color: #0f766e;">${CONTACT_EMAIL}</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    console.log("Auto-reply sent successfully:", result)
    return { success: true, data: result }
  } catch (error) {
    console.error("Failed to send auto-reply:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}
