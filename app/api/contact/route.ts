import { type NextRequest, NextResponse } from "next/server"

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

    // Here you can add your preferred method of handling the form data:

    // Option 1: Send email (you'll need to set up email service)
    // await sendEmail({
    //   to: 'hello@nexusshift.co.uk',
    //   subject: `New contact form submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Business:</strong> ${business || 'Not provided'}</p>
    //     <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    // Option 2: Save to database (if you have a contacts table)
    // const sql = neon(process.env.DATABASE_URL!)
    // await sql`
    //   INSERT INTO contacts (name, email, business, service, message, created_at)
    //   VALUES (${name}, ${email}, ${business}, ${service}, ${message}, NOW())
    // `

    // Option 3: Log to console (for testing)
    console.log("New contact form submission:", {
      name,
      email,
      business,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // For now, we'll just return success
    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 1 business day.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
