import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../types'
type ProductsState = { items: Product[] }
const initialState: ProductsState = { items: [
  { id: 'p1', name: 'Бездротова клавіатура K380', category: 'Периферія', price: 1890, quantity: 42 },
  { id: 'p2', name: 'Монітор Studio 27″', category: 'Дисплеї', price: 12400, quantity: 18 },
  { id: 'p3', name: 'USB-C Hub 8-в-1', category: 'Аксесуари', price: 2650, quantity: 7 },
  { id: 'p4', name: 'Навушники Quiet Pro', category: 'Аудіо', price: 7990, quantity: 3 },
  { id: 'p5', name: 'Webcam HD 1080', category: 'Периферія', price: 2180, quantity: 24 },
  { id: 'p6', name: 'Підставка для ноутбука', category: 'Аксесуари', price: 1450, quantity: 0 },
] }
const productsSlice = createSlice({ name: 'products', initialState, reducers: {
  productAdded(state, action: PayloadAction<Product>) { state.items.unshift(action.payload) },
  productRemoved(state, action: PayloadAction<string>) { state.items = state.items.filter(item => item.id !== action.payload) },
  productPriceChanged(state, action: PayloadAction<{ id: string; price: number }>) { const item = state.items.find(product => product.id === action.payload.id); if (item && Number.isFinite(action.payload.price) && action.payload.price >= 0) item.price = action.payload.price },
  stockAdjusted(state, action: PayloadAction<{ id: string; delta: number }>) { const item = state.items.find(product => product.id === action.payload.id); if (item && Number.isInteger(action.payload.delta) && item.quantity + action.payload.delta >= 0) item.quantity += action.payload.delta },
} })
export const { productAdded, productRemoved, productPriceChanged, stockAdjusted } = productsSlice.actions
export default productsSlice.reducer

