import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'
import { CreateUserSchema } from 'src/users/dto/create-users.dto'

export const CredentialsSchema = CreateUserSchema.pick({
  email: true,
  password: true,
}).strict()

// class is required for using DTO as a type
export class CredentialsDto extends createZodDto(CredentialsSchema) {}
