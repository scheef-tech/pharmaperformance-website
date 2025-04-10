import { z } from "zod";

export const contactSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    companyName: z.string().optional(),
    email: z.string().email(),
    phoneNumber: z.string().optional(),
    message: z.string().min(1)
})

export type ContactSchema = typeof contactSchema