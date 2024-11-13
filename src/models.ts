// Цей файл визначає три типи товарів: базовий BaseProduct, а також Electronics і Clothing, які містять специфічні поля, характерні для кожної категорії.

// Базовий тип товару
export type BaseProduct = {
    id: number;
    name: string;
    price: number;
  };
  
  // Тип для електроніки, що розширює базовий тип
  export type Electronics = BaseProduct & {
    category: 'electronics';
    brand: string;
    warranty: number;
  };
  
  // Тип для одягу, що розширює базовий тип
  export type Clothing = BaseProduct & {
    category: 'clothing';
    size: string;
    material: string;
  };
  