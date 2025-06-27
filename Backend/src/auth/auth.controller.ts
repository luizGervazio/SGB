import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() body: { email: string; senha: string }) {
    const user = await this.authService.validateUser(body.email, body.senha);
    return this.authService.login(user);
  }

    @Post('forgot-password')
    @Public()
    async forgotPassword(@Body() body: { email: string }) {
    return this.authService.forgotPassword(body.email);
    }

    @Post('reset-password')
    @Public()
    async resetPassword(@Body() body: { token: string, novaSenha: string }) {
    return this.authService.resetPassword(body.token, body.novaSenha);
    }

}
