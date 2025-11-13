import React from 'react'

function WishCard({ name = 'From a friend', message = 'Wishing you the sweetest year ahead filled with pastel skies, soft clouds and warm hugs.', color = 'from-pink-200 to-purple-200' }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-6 shadow-lg transition-transform hover:-translate-y-1`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff60,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <h3 className="text-lg font-semibold text-purple-800">{name}</h3>
        <p className="mt-2 text-purple-700/80 leading-relaxed">{message}</p>
      </div>
    </div>
  )
}

export default WishCard
