import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {

  emailVisibility = true  
  signoEmailVisibility = false
  nameVisibility = false
  passVisibility = false
  reapatPassVisibility = false
  matchVisibility = false

  submited : boolean = false;
  invalid : boolean = false;
  password : String = "";
  email : String = "";
  name : String = "";
  repeatPassword : String = "";


  constructor(private authService : AuthService, private router : Router) { 
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

  onSubmit(){    
    //this.submited = true;

    if(!(this.repeatPassword == "" || this.password == "" || this.repeatPassword != this.password)){ 
      this.authService.signup(this.password, this.email, this.name)
      this.router.navigate(["../../day"]) 
    }
  }

  visibility(){
    if(this.email == ""){
      return ""
    }
  }
  
}
