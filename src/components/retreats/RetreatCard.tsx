'use client';

import { motion } from 'framer-motion';
import { MapPin, CalendarDays, Users, ExternalLink } from 'lucide-react';
import { fadeUp, viewportOptions } from '@/components/ui/animations';
import type { Retreat } from '@/data/retreats';
import { statusLabel } from '@/data/retreats';

export interface RetreatCardProps {
  retreat: Retreat;
  variant?: 'default' | 'featured';
}

function formatDateRange(dateStart: string, dateEnd: string): string {
  const start = new Date(dateStart);
  const end = new Date(dateEnd);
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const startStr = start.toLocaleDateString('es-ES', opts);
  const endStr = end.toLocaleDateString('es-ES', opts);

  // Same day? Return single date
  if (startStr === endStr) return startStr;

  // Same month? Show "5–7 Junio 2026"
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    const dayOpts: Intl.DateTimeFormatOptions = { day: 'numeric' };
    const monthOpts: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return `${start.toLocaleDateString('es-ES', dayOpts)} – ${end.toLocaleDateString('es-ES', monthOpts)}`;
  }

  return `${startStr} – ${endStr}`;
}

function spotsLeftText(registered: number, capacity: number): string {
  const left = capacity - registered;
  if (left <= 0) return 'Completo';
  return `${left} ${left === 1 ? 'lugar' : 'lugares'} disponibles`;
}

function spotsLeftColor(registered: number, capacity: number): string {
  const left = capacity - registered;
  if (left <= 0) return 'bg-accent';
  if (left < 5) return 'bg-accent-light';
  return 'bg-primary';
}

export default function RetreatCard({ retreat, variant = 'default' }: RetreatCardProps) {
  const isFeatured = variant === 'featured';
  const status = statusLabel(retreat);
  const isFull = retreat.registered >= retreat.capacity;

  // Status badge styling
  const statusColorMap: Record<string, string> = {
    Próximo: 'badge-primary',
    'En curso': 'badge-success',
    Pasado: 'badge-secondary',
  };

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={`card ${isFeatured ? 'card-featured md:col-span-2 md:grid md:grid-cols-2 md:gap-6' : ''}`}
    >
      {/* Image section */}
      {retreat.imageUrl && (
        <div className={`relative overflow-hidden rounded-lg mb-4 ${isFeatured ? 'md:mb-0' : ''}`}>
          <div
            className="w-full h-48 md:h-full min-h-[180px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${retreat.imageUrl})` }}
            role="img"
            aria-label={`Imagen del retiro: ${retreat.title}`}
          />
          {/* Status badge overlay on image */}
          <span className={`absolute top-3 left-3 ${statusColorMap[status] ?? 'badge'} text-xs`}>
            {status}
          </span>
          {isFeatured && (
            <span className="absolute top-3 right-3 badge badge-primary text-xs">
              Destacado
            </span>
          )}
        </div>
      )}

      {/* Content section */}
      <div className="flex flex-col h-full">
        {/* Type badge */}
        <div className="mb-2">
          <span className="badge badge-primary text-xs">
            {retreat.category === 'retiro-matrimonios' && 'Matrimonios'}
            {retreat.category === 'retiro-novios' && 'Novios'}
            {retreat.category === 'retiro-con-ninos' && 'Con niños'}
            {retreat.category === 'retiro-jovenes' && 'Jóvenes'}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-semibold text-foreground mb-2 ${
          isFeatured ? 'text-2xl' : 'text-xl'
        }`}>
          {retreat.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4 flex-1">
          {retreat.summary}
        </p>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <CalendarDays className="w-4 h-4 text-primary shrink-0" />
            <span>{formatDateRange(retreat.dateStart, retreat.dateEnd)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>{retreat.location.name}, {retreat.location.region}</span>
          </div>
        </div>

        {/* Capacity bar */}
        <div className="space-y-1 mb-4">
          <div className="flex items-center justify-between text-xs text-muted-light">
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>{retreat.registered}/{retreat.capacity} inscritos</span>
            </div>
            {!isFull && (
              <span className="text-success font-medium">
                {spotsLeftText(retreat.registered, retreat.capacity)}
              </span>
            )}
          </div>
          <div className="w-full h-1.5 bg-border-light rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${spotsLeftColor(retreat.registered, retreat.capacity)}`}
              style={{ width: `${Math.min((retreat.registered / retreat.capacity) * 100, 100)}%` }}
            />
          </div>
        </div>

        {/* Registration button */}
        {retreat.sourceUrl && (
          <a
            href={retreat.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark active:bg-primary-dark transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2"
          >
            <ExternalLink className="w-4 h-4" />
            Ver inscripción oficial
          </a>
        )}
      </div>
    </motion.article>
  );
}
