import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { CreateUserDto } from '../users/dto/create-users.dto'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
export type UserWithoutPassword = Omit<User, 'password'>
@Injectable()
export class AuthService {
  constructor (
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser (
    email: string,
    pass: string,
  ): Promise<{
    access_token: string
  } | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    })

    // password must be encrypted in the future
    // TODO: Implement encryption & decryption
    if (user && user.password === pass) {
      const { password, id, ...withoutPassword } = user
      const payload = {
        ...withoutPassword,
        sub: user.id,
      }
      return {
        access_token: this.jwtService.sign(payload),
      }
    }
    throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
  }
  async registerUser (body: CreateUserDto) {
    // password must be encrypted in the future
    // TODO: Implement encryption & decryption

    const res = this.userService.createUser(body)
    return res
  }
}
