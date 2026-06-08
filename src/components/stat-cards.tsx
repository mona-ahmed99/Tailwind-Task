import type { ReactElement } from 'react';

interface StatCard {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly badgeClass: string;
  readonly badgeText: string;
  readonly className?: string;
}

const STATS: readonly StatCard[] = [
  {
    id: 'users',
    label: 'Total Users',
    value: '12,480',
    badgeClass: 'badge-success',
    badgeText: '+12% this month',
  },
  {
    id: 'revenue',
    label: 'Revenue',
    value: '$48,290',
    badgeClass: 'badge-warning',
    badgeText: 'Pending review',
  },
  {
    id: 'issues',
    label: 'Open Issues',
    value: '23',
    badgeClass: 'badge-danger',
    badgeText: '3 critical',
    className: 'sm:col-span-2 xl:col-span-1',
  },
];

export function StatCards(): ReactElement {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {STATS.map((stat) => (
        <article key={stat.id} className={`card ${stat.className ?? ''}`}>
          <p className="text-sm text-muted">{stat.label}</p>
          <p className="mt-2 text-3xl font-bold">{stat.value}</p>
          <span className={`${stat.badgeClass} mt-3`}>{stat.badgeText}</span>
        </article>
      ))}
    </section>
  );
}
