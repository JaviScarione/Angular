import { Routes } from "@angular/router";

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AbautComponent } from '../abaut/abaut.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'dishdetail/:id', component: DishdetailComponent },
    {path: 'contactus', component: ContactComponent},
    {path: 'abaut', component: AbautComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];