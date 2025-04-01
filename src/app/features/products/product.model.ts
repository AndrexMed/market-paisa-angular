export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;

  inventoryStatus: string;
}

export interface Rating {
  rate: number;
  count: number;
}
