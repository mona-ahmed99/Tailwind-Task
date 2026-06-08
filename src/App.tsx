import type { ReactElement } from 'react';
import { ActivityList } from './components/activity-list';
import { Header } from './components/header';
import { InviteForm } from './components/invite-form';
import { Sidebar } from './components/sidebar';
import { StatCards } from './components/stat-cards';
import { useTheme } from './hooks/use-theme';

export function App(): ReactElement {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header isDark={isDark} onToggleTheme={toggleTheme} />
        <main className="flex-1 space-y-6 p-6">
          <StatCards />
          <section className="grid gap-6 lg:grid-cols-2">
            <InviteForm />
            <ActivityList />
          </section>
        </main>
      </div>
    </div>
  );
}
