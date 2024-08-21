import z from "zod";
const loginvalidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  name: z.string().min(3, "First name must be at least 3 characters long"),
  age: z
    .number()
    .min(18, "You must be at least 18 years old to use this service")
    .max(50, "The maximum age for registration is 50 years"),
});

export const validation = { loginvalidation };
