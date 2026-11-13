import { Icon } from './Icon'
import type { PageKey } from './Sidebar'
const labels: Record<PageKey,string> = { dashboard:'Огляд',employees:'Співробітники',products:'Склад і товари',orders:'Замовлення',finance:'Фінанси' }
export function Topbar({ page, onMenu }: { page: PageKey; onMenu: () => void }) { return <header className="topbar"><button className="mobile-menu" onClick={onMenu}><Icon name="grid"/></button><div className="breadcrumbs"><span>Northstar Studio</span><b>/</b><strong>{labels[page]}</strong></div><label className="global-search"><Icon name="search" size={17}/><input placeholder="Пошук у робочому просторі..."/><kbd>⌘ K</kbd></label><button className="top-icon" aria-label="Сповіщення"><Icon name="bell"/><i/></button><button className="top-user"><span className="mini-avatar">ОК</span><span>Олена Коваль</span><b>⌄</b></button></header> }

