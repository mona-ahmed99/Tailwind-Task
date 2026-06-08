import type { ReactElement } from 'react';

interface HeaderProps {
  readonly isDark: boolean;
  readonly onToggleTheme: () => void;
}

export function Header({ isDark, onToggleTheme }: HeaderProps): ReactElement {
  return (
    <header className="flex items-center justify-between border-b border-border bg-surface px-6 py-4">
      <div>
        <h1 className="text-xl font-semibold">Overview</h1>
        <p className="text-sm text-muted">Welcome back — here is your summary.</p>
      </div>
      <button
        type="button"
        className="btn-secondary"
        aria-label="Toggle dark mode"
        onClick={onToggleTheme}
      >
        {isDark ? 'Light mode' : 'Dark mode'}
      </button>
    </header>
  );
}
