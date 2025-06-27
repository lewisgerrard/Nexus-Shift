import { type NextRequest, NextResponse } from "next/server"
import { sendContactEmail, sendAutoReply, type ContactFormData } from "@/lib/resend"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, business, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Name, email, and message are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address" }, { status: 400 })
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long" },
        { status: 400 },
      )
    }

    const contactData: ContactFormData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      business: business?.trim(),
      service: service?.trim(),
      message: message.trim(),
    }

    // Send notification email to business
    const emailResult = await sendContactEmail(contactData)

    if (!emailResult.success) {
      console.error("Failed to send notification email:", emailResult.error)
      return NextResponse.json({ success: false, error: "Failed to send email. Please try again." }, { status: 500 })
    }

    // Send auto-reply to user (don't fail if this doesn't work)
    const autoReplyResult = await sendAutoReply(contactData)
    if (!autoReplyResult.success) {
      console.warn("Failed to send auto-reply:", autoReplyResult.error)
    }

    // Log successful submission
    console.log("Contact form submission received:", {
      name: contactData.name,
      email: contactData.email,
      business: contactData.business,
      service: contactData.service,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    )
  }
}
