import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { OrdersModule } from './orders/orders.module'
import { ZodValidationPipe } from 'nestjs-zod'
import { APP_PIPE } from '@nestjs/core'
import { UsersModule } from './users/users.module'
import { PrismaModule } from 'nestjs-prisma'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [PrismaModule.forRoot(), AuthModule, OrdersModule, UsersModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    AppService,
  ],
})
export class AppModule {}
