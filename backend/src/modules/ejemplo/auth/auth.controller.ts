import { AuthService } from './auth.service';
import { Controller, Delete, Get, HttpStatus, Inject, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response} from 'express';

@Controller('auth')
export class AuthController {
  
  @Inject()
  private authService!: AuthService;

  @Post('signup')
  signup(@Req() req: Request, @Res() res: Response){
    this.authService.signup(req.body)
    .then(() => {
      res.status(HttpStatus.CREATED)
      res.json({mesage : "ok"})
    }) 
    .catch((err) => {
      res.status(HttpStatus.CONFLICT)
      res.json({message : err.message})
    })
  }
    
  @Post('login')
  login(@Req() req: Request, @Res() res: Response){
    this.authService.login(req.body.email)//, req.body.password
    .then(() => {
      res.status(HttpStatus.CREATED)
      res.json({mesage : "ok"})
    }) 
    .catch((err) => {
      res.status(HttpStatus.CONFLICT)
      res.json({message : err.message})
    })
  }

}