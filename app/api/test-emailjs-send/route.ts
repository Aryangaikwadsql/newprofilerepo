import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

export async function GET() {
  try {
    // Check if environment variables are available
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const personalEmail = process.env.PERSONAL_EMAIL;

    if (!serviceId || !templateId || !publicKey || !personalEmail) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service is not properly configured. Environment variables are missing.' 
        },
        { status: 500 }
      );
    }

    // Send a test email
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        user_name: 'Test User',
        user_email: personalEmail,
        message: 'This is a test message from the portfolio website.',
      },
      {
        publicKey: publicKey,
      }
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully!',
      response: response
    });
  } catch (error: any) {
    console.error('EmailJS test send error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send test email.',
        details: error.message
      },
      { status: 500 }
    );
  }
}
