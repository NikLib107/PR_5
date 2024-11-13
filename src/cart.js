"use strict";
// Функція addToCart додає товар до кошика, збільшуючи кількість, якщо товар вже є в кошику. Функція calculateTotal обчислює загальну вартість товарів у кошику.
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = exports.addToCart = void 0;
// Функція для додавання товару в кошик
const addToCart = (cart, product, quantity) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(item => item.product.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    }
    else {
        updatedCart.push({ product, quantity });
    }
    return updatedCart;
};
exports.addToCart = addToCart;
// Функція для підрахунку загальної вартості кошика
const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};
exports.calculateTotal = calculateTotal;
