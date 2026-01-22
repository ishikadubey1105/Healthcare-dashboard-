import styles from "./dashboard.module.css";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.mainContent}>
                <header className={styles.header}>
                    <h2 style={{ fontWeight: 600 }}>Dashboard Overview</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            padding: '0.4rem 0.8rem',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '8px',
                            fontSize: '0.9rem',
                            border: '1px solid var(--glass-border)'
                        }}>
                            John Doe (Admin)
                        </div>
                        <div style={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                            border: '2px solid white'
                        }}></div>
                    </div>
                </header>
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    );
}
