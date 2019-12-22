import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard} from './services/role-guard.service';
import { HomeComponent } from './home/home.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';


const routes: Routes = [
  {                                       
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },{
     path: 'login',
     component: LoginComponent
  },

 {
  path: 'home',
  component: HomeComponent,
  data: {
    title: 'Home'
  },
},
{
  path: 'my_order',
  component: MyOrderComponent,
  data: {
    title: 'my_order'
  },
},
{
  path: 'order_confirmation',
  component: OrderConfirmationComponent,
  data: {
    title: 'order_confirmation'
  },
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
