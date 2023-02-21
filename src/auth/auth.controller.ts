import { Controller } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Post, Body } from '@nestjs/common'
import { CredentialsDto } from './dto/login-user.dto'
import { CreateUserDto } from '../users/dto/create-users.dto'

@Controller('auth')
export class AuthController {
  constructor (private readonly authService: AuthService) {}

  @Post('login')
  async login (@Body() body: CredentialsDto) {
    return this.authService.validateUser(body.email, body.password)
  }
  @Post('signup')
  async signup (@Body() body: CreateUserDto) {
    return this.authService.registerUser(body)
  }
}
