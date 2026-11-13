export type Employee = { id: string; name: string; position: string; department: string; salary: number; isActive: boolean }
export type Product = { id: string; name: string; category: string; price: number; quantity: number }
export type OrderStatus = 'new' | 'processing' | 'completed' | 'cancelled'
export type OrderLine = { productId: string; name: string; quantity: number; unitPrice: number }
export type Order = { id: string; customerName: string; products: OrderLine[]; totalPrice: number; status: OrderStatus; createdAt: string }
export type Transaction = { id: string; type: 'income' | 'expense'; amount: number; category: string; note: string; date: string }

