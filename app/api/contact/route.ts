import { type NextRequest, NextResponse } from "next/server"
import { sendContactEmail, sendAutoReply, type ContactFormData } from "@/lib/resend"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, business, service, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Name, email, and message are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address" }, { status: 400 })
    }

    // Message length validation
    if (message.length < 50) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 50 characters long" },
        { status: 400 },
      )
    }

    // Prepare form data
    const formData: ContactFormData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      business: business?.trim() || undefined,
      service: service || undefined,
      message: message.trim(),
    }

    // Send notification email to Nexus Shift
    const emailResult = await sendContactEmail(formData)

    if (!emailResult.success) {
      console.error("Failed to send notification email:", emailResult.error)
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again or contact us directly." },
        { status: 500 },
      )
    }

    // Send auto-reply to the user (don't fail the request if this fails)
    const autoReplyResult = await sendAutoReply(formData)
    if (!autoReplyResult.success) {
      console.error("Failed to send auto-reply:", autoReplyResult.error)
      // Continue anyway - the main email was sent successfully
    }

    // Log successful submission
    console.log("Contact form submission successful:", {
      name: formData.name,
      email: formData.email,
      business: formData.business,
      service: formData.service,
      timestamp: new Date().toISOString(),
      emailId: emailResult.data?.id,
      autoReplyId: autoReplyResult.success ? autoReplyResult.data?.id : "failed",
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 1 business day.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again or contact us directly at hello@nexusshift.co.uk",
      },
      { status: 500 },
    )
  }
}
