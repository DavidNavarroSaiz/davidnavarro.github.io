# EmailJS Setup Instructions

## Overview
Since you're using static export with GitHub Pages, API routes won't work. EmailJS provides a client-side email solution that works perfectly with static sites.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template for contact form:

**Template ID**: `template_contact` (or any name you prefer)

**Subject**: `Portfolio Contact: {{subject}}`

**Content**:
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down the **Template ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### 5. Set Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Deploy with GitHub Secrets
Since `.env.local` won't work with GitHub Pages, you need to set these as GitHub Secrets:

1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Add these repository secrets:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### 7. Update GitHub Actions Workflow
The workflow will automatically use these secrets during build.

## Free Tier Limits
- 200 emails per month
- Perfect for portfolio contact forms

## Security Notes
- EmailJS public key is safe to expose in client-side code
- No server-side secrets needed
- Works with static sites

## Testing
1. Set up the environment variables
2. Run `npm run dev`
3. Test the contact form
4. Check your email for the message

## Troubleshooting
- Ensure all environment variables are set correctly
- Check browser console for errors
- Verify EmailJS service is active
- Make sure template variables match the code
