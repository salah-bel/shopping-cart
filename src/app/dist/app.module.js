"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var cart_component_1 = require("./components/shopping-cart/cart/cart.component");
var filter_component_1 = require("./components/shopping-cart/filter/filter.component");
var shopping_cart_component_1 = require("./components/shopping-cart/shopping-cart.component");
var timer_component_1 = require("./timer/timer.component");
var header_component_1 = require("./components/shared/header/header.component");
var navigation_component_1 = require("./components/shared/navigation/navigation.component");
var footer_component_1 = require("./components/shared/footer/footer.component");
var product_list_component_1 = require("./components/shopping-cart/product-list/product-list.component");
var cart_item_component_1 = require("./components/shopping-cart/cart/cart-item/cart-item.component");
var product_item_component_1 = require("./components/shopping-cart/product-list/product-item/product-item.component");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                cart_component_1.CartComponent,
                filter_component_1.FilterComponent,
                shopping_cart_component_1.ShoppingCartComponent,
                timer_component_1.TimerComponent,
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                footer_component_1.FooterComponent,
                product_list_component_1.ProductListComponent,
                cart_item_component_1.CartItemComponent,
                product_item_component_1.ProductItemComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule,
                http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
