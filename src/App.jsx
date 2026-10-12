import { useMemo, useState } from 'react';

const topicCards = [
  {
    id: 'mechanics',
    title: 'Mechanics',
    summary: 'Motion, forces, and energy in motion.',
    accent: 'cyan',
    lessons: ['Velocity & acceleration', 'Newton’s laws', 'Work, power, energy'],
  },
  {
    id: 'electricity',
    title: 'Electricity',
    summary: 'Circuits, voltage, current, and power.',
    accent: 'violet',
    lessons: ['Ohm’s law', 'Series & parallel', 'Resistance & power'],
  },
  {
    id: 'waves',
    title: 'Waves',
    summary: 'Sound, light, and wave behavior.',
    accent: 'amber',
    lessons: ['Frequency & amplitude', 'Wave speed', 'Interference & resonance'],
  },
  {
    id: 'optics',
    title: 'Optics',
    summary: 'Lenses, images, color, and refraction.',
    accent: 'pink',
    lessons: ['Reflection', 'Refraction', 'Magnification & lenses'],
  },
  {
    id: 'thermo',
    title: 'Thermodynamics',
    summary: 'Heat transfer and energy balance.',
    accent: 'green',
    lessons: ['Temperature', 'Specific heat', 'Heat engines'],
  },
  {
    id: 'modern',
    title: 'Modern Physics',
    summary: 'Atoms, radioactivity, and quantum ideas.',
    accent: 'red',
    lessons: ['Atomic models', 'Nuclear energy', 'Photoelectric effect'],
  },
];

const learningLevels = [
  {
    title: 'Foundation Lab',
    level: 'Grade 9–10',
    description: 'Build intuition with motion, energy, and simple force experiments.',
  },
  {
    title: 'Core Concepts',
    level: 'Grade 11',
    description: 'Connect equations, graphs, and real-world applications in mechanics and waves.',
  },
  {
    title: 'Advanced Inquiry',
    level: 'Grade 12 + College',
    description: 'Explore modern theory, circuits, electronics, and quantitative analysis.',
  },
];

const formulaCards = [
  { symbol: 'F = ma', label: 'Newton’s second law', description: 'Force equals mass times acceleration.' },
  { symbol: 'V = IR', label: 'Ohm’s law', description: 'Voltage is proportional to current and resistance.' },
  { symbol: 'v = fλ', label: 'Wave equation', description: 'Wave speed equals frequency times wavelength.' },
  { symbol: 'E = mc²', label: 'Mass–energy', description: 'Mass can be converted into energy.' },
];

const labTabs = [
  { id: 'motion', label: 'Motion', color: 'cyan' },
  { id: 'forces', label: 'Forces', color: 'violet' },
  { id: 'waves', label: 'Waves', color: 'amber' },
  { id: 'circuits', label: 'Circuits', color: 'green' },
  { id: 'optics', label: 'Optics', color: 'pink' },
];

const quizOptions = ['Current decreases', 'Current increases', 'Current stays the same', 'Voltage disappears'];

const simulations = [
  {
    id: 'projectile',
    name: 'Projectile Motion',
    topic: 'Mechanics',
    level: 'High school',
    description: 'Explore launch angle, speed and the range of a projectile in real time.',
    status: 'Live',
    accent: 'cyan',
  },
  {
    id: 'energy-skate',
    name: 'Energy Skate Park',
    topic: 'Mechanics',
    level: 'Middle & high school',
    description: 'Track kinetic, potential and thermal energy as a skater moves through a ramp.',
    status: 'Popular',
    accent: 'violet',
  },
  {
    id: 'gravity',
    name: 'Gravity Force Lab',
    topic: 'Astronomy',
    level: 'High school',
    description: 'Compare gravitational pull between objects as mass and distance change.',
    status: 'New',
    accent: 'amber',
  },
  {
    id: 'circuit-builder',
    name: 'Circuit Builder',
    topic: 'Electricity',
    level: 'All levels',
    description: 'Build a circuit and observe how voltage, resistance and current interact.',
    status: 'Live',
    accent: 'green',
  },
  {
    id: 'wave-lab',
    name: 'Wave Lab',
    topic: 'Waves',
    level: 'High school',
    description: 'Adjust frequency and amplitude to visualize wavelength and interference.',
    status: 'Live',
    accent: 'pink',
  },
  {
    id: 'optics-lab',
    name: 'Refraction Lab',
    topic: 'Optics',
    level: 'High school',
    description: 'Change lens power and observe how image formation shifts with focus.',
    status: 'Popular',
    accent: 'red',
  },
  {
    id: 'collision-lab',
    name: 'Collision Lab',
    topic: 'Momentum',
    level: 'Advanced',
    description: 'Test elastic and inelastic collisions with variable mass and velocity.',
    status: 'Advanced',
    accent: 'cyan',
  },
  {
    id: 'pendulum',
    name: 'Pendulum Lab',
    topic: 'Oscillations',
    level: 'High school',
    description: 'Measure how length and gravity influence period and motion.',
    status: 'Live',
    accent: 'violet',
  },
];

const teacherResources = [
  {
    title: 'Lesson plans',
    description: 'Ready-to-use inquiry activities tied to core physics standards.',
    type: 'PDF',
  },
  {
    title: 'Student worksheets',
    description: 'Printable question sets with data tables and reflection prompts.',
    type: 'Download',
  },
  {
    title: 'Lab guides',
    description: 'Step-by-step experiment instructions for classroom and home learning.',
    type: 'Guide',
  },
  {
    title: 'Assessment rubrics',
    description: 'Quick scoring tools for understanding, analysis and scientific reasoning.',
    type: 'Checklist',
  },
];

const curriculumPillars = [
  'Interactive inquiry-based learning',
  'Visual conceptual explanations',
  'Teacher-ready classroom activities',
  'Accessible, self-paced experimentation',
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function App() {
  const [activeLab, setActiveLab] = useState('motion');
  const [launchSpeed, setLaunchSpeed] = useState(30);
  const [launchAngle, setLaunchAngle] = useState(52);
  const [mass, setMass] = useState(6);
  const [frequency, setFrequency] = useState(4.2);
  const [amplitude, setAmplitude] = useState(52);
  const [voltage, setVoltage] = useState(18);
  const [resistance, setResistance] = useState(12);
  const [lensPower, setLensPower] = useState(1.8);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedSimulation, setSelectedSimulation] = useState(simulations[0]);
  const [filterQuery, setFilterQuery] = useState('');
  const [topicFilter, setTopicFilter] = useState('All');

  const projectileRange = useMemo(() => {
    const rad = (launchAngle * Math.PI) / 180;
    return ((launchSpeed ** 2 * Math.sin(2 * rad)) / 9.8).toFixed(1);
  }, [launchSpeed, launchAngle]);

  const force = useMemo(() => (mass * 9.8).toFixed(1), [mass]);
  const current = useMemo(() => (voltage / resistance).toFixed(2), [voltage, resistance]);
  const power = useMemo(() => (voltage * Number(current)).toFixed(2), [voltage, current]);
  const wavelength = useMemo(() => (340 / frequency).toFixed(2), [frequency]);
  const imageDistance = useMemo(() => (1 / lensPower).toFixed(2), [lensPower]);
  const isCorrectAnswer = selectedOption === 'Current increases';

  const filteredSims = useMemo(() => {
    const normalized = filterQuery.trim().toLowerCase();
    return simulations.filter((sim) => {
      const matchesQuery =
        !normalized ||
        sim.name.toLowerCase().includes(normalized) ||
        sim.topic.toLowerCase().includes(normalized) ||
        sim.description.toLowerCase().includes(normalized);
      const matchesTopic = topicFilter === 'All' || sim.topic === topicFilter;
      return matchesQuery && matchesTopic;
    });
  }, [filterQuery, topicFilter]);

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
          <a href="#resources">Resources</a>
          <a href="#formulas">Formulas</a>
          <a href="#quiz">Quiz</a>
        </nav>

        <button className="primary-button small">Start learning</button>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">Learn by doing</span>
            <h1>Physics that students can see, test, and understand.</h1>
            <p>
              A modern physics learning website for students from grade 9 to college, built around
              simulations, guided questions, visuals, and step-by-step concept discovery.
            </p>

            <div className="cta-row">
              <button className="primary-button">Explore lessons</button>
              <button className="secondary-button">Try simulations</button>
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <strong>20+</strong>
                <span>hands-on labs</span>
              </div>
              <div className="stat-box">
                <strong>8</strong>
                <span>simulation types</span>
              </div>
              <div className="stat-box">
                <strong>100%</strong>
                <span>visual learning</span>
              </div>
              <div className="stat-box">
                <strong>9–12+</strong>
                <span>all levels</span>
              </div>
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

        <section className="section mini-highlight">
          <div className="mini-card">
            <div className="mini-label">Built for</div>
            <h3>Conceptual understanding before formulas</h3>
          </div>
          <div className="mini-card">
            <div className="mini-label">Approach</div>
            <h3>Explore → test → explain → apply</h3>
          </div>
          <div className="mini-card">
            <div className="mini-label">Goal</div>
            <h3>Make physics feel intuitive and interactive</h3>
          </div>
        </section>

        <section id="topics" className="section">
          <div className="section-heading">
            <span className="eyebrow">Study areas</span>
            <h2>Explore the whole physics universe</h2>
          </div>

          <div className="topics-grid">
            {topicCards.map((topic) => (
              <article key={topic.id} className={`topic-card ${topic.accent}`}>
                <div className="topic-icon">{topic.title.slice(0, 1)}</div>
                <h3>{topic.title}</h3>
                <p>{topic.summary}</p>
                <ul>
                  {topic.lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Learning pathway</span>
            <h2>Choose a path by level</h2>
          </div>

          <div className="learning-grid">
            {learningLevels.map((path) => (
              <div className="learning-card" key={path.title}>
                <div className="mini-badge">{path.level}</div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Learning system</span>
            <h2>Designed for classroom-ready discovery</h2>
          </div>

          <div className="pillar-grid">
            {curriculumPillars.map((pillar) => (
              <div key={pillar} className="pillar-card">
                <div className="pillar-icon">✓</div>
                <p>{pillar}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="simulations" className="section simulation-section">
          <div className="section-heading">
            <span className="eyebrow">Simulation library</span>
            <h2>Browse and explore a PhET-style catalog</h2>
          </div>

          <div className="sim-catalog">
            <div className="sim-toolbar">
              <input
                type="text"
                placeholder="Search simulations"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
              />
              <select value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)}>
                <option value="All">All topics</option>
                {['Mechanics', 'Electricity', 'Waves', 'Astronomy', 'Optics', 'Momentum', 'Oscillations'].map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div className="sim-layout">
              <div className="sim-list">
                {filteredSims.map((sim) => (
                  <button
                    key={sim.id}
                    className={`sim-item ${selectedSimulation.id === sim.id ? 'selected' : ''}`}
                    onClick={() => setSelectedSimulation(sim)}
                  >
                    <span className={`sim-tag ${sim.accent}`}>{sim.status}</span>
                    <strong>{sim.name}</strong>
                    <small>{sim.topic}</small>
                  </button>
                ))}
                {filteredSims.length === 0 && <div className="empty-state">No simulations match your search.</div>}
              </div>

              <div className="sim-detail">
                <div className="sim-detail-header">
                  <div>
                    <span className="mini-badge light">{selectedSimulation.topic}</span>
                    <h3>{selectedSimulation.name}</h3>
                  </div>
                  <span className={`sim-tag ${selectedSimulation.accent}`}>{selectedSimulation.level}</span>
                </div>

                <p>{selectedSimulation.description}</p>

                <div className="sim-metric-grid">
                  <div className="mini-stat">
                    <span>Students</span>
                    <strong>1,000+</strong>
                  </div>
                  <div className="mini-stat">
                    <span>Concepts</span>
                    <strong>4</strong>
                  </div>
                  <div className="mini-stat">
                    <span>Mode</span>
                    <strong>Live</strong>
                  </div>
                </div>

                <div className="sim-actions">
                  <button className="primary-button">Launch activity</button>
                  <button className="secondary-button">Download worksheet</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section simulation-section">
          <div className="section-heading">
            <span className="eyebrow">Interactive labs</span>
            <h2>Experiment with live data</h2>
          </div>

          <div className="lab-layout">
            <div className="lab-tabs">
              {labTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`lab-tab ${activeLab === tab.id ? 'active' : ''} ${tab.color}`}
                  onClick={() => setActiveLab(tab.id)}
                >
                  {tab.label}
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
                      Change the starting speed and angle to see how range changes. In ideal conditions,
                      the angle and launch speed control the distance traveled.
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
                    <div className="trajectory-grid" />
                    <div
                      className="projectile"
                      style={{
                        left: `${clamp((launchSpeed / 50) * 72, 10, 78)}%`,
                        bottom: `${clamp((launchAngle / 80) * 42, 12, 40)}%`,
                      }}
                    />
                    <div className="result-box">
                      <span>Range</span>
                      <strong>{projectileRange} m</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeLab === 'forces' && (
                <div className="lab-content">
                  <div className="lab-info">
                    <span className="chip">Newton’s law</span>
                    <h3>See how gravity changes with mass</h3>
                    <p>
                      On Earth, weight depends on gravitational acceleration. By increasing mass, the
                      force of gravity increases proportionally.
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
                    <div className="mass-scene">
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
                    <h3>Observe wavelength and amplitude</h3>
                    <p>
                      Higher frequency creates a shorter wavelength when the wave speed is constant. The
                      amplitude controls how large the wave oscillation becomes.
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
                    <svg viewBox="0 0 500 180" className="wave-svg" aria-label="Wave simulation">
                      <path
                        d={Array.from({ length: 120 }, (_, i) => {
                          const x = (i / 120) * 500;
                          const y = 90 + Math.sin((x / 28) * (frequency * 1.15)) * (amplitude / 1.7);
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

              {activeLab === 'circuits' && (
                <div className="lab-content">
                  <div className="lab-info">
                    <span className="chip">Circuit analysis</span>
                    <h3>Understand voltage, current, and resistance</h3>
                    <p>
                      This simple circuit shows the relationship between voltage, current, and resistance.
                      Raising the applied voltage increases current if resistance stays the same.
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
                    <div className="circuit-board">
                      <div className="bulb" />
                      <div className="wire wire-horizontal" />
                      <div className="wire wire-vertical" />
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
                    <span className="chip">Lens system</span>
                    <h3>See how lens power changes focus</h3>
                    <p>
                      A stronger lens has higher power and forms an image closer to the lens. This is the
                      basic idea behind cameras, glasses, and microscopes.
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
                    <div className="lens-scene">
                      <div className="lens-bar" />
                      <div className="lens-focus" />
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

        <section id="resources" className="section">
          <div className="section-heading">
            <span className="eyebrow">Teacher resources</span>
            <h2>Classroom-ready materials for immersive learning</h2>
          </div>

          <div className="resource-grid">
            {teacherResources.map((resource) => (
              <article className="resource-card" key={resource.title}>
                <div className="resource-badge">{resource.type}</div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="formulas" className="section">
          <div className="section-heading">
            <span className="eyebrow">Key formulas</span>
            <h2>Connect equations to experiments</h2>
          </div>

          <div className="formula-grid">
            {formulaCards.map((card) => (
              <article key={card.symbol} className="formula-card">
                <div className="formula-symbol">{card.symbol}</div>
                <h3>{card.label}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="quiz" className="section quiz-section">
          <div className="section-heading">
            <span className="eyebrow">Quick check</span>
            <h2>Can you reason through the science?</h2>
          </div>

          <div className="quiz-card">
            <h3>If the resistance in a circuit stays the same but the voltage increases, what happens to the current?</h3>
            <div className="quiz-options">
              {quizOptions.map((option) => (
                <button
                  key={option}
                  className={`quiz-option ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedOption(option);
                    setQuizSubmitted(true);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            {quizSubmitted && (
              <div className={`quiz-result ${isCorrectAnswer ? 'correct' : 'wrong'}`}>
                {isCorrectAnswer
                  ? 'Correct! Higher voltage pushes more current through the same resistance.'
                  : 'Not quite — with constant resistance, increasing voltage increases current.'}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
