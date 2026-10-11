"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useT } from "@/lib/LanguageContext";

type Currency = "USD" | "VES" | "EUR";

const TO_USD: Record<Currency, number> = { USD: 1, VES: 1 / 62.5, EUR: 1.08 };

function computeTo(amountFrom: string, curFrom: Currency, curTo: Currency) {
  const usd = (parseFloat(amountFrom) || 0) * TO_USD[curFrom];
  return (usd / TO_USD[curTo]).toFixed(2);
}

function computeFrom(amountTo: string, curFrom: Currency, curTo: Currency) {
  const usd = (parseFloat(amountTo) || 0) * TO_USD[curTo];
  return (usd / TO_USD[curFrom]).toFixed(2);
}

export default function CurrencyConverter() {
  const t = useT();
  const [curFrom, setCurFrom] = useState<Currency>("USD");
  const [curTo, setCurTo] = useState<Currency>("VES");
  const [amountFrom, setAmountFrom] = useState("100");
  const [amountTo, setAmountTo] = useState(() => computeTo("100", "USD", "VES"));

  function handleFromInput(value: string) {
    setAmountFrom(value);
    setAmountTo(computeTo(value, curFrom, curTo));
  }

  function handleToInput(value: string) {
    setAmountTo(value);
    setAmountFrom(computeFrom(value, curFrom, curTo));
  }

  function handleCurFromChange(value: Currency) {
    setCurFrom(value);
    setAmountTo(computeTo(amountFrom, value, curTo));
  }

  function handleCurToChange(value: Currency) {
    setCurTo(value);
    setAmountTo(computeTo(amountFrom, curFrom, value));
  }

  function swapCur() {
    const nextFrom = curTo;
    const nextTo = curFrom;
    setCurFrom(nextFrom);
    setCurTo(nextTo);
    setAmountTo(computeTo(amountFrom, nextFrom, nextTo));
  }

  return (
    <Reveal className="tool-card">
      <div className="tool-head">
        <h2>{t.converter.title}</h2>
        <span>{t.converter.subtitle}</span>
      </div>
      <div className="conv-row">
        <div className="conv-field">
          <label>{t.converter.amountLabel}</label>
          <input
            type="number"
            value={amountFrom}
            onChange={(e) => handleFromInput(e.target.value)}
          />
          <select value={curFrom} onChange={(e) => handleCurFromChange(e.target.value as Currency)}>
            <option value="USD">USD</option>
            <option value="VES">VES</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <button className="conv-swap" onClick={swapCur} title={t.converter.swapTitle}>
          ⇄
        </button>
        <div className="conv-field">
          <label>{t.converter.equalsLabel}</label>
          <input type="number" value={amountTo} onChange={(e) => handleToInput(e.target.value)} />
          <select value={curTo} onChange={(e) => handleCurToChange(e.target.value as Currency)}>
            <option value="VES">VES</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
      <div className="tool-note">{t.converter.note}</div>
    </Reveal>
  );
}
