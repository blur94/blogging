import { z } from 'zod';

export const contactValues = {
	email: '',
	fullName: '',
	message: '',
	subject: '',
};

export const contactSchema = z.object({
	email: z.string().email('Invalid Email').min(1, 'Email is required'),
	fullName: z.string().min(1, 'Full Name is required'),
	message: z.string().min(1, 'Message is required'),
	subject: z.string().min(1, 'Subject is required'),
});

export type ContactType = z.infer<typeof contactSchema>;
