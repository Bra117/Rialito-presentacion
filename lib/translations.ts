export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: { badge: "En desarrollo" },
    hero: {
      titleLine1: "Tus ahorros, metas y gastos —",
      titleLine2: "bajo control real.",
      lead: "Gestor de finanzas personales para registrar ahorros, seguir tu patrimonio neto, controlar gastos fijos y hormiga, y consultar tasas de cambio en tiempo real.",
      pills: ["🎯 Metas de Ahorro", "🏪 Compara comercios", "💸 Auto-Préstamos", "📈 Inversiones", "💱 Tasas en Vivo"],
      langPill: "🌐 ES / EN",
      downloadBtn: "📲 Descargar la app",
      soon: "PRÓXIMAMENTE",
      downloadTitle: "Se activa cuando la app esté publicada en las tiendas",
      tryWebBtn: "🖥️ Probar en la web",
      webPageBtn: "🌐 Página Web",
    },
    converter: {
      title: "Probá el conversor",
      subtitle: "Tasas de ejemplo — la app usa BCV / Binance / Euro en vivo",
      amountLabel: "Monto",
      equalsLabel: "Equivale a",
      swapTitle: "Invertir",
      note: "Tasas de ejemplo: 1 USD ≈ 62.5 VES · 1 EUR ≈ 1.08 USD. No representan el mercado en tiempo real.",
    },
    donut: {
      title: "Gastos por categoría",
      centerLabel: "gastos del mes",
      categories: [
        { label: "Comida", amount: 180, color: "#37e6b0" },
        { label: "Transporte", amount: 110, color: "#38d6e8" },
        { label: "Suscripciones", amount: 70, color: "#8b8bf5" },
        { label: "Café/Bebidas", amount: 60, color: "#f5c26b" },
        { label: "Diversión", amount: 60, color: "#f57b7b" },
        { label: "Otros", amount: 60, color: "#5c6b67" },
      ],
    },
    features: {
      title: "Qué incluye",
      sub: "Pensada para llevar el control diario de tus finanzas sin fricción.",
      items: [
        {
          icon: "🎯",
          title: "Meta Maestra & Patrimonio",
          desc: "Define un objetivo de ahorro y visualiza tu balance neto consolidado en Bolívares y Dólares, con gráficos de progreso.",
        },
        {
          icon: "🧾",
          title: "Gastos Fijos y Hormiga",
          desc: "Categoriza gastos con conversión dinámica de monedas (BCV, Euro, Binance) y visualiza la distribución por categoría.",
        },
        {
          icon: "💸",
          title: "Auto-Préstamos",
          desc: "Toma prestado de tus propios ahorros y sigue las devoluciones sin perder de vista tu liquidez real.",
        },
        {
          icon: "📈",
          title: "Inversiones & ROI",
          desc: "Registra activos y visualiza su rendimiento. Publica tus ganancias con una tarjeta premium que muestra el par, el % y tus precios, ocultando tus montos con ***.",
        },
        {
          icon: "💱",
          title: "Tasas en Tiempo Real",
          desc: "BCV, Euro y Binance P2P con tendencias, historial y un conversor rápido de divisas integrado.",
        },
        {
          icon: "🔒",
          title: "Seguridad & Backups",
          desc: "Bloqueo biométrico o por PIN (hash SHA-256) y respaldo import/export cifrado por contraseña.",
        },
        {
          icon: "🏪",
          title: "Comercios y Precios",
          desc: "Registra tus sucursales con sus productos y precios. Al comprar solo tocas el producto; si el precio cambió lo actualizas y ves cuánto subió en %. Compara sucursales y descubre dónde sale más barato.",
        },
        {
          icon: "🛒",
          title: "Asistente de Compras",
          desc: "Lista del mercado por secciones (carbohidratos, proteínas, salsas, lácteos…). Si se cierra la app no pierdes nada, y puedes reabrir una compra para completarla.",
        },
        {
          icon: "☁️",
          title: "Nube, aunque no haya internet",
          desc: "Guarda en la nube con un toque; sin conexión queda en cola y se sube solo al volver el internet. Te avisa con una notificación cuando tienes avances sin guardar.",
        },
      ],
    },
    footer: {
      credit: "Desarrollado por Airan Bracamonte",
      copyright: "© 2026 Airan Bracamonte. Rialito™ — Todos los derechos reservados.",
      linkedin: "LinkedIn",
      code: "🐙 Ver README en GitHub →",
    },
  },
  en: {
    nav: { badge: "In development" },
    hero: {
      titleLine1: "Your savings, goals, and expenses —",
      titleLine2: "under real control.",
      lead: "Personal finance manager to track savings, follow your net worth, control fixed and small daily expenses, and check real-time exchange rates.",
      pills: ["🎯 Savings Goals", "🏪 Compare stores", "💸 Self-Loans", "📈 Investments", "💱 Live Rates"],
      langPill: "🌐 ES / EN",
      downloadBtn: "📲 Download the app",
      soon: "COMING SOON",
      downloadTitle: "Activates once the app is published in the app stores",
      tryWebBtn: "🖥️ Try it on the web",
      webPageBtn: "🌐 Website",
    },
    converter: {
      title: "Try the converter",
      subtitle: "Sample rates — the app uses live BCV / Binance / Euro rates",
      amountLabel: "Amount",
      equalsLabel: "Equals",
      swapTitle: "Swap",
      note: "Sample rates: 1 USD ≈ 62.5 VES · 1 EUR ≈ 1.08 USD. They do not reflect the real-time market.",
    },
    donut: {
      title: "Expenses by category",
      centerLabel: "monthly expenses",
      categories: [
        { label: "Food", amount: 180, color: "#37e6b0" },
        { label: "Transport", amount: 110, color: "#38d6e8" },
        { label: "Subscriptions", amount: 70, color: "#8b8bf5" },
        { label: "Coffee/Drinks", amount: 60, color: "#f5c26b" },
        { label: "Entertainment", amount: 60, color: "#f57b7b" },
        { label: "Other", amount: 60, color: "#5c6b67" },
      ],
    },
    features: {
      title: "What's included",
      sub: "Designed to help you manage your daily finances without friction.",
      items: [
        {
          icon: "🎯",
          title: "Master Goal & Net Worth",
          desc: "Set a savings goal and view your consolidated net balance in Bolívares and Dollars, with progress charts.",
        },
        {
          icon: "🧾",
          title: "Fixed & Small Daily Expenses",
          desc: "Categorize expenses with dynamic currency conversion (BCV, Euro, Binance) and view the distribution by category.",
        },
        {
          icon: "💸",
          title: "Self-Loans",
          desc: "Borrow from your own savings and track repayments without losing sight of your real liquidity.",
        },
        {
          icon: "📈",
          title: "Investments & ROI",
          desc: "Record assets and track their returns. Share your gains with a premium card showing the pair, the % and your prices, with your amounts hidden as ***.",
        },
        {
          icon: "💱",
          title: "Real-Time Rates",
          desc: "BCV, Euro, and Binance P2P with trends, history, and a built-in quick currency converter.",
        },
        {
          icon: "🔒",
          title: "Security & Backups",
          desc: "Biometric or PIN lock (SHA-256 hash) and password-encrypted import/export backup.",
        },
        {
          icon: "🏪",
          title: "Stores & Prices",
          desc: "Register your stores with their products and prices. When shopping, just tap the product; if the price changed, update it and see how much it rose in %. Compare stores and find where it's cheapest.",
        },
        {
          icon: "🛒",
          title: "Shopping Assistant",
          desc: "Grocery list by section (carbs, proteins, sauces, dairy…). If the app closes you lose nothing, and you can reopen a purchase to finish it.",
        },
        {
          icon: "☁️",
          title: "Cloud, even offline",
          desc: "Save to the cloud with one tap; offline it's queued and uploads by itself when you're back online. A notification reminds you when you have unsaved progress.",
        },
      ],
    },
    footer: {
      credit: "Built by Airan Bracamonte",
      copyright: "© 2026 Airan Bracamonte. Rialito™ — All rights reserved.",
      linkedin: "LinkedIn",
      code: "🐙 View README on GitHub →",
    },
  },
} as const;
