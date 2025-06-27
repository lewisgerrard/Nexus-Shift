import { type NextRequest, NextResponse } from "next/server"
import { resend, FROM_EMAIL, CONTACT_EMAIL } from "@/lib/resend"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    if (message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters long" }, { status: 400 })
    }

    // Send notification email to you
    const notificationEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0B1F3A 0%, #00C2CB 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #0B1F3A; margin-top: 0;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #00C2CB;">${email}</a></p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #0B1F3A; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e6f9fa; border-radius: 8px;">
            <p style="margin: 0; color: #0B1F3A; font-size: 14px;">
              <strong>Reply directly to this email</strong> to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    })

    // Send auto-reply to the user
    const autoReply = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thank you for contacting Nexus Shift",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0B1F3A 0%, #00C2CB 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
          </div>
          
          <div style="padding: 20px;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for reaching out to Nexus Shift. We've received your message and will get back to you within 24 hours.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0B1F3A; margin-top: 0;">Your Message</h3>
              <p style="color: #666; font-style: italic;">"${message}"</p>
            </div>
            
            <p style="color: #333;">
              In the meantime, feel free to explore our services or connect with us on social media.
            </p>
            
            <div style="margin-top: 30px; padding: 20px; background: #e6f9fa; border-radius: 8px;">
              <h4 style="color: #0B1F3A; margin-top: 0;">Contact Information</h4>
              <p style="margin: 5px 0; color: #333;">📧 Email: ${CONTACT_EMAIL}</p>
              <p style="margin: 5px 0; color: #333;">🌐 Website: nexusshift.co.uk</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong style="color: #0B1F3A;">The Nexus Shift Team</strong>
            </p>
          </div>
        </div>
      `,
    })

    console.log("Emails sent successfully:", {
      notification: notificationEmail.data?.id,
      autoReply: autoReply.data?.id,
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    })
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
  }
}
