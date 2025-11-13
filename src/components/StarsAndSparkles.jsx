import { motion } from 'framer-motion';

function Star({ x, y, size = 6, color = '#FADADD', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0, 1, 0.3, 1], scale: [0.6, 1, 0.9, 1] }}
      transition={{ duration: 2.8, repeat: Infinity, delay }}
      className="absolute"
      style={{ left: x, top: y, width: size, height: size, filter: 'drop-shadow(0 0 10px rgba(255,220,235,0.8))' }}
    >
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white/90" />
        <div className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 bg-white/90" />
      </div>
    </motion.div>
  );
}

export default function StarsAndSparkles() {
  const stars = Array.from({ length: 22 }).map((_, i) => ({
    x: Math.random() * 100 + '%',
    y: Math.random() * 100 + '%',
    size: 4 + Math.random() * 6,
    delay: Math.random() * 3,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {stars.map((s, i) => (
        <Star key={i} x={s.x} y={s.y} size={s.size} delay={s.delay} />
      ))}
    </div>
  );
}
