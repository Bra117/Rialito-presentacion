"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CurrencyConverter from "@/components/CurrencyConverter";
import DonutChart from "@/components/DonutChart";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechStack from "@/components/TechStack";
import { useT } from "@/lib/LanguageContext";

export default function Home() {
  const t = useT();
  return (
    <div className="wrap">
      <Header />
      <Hero />
      <CurrencyConverter />
      <DonutChart />
      <FeaturesGrid />
      <TechStack />
      <footer>
        <span>{t.footer.credit}</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/airan-bracamonte" target="_blank" rel="noopener">
            {t.footer.linkedin}
          </a>
          <a href="https://github.com/Bra117/Rialito-showcase#readme" target="_blank" rel="noopener">
            {t.footer.code}
          </a>
        </div>
        <small className="footer-copy">{t.footer.copyright}</small>
      </footer>
    </div>
  );
}
