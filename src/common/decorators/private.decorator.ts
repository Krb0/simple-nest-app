import { SetMetadata, UseGuards } from '@nestjs/common'
import { Role } from '@prisma/client'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'

interface IRole {
  roleLevel: Role
  isPrivate: boolean
}
export type IRoleMetadata = IRole | undefined

export const Private = (roleLevel: Role): MethodDecorator & ClassDecorator => {
  return (target: object): void => {
    SetMetadata('role', { roleLevel, isPrivate: true })(target as Function)
    UseGuards(JwtAuthGuard)(target as Function)
  }
}
