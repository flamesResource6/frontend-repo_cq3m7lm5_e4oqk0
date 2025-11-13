import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient wash to blend with UI - doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-100/60 via-pink-100/40 to-white/90" />

      {/* Sparkle field */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/70 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${10 + Math.random() * 12}px`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-soft backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-700">A cozy little world made just for you</span>
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-purple-800 [text-shadow:0_10px_40px_rgba(168,85,247,0.35)]">
            Happy 18th Birthday
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-glow">Welcome to your pastel dream</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-purple-700/80">
            Float with soft clouds, gentle sparkles, and warm light. Sip some boba with our cute ghost friend and enjoy this heartfelt surprise.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#messages" className="group rounded-full bg-pink-500/90 px-6 py-3 text-white shadow-lg shadow-pink-300/40 transition hover:bg-pink-500">
              Open your wishes
              <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#memories" className="rounded-full bg-white/80 px-6 py-3 text-purple-700 shadow-lg shadow-purple-200/60 backdrop-blur transition hover:bg-white">
              See the moments
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
