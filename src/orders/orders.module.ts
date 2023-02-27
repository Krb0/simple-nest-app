import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { OrdersController } from './orders.controller'
import { PrismaService } from 'nestjs-prisma'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [],
  providers: [OrdersService, PrismaService],
  controllers: [OrdersController],
})
export class OrdersModule {}
