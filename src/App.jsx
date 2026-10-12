import { useMemo, useState } from 'react';

const topics = [
  {
    id: 'mechanics',
    title: 'Mechanics',
    description: 'Motion, forces, momentum, and energy in action.',
    accent: 'cyan',
    lessons: ['Kinematics', 'Newton’s Laws', 'Work & Energy', 'Momentum'],
  },
  {
    id: 'electricity',
    title: 'Electricity',
    description: 'Circuits, resistance, and electrical relationships.',
    accent: 'violet',
    lessons: ['Ohm’s Law', 'Series Circuits', 'Parallel Circuits', 'Power'],
  },
  {
    id: 'waves',
    title: 'Waves',
    description: 'Sound, light, interference, and resonance.',
    accent: 'amber',
    lessons: ['Frequency', 'Amplitude', 'Interference', 'Resonance'],
  },
  {
    id: 'optics',
    title: 'Optics',
    description: 'Reflection, refraction, lenses, and image formation.',
    accent: 'pink',
    lessons: ['Lens Formula', 'Color', 'Reflection', 'Refraction'],
  },
  {
    id: 'thermo',
    title: 'Thermodynamics',
    description: 'Heat flow, temperature, and energy transfer.',
    accent: 'green',
    lessons: ['Heat Transfer', 'Phase Change', 'Entropy', 'Gas Laws'],
  },
  {
    id: 'modern',
    title: 'Modern Physics',
    description: 'Atoms, radioactivity, and quantum concepts.',
    accent: 'red',
    lessons: ['Photoelectric Effect', 'Radioactivity', 'Atoms', 'Nuclear Energy'],
  },
];

const labs = [
  { id: 'motion', label: 'Motion Lab', color: 'cyan' },
  { id: 'forces', label: 'Forces Lab', color: 'violet' },
  { id: 'waves', label: 'Wave Lab', color: 'amber' },
  { id: 'electricity', label: 'Circuit Lab', color: 'green' },
  { id: 'optics', label: 'Optics Lab', color: 'pink' },
];

const quickFacts = [
  { value: '20+', label: 'Concept Simulations' },
  { value: '6', label: 'Core Physics Domains' },
  { value: '100%', label: 'Visual Learning' },
  { value: '9–12+', label: 'Student Friendly' },
];

const conceptCards = [
  { title: 'Force = mass × acceleration', detail: 'Explore how changing mass and net force changes motion.' },
  { title: 'Energy is conserved', detail: 'Track kinetic, potential, and thermal energy across systems.' },
  { title: 'Voltage drives current', detail: 'See how circuit components affect current and power.' },
  { title: 'Wave speed depends on medium', detail: 'Compare frequency, wavelength, and velocity in motion.' },
];

const challengeCards = [
  'Build a circuit that lights both bulbs with minimum energy loss.',
  'Adjust launch angle to maximize projectile range without changing speed.',
  'Explain how wavelength changes when a sound source moves toward a listener.',
  'Predict how lens curvature changes the image size and focus.',
];

const learningPaths = [
  { title: 'Foundations', description: 'Motion, forces, vectors, and units.', level: 'Beginner' },
  { title: 'Electric & Magnetic', description: 'Circuits, fields, induction, and current flow.', level: 'Intermediate' },
  { title: 'Modern Physics', description: 'Atoms, radiation, and the quantum worldview.', level: 'Advanced' },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function App() {
  const [activeLab, setActiveLab] = useState('motion');
  const [launchSpeed, setLaunchSpeed] = useState(26);
  const [launchAngle, setLaunchAngle] = useState(48);
  const [mass, setMass] = useState(4);
  const [frequency, setFrequency] = useState(3.5);
  const [amplitude, setAmplitude] = useState(48);
  const [voltage, setVoltage] = useState(18);
  const [resistance, setResistance] = useState(11);
  const [lensPower, setLensPower] = useState(1.4);

  const projectileRange = useMemo(() => {
    const radians = (launchAngle * Math.PI) / 180;
    return ((launchSpeed ** 2 * Math.sin(2 * radians)) / 9.8).toFixed(1);
  }, [launchSpeed, launchAngle]);

  const current = useMemo(() => (voltage / resistance).toFixed(2), [voltage, resistance]);
  const power = useMemo(() => (voltage * Number(current)).toFixed(2), [voltage, current]);
  const force = useMemo(() => (mass * 9.8).toFixed(1), [mass]);
  const wavelength = useMemo(() => (340 / frequency).toFixed(2), [frequency]);
  const imageDistance = useMemo(() => (1 / lensPower).toFixed(2), [lensPower]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">P</div>
          <div>
            <div className="brand-text">Physics Explorer</div>
            <div className="brand-subtitle">Interactive learning studio</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#topics">Topics</a>
          <a href="#simulations">Simulations</a>
          <a href="#concepts">Concepts</a>
          <a href="#challenges">Challenges</a>
        </nav>

        <button className="primary-button small">Start Exploring</button>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">Learn by doing</span>
            <h1>Turn physics into an interactive experience.</h1>
            <p>
              Explore motion, waves, electricity, optics, and modern physics through real-time
              simulations, guided explanations, and hands-on challenges designed for students from
              grades 9 to college level.
            </p>

            <div className="cta-row">
              <button className="primary-button">Explore Simulations</button>
              <button className="secondary-button">View Lesson Paths</button>
            </div>

            <div className="stats-row">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="stat-box">
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="radar-panel">
              <div className="radar-header">
                <span className="dot green" />
                <span className="dot yellow" />
                <span className="dot red" />
              </div>
              <div className="radar-canvas">
                <div className="planet" />
                <div className="ring ring-one" />
                <div className="ring ring-two" />
                <div className="ring ring-three" />
              </div>
            </div>
          </div>
        </section>

        <section id="topics" className="section">
          <div className="section-heading">
            <span className="eyebrow">Study areas</span>
            <h2>Physics for every level</h2>
          </div>

          <div className="topics-grid">
            {topics.map((topic) => (
              <article key={topic.id} className={`topic-card ${topic.accent}`}>
                <div className="topic-icon">{topic.title.slice(0, 1)}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <ul>
                  {topic.lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section lesson-section">
          <div className="section-heading">
            <span className="eyebrow">Learning path</span>
            <h2>Build understanding step by step</h2>
          </div>

          <div className="learning-grid">
            {learningPaths.map((path) => (
              <div key={path.title} className="learning-card">
                <div className="mini-badge">{path.level}</div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="simulations" className="section simulation-section">
          <div className="section-heading">
            <span className="eyebrow">Interactive labs</span>
            <h2>Experiment with real physics</h2>
          </div>

          <div className="lab-layout">
            <div className="lab-tabs">
              {labs.map((lab) => (
                <button
                  key={lab.id}
                  className={`lab-tab ${activeLab === lab.id ? 'active' : ''} ${lab.color}`}
                  onClick={() => setActiveLab(lab.id)}
                >
                  {lab.label}
                </button>
              ))}
            </div>

            <div className="lab-panel">
              {activeLab === 'motion' && (
                <div className="lab-content">
                  <div className="lab-info">
                    <span className="chip">Projectile motion</span>
                    <h3>Launch and compare trajectories</h3>
                    <p>
                      Adjust the launch speed and angle to see how range changes. In ideal conditions,
                      the projectile range depends on velocity and launch angle.
                    </p>
                    <div className="metrics">
                      <div>
                        <label>Launch speed: {launchSpeed} m/s</label>
                        <input
                          type="range"
                          min="10"
                          max="50"
                          value={launchSpeed}
                          onChange={(e) => setLaunchSpeed(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label>Launch angle: {launchAngle}°</label>
                        <input
                          type="range"
                          min="10"
                          max="80"
                          value={launchAngle}
                          onChange={(e) => setLaunchAngle(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lab-visual motion-visual">
                    <div className="trajectory-wrap">
                      <div
                        className="projectile"
                        style={{
                          left: `${clamp((launchSpeed / 50) * 72, 10, 78)}%`,
                          bottom: `${clamp((launchAngle / 80) * 44, 12, 40)}%`,
                        }}
                      />
                    </div>
                    <div className="result-box">
                      <span>Estimated range</span>
                      <strong>{projectileRange} m</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeLab === 'forces' && (
                <div className="lab-content">
                  <div className="lab-info">
                    <span className="chip">Newton's second law</span>
                    <h3>Explore force and acceleration</h3>
                    <p>
                      The force acting on a body depends on its mass and gravity. This relationship gives
                      the weight of an object near Earth’s surface.
                    </p>
                    <div className="metrics">
                      <div>
                        <label>Mass: {mass} kg</label>
                        <input
                          type="range"
                          min="1"
                          max="20"
                          value={mass}
                          onChange={(e) => setMass(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lab-visual force-visual">
                    <div className="mass-block-wrap">
                      <div className="mass-block" style={{ width: `${10 + mass * 3}px` }} />
                    </div>
                    <div className="result-box">
                      <span>Weight</span>
                      <strong>{force} N</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeLab === 'waves' && (
                <div className="lab-content">
                  <div className="lab-info">
                    <span className="chip">Wave behavior</span>
                    <h3>See how frequency changes the wave</h3>
                    <p>
                      Higher frequency creates shorter wavelengths. Wave speed in air remains roughly
                      constant, so changing frequency directly changes wavelength.
                    </p>
                    <div className="metrics">
                      <div>
                        <label>Frequency: {frequency.toFixed(1)} Hz</label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          step="0.1"
                          value={frequency}
                          onChange={(e) => setFrequency(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label>Amplitude: {amplitude}%</label>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          value={amplitude}
                          onChange={(e) => setAmplitude(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lab-visual wave-visual">
                    <svg viewBox="0 0 500 180" className="wave-svg" aria-label="Wave visualization">
                      <path
                        d={Array.from({ length: 120 }, (_, i) => {
                          const x = (i / 120) * 500;
                          const y = 90 + Math.sin((x / 30) * (frequency * 1.2)) * (amplitude / 1.6);
                          return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                        }).join(' ')}
                      />
                    </svg>
                    <div className="result-box">
                      <span>Wavelength</span>
                      <strong>{wavelength} m</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeLab === 'electricity' && (
                <div className="lab-content">
                  <div className="lab-info">
                    <span className="chip">Circuit analysis</span>
                    <h3>Understand voltage, resistance, and current</h3>
                    <p>
                      In a simple circuit, current is directly proportional to voltage and inversely
                      proportional to resistance. Use the sliders to explore the relationship.
                    </p>
                    <div className="metrics">
                      <div>
                        <label>Voltage: {voltage} V</label>
                        <input
                          type="range"
                          min="5"
                          max="40"
                          value={voltage}
                          onChange={(e) => setVoltage(Number(e.target.value))}
                        />
                      </div>
                      <div>
                        <label>Resistance: {resistance} Ω</label>
                        <input
                          type="range"
                          min="2"
                          max="30"
                          value={resistance}
                          onChange={(e) => setResistance(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lab-visual circuit-visual">
                    <div className="circuit-box">
                      <span className="bulb" />
                      <div className="wire wire-h" />
                      <div className="wire wire-v" />
                    </div>
                    <div className="result-box">
                      <span>Current / power</span>
                      <strong>
                        {current} A / {power} W
                      </strong>
                    </div>
                  </div>
                </div>
              )}

              {activeLab === 'optics' && (
                <div className="lab-content">
                  <div className="lab-info">
                    <span className="chip">Lens and focus</span>
                    <h3>See how lens power changes image position</h3>
                    <p>
                      A stronger lens has a greater power and forms an image closer to the lens. This is a
                      key idea in optics and imaging systems.
                    </p>
                    <div className="metrics">
                      <div>
                        <label>Lens power: {lensPower.toFixed(1)} D</label>
                        <input
                          type="range"
                          min="0.5"
                          max="4"
                          step="0.1"
                          value={lensPower}
                          onChange={(e) => setLensPower(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lab-visual optics-visual">
                    <div className="lens-setup">
                      <div className="lens" />
                      <div className="focus-point" />
                    </div>
                    <div className="result-box">
                      <span>Image distance</span>
                      <strong>{imageDistance} m</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="concepts" className="section concept-section">
          <div className="section-heading">
            <span className="eyebrow">Core ideas</span>
            <h2>Learn the language of physics</h2>
          </div>

          <div className="concept-grid">
            {conceptCards.map((card) => (
              <div key={card.title} className="concept-card">
                <div className="concept-icon">∑</div>
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="challenges" className="section challenge-section">
          <div className="section-heading">
            <span className="eyebrow">Problem solving</span>
            <h2>Try a quick challenge</h2>
          </div>

          <div className="challenge-grid">
            {challengeCards.map((challenge) => (
              <div key={challenge} className="challenge-card">
                <div className="mini-badge">Challenge</div>
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
