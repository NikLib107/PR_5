"use strict";
// Функція findProduct повертає товар з масиву за вказаним id або undefined, якщо товар не знайдено. Функція filterByPrice повертає масив товарів, ціна яких не перевищує задану максимальну ціну.
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByPrice = exports.findProduct = void 0;
// Функція для пошуку товару за id
const findProduct = (products, id) => {
    return products.find(product => product.id === id);
};
exports.findProduct = findProduct;
// Функція для фільтрації товарів за максимальною ціною
const filterByPrice = (products, maxPrice) => {
    return products.filter(product => product.price <= maxPrice);
};
exports.filterByPrice = filterByPrice;
