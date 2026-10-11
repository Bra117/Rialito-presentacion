# Rialito — Presentación del proyecto

Sitio de presentación de **Rialito**, una app de finanzas personales hecha para la realidad venezolana: ahorro en bolívares y dólares, tasas BCV / Euro / Binance en vivo, metas, gastos, autopréstamos, inversiones y comparación de precios entre comercios.

🌐 **En vivo:** https://rialito.webtrader.trade
🖥️ **Probar la app en la web:** https://rialito.webtrader.trade/app/
📄 **Vista general del proyecto:** [Rialito-showcase](https://github.com/Bra117/Rialito-showcase)

> El código fuente de la app y del backend es privado. Este repositorio contiene solo la página de presentación.

## Qué muestra

- Las funciones principales de la app, con tarjetas interactivas.
- Un conversor de divisas de ejemplo y un gráfico de gastos por categoría.
- Las tecnologías con las que está construida (Flutter, Dart, Provider, Workmanager…).
- Español / inglés con un botón.

## Tecnologías del sitio

- [Next.js](https://nextjs.org) 16 (App Router) con exportación estática (`output: "export"`)
- React 19 + TypeScript
- Framer Motion para las animaciones

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera el sitio estático en out/
```

Los textos (ES/EN) están en `lib/translations.ts`; los componentes, en `components/`.

## Publicación

`npm run build` genera `out/`, que se copia a la raíz del dominio. La app web de Rialito vive aparte, en `/app/`, y no se toca al publicar este sitio.

---

Desarrollado por **Airan Bracamonte** · [LinkedIn](https://www.linkedin.com/in/airan-bracamonte)
