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

    return NextResponse.json({ 
      success: true, 
      message: 'EmailJS is properly configured!',
      config: {
        serviceId,
        templateId,
        publicKey,
        personalEmail
      }
    });
  } catch (error: any) {
    console.error('EmailJS configuration test error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to test EmailJS configuration.',
        details: error.message
      },
      { status: 500 }
    );
  }
}
