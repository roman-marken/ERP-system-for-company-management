import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Transaction } from '../types'
type FinanceState = { balance: number; income: number; expenses: number; transactions: Transaction[] }
const initialState: FinanceState = { balance: 124500, income: 140000, expenses: 15500, transactions: [
  { id: 't1', type: 'income', amount: 82000, category: 'Продажі', note: 'Оплата замовлень за тиждень', date: '2026-11-13' },
  { id: 't2', type: 'expense', amount: 9500, category: 'Логістика', note: 'Доставка товару', date: '2026-11-12' },
  { id: 't3', type: 'income', amount: 58000, category: 'Продажі', note: 'Оплата рахунку #INV-083', date: '2026-11-11' },
  { id: 't4', type: 'expense', amount: 6000, category: 'Операційні витрати', note: 'Офісні витрати', date: '2026-11-10' },
] }
const financeSlice = createSlice({ name: 'finance', initialState, reducers: {
  transactionAdded(state, action: PayloadAction<Transaction>) { const transaction = action.payload; if (!Number.isFinite(transaction.amount) || transaction.amount <= 0) return; state.transactions.unshift(transaction); if (transaction.type === 'income') { state.income += transaction.amount; state.balance += transaction.amount } else { state.expenses += transaction.amount; state.balance -= transaction.amount } },
  transactionRemoved(state, action: PayloadAction<string>) { const index = state.transactions.findIndex(item => item.id === action.payload); if (index < 0) return; const [transaction] = state.transactions.splice(index, 1); if (transaction.type === 'income') { state.income -= transaction.amount; state.balance -= transaction.amount } else { state.expenses -= transaction.amount; state.balance += transaction.amount } },
} })
export const { transactionAdded, transactionRemoved } = financeSlice.actions
export default financeSlice.reducer

