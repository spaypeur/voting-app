import { supabase } from '@/lib/supabase';

export default async function MyPolls() {
  const mockMyPolls = [
    { id: 1, question: 'Favorite Programming Language?', totalVotes: 156 },
    { id: 4, question: 'Dark Mode or Light Mode?', totalVotes: 312 }
  ];

  return (
    <div className="hero">
      <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px' }}>
        My <span style={{ color: 'var(--accent)' }}>Polls</span>
      </h1>
      <p style={{ color: '#64748b', marginTop: '12px' }}>Manage and monitor the polls you've created.</p>

      <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'left' }}>
        <div style={{ padding: '30px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', marginBottom: '40px' }}>
             <h3 style={{ marginBottom: '20px' }}>Create New Poll</h3>
             <form>
               <div className="form-group">
                 <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Question</label>
                 <input type="text" placeholder="E.g. What should we have for lunch?" required />
               </div>
               <div className="form-group">
                 <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Options (Comma separated)</label>
                 <input type="text" placeholder="Pizza, Burgers, Sushi..." required />
               </div>
               <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                 Create Poll
               </button>
             </form>
        </div>

        <div>
          <h3 style={{ marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>Active Polls</h3>
          {mockMyPolls.map((poll) => (
            <div key={poll.id} style={{ padding: '20px', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ marginBottom: '8px' }}>{poll.question}</h4>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{poll.totalVotes} Total Votes</div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href={`/poll/${poll.id}`} className="btn" style={{ background: '#e2e8f0', color: '#0f172a', textDecoration: 'none' }}>View</a>
                <button className="btn" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
