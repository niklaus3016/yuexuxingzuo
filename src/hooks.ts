import React, { useState, useEffect } from 'react';
import { Solar, Lunar } from 'lunar-typescript';
import { CONSTELLATIONS, Constellation } from './constants';

export type CalendarType = 'solar' | 'lunar';

export interface HistoryRecord {
  id: string;
  name: string;
  date: string;
  type: CalendarType;
  constellationId: string;
  timestamp: number;
}

export function useConstellation() {
  const [history, setHistory] = useState<HistoryRecord[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('moon_const_history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const saveToHistory = (record: Omit<HistoryRecord, 'id' | 'timestamp'>) => {
    const newRecord: HistoryRecord = {
      ...record,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
    };
    const updated = [newRecord, ...history].slice(0, 5);
    setHistory(updated);
    localStorage.setItem('moon_const_history', JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('moon_const_history');
  };

  const calculateConstellation = (year: number, month: number, day: number, type: CalendarType): Constellation => {
    let solarDate: Solar;
    if (type === 'lunar') {
      const lunar = Lunar.fromYmd(year, month, day);
      solarDate = lunar.getSolar();
    } else {
      solarDate = Solar.fromYmd(year, month, day);
    }

    const m = solarDate.getMonth();
    const d = solarDate.getDay();

    return CONSTELLATIONS.find(c => {
      if (c.id === 'capricorn') {
        // Capricorn spans across year end
        return (m === 12 && d >= 22) || (m === 1 && d <= 19);
      }
      return (m === c.startMonth && d >= c.startDay) || (m === c.endMonth && d <= c.endDay);
    }) || CONSTELLATIONS[0];
  };

  return {
    history,
    saveToHistory,
    clearHistory,
    calculateConstellation
  };
}
