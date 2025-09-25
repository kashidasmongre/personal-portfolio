"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      type: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors in the form.",
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // This needs to be a verified domain on Resend
      to: ["your-email@example.com"], // <--- REPLACE WITH YOUR EMAIL ADDRESS
      subject: `New Message from ${name} via Portfolio`,
      reply_to: email,
      html: `<p>You have received a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        type: "error",
        message: "There was an error sending your message. Please try again.",
      };
    }

    console.log("Email sent successfully:", data);
    return {
      type: "success",
      message: "Thank you! Your message has been sent.",
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      type: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
}
