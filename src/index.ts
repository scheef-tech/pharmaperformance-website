import { Hono } from "hono";
import { EmailService } from "./EmailService";
// Remove AWS SDK
// import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";



// Define CloudflareBindings interface

const app = new Hono<{ Bindings: Env }>();

app.get("/message", (c) => {
  return c.text("Hello Hono!");
});

// Contact form API endpoint
app.post("/api/contact", async (c) => {
  try {
    // Parse request body
    const formData = await c.req.json();
    
    // Validate input data
    const { firstName, lastName, company, email, phone, message } = formData;
    
    if (!firstName || !lastName || !email || !message) {
      return c.json(
        { error: "Bitte füllen Sie alle erforderlichen Felder aus." },
        { status: 400 }
      );
    }
    
    // Create email service with the SEND_EMAIL binding
    const emailService = new EmailService(c.env.SEB, c.env.EMAIL_FROM);
    
    // Create email content
    const to = c.env.EMAIL_TO;
    const subject = `Neue Kontaktanfrage von ${firstName} ${lastName}`;
    
    const emailContent = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Unternehmen:</strong> ${company || 'Nicht angegeben'}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${message}</p>
    `;
    
    // Send email using EmailService
    await emailService.sendEmail(to, subject, emailContent);
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return c.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
});

export default app;
