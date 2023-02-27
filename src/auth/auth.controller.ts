import { Controller, HttpException, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Post, Body } from '@nestjs/common'
import { CredentialsDto } from './dto/login-user.dto'
import { CreateUserDto } from '../users/dto/create-users.dto'
import { ApiTags } from '@nestjs/swagger'
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor (private readonly authService: AuthService) {}

  @Post('login')
  async login (@Body() body: CredentialsDto) {
    return this.authService.validateUser(body.email, body.password)
  }
  @Post('signup')
  async signup (@Body() body: CreateUserDto) {
    const user = await this.authService.registerUser(body)

    if (user) return user
    throw new HttpException(
      'User could not be registered',
      HttpStatus.BAD_REQUEST,
    )
  }
}
