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

      html: `
      <main style="width: 100%; max-width: 1000px; margin: auto">
      <section style="width: 100%; max-width: 1000px; padding-bottom: 32px">
        <table style="width: 100%">
          <thead style="width: 100%">
            <tr style="width: 100%">
              <th
                width="20%"
                style="background-color: #d5fe00; height: 8px"
              ></th>
              <th
                width="20%"
                style="background-color: #0766ff; height: 8px"
              ></th>
              <th
                width="20%"
                style="background-color: #f7ca00; height: 8px"
              ></th>
              <th
                width="20%"
                style="background-color: #cdf300; height: 8px"
              ></th>
              <th
                width="20%"
                style="background-color: #ff7d4d; height: 8px"
              ></th>
            </tr>
          </thead>
        </table>
      </section>
      <section
        style="
          width: 100%;
          max-width: 600px;
          margin: auto;
          padding-bottom: 32px;
        "
      >
        <table style="width: 100%; padding: 26.5px 0">
          <tbody style="width: 100%">
            <tr style="width: 100%">
              <td>
                <img
                  src="cid:emailLogo"
                  alt="BrightFlow Logo"
                  width="25"
                  height="29"
                  style="vertical-align: middle; display: inline"
                />
                <span style="display: inline-block; padding-left: 12px"
                  >BrightFlow</span
                >
              </td>
              <td align="right">
                <span style="font-size: 14px"
                  >Illuminating the Path to Tomorrow
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section
        style="
          width: 100%;
          max-width: 600px;
          margin: auto;
          padding-bottom: 16px;
        "
      >
        <table style="width: 100%">
          <tr style="width: 100%">
            <td align="left">
              <img src="cid:thankYou"
                alt="მადლობა გამოწერისთვის" 
                width="100%" 
                style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
            </td>
          </tr>
        </table>
      </section>

      <section
        style="
          width: 100%;
          max-width: 600px;
          margin: auto;
          padding-bottom: 44px;
        "
      >
        <table style="width: 100%">
          <tr style="width: 100%; padding-bottom: 12px">
            <td style="font-size: 14px; line-height: 21px">
              BrightFlow ეხმარება ადამიანებს, რომ შეიძინონ ციფრული უნარები, რაც
              მათ დაუკმაყოფილებს სამომავლო მოთხოვნებს.
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px; line-height: 21px">
              კურსდამთავრებულებს საშუალება ექნებათ იყვნენ კონკურენტუნარიანი და
              მოთხოვნადი დასაქმების ბაზარზე. ამ ეტაპზე ჩვენ ვაერთიანებთ 30+
              პროგრამას მონაცემების, მარკეტინგის, დიზაინის, IT მენეჯმენტის,
              პროგრამირების მიმართულებით
            </td>
          </tr>
        </table>
      </section>
      
       <section
        style="
          width: 100%;
          max-width: 600px;
          margin: auto;
          padding-bottom: 16px;
        "
      >
        <table style="width: 100%">
          <tr style="width: 100%">
            <td align="left">
              <img src="cid:cards"
                alt="პროგრამებზე ინფორმაცია" 
                width="100%" 
                style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
            </td>
          </tr>
        </table>
      </section>

      <section
        style="
          width: 100%;
          max-width: 600px;
          margin: auto;
          padding-bottom: 16px;
        "
      >
        <table style="width: 100%; border-collapse: separate">
          <tr style="width: 100%">
            <td
              align="left"
              style="
                border: 2px solid #d1d1d1;
                border-radius: 16px;
                width: 48%;
                text-align: center;
                padding: 18px 66px;
              "
            >
              <a
                href="tel:+1234567890"
                style="display: block; text-decoration: none; color: inherit"
              >
                <img
                  src="cid:phone-call"
                  alt="phone"
                  width="24"
                  height="24"
                  style="vertical-align: middle; display: inline"
                />
                <span style="padding-left: 12px">დაგვიკავშირდი</span>
              </a>
            </td>

            <td style="width: 4%"></td>

            <td
              align="right"
              style="
                border: 2px solid #d1d1d1;
                border-radius: 16px;
                width: 48%;
                text-align: center;
                padding: 18px 66px;
              "
            >
              <a
                href="https://bright-flow-two.vercel.app/"
                style="display: block; text-decoration: none; color: inherit"
              >
                <img
                  src="cid:web"
                  alt="web-page"
                  width="24"
                  height="24"
                  style="vertical-align: middle; display: inline"
                />
                <span style="padding-left: 12px">ვებ-გვერდი</span>
              </a>
            </td>
          </tr>
        </table>
      </section>
      
    </main>
      `,

      attachments: [
        {
          filename: "brightFlowEmail.png",
          path: "https://bright-flow-two.vercel.app/brightFlowEmail.png",
          cid: "emailLogo",
          contentType: "image/png",
          contentDisposition: "inline",
        },
        {
          filename: "thankYou.png",
          path: "https://bright-flow-two.vercel.app/thankYou.png",
          cid: "thankYou",
          contentType: "image/png",
          contentDisposition: "inline",
        },
        {
          filename: "cards.png",
          path: "https://bright-flow-two.vercel.app/cards.png",
          cid: "cards",
          contentType: "image/png",
          contentDisposition: "inline",
        },
        {
          filename: "phone-call.png",
          path: "https://bright-flow-two.vercel.app/phone-call.png",
          cid: "phone-call",
          contentType: "image/png",
          contentDisposition: "inline",
        },
        {
          filename: "web.png",
          path: "https://bright-flow-two.vercel.app/web.png",
          cid: "web",
          contentType: "image/png",
          contentDisposition: "inline",
        },
      ],
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
