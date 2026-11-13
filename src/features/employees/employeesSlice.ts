import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Employee } from '../types'
type EmployeesState = { items: Employee[] }
const initialState: EmployeesState = { items: [
  { id: 'e1', name: 'Олена Коваль', position: 'Фінансова директорка', department: 'Фінанси', salary: 68000, isActive: true },
  { id: 'e2', name: 'Андрій Мельник', position: 'Керівник відділу продажів', department: 'Продажі', salary: 54000, isActive: true },
  { id: 'e3', name: 'Ірина Шевченко', position: 'Менеджерка складу', department: 'Логістика', salary: 42000, isActive: true },
  { id: 'e4', name: 'Максим Бондар', position: 'Бухгалтер', department: 'Фінанси', salary: 39000, isActive: false },
  { id: 'e5', name: 'Наталія Гриценко', position: 'HR-менеджерка', department: 'Людські ресурси', salary: 44000, isActive: true },
] }
const employeesSlice = createSlice({ name: 'employees', initialState, reducers: {
  employeeAdded(state, action: PayloadAction<Employee>) { state.items.unshift(action.payload) },
  employeeUpdated(state, action: PayloadAction<Employee>) { const index = state.items.findIndex(item => item.id === action.payload.id); if (index >= 0) state.items[index] = action.payload },
  employeeRemoved(state, action: PayloadAction<string>) { state.items = state.items.filter(item => item.id !== action.payload) },
  employeeActiveToggled(state, action: PayloadAction<string>) { const employee = state.items.find(item => item.id === action.payload); if (employee) employee.isActive = !employee.isActive },
} })
export const { employeeAdded, employeeUpdated, employeeRemoved, employeeActiveToggled } = employeesSlice.actions
export default employeesSlice.reducer

