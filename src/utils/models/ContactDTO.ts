import z from 'zod'

export const contactSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(2).max(500)
})

export type TContact = z.infer<typeof contactSchema>