import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Order, OrderStatus } from '../types'
type OrdersState = { items: Order[] }
const initialState: OrdersState = { items: [
  { id: 'ORD-2048', customerName: 'ТОВ «Альфа Тех»', products: [{ productId: 'p1', name: 'Бездротова клавіатура K380', quantity: 4, unitPrice: 1890 }], totalPrice: 7560, status: 'processing', createdAt: '2026-11-13' },
  { id: 'ORD-2047', customerName: 'Марія Паламарчук', products: [{ productId: 'p2', name: 'Монітор Studio 27″', quantity: 1, unitPrice: 12400 }], totalPrice: 12400, status: 'new', createdAt: '2026-11-12' },
  { id: 'ORD-2046', customerName: 'ТОВ «Дизайн Плюс»', products: [{ productId: 'p3', name: 'USB-C Hub 8-в-1', quantity: 3, unitPrice: 2650 }], totalPrice: 7950, status: 'completed', createdAt: '2026-11-11' },
] }
const ordersSlice = createSlice({ name: 'orders', initialState, reducers: {
  orderAdded(state, action: PayloadAction<Order>) { state.items.unshift(action.payload) },
  orderRemoved(state, action: PayloadAction<string>) { state.items = state.items.filter(order => order.id !== action.payload) },
  orderStatusChanged(state, action: PayloadAction<{ id: string; status: OrderStatus }>) { const order = state.items.find(item => item.id === action.payload.id); if (order) order.status = action.payload.status },
} })
export const { orderAdded, orderRemoved, orderStatusChanged } = ordersSlice.actions
export default ordersSlice.reducer

