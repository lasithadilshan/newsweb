import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';


const routes: Routes = [
  {path:'',component:TopheadingComponent}, //home
  {path:'tech',component:TechnewsComponent}, //tech news
  {path:'business',component:BusinessnewsComponent}, //business news
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
