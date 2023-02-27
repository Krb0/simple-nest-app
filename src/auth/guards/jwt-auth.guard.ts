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
    // won't need to check role
    
    if (!role?.isPrivate) return super.canActivate(context)

    console.log({ role })
    return super.canActivate(context)
  }

  getRoleMetadata (context: ExecutionContext): IRoleMetadata {
    const role = this.reflector.getAllAndOverride('role', [
      context.getHandler(),
      context.getClass(),
    ])
    return role
  }
  roleCheck (context: ExecutionContext) {}
}
