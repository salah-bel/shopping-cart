"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var cart_item_1 = require("../models/cart-item");
var api_1 = require("../../config/api");
var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
    }
    CartService.prototype.getCartItems = function () {
        //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
        return this.http.get(api_1.cartUrl).pipe(operators_1.map(function (result) {
            var cartItems = [];
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var item = result_1[_i];
                //console.log(item.id)  // <=======
                var productExists = false;
                for (var i in cartItems) {
                    if (cartItems[i].productId === item.product.id) {
                        cartItems[i].qty++;
                        productExists = true;
                        break;
                    }
                }
                if (!productExists) {
                    cartItems.push(new cart_item_1.CartItem(item.id, item.product));
                }
            }
            return cartItems;
        }));
    };
    CartService.prototype.addProductToCart = function (product) {
        return this.http.post(api_1.cartUrl, { product: product });
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
