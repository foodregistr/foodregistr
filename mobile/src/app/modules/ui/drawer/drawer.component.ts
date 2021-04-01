import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Store } from '../../utils/store.service';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  username : string

  constructor(
    private router : Router,
    private store: Store,
    private authService: AuthService) { 
    this.username = this.store.get('username')
  }

  logOut(): void {
    this.authService.deauthenticate()
    this.router.navigate(['/auth/login'])
  }

  changePassword(): void {
    console.log("change password")
  }

  about(): void {
    console.log("about")
  }

}
