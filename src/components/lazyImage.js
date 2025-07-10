import LazyImage from './lazyLoadOptimizer';

export default function Page() {
    return (
        <div>
            <h2>🖼️ Lazy Loaded Images</h2>
            <LazyImage src="/images/pic1.png" alt="Pic 1" />
            <div style={{ height: '1000px' }}></div>
            <LazyImage src="/images/pic2.png" alt="Pic 2" />
            <div style={{ height: '1000px' }}></div>
            <div style={{ height: '800px' }}></div>
            <LazyImage src="/images/pic3.png" alt="Pic 3" />
        </div>
    );
}