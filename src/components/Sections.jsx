import { motion } from 'framer-motion';

export function GlowingCard({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={`relative rounded-2xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur ${className}`}
      style={{ boxShadow: '0 20px 60px rgba(233,225,255,0.5)' }}
    >
      {/* subtle inner glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/60" />
      {children}
    </motion.div>
  );
}

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-extrabold text-slate-800 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

export function Messages() {
  const wishes = [
    'May your 18th be gentle, golden, and full of cozy light.',
    'You make the world softer—keep shining, Angel.',
    'Here’s to new adventures with boba in hand and stars at your feet.',
    'We love your kindness, your laugh, and the way you make days brighter.',
  ];

  return (
    <section id="messages" className="relative z-10 mx-auto max-w-5xl px-6 py-16">
      <SectionHeading title="Birthday Wishes" subtitle="Little notes wrapped in ribbon and stardust" />
      <div className="grid gap-6 md:grid-cols-2">
        {wishes.map((w, i) => (
          <GlowingCard key={i}>
            <p className="text-slate-700">{w}</p>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
}

export function Reasons() {
  const reasons = [
    'Your gentle courage', 'Your thoughtful heart', 'Your creativity', 'Your kindness',
    'Your curiosity', 'Your resilience', 'Your laugh', 'Your warmth', 'Your honesty', 'Your joy',
    'Your dreams', 'Your care', 'Your spark', 'Your softness', 'Your strength', 'Your empathy',
    'Your hugs', 'Your light'
  ];

  return (
    <section id="reasons" className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
      <SectionHeading title="18 Reasons We Love You" subtitle="A bouquet of tiny truths" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {reasons.map((r, i) => (
          <GlowingCard key={i} className="text-center">
            <p className="font-semibold text-slate-700">{i + 1}. {r}</p>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
}
