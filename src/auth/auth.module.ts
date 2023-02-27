import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { PrismaService } from 'nestjs-prisma'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './strategies/at.strategy'

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET!,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
