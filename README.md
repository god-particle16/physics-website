* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-soft: #101d31;
  --panel: rgba(18, 28, 45, 0.82);
  --panel-strong: rgba(14, 22, 35, 0.95);
  --card: rgba(17, 26, 40, 0.9);
  --line: rgba(142, 166, 190, 0.22);
  --text: #ecf5ff;
  --muted: #a7bad7;
  --primary: #67e8f9;
  --secondary: #8b5cf6;
  --green: #34d399;
  --amber: #fbbf24;
  --red: #f87171;
  --pink: #f472b6;
  --shadow: 0 24px 80px rgba(4, 11, 18, 0.5);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(103, 232, 249, 0.16), transparent 25%),
    radial-gradient(circle at top right, rgba(139, 92, 246, 0.13), transparent 30%),
    var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding-bottom: 80px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: sticky;
  top: 0;
  z-index: 20;
  width: min(1200px, calc(100% - 32px));
  margin: 18px auto 0;
  padding: 14px 18px;
  backdrop-filter: blur(18px);
  background: rgba(8, 15, 25, 0.55);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #04131d;
  font-weight: 900;
  font-size: 1.2rem;
}

.brand-text {
  font-weight: 800;
  letter-spacing: -0.04em;
}

.brand-subtitle {
  color: var(--muted);
  font-size: 0.7rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
}

.nav-links a {
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.primary-button,
.secondary-button {
  border: none;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-button {
  background: linear-gradient(135deg, var(--primary), #7dd3fc);
  color: #04131d;
  padding: 0.9rem 1.3rem;
  box-shadow: 0 18px 35px rgba(103, 232, 249, 0.3);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid var(--line);
  padding: 0.9rem 1.3rem;
}

.primary-button.small {
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
}

.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-1px);
}

.section {
  padding-top: 72px;
}

.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 26px;
  min-height: 620px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  padding: 0.4rem 0.8rem;
  border: 1px solid rgba(103, 232, 249, 0.35);
  border-radius: 999px;
  background: rgba(103, 232, 249, 0.08);
  color: var(--primary);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-copy h1,
.section-heading h2 {
  margin: 0;
  letter-spacing: -0.06em;
  line-height: 1.05;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  max-width: 580px;
}

.hero-copy p {
  max-width: 600px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 1.07rem;
  line-height: 1.8;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(90px, 1fr));
  gap: 16px;
  margin-top: 34px;
  max-width: 620px;
}

.stat-box {
  position: relative;
  padding: 18px 16px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(11, 19, 28, 0.72);
}

.stat-box strong {
  display: block;
  margin-bottom: 4px;
  font-size: 1.4rem;
}

.stat-box span {
  color: var(--muted);
  font-size: 0.76rem;
}

.hero-visual {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 470px;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(18px);
  opacity: 0.8;
}

.orb-one {
  width: 220px;
  height: 220px;
  background: rgba(103, 232, 249, 0.22);
  top: 40px;
  right: 80px;
}

.orb-two {
  width: 260px;
  height: 260px;
  background: rgba(139, 92, 246, 0.18);
  left: 40px;
  bottom: 30px;
}

.radar-panel {
  position: relative;
  width: min(90%, 480px);
  aspect-ratio: 1;
  border-radius: 30px;
  background: linear-gradient(160deg, rgba(8, 16, 22, 0.94), rgba(26, 39, 57, 0.96));
  border: 1px solid rgba(161, 174, 192, 0.25);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.radar-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 18px 18px 0;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
}

.dot.green { background: var(--green); }
.dot.yellow { background: var(--amber); }
.dot.red { background: var(--red); }

.radar-canvas {
  position: relative;
  width: 100%;
  height: calc(100% - 40px);
}

.planet {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9eedff, #7c89ff);
  box-shadow: 0 0 48px rgba(103, 232, 249, 0.4);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border: 1px solid rgba(103, 232, 249, 0.28);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.ring-one { width: 170px; height: 170px; }
.ring-two { width: 250px; height: 250px; }
.ring-three { width: 330px; height: 330px; }

.section-heading {
  margin-bottom: 26px;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 3rem);
}

.topics-grid,
.concept-grid,
.challenge-grid {
  display: grid;
  gap: 22px;
}

.topics-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.topic-card {
  padding: 24px 22px;
  border-radius: 24px;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(9, 16, 26, 0.8), rgba(19, 28, 42, 0.95));
  box-shadow: var(--shadow);
}

.topic-card h3 {
  margin: 20px 0 10px;
  font-size: 1.5rem;
}

.topic-card p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.7;
}

.topic-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--text);
  display: grid;
  gap: 9px;
}

.topic-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
  font-weight: 800;
}

.topic-card.cyan .topic-icon { background: rgba(103, 232, 249, 0.16); color: var(--primary); }
.topic-card.violet .topic-icon { background: rgba(167, 139, 250, 0.16); color: #c4b5fd; }
.topic-card.amber .topic-icon { background: rgba(251, 191, 36, 0.12); color: var(--amber); }
.topic-card.pink .topic-icon { background: rgba(244, 114, 182, 0.12); color: var(--pink); }
.topic-card.green .topic-icon { background: rgba(52, 211, 153, 0.1); color: var(--green); }
.topic-card.red .topic-icon { background: rgba(248, 113, 113, 0.12); color: var(--red); }

.simulation-section {
  padding-top: 80px;
}

.lab-layout {
  display: grid;
  gap: 20px;
}

.lab-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.lab-tab {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255,255,255,0.02);
  color: var(--text);
  padding: 0.8rem 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.lab-tab.active {
  background: rgba(103, 232, 249, 0.1);
  border-color: rgba(103, 232, 249, 0.32);
}

.lab-tab.cyan.active { box-shadow: inset 0 0 0 1px rgba(103, 232, 249, 0.3); }
.lab-tab.violet.active { box-shadow: inset 0 0 0 1px rgba(167, 139, 250, 0.3); }
.lab-tab.amber.active { box-shadow: inset 0 0 0 1px rgba(251, 191, 36, 0.3); }
.lab-tab.green.active { box-shadow: inset 0 0 0 1px rgba(52, 211, 153, 0.3); }
.lab-tab.pink.active { box-shadow: inset 0 0 0 1px rgba(244, 114, 182, 0.3); }

.lab-panel {
  border: 1px solid var(--line);
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(12, 20, 30, 0.96), rgba(11, 19, 31, 0.96));
  padding: 22px;
}

.lab-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  min-height: 420px;
}

.chip {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  background: rgba(103, 232, 249, 0.08);
  color: var(--primary);
  border: 1px solid rgba(103, 232, 249, 0.2);
  padding: 0.4rem 0.7rem;
  font-weight: 700;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.lab-info h3 {
  margin: 18px 0 12px;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
}

.lab-info p {
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 18px;
}

.metrics {
  display: grid;
  gap: 16px;
}

.metrics div {
  display: grid;
  gap: 8px;
}

.metrics label {
  color: var(--muted);
  font-weight: 600;
}

input[type='range'] {
  width: 100%;
  accent-color: var(--primary);
}

.lab-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(8, 17, 28, 0.95), rgba(15, 25, 38, 0.8));
  overflow: hidden;
}

.trajectory-wrap {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.02)),
    repeating-linear-gradient(
      to right,
      rgba(255,255,255,0.03),
      rgba(255,255,255,0.03) 1px,
      transparent 1px,
      transparent 44px
    );
}

.projectile {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fff, #7dd3fc 40%, #0ea5e9 100%);
  box-shadow: 0 0 25px rgba(103, 232, 249, 0.4);
  transform: translate(-50%, 50%);
}

.result-box {
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: grid;
  gap: 2px;
  min-width: 150px;
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(8, 15, 22, 0.85);
}

.result-box span {
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.result-box strong {
  font-size: 1.15rem;
}

.mass-block-wrap {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.mass-block {
  height: 110px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.95), rgba(96, 165, 250, 0.7));
  box-shadow: 0 20px 30px rgba(139, 92, 246, 0.25);
  position: relative;
}

.mass-block::before,
.mass-block::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 16px;
  background: rgba(255,255,255,0.2);
  left: 0;
}

.mass-block::before { top: 16px; }
.mass-block::after { bottom: 16px; }

.wave-svg {
  width: 100%;
  height: 100%;
}

.wave-svg path {
  fill: none;
  stroke: #fbbf24;
  stroke-width: 3;
  stroke-linecap: round;
}

.circuit-box {
  position: relative;
  width: 220px;
  height: 160px;
}

.bulb {
  position: absolute;
  left: 50%;
  top: 14px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle at 35% 35%, #fef3c7, #fbbf24 40%, #f59e0b 100%);
  box-shadow: 0 0 32px rgba(251, 191, 36, 0.5);
}

.wire {
  position: absolute;
  background: rgba(157, 166, 184, 0.7);
}

.wire-h {
  width: 150px;
  height: 3px;
  left: 35px;
  top: 110px;
}

.wire-v {
  width: 3px;
  height: 90px;
  left: 108px;
  top: 20px;
}

.lens-setup {
  width: 100%;
  height: 100%;
  position: relative;
}

.lens {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 170px;
  height: 10px;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(103,232,249,0.2), rgba(244,114,182,0.7), rgba(103,232,249,0.2));
  box-shadow: 0 0 30px rgba(103, 232, 249, 0.28);
}

.focus-point {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 20px rgba(244, 114, 182, 0.4);
}

.concept-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.concept-card {
  padding: 22px 18px;
  border-radius: 20px;
  background: rgba(17, 25, 38, 0.8);
  border: 1px solid var(--line);
}

.concept-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(103,232,249,0.15), rgba(139,92,246,0.15));
  color: var(--primary);
  font-weight: 800;
  margin-bottom: 14px;
}

.concept-card h3 {
  margin: 0 0 10px;
  font-size: 1.15rem;
}

.concept-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.challenge-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.challenge-card {
  padding: 22px 20px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(12, 20, 31, 1), rgba(18, 25, 37, 0.95));
  border: 1px solid var(--line);
}

.challenge-card p {
  margin: 14px 0 0;
  color: var(--muted);
  line-height: 1.7;
}

.mini-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(244, 114, 182, 0.12);
  border: 1px solid rgba(244, 114, 182, 0.2);
  color: var(--pink);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 980px) {
  .hero,
  .lab-content,
  .topics-grid,
  .concept-grid,
  .challenge-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }
}

@media (max-width: 620px) {
  .topbar {
    width: min(100% - 20px, 1200px);
    padding: 12px 14px;
  }

  .brand-text {
    font-size: 0.95rem;
  }

  .hero {
    min-height: auto;
  }

  .stats-row {
    grid-template-columns: repeat(2, minmax(90px, 1fr));
  }

  .section {
    padding-top: 60px;
  }
}
