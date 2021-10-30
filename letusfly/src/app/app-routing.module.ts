import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustchoiceComponent } from './custchoice/custchoice.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [{
  path: "", component: HomeComponent  
},{

  path: 'Offers', component: OffersComponent

},{
  path: "myplan", component: CustchoiceComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
