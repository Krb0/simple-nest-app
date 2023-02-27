import { Injectable } from '@nestjs/common'

import { Reflector } from '@nestjs/core'
import { PrismaService } from 'nestjs-prisma'
import coingateAPI from 'src/@lib/coingate'

@Injectable()
export class OrdersService {
  constructor (
    private readonly prismaService: PrismaService,
    private readonly reflector: Reflector,
  ) {}
  async createOrder () {
    try {
      const order = await coingateAPI.order.createOrder({
        price_amount: 100,
        price_currency: 'USDT',
        receive_currency: 'USDT',
      })
      /*  const checkout = await coingateAPI.order.checkout(order.id, {
        pay_currency: 'TRX',
      })
      return checkout */
      return order
    } catch (e) {
      return null
    }
  }
  async getOrders () {
    try {
      const orders = await coingateAPI.order.listOrders()
      return orders
    } catch (e) {
      return null
    }
  }
}
