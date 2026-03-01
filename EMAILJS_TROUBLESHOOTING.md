# EmailJS Troubleshooting Guide

## Common Issues and Solutions

### 1. "The public key is required" Error

This error occurs when the `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` environment variable is not set or is empty.

**Solution:**
1. Make sure you have created a `.env.local` file in your project root (not just `.env`)
2. Add your EmailJS public key to the file:
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
   ```
3. Restart your development server:
   ```bash
   npm run dev
   ```

### 2. Environment Variables Not Loading

Next.js requires you to restart the development server when you add new environment variables.

**Solution:**
1. Make sure your `.env.local` file contains all required variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   NEXT_PUBLIC_PERSONAL_EMAIL=your_email_here
   ```
2. Stop your development server (Ctrl+C)
3. Start it again with `npm run dev`

### 3. Variables Showing as "undefined"

If you see "undefined" in the error logs, it means the environment variables are not being loaded.

**Solution:**
1. Check that you're using `.env.local` and not just `.env`
2. Make sure all variable names exactly match:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_PERSONAL_EMAIL`
3. Ensure there are no extra spaces or characters in your `.env.local` file

### 4. Testing Environment Variables

You can test if your environment variables are loaded correctly by adding this temporary code to your Contact component:

```javascript
// Add this temporarily to check if variables are loaded
console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
console.log("Personal Email:", process.env.NEXT_PUBLIC_PERSONAL_EMAIL);
```

### 5. Verifying EmailJS Configuration

1. Go to your EmailJS dashboard
2. Check that your service ID exists in the "Email Services" tab
3. Check that your template ID exists in the "Email Templates" tab
4. Verify that your public key is correct in the "Account" tab

### 6. Still Not Working?

If you're still experiencing issues:

1. Check the browser console for detailed error messages
2. Make sure you're using the correct EmailJS account credentials
3. Verify that your EmailJS service is properly configured and active
4. Check that your EmailJS template has the correct fields

For additional help, visit the [EmailJS documentation](https://www.emailjs.com/docs/) or contact their support.
