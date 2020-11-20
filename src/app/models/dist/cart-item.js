"use strict";
exports.__esModule = true;
exports.CartItem = void 0;
var CartItem = /** @class */ (function () {
    function CartItem(id, product, qty) {
        if (qty === void 0) { qty = 1; }
        this.id = id;
        this.productId = product.id;
        this.productName = product.name;
        this.price = product.price;
        this.qty = qty;
    }
    return CartItem;
}());
exports.CartItem = CartItem;
