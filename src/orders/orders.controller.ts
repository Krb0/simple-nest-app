import { Controller, Request, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { Get, Post } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { Private } from 'src/common/decorators/private.decorator'
import { Public } from 'src/common/decorators'
import { Role } from '@prisma/client'
@ApiTags('Orders')
@ApiBearerAuth('authorization')
@Controller('orders')
@Private(Role.Admin)
export class OrdersController {
  constructor (public readonly ordersService: OrdersService) {}
  /*   @Public()
   */ @Get()
  async getOrders (@Request() req: Request) {
    return await this.ordersService.getOrders()
  }

  @Post()
  async createOrder () {
    return await this.ordersService.createOrder()
  }
}
