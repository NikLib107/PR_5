// Цей файл демонструє використання всіх створених функцій. Ми створюємо масиви товарів для кожної категорії, знаходимо товар, фільтруємо їх за ціною, додаємо товари в кошик і підраховуємо загальну вартість.

import { Electronics, Clothing } from './models';
import { findProduct, filterByPrice } from './functions';
import { CartItem, addToCart, calculateTotal } from './cart';

// Тестові дані для електроніки та одягу
const electronics: Electronics[] = [
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

const clothing: Clothing[] = [
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
const phone = findProduct(electronics, 1);
console.log("Знайдений товар:", phone);

// Фільтрація товарів за ціною
const affordableElectronics = filterByPrice(electronics, 20000);
console.log("Доступна електроніка до 20000:", affordableElectronics);

// Створення кошика та додавання товарів
let cart: CartItem<Electronics | Clothing>[] = [];
cart = addToCart(cart, electronics[0], 1);
cart = addToCart(cart, clothing[0], 2);

// Підрахунок загальної вартості кошика
const total = calculateTotal(cart);
console.log("Загальна вартість кошика:", total);
