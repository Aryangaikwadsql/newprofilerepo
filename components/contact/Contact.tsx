import React, { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

import useAlert from '@/hooks/useAlert';
import Alert from './Alert';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Check if environment variables are available
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const personalEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    if (!serviceId || !templateId || !publicKey || !personalEmail) {
      setLoading(false);
      showAlert({
        show: true,
        text: "Email service is not properly configured. Please contact the site administrator.",
        type: 'danger',
      });
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error: Error) => {
          setLoading(false);
          console.error("EmailJS error:", error);
          console.error("EmailJS error details:", {
            serviceId,
            templateId,
            publicKey
          });

          let errorMessage = "I didn't receive your message 😢. ";
          
          if (error instanceof Error) {
            console.error("EmailJS detailed error:", {
              message: error.message,
              serviceId,
              templateId,
              publicKey
            });
            
            if (error.message.includes("forbidden")) {
              errorMessage += "Access forbidden. Please check your EmailJS service configuration.";
            } else if (error.message.includes("template")) {
              errorMessage += "Template not found. Please check your EmailJS template configuration.";
            } else if (error.message.includes("service")) {
              errorMessage += "Service not found. Please check your EmailJS service configuration.";
            } else if (error.message.includes("PUBLIC_KEY")) {
              errorMessage += "Invalid public key. Please check your EmailJS public key.";
            } else {
              errorMessage += "Please make sure EmailJS is configured correctly. Check console for details.";
            }
          } else {
            console.error("EmailJS unknown error:", error);
            errorMessage += "An unknown error occurred. Please check the console for more details.";
          }

          showAlert({
            show: true,
            text: errorMessage,
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className=" c-space w-full  my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen  flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 h-[860px]  -translate-y-10" />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I&apos;m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

        <Image src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" width={24} height={24} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
