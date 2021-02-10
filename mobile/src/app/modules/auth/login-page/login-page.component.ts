import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
 
  invalidFields = false

  password : string = "";
  email : string = "";


  constructor(private authService : AuthService, private router : Router) { 
  }

  ngOnInit() {}

  setPassword(event: any){
    this.password = event.target.value
  }

  setEmail(event){
    this.email = event.target.value
  }

  async onSubmit(){
    try {
      var uid = await this.authService.login(this.password, this.email)
      console.log(uid)
      this.router.navigate(["../../day", {uid}])
    }    
    catch (err) {
      this.invalidFields = true
    }
  }

 
  
}
