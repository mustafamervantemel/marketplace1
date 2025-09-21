export interface User {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  user_type: 'customer' | 'seller' | 'admin';
  created_at: string;
  avatar_url?: string;
  is_active: boolean;
}

export interface Customer extends User {
  user_type: 'customer';
  addresses: Address[];
  orders: Order[];
}

export interface Seller extends User {
  user_type: 'seller';
  company_name: string;
  tax_number?: string;
  iban: string;
  commission_rate: number;
  rating: number;
  total_sales: number;
  verified: boolean;
}

export interface Product {
  id: string;
  seller_id: string;
  seller: Seller;
  name: string;
  description: string;
  price: number;
  category_id: string;
  category: Category;
  images: string[];
  stock: number;
  is_active: boolean;
  rating: number;
  review_count: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  parent_id?: string;
  children?: Category[];
}

export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  product: Product;
  quantity: number;
  created_at: string;
}

export interface Address {
  id: string;
  user_id: string;
  title: string;
  full_name: string;
  phone: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  district: string;
  postal_code: string;
  is_default: boolean;
}

export interface Order {
  id: string;
  customer_id: string;
  customer: Customer;
  total_amount: number;
  tax_amount: number;
  shipping_amount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: Address;
  created_at: string;
  updated_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product: Product;
  seller_id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface Review {
  id: string;
  product_id: string;
  customer_id: string;
  customer: Customer;
  rating: number;
  comment: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  created_at: string;
}