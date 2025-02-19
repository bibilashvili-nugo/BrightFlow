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
        <table style="width: 100%; border: 1px solid black; padding: 26.5px 0">
          <tbody style="width: 100%">
            <tr style="width: 100%">
              <td align="left">
                <img
                  src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
                  alt="spiderman"
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
        <table style="width: 100%; border: 1px solid black">
          <tr style="width: 100%">
            <td style="font-size: 62px">მადლობა გამოწერისთვის</td>
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
        <table style="width: 100%; border: 0">
          <tr>
            <td style="width: 50%; padding-right: 8px">
              <table style="width: 100%; height: 419px">
                <tr style="width: 100%">
                  <td
                    style="
                      height: 33%;
                      background-color: #f7ca00;
                      border-radius: 22px;
                      border-bottom: 8px solid white;
                      padding-top: 30px;
                      padding-bottom: 30px;
                      position: relative;
                    "
                  >
                    <span
                      style="
                        font-size: 36px;
                        color: white;
                        padding-left: 24px;
                        padding-right: 30px;
                      "
                      >უფასო
                    </span>
                    <span
                      style="
                        font-size: 36px;
                        color: white;
                        padding-left: 24px;
                        padding-right: 30px;
                      "
                      >მასტერკლასები</span
                    >
                    <img
                      src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
                      alt="frame"
                      width="32px"
                      height="32px"
                      style="position: absolute; top: 16px; right: 16px"
                    />
                  </td>
                </tr>
                <tr style="width: 100%">
                  <td
                    style="
                      height: 66%;
                      background-color: #0766ff;
                      border-radius: 28px;
                      border-top: 8px solid white;
                      text-align: center;
                      position: relative;
                    "
                  >
                    <img
                      src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
                      alt="frame"
                      width="32px"
                      height="32px"
                      style="position: absolute; top: 16px; right: 16px"
                    />
                    <span
                      style="
                        font-size: 36px;
                        color: white;
                        display: inline-block;
                      "
                      >შემოუერთდი საზოგადოებას
                    </span>
                    <span
                      style="
                        width: 113px;
                        height: 50px;
                        background-color: white;
                        text-align: center;
                        line-height: 50px;
                        display: inline-block;
                        margin-top: 15px;
                      "
                    >
                      DISCORD
                    </span>
                  </td>
                </tr>
              </table>
            </td>
            <td style="width: 50%; padding-left: 8px">
              <table style="width: 100%; height: 419px">
                <tr style="width: 100%">
                  <td
                    style="
                      height: 66%;
                      border-bottom: 8px solid transparent;
                      background-color: #090b0f;
                      border-radius: 28px;
                      border-bottom: 8px solid white;
                    "
                  >
                    nugo
                  </td>
                </tr>
                <tr style="width: 100%">
                  <td
                    style="
                      height: 33%;
                      border-top: 8px solid transparent;
                      background-color: #d5fe00;
                      border-radius: 22px;
                      border-top: 8px solid white;
                    "
                  >
                    nugo
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </section>
    </main>
      `,

      // text: `Hi ${name},\n\nThank you for signing up! We are excited to have you with us.`,
      // text: `
      //   <div style="background-color: #f3f4f6; padding: 20px; text-align: center;">
      //   nugoo
      //   </div>
      // `,

      // html: `
      //   <table role="presentation" width="100%" style="background-color: white; max-width: 1000px; margin: auto;">
      //     <tr style="padding-bottom: 32px;">
      //       <td >
      //         <table role="presentation" width="100%" style="border-spacing: 0;">
      //           <tr>
      //             <td width="20%" style="background-color: #D5FE00; height: 8px;"></td>
      //             <td width="20%" style="background-color: #0766FF; height: 8px;"></td>
      //             <td width="20%" style="background-color: #F7CA00; height: 8px;"></td>
      //             <td width="20%" style="background-color: #CDF300; height: 8px;"></td>
      //             <td width="20%" style="background-color: #FF7D4D; height: 8px;"></td>
      //           </tr>
      //         </table>
      //       </td>
      //     </tr>

      //      <tr>
      //         <td align="center">
      //           <table role="presentation" width="90%" style="max-width: 600px; border-spacing: 0;">
      //             <tr>
      //               <!-- Logo Section -->
      //               <td align="left">
      //                 <table role="presentation">
      //                   <tr>
      //                     <td>
      //                       <img src="cid:emailLogo" alt="BrightFlow" width="29" height="33" style="display: block;" />
      //                     </td>
      //                     <td style="font-size: 24px; font-weight: bold; padding-left: 12px; ">
      //                       BrightFlow
      //                     </td>
      //                   </tr>
      //                 </table>
      //               </td>

      //               <!-- Visit Website Section -->
      //               <td align="right">
      //                 <table role="presentation">
      //                   <tr>
      //                     <td>
      //                       <span>ეწვიეთ ვებ გვერდს</span>
      //                     </td>
      //                     <td>
      //                       <img src="cid:globeLogo" alt="Bright Flow" style="display: block;" width="24" height="24"/>
      //                     </td>
      //                   </tr>
      //                 </table>
      //               </td>
      //             </tr>
      //           </table>
      //         </td>
      //       </tr>
      //   </table>
      // `,
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
