import type { ReactElement } from 'react';

const NAV_ITEMS = [
  { label: 'Overview', isActive: true },
  { label: 'Analytics', isActive: false },
  { label: 'Projects', isActive: false },
  { label: 'Settings', isActive: false },
] as const;

export function Sidebar(): ReactElement {
  return (
    <aside className="border-b border-border bg-surface px-6 py-4 lg:w-64 lg:border-b-0 lg:border-r">
      <div className="mb-6 flex items-center gap-2">
        <div className="center-flex h-9 w-9 rounded-xl bg-primary/10 text-primary">
          <span className="text-sm font-bold">D</span>
        </div>
        <span className="text-lg font-semibold">DashBoard</span>
      </div>
      <nav className="stack-sm">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href="#"
            className={
              item.isActive
                ? 'rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary'
                : 'rounded-lg px-3 py-2 text-sm text-muted hover:bg-secondary/10'
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
