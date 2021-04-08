import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private router: Router,
    private utilsService: UtilsService
    ) {}
  
  ngOnInit(): void{
    this.router.navigate(["tabs/day/register"])
  }


  public goToToday() {
    const date = this.utilsService.formatDate(new Date())
    this.router.navigate(["tabs/day"])
  }

  public goToWeek() {
    console.log('WIP')
  }

  public goToMonth() {
    this.router.navigate(["tabs/month"])

  }

  public async openSidebar(): Promise<void> {
    await this.menu.open()
  }

}
