import type { LucideIcon } from 'lucide-react';
import {
  CalendarDays,
  Home,
  LayoutGrid,
  Ticket,
  User,
} from 'lucide-react';

import styles from './BottomTabBar.module.css';

type Tab = {
  /** Value passed to `onTabChange` and compared against `activeTab` */
  id: string;
  label: string;
  icon: LucideIcon;
};

const TABS: Tab[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'services', label: 'Services', icon: LayoutGrid },
  { id: 'pass', label: 'Pass', icon: Ticket },
  { id: 'bookings', label: 'Bookings', icon: CalendarDays },
  { id: 'profile', label: 'Profile', icon: User },
];

type BottomTabBarProps = {
  /** `id` of the currently selected tab */
  activeTab: string;
  /** Called with the `id` of the tapped tab */
  onTabChange: (tab: string) => void;
};

/** Fixed bottom navigation with the five top-level destinations. */
export default function BottomTabBar({
  activeTab,
  onTabChange,
}: BottomTabBarProps) {
  return (
    <nav className={styles.bar}>
      {TABS.map(({ id, label, icon: Icon }) => {
        const active = id === activeTab;
        return (
          <button
            key={id}
            type="button"
            className={`${styles.tab} ${active ? styles.active : ''}`}
            aria-current={active ? 'page' : undefined}
            onClick={() => onTabChange(id)}
          >
            <Icon size={22} strokeWidth={active ? 2.4 : 2} aria-hidden="true" />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
