import React from 'react';
import FeatureBlock from './FeatureBlock';

import img1 from '../assets/feature1.png';
import img2 from '../assets/feature2.png';
import img3 from '../assets/feature3.png';

export default function FeatureSection() {
  return (
    <section
      id="features" 
      style={{ padding: '40px 20px', textAlign: 'center' }}
    >
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>
          Features
        </h2>
        <h3 style={{ fontSize: '20px', fontWeight: 'normal', color: '#555' }}>
          One click. One perfect prompt.
        </h3>
      </div>

      <FeatureBlock
        title="Smart Prompt Helper"
        highlight="Prompt Helper"
        description="Improves and refines your prompt automatically."
        image={img2}
      />
      <FeatureBlock
        title="Works in Any Language"
        highlight="Any Language"
        description="Use it in any language you’re comfortable with."
        image={img3}
        reverse
      />
      <FeatureBlock
        title="One-Click Styling"
        highlight="One-Click"
        description="Enhances the appearance of your text with a single click."
        image={img1}
      />
    </section>
  );
}
