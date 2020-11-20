"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WishlistService = void 0;
var core_1 = require("@angular/core");
var api_1 = require("src/config/api");
var operators_1 = require("rxjs/operators");
var WishlistService = /** @class */ (function () {
    function WishlistService(http) {
        this.http = http;
    }
    WishlistService.prototype.getWishlist = function () {
        return this.http.get(api_1.wishlistUrl).pipe(operators_1.map(function (result) {
            var productIds = [];
            result.forEach(function (item) { productIds.push(item.id); });
            return productIds;
        }));
    };
    ;
    WishlistService.prototype.addToWishlist = function (productId) {
        return this.http.post(api_1.wishlistUrl, { id: productId });
    };
    WishlistService.prototype.removeToWishlist = function (productId) {
        return this.http["delete"](api_1.wishlistUrl + '/' + productId);
    };
    WishlistService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], WishlistService);
    return WishlistService;
}());
exports.WishlistService = WishlistService;
