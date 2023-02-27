import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-users.dto'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class UsersService {
  constructor (private readonly prisma: PrismaService) {}
  async createUser (body: CreateUserDto) {
    try {
      const user = await this.prisma.user.create({
        data: body,
      })
      return user
    } catch (e) {
      return null
    }
  }
}
