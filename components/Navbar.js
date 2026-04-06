'use client';

export default function Navbar() {
  return (
    <nav>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="logo">VOTE<span style={{ color: '#0f172a' }}>MODERN</span></div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500' }}>Explore</a>
            <a href="/my-polls" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500' }}>My Polls</a>
            <button className="btn btn-primary">Login with GitHub</button>
          </div>
      </div>
    </nav>
  );
}
