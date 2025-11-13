import { motion } from 'framer-motion';

function Puff({ className = '', size = 80, color = '#FFFFFF', glow = 'rgba(255,255,255,0.7)' }) {
  const s = typeof size === 'number' ? `${size}px` : size;
  return (
    <div className={`relative ${className}`} style={{ width: s, height: s }}>
      {/* Body */}
      <motion.div
        initial={{ scale: 0.98, y: 0 }}
        animate={{ scale: [0.98, 1.02, 0.98], y: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-[40%]"
        style={{
          background: `linear-gradient(180deg, ${color}, rgba(255,255,255,0.9))`,
          boxShadow: `0 12px 40px ${glow}`,
          filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.03))',
        }}
      />
      {/* Eyes */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-3">
        <div className="h-2 w-2 rounded-full bg-slate-700/70" />
        <div className="h-2 w-2 rounded-full bg-slate-700/70" />
      </div>
      {/* Blush */}
      <div className="absolute left-3 top-1/2 h-2 w-4 -translate-y-1/2 rounded-full bg-rose-200/70 blur-[2px]" />
      <div className="absolute right-3 top-1/2 h-2 w-4 -translate-y-1/2 rounded-full bg-rose-200/70 blur-[2px]" />
      {/* Ribbon */}
      <div className="absolute -right-2 -top-2 h-3 w-6 rotate-12 rounded-full bg-rose-300/80 shadow" />
    </div>
  );
}

export default function FluffySprites() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Puff className="absolute left-8 top-24" size={90} color="#FFFFFF" />
      <Puff className="absolute right-10 top-52" size={72} color="#FEFEFE" glow="rgba(233,225,255,0.7)" />
      <Puff className="absolute left-1/3 bottom-16" size={110} color="#FFFFFF" glow="rgba(223,240,255,0.7)" />
    </div>
  );
}
