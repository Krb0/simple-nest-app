import { Injectable, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { IRoleMetadata } from 'src/common/decorators'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor (private readonly reflector: Reflector) {
    super()
  }
  canActivate (context: ExecutionContext) {
    const role = this.getRoleMetadata(context)
    console.log({ role })
    if (!role?.isPrivate) return true

    return super.canActivate(context)
  }

  getRoleMetadata (context: ExecutionContext): IRoleMetadata {
    const role = this.reflector.getAllAndOverride('role', [
      context.getHandler(),
      context.getClass(),
    ])
    return role
  }
}
