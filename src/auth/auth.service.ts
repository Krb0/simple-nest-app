import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { CreateUserDto } from '../users/dto/create-users.dto'
import { UsersService } from '../users/users.service'
type UserWithoutPassword = Omit<User, 'password'>
@Injectable()
export class AuthService {
  constructor (
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async validateUser (
    email: string,
    pass: string,
  ): Promise<UserWithoutPassword | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }
  async registerUser (body: CreateUserDto) {
    console.log(this.userService)
  }
}
