import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password-page.component.html',
    styleUrls: ['./change-password-page.component.scss']
})
export class ChangePasswordPageComponent implements OnInit{

    public password: string;
    public repeatPassword: string;
    public email: string;

    ngOnInit() :void{

    }


    setPassword(event: any): void {
        this.password = event.target.value
    }

    setEmail(event): void {
        this.email = event.target.value
    }

    setRepeatPassword(event: any): void{
        this.repeatPassword = event.target.value
    }
}