"use client";

import { useState } from "react";

type Condition = "pristine" | "needs-care";

export default function EstimateForm() {
  const [condition, setCondition] = useState<Condition>("needs-care");

  return (
    <div className="lg:col-span-5 bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/30 flex flex-col h-full">
      <h2 className="font-headline-sm text-headline-sm text-primary mb-2">
        Service Estimate
      </h2>
      <p className="text-on-surface-variant mb-stack-md font-body-md">
        Tell us about your pool to receive a tailored maintenance quote within
        24 hours.
      </p>

      <form className="space-y-4 flex-grow" onSubmit={(e) => e.preventDefault()}>
        {/* Pool size */}
        <div className="space-y-1">
          <label className="font-label-bold text-label-bold text-primary block">
            Pool Size &amp; Type
          </label>
          <div className="relative">
            <select className="w-full bg-white border border-outline-variant rounded-lg p-3 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none appearance-none pr-10">
              <option>Standard Residential (up to 20,000 gal)</option>
              <option>Large Residential (20,000 – 40,000 gal)</option>
              <option>Estate / Custom Pool (40,000+ gal)</option>
              <option>Saltwater Conversion Inquiry</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
              expand_more
            </span>
          </div>
        </div>

        {/* Condition */}
        <div className="space-y-1">
          <span className="font-label-bold text-label-bold text-primary block">
            Current Condition
          </span>
          <div className="grid grid-cols-2 gap-2">
            {(["pristine", "needs-care"] as Condition[]).map((val) => (
              <label
                key={val}
                className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                  condition === val
                    ? "border-secondary bg-secondary/5"
                    : "border-outline-variant hover:bg-secondary-container/10"
                }`}
              >
                <input
                  type="radio"
                  name="condition"
                  checked={condition === val}
                  onChange={() => setCondition(val)}
                  className="text-secondary focus:ring-secondary"
                />
                <span className="text-label-bold font-label-bold capitalize">
                  {val === "needs-care" ? "Needs Care" : "Pristine"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="space-y-1">
          <label className="font-label-bold text-label-bold text-primary block">
            Location
          </label>
          <input
            type="text"
            placeholder="Palm Beach Address"
            className="w-full bg-white border border-outline-variant rounded-lg p-3 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
          />
        </div>

        {/* Notes */}
        <div className="space-y-1">
          <label className="font-label-bold text-label-bold text-primary block">
            Additional Notes
          </label>
          <textarea
            rows={3}
            placeholder="Special requirements, gate codes, etc."
            className="w-full bg-white border border-outline-variant rounded-lg p-3 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none resize-none"
          />
        </div>
      </form>

      <button className="w-full mt-stack-md py-4 bg-tertiary-container text-on-tertiary-container rounded-lg font-label-bold text-label-bold hover:brightness-95 active:scale-95 transition-all shadow-md">
        Request Quote
      </button>
    </div>
  );
}
