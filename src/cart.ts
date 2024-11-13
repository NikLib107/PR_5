// Функція addToCart додає товар до кошика, збільшуючи кількість, якщо товар вже є в кошику. Функція calculateTotal обчислює загальну вартість товарів у кошику.

import { BaseProduct } from './models';

// Тип для елемента кошика
export type CartItem<T> = {
  product: T;
  quantity: number;
};

// Функція для додавання товару в кошик
export const addToCart = <T extends BaseProduct>(
  cart: CartItem<T>[],
  product: T,
  quantity: number
): CartItem<T>[] => {
  const updatedCart = [...cart];
  const existingItem = updatedCart.find(item => item.product.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    updatedCart.push({ product, quantity });
  }

  return updatedCart;
};

// Функція для підрахунку загальної вартості кошика
export const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};
