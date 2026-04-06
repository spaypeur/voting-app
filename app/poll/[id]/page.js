import PollChart from '../../../components/PollChart';

export default function PollDetail({ params }) {
  const mockOptions = [
    { label: 'React', votes: 120 },
    { label: 'Vue', votes: 45 },
    { label: 'Angular', votes: 60 },
    { label: 'Svelte', votes: 30 }
  ];

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
        What is the best Frontend Framework?
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '60px', alignItems: 'center' }}>
        
        {/* Voting Section */}
        <div>
          <h3 style={{ marginBottom: '20px' }}>I vote for...</h3>
          <div className="vote-options">
            {mockOptions.map(opt => (
              <button key={opt.label} className="option-btn">
                {opt.label}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '40px', padding: '24px', background: '#f8fafc', border: '1px solid var(--border)', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '12px' }}>Not seeing your choice?</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <input type="text" placeholder="Add custom option..." />
              <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Add Option</button>
            </div>
            <p style={{ marginTop: '12px', fontSize: '0.8rem', color: '#64748b' }}>
              * Only authenticated users can create new options.
            </p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-container" style={{ width: '100%' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Live Results</h3>
          <PollChart data={mockOptions} />
          
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button className="btn" style={{ background: '#e2e8f0', color: '#0f172a' }}>
               Share Poll Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
