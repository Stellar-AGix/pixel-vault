'use client'
import { useState } from 'react'

const products = [
  { id: 1, name: 'UI Kit – Stellar Dashboard', type: 'Figma', price: 12, rating: 4.9, sales: 340, color: '#6366f1', emoji: '🎨' },
  { id: 2, name: 'Afrobeat Sample Pack Vol. 2', type: 'Audio', price: 8, rating: 4.8, sales: 890, color: '#f59e0b', emoji: '🎵' },
  { id: 3, name: 'Next.js + Stellar Starter', type: 'Code', price: 25, rating: 5.0, sales: 120, color: '#10b981', emoji: '⚡' },
  { id: 4, name: 'Product Photography Presets', type: 'LR Preset', price: 6, rating: 4.7, sales: 1240, color: '#f43f5e', emoji: '📷' },
  { id: 5, name: 'Business Plan Template', type: 'PDF', price: 5, rating: 4.6, sales: 560, color: '#3b82f6', emoji: '📋' },
  { id: 6, name: 'Motion Graphics Pack', type: 'AE', price: 18, rating: 4.9, sales: 234, color: '#a855f7', emoji: '✨' },
]

export default function Home() {
  const [purchased, setPurchased] = useState<number[]>([])
  const [cart, setCart] = useState<number[]>([])

  const buy = (id: number) => setPurchased(p => [...p, id])

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e0e' }}>
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1c1c1c' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 18, fontWeight: 700, letterSpacing: -0.5 }}>pixel<span style={{ color: '#6366f1' }}>vault</span></div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ background: '#1c1c1c', borderRadius: 8, padding: '8px 14px', fontSize: 13, color: '#888' }}>Sell your work</div>
          <div style={{ background: '#1c1c1c', borderRadius: 8, padding: '8px 14px', fontSize: 13, color: '#888' }}>🛒 {cart.length}</div>
          <button style={{ background: '#6366f1', border: 'none', borderRadius: 8, padding: '8px 18px', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Connect</button>
        </div>
      </nav>

      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '50px 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1, marginBottom: 12 }}>Digital goods.<br /><span style={{ color: '#6366f1' }}>Instant delivery.</span></h1>
          <p style={{ color: '#666', fontSize: 16 }}>Pay with XLM or USDC. Files unlock the moment your transaction confirms.</p>
        </div>

        {/* Filter tags */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
          {['All', 'Code', 'Audio', 'Design', 'PDF', 'Templates'].map(t => (
            <button key={t} style={{ background: t === 'All' ? '#6366f1' : '#1c1c1c', color: t === 'All' ? '#fff' : '#888', border: '1px solid #2a2a2a', borderRadius: 20, padding: '6px 16px', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>{t}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {products.map(p => (
            <div key={p.id} style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ background: p.color + '15', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56, borderBottom: `1px solid ${p.color}20` }}>
                {p.emoji}
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: p.color, fontWeight: 700, background: p.color + '15', padding: '3px 8px', borderRadius: 6 }}>{p.type}</span>
                  <span style={{ fontSize: 12, color: '#555' }}>⭐ {p.rating}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, lineHeight: 1.3 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: '#555', marginBottom: 16 }}>{p.sales} sales</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 18, fontWeight: 700, color: p.color }}>${p.price}</div>
                  <button onClick={() => buy(p.id)} style={{ background: purchased.includes(p.id) ? '#10b981' : p.color, border: 'none', borderRadius: 8, padding: '8px 16px', color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}>
                    {purchased.includes(p.id) ? '✓ Download' : 'Buy now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
