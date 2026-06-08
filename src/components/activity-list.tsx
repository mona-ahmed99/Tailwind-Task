import type { ReactElement } from 'react';

interface ActivityItem {
  readonly id: string;
  readonly title: string;
  readonly time: string;
  readonly badgeClass: string;
  readonly badgeText: string;
}

const ACTIVITIES: readonly ActivityItem[] = [
  {
    id: 'deployment',
    title: 'Deployment completed',
    time: '2 minutes ago',
    badgeClass: 'badge-success',
    badgeText: 'Success',
  },
  {
    id: 'api-warning',
    title: 'API rate limit warning',
    time: '1 hour ago',
    badgeClass: 'badge-warning',
    badgeText: 'Warning',
  },
  {
    id: 'payment',
    title: 'Payment failed',
    time: 'Yesterday',
    badgeClass: 'badge-danger',
    badgeText: 'Failed',
  },
];

export function ActivityList(): ReactElement {
  return (
    <article className="card">
      <h2 className="text-lg font-semibold">Recent Activity</h2>
      <ul className="mt-4 space-y-4">
        {ACTIVITIES.map((activity) => (
          <li key={activity.id} className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-muted">{activity.time}</p>
            </div>
            <span className={activity.badgeClass}>{activity.badgeText}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
