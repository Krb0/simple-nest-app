import { SetMetadata } from '@nestjs/common'
import { Role } from '@prisma/client'
export const Public = () =>
  SetMetadata('role', {
    roleLevel: Role.Public,
    isPrivate: false,
  })
