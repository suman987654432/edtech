import nodemailer from 'nodemailer';

// @desc    Handle contact form submission and send email
// @route   POST /api/contact
// @access  Public
export const handleContactSubmit = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please provide all required fields: name, email, subject, and message.' });
  }

  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || 'sumanqaj9876@gmail.com';

    // Check if configuration is default or missing
    if (!emailUser || !emailPass || emailUser.includes('your_smtp_sender_email') || emailPass.includes('your_smtp_app_password')) {
      console.warn('⚠️ SMTP credentials not configured or placeholder detected in .env. Skipping actual email sending.');
      console.log(`\n=========================================\n[Contact Form Submission (Fallback Log)]\nFrom: ${name} <${email}>\nSubject: ${subject}\nMessage: ${message}\n=========================================\n`);
      return res.status(200).json({ 
        message: 'Message received! (SMTP credentials not configured, printed to console)' 
      });
    }

    // Configure transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${emailUser}>`, // Show sender's name, but send from authorized account to prevent SPF/DMARC rejection
      to: emailTo,
      replyTo: email, // Allow reply-to directly to the user's email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #3b82f6; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Message</h2>
          </div>
          <div style="padding: 24px;">
            <p style="margin-top: 0;">You have received a new message from the contact form on your website.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px; border-bottom: 1px solid #edf2f7;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;">Subject:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;">${subject}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin-top: 20px;">
              <h4 style="margin: 0 0 8px 0; color: #1e293b;">Message Content:</h4>
              <p style="margin: 0; white-space: pre-wrap; color: #475569;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
            This email was automatically generated from the CareerForge Contact Form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Contact form email successfully sent to ${emailTo} from ${email}`);
    
    return res.status(200).json({ 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('❌ Error sending email via Nodemailer:', error);
    return res.status(500).json({ 
      message: 'Failed to send email. Please check backend SMTP logs or try again later.' 
    });
  }
};
