import styles from "./dashboard.module.css";
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";
import { PatientFlowChart, DepartmentChart } from "@/components/DashboardCharts";

export const metadata = {
    title: "Dashboard Overview | HealthPulse",
    description: "Real-time healthcare analytics overview.",
};

export default function Dashboard() {
    return (
        <div>
            {/* Stats Grid */}
            <div className={styles.grid}>
                <StatCard
                    title="Total Patients"
                    value="1,284"
                    trend="+12.5% from last week"
                    icon={<Users size={24} />}
                />
                <StatCard
                    title="Avg. Wait Time"
                    value="14 min"
                    trend="-2.1% from last week"
                    icon={<Activity size={24} />}
                />
                <StatCard
                    title="Revenue"
                    value="$84,320"
                    trend="+5.4% from last week"
                    icon={<DollarSign size={24} />}
                />
                <StatCard
                    title="Bed Occupancy"
                    value="87%"
                    trend="+1.2% from last week"
                    icon={<TrendingUp size={24} />}
                />
            </div>

            {/* Charts Section */}
            <div className={styles.chartSection}>
                <div className={`${styles.chartCard} glass-panel`} style={{ borderRadius: '20px' }}>
                    <h3 className={styles.chartCardTitle}>Patient Flow Trends</h3>
                    <div style={{ height: '320px' }}>
                        <PatientFlowChart />
                    </div>
                </div>
                <div className={`${styles.chartCard} glass-panel`} style={{ borderRadius: '20px' }}>
                    <h3 className={styles.chartCardTitle}>Department Load</h3>
                    <div style={{ height: '320px' }}>
                        <DepartmentChart />
                    </div>
                </div>
            </div>

            {/* Recent Patients Table */}
            <div className={`glass-panel`} style={{ padding: '1.5rem', borderRadius: '20px' }}>
                <h3 className={styles.chartCardTitle}>Recent Admissions</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-secondary)' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Patient ID</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Name</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Department</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Status</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow id="#PAT-001" name="Sarah Johnson" dept="Cardiology" status="Stable" time="2 mins ago" />
                            <TableRow id="#PAT-002" name="Michael Chen" dept="Emergency" status="Critical" time="15 mins ago" />
                            <TableRow id="#PAT-003" name="Emma Wilson" dept="Pediatrics" status="Discharged" time="1 hour ago" />
                            <TableRow id="#PAT-004" name="James Rod" dept="Neurology" status="Stable" time="2 hours ago" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, trend, icon }: any) {
    const isPositive = trend.startsWith('+');
    // Special case for wait time: negative is good
    const isWaitTime = title === "Avg. Wait Time";
    const isGood = isWaitTime ? !isPositive : isPositive;

    const color = isGood ? '#10b981' : '#ef4444';

    return (
        <div className={`${styles.statCard} glass-panel`} style={{ borderRadius: '20px' }}>
            <div className={styles.statHeader}>
                <div className={styles.statIcon}>{icon}</div>
            </div>
            <div>
                <div className={styles.statLabel}>{title}</div>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statTrend} style={{ color }}>
                    {trend}
                </div>
            </div>
        </div>
    )
}

function TableRow({ id, name, dept, status, time }: any) {
    const statusColor = status === 'Critical' ? '#ef4444' : status === 'Stable' ? '#10b981' : '#94a3b8';

    return (
        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <td style={{ padding: '1rem' }}>{id}</td>
            <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>{name}</td>
            <td style={{ padding: '1rem' }}>{dept}</td>
            <td style={{ padding: '1rem' }}>
                <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '50px',
                    background: `rgba(${status === 'Critical' ? '239, 68, 68' : status === 'Stable' ? '16, 185, 129' : '148, 163, 184'}, 0.1)`,
                    color: statusColor,
                    fontSize: '0.85rem'
                }}>
                    {status}
                </span>
            </td>
            <td style={{ padding: '1rem' }}>{time}</td>
        </tr>
    )
}
