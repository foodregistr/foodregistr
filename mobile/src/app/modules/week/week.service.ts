import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FoodRegistry } from '../day/food-registry/FoodRegistry';
import { Store } from '../utils/store.service';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class WeekService {

    public foodtypes = ["breakfast, lunch, snack, dinner"]

    constructor(private router: Router, private fireDAO: AngularFirestore, private storeService: Store, private utilsService: UtilsService){}

    navigateToWeek(startDay :string, endDay: string){
        this.router.navigate(["tabs/week", startDay, endDay])
    }

    navigateToDay(date){
        this.router.navigate(["tabs/day", date])
    }

    getFoods(start: string, end: string): Array<any>{
        const uid = this.storeService.get('uid')
        const docsRefs = []
        const currentDate = this.utilsService.stringToDate(start)
        const endDate = this.utilsService.stringToDate(end)
        while(currentDate <= endDate){
            docsRefs.push(this.fireDAO.collection(uid).doc(this.utilsService.formatDate(currentDate)).ref)
            currentDate.setDate(currentDate.getDate() + 1)
        }
        const foods = []

        docsRefs.forEach(async ref => {
            await this.fireDAO.doc(ref).get().toPromise().then(res => {
                const dayFoods = (res.get('foodRegistries') as FoodRegistry[] || []).map(food => food.foodType)

                foods.push(dayFoods)
            }).catch(err => {
                console.log(err)
                foods.push([])
            })
        })
            

        return foods
    }
}