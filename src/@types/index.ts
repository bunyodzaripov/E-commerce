// Product types
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  products: Product[];
  rating: {
    rate: number;
    count: number;
  };
}
