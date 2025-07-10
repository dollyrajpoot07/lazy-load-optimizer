'use client';
import LazyImage from '/src/components/lazyLoadOptimizer.js';

export default function HomePage() {
  return (
    <main>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Lazy Loading Images Demo</h1>
      
      <div style={{ height: '700px' }}></div> {/* spacer to force scroll */}

      {[...Array(5)].map((_, i) => (
        <LazyImage 
          key={i}
          src={`https://picsum.photos/id/${1020 + i}/400/300`} 
          alt={`Random Image ${i + 1}`} 
        />
      ))}

      <div style={{ height: '700px' }}></div>
    </main>
  );
}
