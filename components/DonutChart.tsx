"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useT } from "@/lib/LanguageContext";

const R = 70;
const CIRC = 2 * Math.PI * R;

export default function DonutChart() {
  const t = useT();
  const [hovered, setHovered] = useState<number | null>(null);
  const data = t.donut.categories;
  const total = data.reduce((s, d) => s + d.amount, 0);

  let offset = 0;
  const segments = data.map((d) => {
    const frac = d.amount / total;
    const len = frac * CIRC;
    const seg = { ...d, len, offset, frac };
    offset += len;
    return seg;
  });

  return (
    <Reveal className="donut-card">
      <div className="donut-wrap">
        <svg width="170" height="170" viewBox="0 0 170 170">
          <circle cx="85" cy="85" r={R} fill="none" stroke="#1c2624" strokeWidth="20" />
          {segments.map((s, i) => (
            <motion.circle
              key={s.label}
              cx="85"
              cy="85"
              r={R}
              fill="none"
              stroke={s.color}
              strokeDasharray={`${s.len} ${CIRC - s.len}`}
              strokeDashoffset={-s.offset}
              animate={{
                strokeWidth: hovered === i ? 26 : 20,
                opacity: hovered !== null && hovered !== i ? 0.35 : 1,
              }}
              transition={{ duration: 0.15 }}
            />
          ))}
        </svg>
        <div className="donut-center">
          <b>${total}</b>
          <span>{t.donut.centerLabel}</span>
        </div>
      </div>
      <div>
        <div className="tool-head">
          <h2>{t.donut.title}</h2>
        </div>
        <div className="legend">
          {segments.map((s, i) => (
            <div
              key={s.label}
              className="legend-item"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="legend-dot" style={{ background: s.color }} />
              {s.label}
              <span className="pct">{Math.round(s.frac * 100)}%</span>
              <b>${s.amount}</b>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
