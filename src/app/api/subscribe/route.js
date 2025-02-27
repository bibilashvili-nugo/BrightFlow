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
      to: "info@brightflow.ge", // Replace with your email address
      subject: "New Form Submission",
      text: `You have a new submission:\n\nName: ${name}\nEmail: ${email}`,
    });

    // Send a welcome email to the user
    await transporter.sendMail({
      from: `"BrightFlow" <${SMTP_USER}>`, // Use your email address for consistency
      to: email,
      subject: "გვიხარია რომ შემოგვიერთდი!",

      html: `
      <html>
      <head>
        <!-- Include the Google Fonts with multiple weights -->
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
      </head>
      <body>
      <main style="width: 100%; max-width: 1000px; margin: auto">
      <section style="width: 100%; max-width: 1000px; padding-bottom: 32px">
        <table style="width: 100%; border-collapse: collapse">
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
                <span style="display: inline-block; padding-left: 12px; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 20px; color: #67645E; vertical-align: middle;"
                  >BrightFlow</span
                >
              </td>
              <td align="right">
                <span style="font-size: 14px; font-family: 'Inter', sans-serif; font-weight: 400; color: #67645E"
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
          padding-bottom: 32px;
        "
      >
        <table style="width: 100%">
          <tr style="width: 100%; padding-bottom: 12px">
            <td style="font-size: 14px; line-height: 21px; color: black">
              BrightFlow ეხმარება ადამიანებს, რომ შეიძინონ ციფრული უნარები, რაც
              მათ დაუკმაყოფილებს სამომავლო მოთხოვნებს.
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px; line-height: 21px; color: black">
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
          padding-bottom: 32px;
        "
      >
        <table
          style="width: 100%; border-collapse: separate; border-spacing: 0"
        >
          <tr style="text-align: center">
            <td
              style="
                border: 2px solid #d1d1d1;
                width: 48%;
                padding-top: 18px;
                padding-bottom: 18px;
                border-radius: 16px;
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
                <span
                  style="
                    padding-left: 12px;
                    font-size: 16px;
                    color: black;
                    vertical-align: middle;
                    display: inline;
                  "
                  >დაგვიკავშირდი</span
                ></a
              >
            </td>
            <td style="width: 4%"></td>
            <td
              style="
                border: 2px solid #d1d1d1;
                width: 48%;
                padding-top: 18px;
                padding-bottom: 18px;
                border-radius: 16px;
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
                <span
                  style="
                    padding-left: 12px;
                    color: black;
                    font-size: 16px;
                    vertical-align: middle;
                    display: inline;
                  "
                  >ვებ-გვერდი</span
                ></a
              >
            </td>
          </tr>
        </table>
      </section>

      <section
        style="
          width: 100%;
          max-width: 600px;
          margin: auto;
          background-color: black;
          padding-top: 15px;
          border-radius: 28px 28px 0 0;
        "
      >
        <table style="width: 100%; max-width: 600px; padding: 0 25px;">
          <tr style="width: 100%; text-align: center">
            <td
              style="
                font-size: 18px;
                font-weight: normal;
                width: 100%;
                color: white;
                padding-top: 25.5px;
                padding-bottom: 25.5px;
              "
            >
              რა არის BrightFlow
            </td>
          </tr>

          <tr style="width: 100%; text-align: center">
            <td
              style="
                font-size: 18px;
                font-weight: normal;
                color: white;
                padding-top: 25.5px;
                padding-bottom: 25.5px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              "
            >
              გაიგე დეტალურად სამენტორო პროგრამაზე
            </td>
          </tr>
          <tr style="width: 100%; text-align: center">
            <td
              style="
                font-size: 18px;
                font-weight: normal;
                color: white;
                padding-top: 25.5px;
                padding-bottom: 25.5px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              "
            >
              გაიგე დეტალურად კურსების შესახებ
            </td>
          </tr>
          <tr style="width: 100%; text-align: center">
            <td style="padding-top: 32px; padding-bottom: 52px">
              <span
                style="
                  display: inline-block;
                  font-size: 14px;
                  color: rgba(255, 255, 255, 0.6);
                "
                >ჩვენთან, ყველაფერია, რათა თქვენი გზა წარმატებისკენ უფრო მოკლე
                და მიზანმიმართული იყოს!</span
              >
              <span
                style="
                  display: inline-block;
                  font-size: 14px;
                  color: rgba(255, 255, 255, 0.6);
                "
                >არ გამოტოვოთ ჩვენი მომავალ კვირეულები და პროგრამები.
                გველოდებით!</span
              >
            </td>
          </tr>
          <tr style="width: 100%; text-align: center">
            <td style="color: white; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 20px; padding-bottom: 24px">
              BrightFlow
            </td>
          </tr>
          <tr>
            <td align="center">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding-right: 16px; padding-bottom: 32px">
                    <a href="https://www.facebook.com/BrightFloow" style="text-decoration: none; color: inherit">
                      <img src="cid:facebook" 
                           alt="facebook" width="20" height="20" />
                    </a>
                  </td>
                  <td style="padding: 0 16px; padding-bottom: 32px">
                    <a href="https://instagram.com" style="text-decoration: none; color: inherit">
                      <img src="cid:instagram" 
                           alt="instagram" width="20" height="20" />
                    </a>
                  </td>
                  <td style="padding: 0 16px; padding-bottom: 32px">
                    <a href="https://www.linkedin.com/company/brightfloow" style="text-decoration: none; color: inherit">
                      <img src="cid:linkedin" 
                           alt="linkedin" width="20" height="20" />
                    </a>
                  </td>
                  <td style="padding-left: 16px; padding-bottom: 32px">
                    <a href="https://discord.gg/9uNkMpqdwS" style="text-decoration: none; color: inherit">
                      <img src="cid:discord" 
                           alt="discord" width="20" height="20" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table style="width: 100%; border-collapse: collapse">
          <tr>
            <td width="33%" style="background-color: #D5FE00; height: 24px"></td>
            <td width="33%" style="background-color: #0766FF; height: 24px"></td>
            <td width="33%" style="background-color: #F7CA00; height: 24px"></td>
          </tr>
        </table>
        <table
          style="
            width: 100%;
            border-collapse: collapse;
            background-color: white;
          "
        >
          <tr>
            <td
              width="20%"
              style="
                background-color: #f7bfb4;
                height: 24px;
                border-bottom-left-radius: 30px;
              "
            ></td>
            <td
              width="20%"
              style="background-color: #ffffff; height: 24px"
            ></td>
            <td
              width="20%"
              style="background-color: #ff7d4d; height: 24px"
            ></td>
            <td
              width="20%"
              style="background-color: #9cb5f7; height: 24px"
            ></td>
            <td
              width="20%"
              style="
                background-color: #cdf300;
                height: 24px;
                border-bottom-right-radius: 30px;
              "
            ></td>
          </tr>
        </table>
      </section>

      <section
        style="
          width: 100%;
          max-width: 600px;
          margin: auto;
          padding-top: 14px;
          padding-bottom: 37px;
        "
      >
        <table style="width: 100%">
          <tr style="text-align: center">
            <td style="color: black; font-size: 14">ყველა უფლება დაცულია</td>
          </tr>
          <tr style="text-align: center">
            <td style="color: black; font-size: 14">© BrightFlow 2025</td>
          </tr>
        </table>
      </section>
      
    </main>
    </body>
    </html>
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
        {
          filename: "facebook.png",
          path: "https://bright-flow-two.vercel.app/facebook.png",
          cid: "facebook",
          contentType: "image/png",
          contentDisposition: "inline",
        },
        {
          filename: "instagram.png",
          path: "https://bright-flow-two.vercel.app/instagram.png",
          cid: "instagram",
          contentType: "image/png",
          contentDisposition: "inline",
        },
        {
          filename: "linkedin.png",
          path: "https://bright-flow-two.vercel.app/linkedin.png",
          cid: "linkedin",
          contentType: "image/png",
          contentDisposition: "inline",
        },
        {
          filename: "discord.png",
          path: "https://bright-flow-two.vercel.app/discord.png",
          cid: "discord",
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
