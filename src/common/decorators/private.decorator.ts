import { SetMetadata, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'

interface IRole {
  roleLevel: number
  isPrivate: boolean
}
export type IRoleMetadata = IRole | undefined

export const Private = (
  roleLevel: number,
): MethodDecorator & ClassDecorator => {
  return (target: object): void => {
    SetMetadata('role', { roleLevel })(target as Function)
    UseGuards(JwtAuthGuard)(target as Function)
  }
}
