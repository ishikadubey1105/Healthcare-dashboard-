"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, BarChart2, ShieldCheck, ArrowRight, HeartPulse } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }} className="container">
        <div style={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{
            width: 40,
            height: 40,
            background: 'var(--gradient-main)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <HeartPulse size={24} />
          </div>
          HealthPulse
        </div>
        <Link href="/dashboard" className={styles.buttonSecondary} style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
          Login
        </Link>
      </nav>

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{
            marginBottom: '1rem',
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(14, 165, 233, 0.1)',
            borderRadius: '50px',
            color: 'var(--primary)',
            fontWeight: 600,
            fontSize: '0.9rem'
          }}>
            ✨ The Future of Health Tech
          </div>
          <h1 className={styles.title}>
            Healthcare Analytics <br />
            <span className="text-gradient">Reimagined</span>
          </h1>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Unlock actionable insights from patient data with AI-powered analytics.
          Improve outcomes, optimize operations, and predict trends with precision.
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/dashboard" className={styles.buttonPrimary}>
            Launch Dashboard <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </Link>
          <button className={styles.buttonSecondary}>
            Watch Demo
          </button>
        </motion.div>
      </section>

      <section className={styles.features}>
        <FeatureCard
          icon={<BarChart2 size={32} />}
          title="Real-time Analytics"
          desc="Monitor patient flows and resource utilization in real-time with sub-second latency."
          delay={0.2}
        />
        <FeatureCard
          icon={<Activity size={32} />}
          title="Predictive Modeling"
          desc="Forecast patient admission rates and disease outbreaks using advanced ML algorithms."
          delay={0.4}
        />
        <FeatureCard
          icon={<ShieldCheck size={32} />}
          title="HIPAA Compliant"
          desc="Enterprise-grade security ensuring your patient data remains safe and compliant."
          delay={0.6}
        />
      </section>

      <footer style={{
        marginTop: 'auto',
        padding: '2rem',
        borderTop: '1px solid var(--glass-border)',
        width: '100%',
        textAlign: 'center',
        color: 'var(--text-muted)'
      }}>
        <p>&copy; 2024 HealthPulse Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      className={`${styles.featureCard} glass-panel`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring" }}
    >
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{desc}</p>
    </motion.div>
  );
}
