"use client";

import { useState } from "react";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const TIME_SLOTS = ["09:00 AM", "01:30 PM", "04:00 PM"];

// Days in month that have an existing appointment dot (visual indicator)
const APPOINTMENT_DOTS = new Set([16]);

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDay(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function BookingCalendar() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("01:30 PM");

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDay(viewYear, viewMonth);
  const prevMonthDays = getDaysInMonth(
    viewMonth === 0 ? viewYear - 1 : viewYear,
    viewMonth === 0 ? 11 : viewMonth - 1
  );

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
    setSelectedDay(null);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
    setSelectedDay(null);
  };

  const isToday = (day: number) =>
    viewYear === today.getFullYear() &&
    viewMonth === today.getMonth() &&
    day === today.getDate();

  return (
    <div className="lg:col-span-7 bg-white p-stack-md rounded-xl soft-shadow border border-outline-variant/20">
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-stack-md">
        <h2 className="font-headline-sm text-headline-sm text-primary">
          Select Service Date
        </h2>
        <div className="flex items-center gap-1">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-surface-container-low transition-colors"
            aria-label="Previous month"
          >
            <span className="material-symbols-outlined text-primary">chevron_left</span>
          </button>
          <span className="font-label-bold text-label-bold text-primary min-w-[130px] text-center">
            {MONTHS[viewMonth]} {viewYear}
          </span>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-surface-container-low transition-colors"
            aria-label="Next month"
          >
            <span className="material-symbols-outlined text-primary">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {DAYS.map((d, i) => (
          <div key={i} className="font-label-bold text-label-bold text-outline py-2 text-sm">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar cells */}
      <div className="grid grid-cols-7 gap-1 text-center mb-6">
        {/* Padding from previous month */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div
            key={`pad-${i}`}
            className="aspect-square flex items-center justify-center text-outline/30 font-body-md text-sm"
          >
            {prevMonthDays - firstDay + i + 1}
          </div>
        ))}

        {/* Current month days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const active = selectedDay === day;
          const todayFlag = isToday(day);
          const hasDot = APPOINTMENT_DOTS.has(day);

          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`aspect-square flex items-center justify-center font-body-md rounded-full transition-all relative text-sm
                ${active
                  ? "bg-primary text-on-primary shadow-lg ring-4 ring-primary-container/20"
                  : todayFlag
                  ? "border-2 border-primary text-primary"
                  : "hover:bg-secondary-container/30 cursor-pointer"
                }`}
            >
              {day}
              {hasDot && !active && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Time slots + duration */}
      <div className="pt-stack-md border-t border-outline-variant/20 grid grid-cols-1 sm:grid-cols-2 gap-stack-md">
        <div>
          <span className="font-label-bold text-label-bold text-primary block mb-2">
            Available Time Slots
          </span>
          <div className="flex flex-wrap gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`px-4 py-2 rounded-full font-label-bold text-label-bold text-sm transition-all
                  ${selectedTime === slot
                    ? "bg-primary text-on-primary"
                    : "border border-secondary text-secondary hover:bg-secondary/5"
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
        <div>
          <span className="font-label-bold text-label-bold text-primary block mb-2">
            Estimated Duration
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">schedule</span>
            90 – 120 Minutes
          </p>
        </div>
      </div>
    </div>
  );
}
