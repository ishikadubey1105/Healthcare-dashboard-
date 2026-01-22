"use client";
import { Calendar as CalendarIcon, Clock, User } from 'lucide-react';

const appointments = [
    { id: 1, time: '09:00 AM', patient: 'Sarah Johnson', doctor: 'Dr. Smith', dept: 'Cardiology', status: 'Confirmed' },
    { id: 2, time: '10:30 AM', patient: 'Michael Chen', doctor: 'Dr. Williams', dept: 'Emergency', status: 'Pending' },
    { id: 3, time: '11:00 AM', patient: 'Emma Wilson', doctor: 'Dr. Brown', dept: 'Pediatrics', status: 'Confirmed' },
    { id: 4, time: '02:00 PM', patient: 'James Rodriguez', doctor: 'Dr. Davis', dept: 'Neurology', status: 'Confirmed' },
    { id: 5, time: '03:30 PM', patient: 'Lisa Anderson', doctor: 'Dr. Martinez', dept: 'Orthopedics', status: 'Cancelled' },
];

export default function SchedulePage() {
    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Appointment Schedule</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Today's appointments - January 22, 2024</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px', height: 'fit-content' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CalendarIcon size={20} />
                        Calendar
                    </h3>
                    <div style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '1rem',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--primary)' }}>22</div>
                        <div style={{ color: 'var(--text-secondary)' }}>January 2024</div>
                    </div>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ padding: '0.8rem', background: 'rgba(14,165,233,0.1)', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>5 Appointments</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Today</div>
                        </div>
                        <div style={{ padding: '0.8rem', background: 'rgba(16,185,129,0.1)', borderRadius: '8px', borderLeft: '3px solid var(--secondary)' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>3 Confirmed</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Status</div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Today's Schedule</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {appointments.map(apt => (
                            <div key={apt.id} style={{
                                padding: '1.2rem',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                display: 'grid',
                                gridTemplateColumns: '100px 1fr auto',
                                gap: '1rem',
                                alignItems: 'center'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}>
                                    <Clock size={18} />
                                    {apt.time}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{apt.patient}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                        {apt.doctor} • {apt.dept}
                                    </div>
                                </div>
                                <span style={{
                                    padding: '0.4rem 1rem',
                                    borderRadius: '50px',
                                    background: apt.status === 'Confirmed' ? 'rgba(16,185,129,0.1)' : apt.status === 'Pending' ? 'rgba(251,191,36,0.1)' : 'rgba(239,68,68,0.1)',
                                    color: apt.status === 'Confirmed' ? '#10b981' : apt.status === 'Pending' ? '#fbbf24' : '#ef4444',
                                    fontSize: '0.85rem',
                                    fontWeight: 600
                                }}>
                                    {apt.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
