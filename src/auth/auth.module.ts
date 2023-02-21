import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { PrismaService } from 'nestjs-prisma'

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  imports: [UsersModule],
})
export class AuthModule {}
