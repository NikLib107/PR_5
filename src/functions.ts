// Функція findProduct повертає товар з масиву за вказаним id або undefined, якщо товар не знайдено. Функція filterByPrice повертає масив товарів, ціна яких не перевищує задану максимальну ціну.

import { BaseProduct } from './models';

// Функція для пошуку товару за id
export const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
  return products.find(product => product.id === id);
};

// Функція для фільтрації товарів за максимальною ціною
export const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
  return products.filter(product => product.price <= maxPrice);
};
