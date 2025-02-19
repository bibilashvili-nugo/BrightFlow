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
        <div style="width: 1000px; background-color: white;">
          <div style="display: flex; padding-bottom: 44px">
            <hr style="width: 200px; height: 8px; background-color: #D5FE00; border: none;"/>
            <hr style="width: 200px; height: 8px; background-color: #0766FF; border: none;"/>
            <hr style="width: 200px; height: 8px; background-color: #F7CA00; border: none;"/>
            <hr style="width: 200px; height: 8px; background-color: #CDF300; border: none;"/>
            <hr style="width: 200px; height: 8px; background-color: #FF7D4D; border: none;"/>
          </div>
          <div style="width: 600px; margin: auto;">
            <table role="presentation" style="width: 100%; border-spacing: 0; padding: 0;">
              <tr>
                <td style="display: flex; align-items: center;">
                  <img src="cid:emailLogo" alt="BrightFlow" width="29px" height="33px" style="display: block;" />
                  <span style="font-size: 24px; font-weight: bold; display: block; padding-left: 12px;">BrightFlow</span>
                </td>
                <td style="text-align: right; padding-left: 12px;">
                  <span>ეწვიეთ ვებ გვერდს</span>
                </td>
              </tr>
            </table>
          </div>
        </div>

      `,
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
