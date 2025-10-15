# Email Setup Instructions

## Environment Configuration

To enable email functionality for your contact form and hire me modal, you need to create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=dcnavarros97@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_SERVICE=gmail
```

## Gmail Setup Steps

1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification

2. **Generate App Password**
   - In your Google Account settings, go to Security
   - Under "2-Step Verification", find "App passwords"
   - Generate a new app password for "Mail"
   - Use this 16-character password (not your regular Gmail password) in the `EMAIL_PASS` variable

3. **Create .env.local file**
   - Create a file named `.env.local` in your project root
   - Add the environment variables above
   - Replace `your_app_password_here` with the generated app password

## Security Notes

- Never commit the `.env.local` file to version control
- Keep your app password secure
- The `.env.local` file is already in `.gitignore`

## Testing

Once configured, both the contact form and hire me modal will send emails to `dcnavarros97@gmail.com` when users submit forms.

## Troubleshooting

- If emails aren't sending, check the console for error messages
- Ensure your app password is correct
- Verify 2-factor authentication is enabled
- Check that the `.env.local` file is in the project root
