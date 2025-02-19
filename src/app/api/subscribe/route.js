import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email } = body;

    // Basic validation
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Check for missing environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } =
      process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return new Response(
        JSON.stringify({ error: "Missing SMTP configuration." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create a nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Send email to yourself with form details
    await transporter.sendMail({
      from: `"Web Form" <${SMTP_USER}>`, // You can use your SMTP_USER email here
      to: "bibilashvili6@gmail.com", // Replace with your email address
      subject: "New Form Submission",
      text: `You have a new submission:\n\nName: ${name}\nEmail: ${email}`,
    });

    // Send a welcome email to the user
    await transporter.sendMail({
      from: `"Welcome" <${SMTP_USER}>`, // Use your email address for consistency
      to: email,
      subject: "Welcome!",
      // text: `Hi ${name},\n\nThank you for signing up! We are excited to have you with us.`,
      // text: `
      //   <div style="background-color: #f3f4f6; padding: 20px; text-align: center;">
      //   nugoo
      //   </div>
      // `,
      html: `
        <table role="presentation" width="100%" style="background-color: white; max-width: 1000px; margin: auto;">
          <tr>
            <td>
              <table role="presentation" width="100%" style="border-spacing: 0;">
                <tr>
                  <td width="20%" style="background-color: #D5FE00; height: 8px;"></td>
                  <td width="20%" style="background-color: #0766FF; height: 8px;"></td>
                  <td width="20%" style="background-color: #F7CA00; height: 8px;"></td>
                  <td width="20%" style="background-color: #CDF300; height: 8px;"></td>
                  <td width="20%" style="background-color: #FF7D4D; height: 8px;"></td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center">
              <table role="presentation" width="90%" style="max-width: 600px; border-spacing: 0;">
                <tr style="display: flex; justify-content: space-between;">
                  <td style="display: flex; align-items: center;">
                    <img src="cid:emailLogo" alt="BrightFlow" width="29" height="33" style="display: block;" />
                    <span style="font-size: 24px; font-weight: bold; padding-left: 12px;">BrightFlow</span>
                  </td>
                  <td align="right" style="display: flex; align-items: center;">
                    <span>ეწვიეთ ვებ გვერდს</span>
                    <img src="cid:globeLogo" alt="Bright Flow" style="display: block" width="24" height="24"/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
      attachments: [
        {
          filename: "brightFlowEmail.png",
          path: "https://bright-flow-two.vercel.app/brightFlowEmail.png",
          cid: "emailLogo",
        },
        {
          filename: "Globe.svg",
          path: "https://bright-flow-two.vercel.app/brightFlowEmail.png",
          cid: "globeLogo",
        },
      ],
      // attachments: [
      //   {
      //     filename: "brightFlowEmail.png",
      //     path: "public/brightFlowEmail.png",
      //     cid: "emailLogo",
      //   },
      // ],
    });

    return new Response(
      JSON.stringify({ message: "Emails sent successfully." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending emails:", error.message); // Detailed error logging
    return new Response(
      JSON.stringify({
        error: "Failed to send emails.",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
