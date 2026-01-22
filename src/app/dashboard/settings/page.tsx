"use client";
import { User, Bell, Lock, Database, Moon } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Settings</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Manage your account and preferences</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <SettingSection
                    icon={<User size={24} />}
                    title="Profile Settings"
                    description="Update your personal information and profile picture"
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <InputField label="Full Name" value="John Doe" />
                        <InputField label="Email" value="john.doe@healthpulse.com" />
                        <InputField label="Phone" value="+1 (555) 123-4567" />
                        <InputField label="Role" value="Administrator" />
                    </div>
                </SettingSection>

                <SettingSection
                    icon={<Bell size={24} />}
                    title="Notifications"
                    description="Configure how you receive notifications"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <ToggleOption label="Email Notifications" description="Receive updates via email" />
                        <ToggleOption label="Push Notifications" description="Get real-time alerts" />
                        <ToggleOption label="SMS Alerts" description="Critical updates via SMS" />
                    </div>
                </SettingSection>

                <SettingSection
                    icon={<Lock size={24} />}
                    title="Security"
                    description="Manage your password and security settings"
                >
                    <button style={{
                        padding: '0.8rem 1.5rem',
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}>
                        Change Password
                    </button>
                </SettingSection>

                <SettingSection
                    icon={<Moon size={24} />}
                    title="Appearance"
                    description="Customize the look and feel"
                >
                    <ToggleOption label="Dark Mode" description="Currently enabled" />
                </SettingSection>
            </div>
        </div>
    );
}

function SettingSection({ icon, title, description, children }: any) {
    return (
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
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
                    {icon}
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.25rem' }}>{title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{description}</p>
                </div>
            </div>
            {children}
        </div>
    );
}

function InputField({ label, value }: any) {
    return (
        <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{label}</label>
            <input
                type="text"
                defaultValue={value}
                style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    outline: 'none'
                }}
            />
        </div>
    );
}

function ToggleOption({ label, description }: any) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 0' }}>
            <div>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{label}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{description}</div>
            </div>
            <div style={{
                width: 48,
                height: 28,
                background: 'var(--primary)',
                borderRadius: '50px',
                position: 'relative',
                cursor: 'pointer'
            }}>
                <div style={{
                    width: 24,
                    height: 24,
                    background: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    right: 2,
                    top: 2,
                    transition: 'all 0.2s'
                }}></div>
            </div>
        </div>
    );
}
