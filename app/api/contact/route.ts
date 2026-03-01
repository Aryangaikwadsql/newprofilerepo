import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if environment variables are available
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const personalEmail = process.env.PERSONAL_EMAIL;

    if (!serviceId || !templateId || !publicKey || !personalEmail) {
      return NextResponse.json(
        { error: 'Email service is not properly configured. Please contact the site administrator.' },
        { status: 500 }
      );
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        user_name: name,
        user_email: email,
        message: message,
      },
      {
        publicKey: publicKey,
      }
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error: any) {
    console.error('EmailJS error:', error);
    
    let errorMessage = 'Failed to send message. ';
    
    if (error instanceof Error) {
      if (error.message.includes('forbidden')) {
        errorMessage += 'Access forbidden. Please check EmailJS service configuration.';
      } else if (error.message.includes('template')) {
        errorMessage += 'Template not found. Please check EmailJS template configuration.';
      } else if (error.message.includes('service')) {
        errorMessage += 'Service not found. Please check EmailJS service configuration.';
      } else if (error.message.includes('PUBLIC_KEY')) {
        errorMessage += 'Invalid public key. Please check EmailJS public key.';
      } else {
        errorMessage += 'Please check EmailJS configuration.';
      }
    } else {
      errorMessage += 'An unknown error occurred.';
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
