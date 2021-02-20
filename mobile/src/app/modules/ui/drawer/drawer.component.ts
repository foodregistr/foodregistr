import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  logOut(): void{
    console.log("log out")
  }

  changePassword(): void{
    console.log("change password")
  }

  about(): void{
    console.log("about")
  }

}
