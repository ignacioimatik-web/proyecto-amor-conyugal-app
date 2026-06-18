'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/components/ui/animations';
import type { RetreatType } from '@/data/retreats';

// ---- Types ----

export interface FilterState {
  type: RetreatType | 'todos';
  country: string;
  city: string;
  showPast: boolean;
}

export interface FilterOptionGroup {
  id: keyof FilterState;
  label: string;
  icon: React.ReactNode;
  options: { value: string; label: string }[];
}

export interface RetreatFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  groups: FilterOptionGroup[];
}

// ---- Dropdown component ----

function FilterDropdown({
  label,
  icon,
  options,
  value,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const activeLabel = options.find((o) => o.value === value)?.label ?? label;

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3.5 py-2 bg-surface border border-border rounded-lg text-sm text-foreground hover:border-primary transition-colors shadow-sm"
      >
        {icon}
        <span className="min-w-[6ch]">{activeLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-muted-light transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-20 mt-1 w-56 bg-surface border border-border-light rounded-xl shadow-lg overflow-hidden"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                opt.value === value
                  ? 'bg-primary-light text-primary-dark font-medium'
                  : 'text-foreground hover:bg-surface-alt'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// ---- Main component ----

export default function RetreatFilters({ filters, onChange, groups }: RetreatFiltersProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-3"
    >
      {groups.map((group) => (
        <motion.div key={group.id} variants={fadeUp}>
          <FilterDropdown
            label={group.label}
            icon={group.icon}
            options={group.options}
            value={String(filters[group.id])}
            onChange={(val) => onChange({ ...filters, [group.id]: group.id === 'showPast' ? val === 'true' : val })}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
