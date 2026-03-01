<div align="center">
  <br />
    <img src="public/next.svg" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Framer-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">My Personal Portfolio Website</h3>

   <div align="center">
      Hi! I'm Aryan, a Developer based in Mumbai.
    </div>
    
   <div align="center">
     <h3><a href="https://myportfolio-ztso.vercel.app/">Live Demo</a></h3>
   </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 📧 [EmailJS Setup](#emailjs-setup)

## <a name="introduction">🤖 Introduction</a>

Welcome to my personal portfolio website! This project showcases my skills, projects, and experience as a developer. Built with Next.js, it features interactive 3D elements, smooth animations, and a responsive design that works seamlessly across all devices.

As a developer based in Mumbai, I've created this portfolio to demonstrate my capabilities in modern web development technologies and my passion for creating engaging user experiences.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Three.js
- Framer Motion
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Hero**: Captivating introduction featuring a spotlight effect and dynamic background.

👉 **Bento Grid**: Modern layout presenting personal information using cutting-edge CSS design techniques.

👉 **3D Elements**:  Interactive 3D design elements, such as a GitHub-style globe and card hover effects, adding depth and engagement.

👉 **Testimonials**: Dynamic testimonials area with scrolling or animated content for enhanced engagement.

👉 **Work Experience**: Prominent display of professional background for emphasis and credibility.

👉 **Canvas Effect**: Innovative use of HTML5 canvas to create visually striking effects in the "approaches" section.

👉 **Responsiveness**: Seamless adaptability across all devices, ensuring optimal viewing experience for every user.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone <repository-url>
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="emailjs-setup">📧 EmailJS Setup</a>

To enable the contact form functionality:

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)
2. After logging in, go to the "Email Services" tab and create a new service (e.g., Gmail, Outlook, etc.)
3. Go to the "Email Templates" tab and create a new template
4. Find your service ID, template ID, and public key in the EmailJS dashboard:
   - Service ID: Found in the "Email Services" tab, it's the ID of the service you created
   - Template ID: Found in the "Email Templates" tab, it's the ID of the template you created
   - Public Key: Found in the "Account" tab under "API Keys"
5. Create a `.env.local` file in the root directory with the following variables:
   ```
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key

