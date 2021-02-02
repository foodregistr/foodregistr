import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{ path: '*', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    pathMatch:   'full',
    loadChildren: () =>
    import('./modules/day/day.module').then(m => m.DayModule)
  },
  {
    path: 'day',
    pathMatch:   'full',
    loadChildren: () =>
    import('./modules/day/day.module').then(m => m.DayModule)
  },*/
  {
    path: 'auth',
    pathMatch: 'full',
    loadChildren: () =>
    import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}