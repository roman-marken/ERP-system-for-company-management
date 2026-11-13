const shapes: Record<string,string> = {
  grid: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  box: 'M21 8 12 13 3 8 M12 22V13 M3.3 6.3 12 2l8.7 4.3v11.4L12 22l-8.7-4.3z',
  cart: 'M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6 M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2 M18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
  wallet: 'M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14H5a2 2 0 0 1-2-2z M3 8h18 M16 14h.01 M7 4V2h10v2',
  search: 'm20 20-4.5-4.5 M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9 M10 21h4',
  plus: 'M12 5v14 M5 12h14',
  more: 'M12 5h.01 M12 12h.01 M12 19h.01',
  trend: 'M3 17 9 11l4 4 8-8 M15 7h6v6',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  close: 'm18 6-12 12 M6 6l12 12',
  edit: 'M12 20h9 M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z',
  trash: 'M3 6h18 M8 6V4h8v2 M19 6l-1 14H6L5 6 M10 11v5 M14 11v5',
  check: 'm5 12 4 4L19 6',
}
export function Icon({ name, size = 19 }: { name: string; size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={shapes[name] || shapes.grid}/></svg> }

