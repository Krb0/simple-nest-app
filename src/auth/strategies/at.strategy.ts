import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor (private readonly reflector: Reflector) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: process.env.JWT_SECRET!,
    })
  }

  async validate (payload) {
    console.log({ payload })
    return { userId: payload.sub, username: payload.username }
  }
}
