import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password-page.component.html',
    styleUrls: ['./change-password-page.component.scss']
})
export class ChangePasswordPageComponent implements OnInit{

    public invalidPassword: boolean
    private changePasswordForm : FormGroup;

    constructor( private formBuilder: FormBuilder, private authService: AuthService) {
      
    }

    ngOnInit() :void{
        this.changePasswordForm = this.formBuilder.group({
            password: new FormControl('', [Validators.required]),
            repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
            newPassword: new FormControl('', [Validators.required]),
        }, {
            validators: this.mustMatch
        });
    }

    get password() { return this.changePasswordForm.get('password'); }

    get repeatPassword() { return this.changePasswordForm.get('repeatPassword'); }

    get newPassword() { return this.changePasswordForm.get('newPassword'); }

    onSubmit(){
        if(!this.changePasswordForm.invalid){
            this.authService.updatePassword(this.changePasswordForm.get('password').value, this.changePasswordForm.get('newPassword').value).then(res => {
                console.log("password changed successfuly")
            }).catch(err => {
                console.log(err)
                console.log("contraseña caca")
                this.invalidPassword = true
                return;
            })
        }else {
            console.log("algo no funca")
            return;
        }
    }

    mustMatch(c: AbstractControl) : {invalid: boolean}{
        const newpassword = c.get('newPassword')
        const repeatPassword = c.get('repeatPassword') 
        
        if (newpassword.value !== repeatPassword.value) {
            repeatPassword.setErrors({mustMatch: true})
            return {invalid: true};
        } 
        
    }

}

