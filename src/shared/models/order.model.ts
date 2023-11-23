export interface OrderItem {
  name: string;
  quantity: number;
}

export interface OrderResponse {
  number: string;
  items: { name: string, quantity: number }[];
}
