import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using mailto link simulation or external email service
    // For production, you would integrate with services like:
    // - Resend (resend.com)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    
    // For now, we'll log the contact submission
    // In production, replace this with actual email sending logic
    console.log("Contact form submission:", {
      to: "hello@axonteck.com",
      from: email,
      name,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulating successful email send
    // Replace with actual email service integration
    return NextResponse.json(
      { 
        success: true, 
        message: "Your message has been received. We'll get back to you soon!" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
