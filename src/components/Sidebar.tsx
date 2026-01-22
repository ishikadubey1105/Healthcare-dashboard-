"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../app/dashboard/dashboard.module.css';
import { LayoutDashboard, Users, Calendar, Settings, HeartPulse, LogOut, FileText, Activity } from 'lucide-react';

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <div style={{
                    width: 32,
                    height: 32,
                    background: 'var(--gradient-main)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                }}>
                    <HeartPulse size={20} />
                </div>
                HealthPulse
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Link href="/dashboard" className={`${styles.navItem} ${isActive('/dashboard') ? styles.navItemActive : ''}`}>
                    <LayoutDashboard size={20} />
                    Overview
                </Link>
                <Link href="/dashboard/patients" className={`${styles.navItem} ${isActive('/dashboard/patients') ? styles.navItemActive : ''}`}>
                    <Users size={20} />
                    Patients
                </Link>
                <Link href="/dashboard/reports" className={`${styles.navItem} ${isActive('/dashboard/reports') ? styles.navItemActive : ''}`}>
                    <FileText size={20} />
                    Reports
                </Link>
                <Link href="/dashboard/predict" className={`${styles.navItem} ${isActive('/dashboard/predict') ? styles.navItemActive : ''}`}>
                    <Activity size={20} />
                    AI Risk Check
                </Link>
                <Link href="/dashboard/schedule" className={`${styles.navItem} ${isActive('/dashboard/schedule') ? styles.navItemActive : ''}`}>
                    <Calendar size={20} />
                    Schedule
                </Link>
                <Link href="/dashboard/settings" className={`${styles.navItem} ${isActive('/dashboard/settings') ? styles.navItemActive : ''}`}>
                    <Settings size={20} />
                    Settings
                </Link>
            </nav>

            <Link href="/" className={styles.navItem} style={{ marginTop: 'auto', color: '#ef4444' }}>
                <LogOut size={20} />
                Logout
            </Link>
        </aside>
    );
}
