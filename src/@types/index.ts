// Product types
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface MetaData {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaData;
  thumbnail: string;
  images: string[];
  Products: Product[];
}

// Review types
export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
  reviews: Review[];
}

// Product params types
export interface GetProductsParams {
  page?: number;
  limit?: number;
  category?: string;
  sortBy?: string;
  order?: "asc" | "desc";
  search?: string;
}

// Cart types
export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  discountPercentage?: number;
}
