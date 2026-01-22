"use client";
import { Download, FileText, TrendingUp } from 'lucide-react';

const reports = [
    { id: 'RPT-001', title: 'Monthly Patient Analytics', type: 'Analytics', date: '2024-01-22', size: '2.4 MB' },
    { id: 'RPT-002', title: 'Q4 Financial Summary', type: 'Financial', date: '2024-01-20', size: '1.8 MB' },
    { id: 'RPT-003', title: 'Department Performance Review', type: 'Performance', date: '2024-01-18', size: '3.1 MB' },
    { id: 'RPT-004', title: 'Patient Satisfaction Survey', type: 'Survey', date: '2024-01-15', size: '890 KB' },
];

export default function ReportsPage() {
    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Reports & Analytics</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Download and view generated reports</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <StatCard icon={<FileText size={24} />} title="Total Reports" value="24" />
                <StatCard icon={<TrendingUp size={24} />} title="This Month" value="8" />
                <StatCard icon={<Download size={24} />} title="Downloads" value="142" />
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Recent Reports</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {reports.map(report => (
                        <div key={report.id} style={{
                            padding: '1.5rem',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.2s ease'
                        }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    background: 'rgba(14,165,233,0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)'
                                }}>
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{report.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                        {report.type} • {report.date} • {report.size}
                                    </p>
                                </div>
                            </div>
                            <button style={{
                                padding: '0.6rem 1.2rem',
                                background: 'var(--primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Download size={18} />
                                Download
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, title, value }: any) {
    return (
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px' }}>
            <div style={{
                width: 48,
                height: 48,
                background: 'rgba(14,165,233,0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1rem'
            }}>
                {icon}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{title}</div>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>{value}</div>
        </div>
    );
}
