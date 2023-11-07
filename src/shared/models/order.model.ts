export interface OrderResponse {
  number: string;
  items: { name: string, quantity: number }[];
}

export interface OrderRequest {
  items: { name: string, quantity: number }[];
}
