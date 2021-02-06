import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {

  password : String = "";
  email : String = "";
  name : String = "";
  repeatPassword : String = "";


  constructor(private authService : AuthService) { 
  }

  ngOnInit() {}

  setPassword(event: any){
    this.password = event.target.value
  }
  setRepeatPassword(event : any){
    this.repeatPassword = event.target.value
  }
  setEmail(event){
    this.email = event.target.value
  }
  setName(event){
    this.name = event.target.value
  }

  signup(){
    this.authService.signup(this.password, this.email, this.name)
    console.log(this.password )
  }
  
}
