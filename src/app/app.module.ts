import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent  } from './app.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { FilterComponent } from './components/shopping-cart/filter/filter.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TimerComponent } from './timer/timer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FilterComponent,
    ShoppingCartComponent,
    TimerComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
