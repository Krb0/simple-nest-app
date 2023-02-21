import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(5),
  password: z.string().min(8),
})

// class is required for using DTO as a type
export class CreateUserDto extends createZodDto(CreateUserSchema) {}
