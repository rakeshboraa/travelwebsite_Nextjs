import { z } from "zod";
export const ActivityformSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    category: z.array(z.string()),
    price: z.string(),
    imageUrls: z.array(z.string().url('Invalid URL format')),
    availability: z.array(z.string()),
    inventory: z.string()
})
export const CategoryformSchema = z.object({
    name: z.string().min(3, 'Title must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    slug: z.string().min(3, 'Title must be at least 3 characters'),
})

export const RegisterFormSchema = z.object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });