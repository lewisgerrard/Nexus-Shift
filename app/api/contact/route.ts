import { type NextRequest, NextResponse } from "next/server"
import { sendContactEmail, sendAutoReply, type ContactFormData } from "@/lib/resend"

export async function POST(request: NextRequest) {
  console.log("Contact form API called")

  try {
    const body = await request.json()
    console.log("Request body:", body)

    const { name, email, business, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Validation failed: missing required fields")
      return NextResponse.json({ success: false, error: "Name, email, and message are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("Validation failed: invalid email format")
      return NextResponse.json({ success: false, error: "Please enter a valid email address" }, { status: 400 })
    }

    // Validate message length
    if (message.length < 10) {
      console.log("Validation failed: message too short")
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

    console.log("Processed contact data:", contactData)

    // Send notification email to business
    console.log("Sending notification email...")
    const emailResult = await sendContactEmail(contactData)

    if (!emailResult.success) {
      console.error("Failed to send notification email:", emailResult.error)
      return NextResponse.json(
        {
          success: false,
          error: `Failed to send email: ${emailResult.error}`,
        },
        { status: 500 },
      )
    }

    console.log("Notification email sent successfully")

    // Send auto-reply to user (don't fail if this doesn't work)
    console.log("Sending auto-reply...")
    const autoReplyResult = await sendAutoReply(contactData)
    if (!autoReplyResult.success) {
      console.warn("Failed to send auto-reply:", autoReplyResult.error)
    } else {
      console.log("Auto-reply sent successfully")
    }

    // Log successful submission
    console.log("Contact form submission completed successfully:", {
      name: contactData.name,
      email: contactData.email,
      business: contactData.business,
      service: contactData.service,
      timestamp: new Date().toISOString(),
      emailId: emailResult.data?.id,
      autoReplyId: autoReplyResult.success ? autoReplyResult.data?.id : "failed",
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        error: `An unexpected error occurred: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    )
  }
}
