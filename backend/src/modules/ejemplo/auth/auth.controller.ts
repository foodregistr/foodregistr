import { AuthService } from './auth.service';
import { Controller, Delete, Get, HttpStatus, Inject, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response} from 'express';

@Controller('auth')
export class AuthController {
  
  @Inject()
  private authService!: AuthService;

  @Post()
  signup(@Req() req: Request, @Res() res: Response): Promise<string> {
    try{
      res.status(HttpStatus.CREATED)
      return this.authService.signup(req.body);
      
    } catch(err){
      res.status(HttpStatus.CONFLICT)
      return Promise.reject(err.message)
    }
    
  }


}