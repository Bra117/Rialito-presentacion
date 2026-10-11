"use client";

import { useLanguage, useT } from "@/lib/LanguageContext";

export default function Hero() {
  const t = useT();
  const { toggle } = useLanguage();

  return (
    <section className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="icon" src="/icon.png" alt="Rialito icon" />
      <h1>
        {t.hero.titleLine1}
        <br />
        <span className="accent">{t.hero.titleLine2}</span>
      </h1>
      <p className="lead">{t.hero.lead}</p>
      <div className="pill-row">
        {t.hero.pills.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
        <button
          className="pill"
          onClick={toggle}
          style={{ cursor: "pointer", font: "inherit" }}
          title="Switch language / Cambiar idioma"
        >
          {t.hero.langPill}
        </button>
      </div>
      <div className="hero-cta-row">
        <button className="download-btn" disabled title={t.hero.downloadTitle}>
          {t.hero.downloadBtn}
          <span className="soon">{t.hero.soon}</span>
        </button>
        <a className="try-web-btn" href="/app/" target="_blank" rel="noopener">
          {t.hero.tryWebBtn}
        </a>
        <a className="try-web-btn" href="https://rialito-app.webtrader.trade/" target="_blank" rel="noopener">
          {t.hero.webPageBtn}
        </a>
      </div>
    </section>
  );
}
