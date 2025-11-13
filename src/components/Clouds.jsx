import React from 'react'

const Cloud = ({ className = '', style = {} }) => (
  <div
    className={`absolute ${className}`}
    style={{
      filter: 'blur(4px)',
      ...style,
    }}
  >
    <div className="relative h-24 w-40 rounded-full bg-white/80 shadow-lg shadow-purple-200/50">
      <div className="absolute -top-6 left-6 h-16 w-16 rounded-full bg-white/90" />
      <div className="absolute -top-4 left-20 h-12 w-12 rounded-full bg-white/90" />
      <div className="absolute -top-3 left-32 h-10 w-10 rounded-full bg-white/80" />
    </div>
  </div>
)

function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Cloud className="animate-float-slow" style={{ top: '10%', left: '8%' }} />
      <Cloud className="animate-float" style={{ top: '20%', right: '10%', transform: 'scale(1.2)' }} />
      <Cloud className="animate-float-slower" style={{ bottom: '14%', left: '18%', transform: 'scale(0.9)' }} />
      <Cloud className="animate-float-slow" style={{ bottom: '8%', right: '16%', transform: 'scale(1.1)' }} />
    </div>
  )
}

export default Clouds
