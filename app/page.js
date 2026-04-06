import { supabase } from '@/lib/supabase';

export default async function Home() {
  const { data: polls } = await supabase
    .from('polls')
    .select('*, options(count)');

  const mockPolls = [
    { id: 1, question: 'Favorite Programming Language?', totalVotes: 156 },
    { id: 2, question: 'Best Frontend Framework?', totalVotes: 89 },
    { id: 3, question: 'Coffee or Tea?', totalVotes: 245 },
    { id: 4, question: 'Dark Mode or Light Mode?', totalVotes: 312 }
  ];

  const displayPolls = (polls && polls.length > 0) ? polls : mockPolls;

  return (
    <div className="hero">
      <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px' }}>
        Global <span style={{ color: 'var(--accent)' }}>Polling</span>
      </h1>
      <p style={{ color: '#64748b', marginTop: '12px' }}>Vote on trends or create your own social poll.</p>

      <div className="poll-grid">
        {displayPolls.map((poll) => (
          <a key={poll.id} href={`/poll/${poll.id}`} className="poll-card">
            <h3>{poll.question}</h3>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{poll.totalVotes || 0} votes</span>
                <span style={{ color: 'var(--accent)', fontWeight: '600' }}>Vote Now →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
