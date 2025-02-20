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
              <td align="left">
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
            <td>
              <img src="cid:thankYou"
                alt="მადლობა გამოწერისთვის" 
                width="400px" 
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

      <section style="width: 100%; max-width: 600px; margin: auto">
        <table style="width: 100%; border-collapse: collapse">
          <tr>
            <td style="width: 50%; padding-right: 8px">
              <table style="width: 100%; height: 419px; border-spacing: 0">
                <tr>
                  <td
                    style="
                      height: 33%;
                      background-color: #f7ca00;
                      border-radius: 22px;
                      border-bottom: 8px solid white;
                      text-align: left;
                      padding: 30px;
                    "
                  >
                    <table style="width: 100%">
                      <tr>
                        <td style="font-size: 36px; color: white">უფასო</td>
                        <td style="text-align: right; margin-bottom: 64px">
                          <img
                            src="frame.png"
                            alt="frame"
                            width="32"
                            height="32"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 36px; color: white">
                          მასტერკლასები
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      height: 66%;
                      background-color: #0766ff;
                      border-radius: 28px;
                      border-top: 8px solid white;
                      text-align: center;
                    "
                  >
                    <table style="width: 100%">
                      <tr>
                        <td style="text-align: right; padding: 10px">
                          <img
                            src="frame.png"
                            alt="frame"
                            width="32"
                            height="32"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 36px; color: white">
                          შემოუერთდი საზოგადოებას
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 15px">
                          <span
                            style="
                              width: 113px;
                              height: 50px;
                              background-color: white;
                              display: inline-block;
                              text-align: center;
                              line-height: 50px;
                            "
                          >
                            DISCORD
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>

            <td style="width: 50%; padding-left: 8px">
              <table style="width: 100%; height: 419px; border-spacing: 0">
                <tr>
                  <td
                    style="
                      height: 66%;
                      background-color: #090b0f;
                      border-radius: 28px;
                      border-bottom: 8px solid white;
                      text-align: center;
                      color: white;
                    "
                  >
                    <table>
                      <tr>
                        <td style="text-align: right; padding-right: 16px">
                          <img
                            src="frame.png"
                            alt="frame"
                            width="32"
                            height="32"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            style="
                              width: 113px;
                              height: 53px;
                              color: white;
                              background-color: #0766ff;
                              display: inline-block;
                              text-align: center;
                              line-height: 53px;
                              font-size: 32px;
                            "
                            >React</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td style="align-items: center">
                          <span style="color: #d5fe00; font-size: 36px"
                            >სამენტორო პროგრამა</span
                          >
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      height: 33%;
                      background-color: #d5fe00;
                      border-radius: 22px;
                      border-top: 8px solid white;
                      text-align: center;
                    "
                  >
                    <table>
                      <tr>
                        <td style="text-align: left; padding-left: 24px">
                          <span style="display: inline-block; font-size: 36px"
                            >ციფრული პროდუქტები
                          </span>
                        </td>
                        <td>
                          <img
                            src="frame.png"
                            alt="frame"
                            width="32"
                            height="32"
                          />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
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
          filename: "thankYou.jpg",
          path: "https://bright-flow-two.vercel.app/thankYou.jpg",
          cid: "thankYou",
          contentType: "image/jpg",
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
