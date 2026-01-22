"use client";
import { Search, Filter, UserPlus } from 'lucide-react';

const patients = [
    { id: 'PAT-001', name: 'Sarah Johnson', age: 45, gender: 'Female', dept: 'Cardiology', status: 'Stable', lastVisit: '2024-01-20' },
    { id: 'PAT-002', name: 'Michael Chen', age: 62, gender: 'Male', dept: 'Emergency', status: 'Critical', lastVisit: '2024-01-22' },
    { id: 'PAT-003', name: 'Emma Wilson', age: 8, gender: 'Female', dept: 'Pediatrics', status: 'Discharged', lastVisit: '2024-01-21' },
    { id: 'PAT-004', name: 'James Rodriguez', age: 55, gender: 'Male', dept: 'Neurology', status: 'Stable', lastVisit: '2024-01-19' },
    { id: 'PAT-005', name: 'Lisa Anderson', age: 38, gender: 'Female', dept: 'Orthopedics', status: 'Stable', lastVisit: '2024-01-22' },
    { id: 'PAT-006', name: 'David Kim', age: 71, gender: 'Male', dept: 'Cardiology', status: 'Critical', lastVisit: '2024-01-22' },
];

export default function PatientsPage() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Patient Management</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>View and manage all patient records</p>
                </div>
                <button style={{
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '12px',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <UserPlus size={20} />
                    Add Patient
                </button>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search patients by name or ID..."
                            style={{
                                width: '100%',
                                padding: '0.8rem 1rem 0.8rem 3rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <button style={{
                        padding: '0.8rem 1.5rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <Filter size={20} />
                        Filter
                    </button>
                </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Patient ID</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Name</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Age</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Gender</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Department</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Status</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>Last Visit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{patient.id}</td>
                                <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>{patient.name}</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{patient.age}</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{patient.gender}</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{patient.dept}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        background: patient.status === 'Critical' ? 'rgba(239,68,68,0.1)' : patient.status === 'Stable' ? 'rgba(16,185,129,0.1)' : 'rgba(148,163,184,0.1)',
                                        color: patient.status === 'Critical' ? '#ef4444' : patient.status === 'Stable' ? '#10b981' : '#94a3b8',
                                        fontSize: '0.85rem'
                                    }}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{patient.lastVisit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
