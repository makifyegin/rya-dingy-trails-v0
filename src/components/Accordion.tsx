import React from 'react';
import './styles/styles.css';  // Import the CSS file

export function Accordion() {
  return (
    <div className="accordion-container">
      <h1 className="accordion-title">Your New Adventure Starts Here</h1>

      <div className="accordion-content">
        <details className="accordion-item">
          <summary className="accordion-summary">
            <span className="accordion-icon">🚤</span>
            <img
              src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/boat.webp"
              alt="Boat Image"
              className="accordion-image"
            />
          </summary>
          <div className="accordion-details">
            <h3 className="accordion-heading">Boating</h3>
            <p>Port mutiny draught handsomely ye furl flogging line shrouds hulk. Spirits Plate Fleet code of conduct.</p>
          </div>
        </details>

        <details className="accordion-item">
          <summary className="accordion-summary">
            <span className="accordion-icon">⚓️</span>
            <img
              src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/anchor.webp"
              alt="Anchor Image"
              className="accordion-image"
            />
          </summary>
          <div className="accordion-details">
            <h3 className="accordion-heading">Anchoring</h3>
            <p>Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp Privateer galleon. Booty boom yard boatswain quarter.</p>
          </div>
        </details>

        <details className="accordion-item">
          <summary className="accordion-summary">
            <span className="accordion-icon">🎣</span>
            <img
              src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/fishing.webp"
              alt="Fishing Image"
              className="accordion-image"
            />
          </summary>
          <div className="accordion-details">
            <h3 className="accordion-heading">Fishing</h3>
            <p>No prey, no pay heave down splice the main brace furl cable snow walk the plank chase guns piracy bucko.</p>
          </div>
        </details>

        <details className="accordion-item">
          <summary className="accordion-summary">
            <span className="accordion-icon">🔦</span>
            <img
              src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/lighthouse.webp"
              alt="Lighthouse Image"
              className="accordion-image"
            />
          </summary>
          <div className="accordion-details">
            <h3 className="accordion-heading">Lighthouses</h3>
            <p>Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair Arr mizzenmast.</p>
          </div>
        </details>

        <details className="accordion-item">
          <summary className="accordion-summary">
            <span className="accordion-icon">🪸</span>
            <img
              src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/reef.webp"
              alt="Reef Image"
              className="accordion-image"
            />
          </summary>
          <div className="accordion-details">
            <h3 className="accordion-heading">Reefs</h3>
            <p>Keel yard poop deck brigantine gaff six pounders bring a spring upon her cable interloper lad pink.</p>
          </div>
        </details>
      </div>
    </div>
  );
}
