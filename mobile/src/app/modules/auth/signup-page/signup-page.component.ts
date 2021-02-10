import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {

  emailVisibility = false  
  nameVisibility = false
  passVisibility = false
  repeatPassVisibility = false
  matchVisibility = false
  duplicatedEmailVisibility = false

  password : string = "";
  email : string = "";
  name : string = "";
  repeatPassword : string = "";


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

  async onSubmit(){    
    this.verifyField();
    if(this.allFieldsItsOK()){ 
      try {
        var uid = await this.authService.signup(this.password, this.email, this.name)
        this.router.navigate(["../../day", {uid}]) 
      }
      catch(err) {
        switch(err.message){
          case "The email address is badly formatted.":
            this.emailVisibility = true
            break;
          case "Password should be at least 6 characters":
            this.passVisibility = true
            break;
          case "The email address is already in use by another account.":
            this.duplicatedEmailVisibility = true
            break;
        }
      }
    }
  }

  allFieldsItsOK(){
    return  (!this.emailVisibility && !this.repeatPassVisibility
            && !this.passVisibility && !this.nameVisibility && !this.matchVisibility)
  }
  verifyField(){
    this.emailVisibility = this.email == ""
    this.repeatPassVisibility = this.repeatPassword == ""
    this.passVisibility = this.password == ""
    this.nameVisibility = this.name == ""
    this.matchVisibility = (!this.repeatPassVisibility) && this.repeatPassword != this.password

  }
  
}
