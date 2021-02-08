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
    this.verifyField();
    if(this.allFieldsItsOK()){ 
      this.authService.signup(this.password, this.email, this.name)
      .then( () => {
        this.router.navigate(["../../day"], {skipLocationChange: true})
      } )
      .catch ( (err) => {console.log( err.error.message)}
      )
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
