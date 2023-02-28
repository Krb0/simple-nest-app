import { CacheModule, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { OrdersModule } from './orders/orders.module'
import { ZodValidationPipe } from 'nestjs-zod'
import { APP_PIPE } from '@nestjs/core'
import { UsersModule } from './users/users.module'
import { PrismaModule } from 'nestjs-prisma'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config'
import { CacheSystemModule } from './cache-system/cache-system.module'
import * as redisStore from 'cache-manager-redis-store'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 60,
      store: redisStore,
      host: process.env.REDIS_HOST!,
      port: process.env.REDIS_PORT!,
    }),
    PrismaModule.forRoot(),
    AuthModule,
    OrdersModule,
    UsersModule,
    CacheSystemModule,
  ],
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
