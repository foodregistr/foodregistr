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

  password : String = "";
  email : String = "";


  constructor(private authService : AuthService, private router : Router) { 
  }

  ngOnInit() {}

  setPassword(event: any){
    this.password = event.target.value
  }

  setEmail(event){
    this.email = event.target.value
  }

  onSubmit(){    
    this.authService.login(this.password, this.email)
    .then( () => {
      this.router.navigate(["../../day"])
    } )
    .catch ( (err) => {
      console.log(err.error.message)
      this.invalidFields = true

    })
  }

 
  
}
