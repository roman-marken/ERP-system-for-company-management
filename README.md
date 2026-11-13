# ERP-система для управління компанією

Навчальний React + TypeScript проєкт з Redux Toolkit. Об’єднує управління співробітниками, складом, замовленнями та фінансами.

## Запуск

```bash
npm install
npm run dev
```

Production-збірка: `npm run build`.

## Структура

- `src/app/store.ts` — єдиний Redux Store, `RootState`, `AppDispatch` та типізовані хуки.
- `src/features/employees` — CRUD та статус працівників.
- `src/features/products` — ціни й залишки товарів.
- `src/features/orders` — створення замовлень, перерахунок суми та перевірка складу.
- `src/features/finance` — баланс, доходи, витрати та історія операцій.
- `src/pages` — Dashboard, EmployeesPage, ProductsPage, OrdersPage, FinancePage.

Усі зміни стану проходять через Redux Actions. Замовлення не створюється, якщо на складі бракує хоча б одного товару; успішне створення резервує його залишки.

