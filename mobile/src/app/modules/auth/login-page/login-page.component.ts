 import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  invalidFields = false
  password  = "";
  email  = "";


  constructor(
    private authService : AuthService, 
    private router : Router
  ) {}

  setPassword(event: any): void {
    this.password = event.target.value
  }

  setEmail(event): void {
    this.email = event.target.value
  }

  async onSubmit(): Promise<void> {
    try {
      await this.authService.login(this.password, this.email)
      this.router.navigate(["../../day"])
    } catch (err) {
      this.invalidFields = true
    }
  }
}
