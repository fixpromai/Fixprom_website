import React, { useEffect, useRef } from 'react';
import './FeatureBlock.css';

export default function FeatureBlock({ title, highlight, description, image, reverse }) {
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blockRef.current.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (blockRef.current) observer.observe(blockRef.current);
    return () => {
      if (blockRef.current) observer.unobserve(blockRef.current);
    };
  }, []);

  return (
    <div
      ref={blockRef}
      className={`feature-block ${reverse ? 'reverse' : ''}`}
    >
      <div className="feature-text">
        <h2 className="feature-title">
          {title.split(highlight).map((part, index, arr) =>
            index < arr.length - 1 ? (
              <React.Fragment key={index}>
                {part}
                <span className="highlight">{highlight}</span>
              </React.Fragment>
            ) : (
              part
            )
          )}
        </h2>
        <p className="feature-description">{description}</p>
      </div>
      <div className="feature-image">
        <img src={image} alt={highlight} className="feature-img" />
      </div>
    </div>
  );
}
