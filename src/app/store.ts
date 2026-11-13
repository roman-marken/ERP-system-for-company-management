import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import type { UnknownAction } from 'redux'
import type { ThunkAction } from 'redux-thunk'
import employeesReducer from '../features/employees/employeesSlice'
import productsReducer from '../features/products/productsSlice'
import ordersReducer from '../features/orders/ordersSlice'
import financeReducer from '../features/finance/financeSlice'

export const store = configureStore({ reducer: { employees: employeesReducer, products: productsReducer, orders: ordersReducer, finance: financeReducer } })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<Result = void> = ThunkAction<Result, RootState, unknown, UnknownAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

