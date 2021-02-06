import { AuthService } from './auth.service';
import { Controller, Delete, Get, Inject, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  
  @Inject()
  private authService!: AuthService;

  @Post()
  signup(@Req() req: Request): Promise<string> {
    return this.authService.signup(req.body);
  }


}