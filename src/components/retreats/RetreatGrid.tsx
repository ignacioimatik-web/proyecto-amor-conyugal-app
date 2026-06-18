'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Users, Calendar, Search } from 'lucide-react';
import RetreatCard from './RetreatCard';
import RetreatFilters, { type FilterState, type FilterOptionGroup } from './RetreatFilters';
import { filterRetreats, getFilterOptions } from '@/data/retreats';
import { staggerContainer, fadeUp, viewportOptions } from '@/components/ui/animations';

export default function RetreatGrid() {
  // Derive available filter options from the data
  const filterOptions = useMemo(() => getFilterOptions(), []);

  const [filters, setFilters] = useState<FilterState>({
    type: 'todos',
    country: '',
    city: '',
    showPast: false,
  });

  const handleFilterChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
  }, []);

  // Build filter groups for the dropdowns
  const filterGroups: FilterOptionGroup[] = useMemo(() => [
    {
      id: 'type',
      label: 'Tipo',
      icon: <Users className="w-4 h-4 text-primary" />,
      options: filterOptions.types.map((t) => ({ value: t.id, label: t.label })),
    },
    {
      id: 'country',
      label: 'País',
      icon: <Globe className="w-4 h-4 text-primary" />,
      options: [
        { value: '', label: 'Todos los países' },
        ...filterOptions.countries.map((c) => ({ value: c, label: c })),
      ],
    },
    {
      id: 'city',
      label: 'Ciudad',
      icon: <MapPin className="w-4 h-4 text-primary" />,
      options: [
        { value: '', label: 'Todas las ciudades' },
        ...filterOptions.cities.map((c) => ({ value: c, label: c })),
      ],
    },
    {
      id: 'showPast',
      label: 'Estado',
      icon: <Calendar className="w-4 h-4 text-primary" />,
      options: [
        { value: 'false', label: 'Solo próximos' },
        { value: 'true', label: 'Mostrar pasados' },
      ],
    },
  ], [filterOptions]);

  // Apply filters
  const { upcoming, past } = useMemo(
    () => filterRetreats({ ...filters, showPast: filters.showPast }),
    [filters],
  );

  return (
    <div className="space-y-8">
      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <RetreatFilters
          filters={filters}
          onChange={handleFilterChange}
          groups={filterGroups}
        />
        <p className="text-sm text-muted-light whitespace-nowrap">
          {upcoming.length + (filters.showPast ? past.length : 0)} retiro{(upcoming.length + (filters.showPast ? past.length : 0)) !== 1 ? 's' : ''} encontrado{(upcoming.length + (filters.showPast ? past.length : 0)) !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Upcoming retreats */}
      {upcoming.length > 0 && (
        <section>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-xl font-semibold text-foreground mb-4 gold-line"
          >
            Próximos retiros
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {upcoming.map((retreat) => (
              <RetreatCard
                key={retreat.id}
                retreat={retreat}
                variant={retreat.featured ? 'featured' : 'default'}
              />
            ))}
          </motion.div>
        </section>
      )}

      {/* Past retreats (only when showPast is toggled) */}
      {filters.showPast && past.length > 0 && (
        <section>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-xl font-semibold text-foreground mb-4 gold-line"
          >
            Retiros pasados
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {past.map((retreat) => (
              <RetreatCard
                key={retreat.id}
                retreat={retreat}
                variant="default"
              />
            ))}
          </motion.div>
        </section>
      )}

      {/* Empty state */}
      {upcoming.length === 0 && (!filters.showPast || past.length === 0) && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center py-16"
        >
          <Search className="w-12 h-12 text-muted-light mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No hay retiros con estos filtros
          </h3>
          <p className="text-muted text-sm">
            Prueba a cambiar los filtros o selecciona &quot;Todos&quot; en cada categoría.
          </p>
        </motion.div>
      )}
    </div>
  );
}
