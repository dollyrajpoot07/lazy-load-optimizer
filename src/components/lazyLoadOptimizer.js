// ✅ src/components/LazyImage.jsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './lazyLoadOptimizer.module.css';

export default function LazyImage({ src, alt }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={styles.lazyImageWrapper}>
      {isVisible ? (
        <Image src={src} alt={alt} width={400} height={100} className={styles.lazyImage} />
      ) : (
        <div className={styles.placeholder}>Loading image...</div>
      )}
    </div>
  );
}
