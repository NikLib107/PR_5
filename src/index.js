"use strict";
// Цей файл демонструє використання всіх створених функцій. Ми створюємо масиви товарів для кожної категорії, знаходимо товар, фільтруємо їх за ціною, додаємо товари в кошик і підраховуємо загальну вартість.
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const cart_1 = require("./cart");
// Тестові дані для електроніки та одягу
const electronics = [
    {
        id: 1,
        name: "Телефон",
        price: 10000,
        category: 'electronics',
        brand: "Samsung",
        warranty: 24,
    },
    {
        id: 2,
        name: "Ноутбук",
        price: 30000,
        category: 'electronics',
        brand: "Dell",
        warranty: 12,
    }
];
const clothing = [
    {
        id: 3,
        name: "Футболка",
        price: 500,
        category: 'clothing',
        size: "M",
        material: "Cotton",
    },
    {
        id: 4,
        name: "Джинси",
        price: 1500,
        category: 'clothing',
        size: "L",
        material: "Denim",
    }
];
// Тестування функцій
// Пошук товару
const phone = (0, functions_1.findProduct)(electronics, 1);
console.log("Знайдений товар:", phone);
// Фільтрація товарів за ціною
const affordableElectronics = (0, functions_1.filterByPrice)(electronics, 20000);
console.log("Доступна електроніка до 20000:", affordableElectronics);
// Створення кошика та додавання товарів
let cart = [];
cart = (0, cart_1.addToCart)(cart, electronics[0], 1);
cart = (0, cart_1.addToCart)(cart, clothing[0], 2);
// Підрахунок загальної вартості кошика
const total = (0, cart_1.calculateTotal)(cart);
console.log("Загальна вартість кошика:", total);
