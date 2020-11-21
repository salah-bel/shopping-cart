import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'shop',      component: ShoppingCartComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '',   redirectTo: '/shop', pathMatch: 'full'},
  { path: '**',   redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
