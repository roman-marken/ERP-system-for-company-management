import type { AppThunk } from '../../app/store'
import { stockAdjusted } from '../products/productsSlice'
import { orderAdded, orderRemoved, orderStatusChanged } from './ordersSlice'
import type { Order, OrderStatus } from '../types'

export type OrderDraft = { customerName: string; products: { productId: string; quantity: number }[] }

export const createOrder = (draft: OrderDraft): AppThunk<string | null> => (dispatch, getState) => {
  const customerName = draft.customerName.trim()
  if (!customerName) return 'Вкажіть ім’я або назву клієнта.'
  if (!draft.products.length) return 'Додайте хоча б один товар до замовлення.'
  const quantities = new Map<string, number>()
  for (const line of draft.products) {
    if (!Number.isInteger(line.quantity) || line.quantity < 1) return 'Кількість товару має бути цілим числом більше нуля.'
    quantities.set(line.productId, (quantities.get(line.productId) || 0) + line.quantity)
  }
  const products = getState().products.items
  for (const [id, quantity] of quantities) {
    const product = products.find(item => item.id === id)
    if (!product) return 'Один із товарів більше не доступний.'
    if (product.quantity < quantity) return `Недостатній залишок «${product.name}»: доступно ${product.quantity}, потрібно ${quantity}.`
  }
  const orderLines = [...quantities].map(([productId, quantity]) => {
    const product = products.find(item => item.id === productId)!
    return { productId, name: product.name, quantity, unitPrice: product.price }
  })
  const order: Order = { id: `ORD-${crypto.randomUUID().slice(0, 8).toUpperCase()}`, customerName, products: orderLines, totalPrice: orderLines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0), status: 'new', createdAt: new Date().toISOString().slice(0, 10) }
  dispatch(orderAdded(order))
  for (const line of orderLines) dispatch(stockAdjusted({ id: line.productId, delta: -line.quantity }))
  return null
}

export const changeOrderStatus = (id: string, status: OrderStatus): AppThunk<string | null> => (dispatch, getState) => {
  const order = getState().orders.items.find(item => item.id === id)
  if (!order) return 'Замовлення не знайдено.'
  if (order.status === 'cancelled' && status !== 'cancelled') return 'Скасоване замовлення не можна повторно активувати.'
  if (status === 'cancelled' && (order.status === 'new' || order.status === 'processing')) for (const line of order.products) dispatch(stockAdjusted({ id: line.productId, delta: line.quantity }))
  dispatch(orderStatusChanged({ id, status }))
  return null
}

export const deleteOrder = (id: string): AppThunk => (dispatch, getState) => {
  const order = getState().orders.items.find(item => item.id === id)
  if (!order) return
  if (order.status === 'new' || order.status === 'processing') for (const line of order.products) dispatch(stockAdjusted({ id: line.productId, delta: line.quantity }))
  dispatch(orderRemoved(id))
}

