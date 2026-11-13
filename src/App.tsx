import { useState } from 'react'
import { Sidebar,type PageKey } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { Dashboard } from './pages/Dashboard'
import { EmployeesPage } from './pages/EmployeesPage'
import { ProductsPage } from './pages/ProductsPage'
import { OrdersPage } from './pages/OrdersPage'
import { FinancePage } from './pages/FinancePage'
export function App(){const [page,setPage]=useState<PageKey>('dashboard'),[navOpen,setNavOpen]=useState(false);let content=page==='dashboard'?<Dashboard/>:page==='employees'?<EmployeesPage/>:page==='products'?<ProductsPage/>:page==='orders'?<OrdersPage/>:<FinancePage/>;return <div className="app-shell"><Sidebar active={page} onNavigate={setPage} open={navOpen} onClose={()=>setNavOpen(false)}/><div className="content-shell"><Topbar page={page} onMenu={()=>setNavOpen(true)}/><main>{content}</main></div></div>}

