'use server';

import { z } from 'zod';
import { generateServiceFaqs } from '@/ai/flows/generate-service-faqs';
import { revalidatePath } from 'next/cache';

// Contact Form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  service: z.string({ required_error: 'Please select a service.' }).min(1, { message: 'Please select a service.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    service?: string[];
    message?: string[];
  }
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check your inputs.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would send this data to a CRM, email service, or database.
  console.log('New contact form submission:', validatedFields.data);
  
  // Revalidate to clear form on success (if using form state to clear)
  // revalidatePath('/contact');

  return {
    message: 'Thank you for your inquiry! We will get back to you shortly.',
    success: true,
  };
}


// FAQ Generation
export async function generateFaqAction(serviceName: string, serviceDescription: string) {
    try {
        const result = await generateServiceFaqs({ serviceName, serviceDescription });
        return { success: true, faq: result.faqPage };
    } catch (error) {
        console.error("Error generating FAQs:", error);
        return { success: false, error: "Failed to generate FAQs. Please try again later." };
    }
}
