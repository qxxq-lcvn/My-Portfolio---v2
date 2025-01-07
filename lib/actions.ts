'use server'

import { z } from "zod"
import { ContactFormSchema } from "./schemas"
import ContactFormEmail from "@/emails/contact-form-email"
import { Resend } from 'resend'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data)

    if (result.error) {
        return { error: result.error.format() }
    }

    try {
        const { name, email, message } = result.data
        const reactContent = ContactFormEmail({ name, email, message })

        const { data, error } = await resend.emails.send({
            from: 'limchanvina@gmail.com',
            to: [email],
            cc: ['limchanvina@gmail.com'],
            subject: 'Contact form submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: reactContent
        })

        if (!data || error) {
            throw new Error('Failed to send email.')
        }

        return {
            success: true
        }
    } catch (error) {
        return {error}
    }
}