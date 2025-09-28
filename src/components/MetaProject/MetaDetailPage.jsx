import React from 'react';
import './MetaDetailPage.css';
import metaLogo from "./meta.png";
import metaPdf from "./Meta presnt 1 (2).pdf";
import whimsicalModel from "./Meta Whimsical model.png";
import figmaImg from "./figma.png";
import whimsical4 from "./Whimsical 4.png";
import whimsical5 from "./Whimsical 5.png";
import { useNavigate } from "react-router-dom";

const skillGroups = [
  [
    'Market Research',
    'User Empathy',
    'KPI Tree : Mapping Business & Product Outcome',
    'Product Strategy',
  ],
  [
    'Road Mapping',
    'System Design',
    'Wireframing',
    'User Segmentation',
  ],
  [
    'Defining Metrics',
    'User Experience',
    'Data Analysis',
    'Competitor Analysis',
  ],
  [
    'Ideation & Prioritization',
    'Figma',
    'Whimsical',
    'User Experience', // You can replace this with another unique skill if needed
  ],
];

const skillColors = [
  '#256080', // blue
  '#8a6d2f', // brown
  '#7a3c4a', // maroon
  '#1d4d4d', // green
];

// SVG for Figma logo
const FigmaIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#fff"/>
    <circle cx="12" cy="7" r="3" fill="#0acf83"/>
    <circle cx="12" cy="14" r="3" fill="#a259e6"/>
    <circle cx="12" cy="21" r="3" fill="#f24e1e"/>
    <circle cx="19" cy="7" r="3" fill="#ff7262"/>
    <circle cx="5" cy="7" r="3" fill="#1abcfe"/>
  </svg>
);

function MetaDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="python-detail-page" style={{ marginLeft: 0 }}>
      <button onClick={() => navigate("/")} className="bg-tertiary text-white px-4 py-2 rounded mb-4">Back to Projects</button>
      <div className="header-section">
        <div className="titles" style={{ marginLeft: '20px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2.5em', marginBottom: '8px' }}>Innovating Social Interaction at Meta</h1>
          <p className="subtitle">Where Innovation Meets Community</p>
        </div>
        <img src={metaLogo} alt="Meta Logo" className="python-logo" style={{ marginLeft: 'auto' }} />
      </div>
      {/* Figma PDF Card Section */}
      <div style={{ maxWidth: '900px', margin: '32px auto', background: '#222', borderRadius: '10px', padding: '24px 32px', color: '#fff', display: 'flex', alignItems: 'center', gap: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.5px' }}>Figma Presentation Deck</h4>
          <div style={{ color: '#bbb', fontSize: '0.98rem', margin: '8px 0 12px 0' }}>
            View the full Meta Product Portfolio deck as an interactive Figma presentation.
          </div>
          <a
            href="https://www.figma.com/slides/9rjR3RFi0xs4Jyh0Rtrkm7/Untitled?node-id=1-42&t=tlhYN2n3W47Kg23R-1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#0acf83',
              color: '#222',
              padding: '10px 22px',
              borderRadius: '6px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1.08rem',
              marginTop: '4px',
              boxShadow: '0 2px 8px rgba(10,207,131,0.10)'
            }}
          >
            <FigmaIcon /> View Figma Slides
          </a>
        </div>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '12px', padding: '0', minWidth: '80px', minHeight: '80px', boxShadow: '0 2px 8px rgba(10,207,131,0.10)' }}>
          <img src={figmaImg} alt="Figma Graphic" style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: '10px' }} />
        </span>
      </div>
      {/* Embedded PDF */}
      <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
        <embed
          src={metaPdf}
          type="application/pdf"
          width="900px"
          height="600px"
          style={{ border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}
        />
      </div>
      <div style={{ maxWidth: '900px', margin: '40px auto 0 auto', background: '#222', borderRadius: '12px', padding: '32px', color: '#fff', fontSize: '1.1rem' }}>
        <h2 style={{ color: '#4a90e2', marginBottom: '18px' }}>Problem Statement</h2>
        <p style={{ marginBottom: '18px' }}>
          Increase Average Revenue per User (ARPU) for Meta Platforms without altering the user subscription model, and within the boundaries of current product ecosystem and infra.
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.7' }}>
          <li>Conducted Secondary Research to gather data about Meta's Key Metrics, business segments, and ARPU trends from 2011–2024.</li>
          <li>Broke down the objective "Increase ARPU" into measurable outcomes using KPI mapping, product line insights (Reality Labs, Ads, Threads), and performance signals.</li>
          <li>Performed Primary Research through user interviews to understand how people interact with AI agents — their behavior, preferences, and friction points — and created 2 detailed user personas.</li>
          <li>Mapped the Customer Journey to identify sentiment gaps and UX bottlenecks while exploring and using agents.</li>
          <li>Defined the Problem Statement using the 5 WHYs Framework, which surfaced user confusion around agent utility and onboarding — and ideated 2 solution directions.</li>
          <li>Prioritized a solution using the RICE Framework, focusing on increasing engagement with high-retention agents and applying second-order thinking around scalability and personalization.</li>
          <li>Created a Wireframe and System Design for the recommended solution — emphasizing smoother agent discovery, usage, and feedback loops.</li>
          <li>Outlined key Metrics & Pitfalls to measure success (retention, activation, ARPU lift), and proposed mitigations for user fatigue, novelty decay, and UX complexity.</li>
        </ul>
      </div>
      <div style={{ maxWidth: '900px', margin: '32px auto', background: 'transparent', color: '#fff' }}>
        <h3 style={{ marginBottom: '18px', fontWeight: 600, fontSize: '1.2rem', letterSpacing: '0.5px' }}>
          <span role="img" aria-label="skills">🛠️</span> Skills Showcased
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'nowrap', justifyContent: 'flex-start' }}>
          {skillGroups.map((group, colIdx) => (
            <div key={colIdx} style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '180px' }}>
              {group.map((skill, idx) => (
                <div
                  key={skill}
                  style={{
                    background: skillColors[colIdx],
                    color: '#fff',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontWeight: 500,
                    fontSize: '1rem',
                    marginBottom: '0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    borderLeft: '3px solid #fff',
                    letterSpacing: '0.2px',
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: '900px', margin: '32px auto', background: '#222', borderRadius: '10px', padding: '24px 32px', color: '#fff', display: 'flex', alignItems: 'center', gap: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#4a90e2', marginBottom: '18px' }}>KPI Tree</h2>
          <div style={{ color: '#bbb', fontSize: '0.98rem', margin: '8px 0 12px 0' }}>
            Whimsical combines whiteboards and docs in an all-in-one collaboration hub.
          </div>
          <a
            href="https://whimsical.com/arpu-average-revenue-user-TbsX4pAYbxfjtam3d4UBma"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#a259e6',
              color: '#fff',
              padding: '8px 18px',
              borderRadius: '6px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1rem',
              marginTop: '4px',
              boxShadow: '0 2px 8px rgba(162,89,230,0.10)'
            }}
          >
            <span style={{ fontSize: '1.2em' }}>🔗</span> View Whimsical Model
          </a>
        </div>
        <img src={whimsicalModel} alt="Meta Whimsical System Model" style={{ width: '180px', borderRadius: '6px', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
      </div>
      <div style={{ maxWidth: '1200px', margin: '32px auto', background: '#181818', borderRadius: '12px', padding: '32px', color: '#fff', textAlign: 'center' }}>
        <img src={whimsicalModel} alt="Meta Whimsical System Model Large" style={{ width: '100%', maxWidth: '1200px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', background: '#fff' }} />
      </div>
      <div style={{ maxWidth: '900px', margin: '32px auto', background: '#222', borderRadius: '10px', padding: '24px 32px', color: '#fff', display: 'flex', alignItems: 'center', gap: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#4a90e2', marginBottom: '18px' }}>Customer Journey Map</h2>
          <div style={{ color: '#bbb', fontSize: '1.08rem', margin: '8px 0 12px 0' }}>
            Explore the full customer journey for IG creators, from awareness to growth, mapped visually in Whimsical.
          </div>
          <a
            href="https://whimsical.com/GDkTcQwnFFxpZPKKKUSJaC"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#a259e6',
              color: '#fff',
              padding: '8px 18px',
              borderRadius: '6px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1rem',
              marginTop: '4px',
              boxShadow: '0 2px 8px rgba(162,89,230,0.10)'
            }}
          >
            <span style={{ fontSize: '1.2em' }}>🔗</span> View Whimsical Journey Map
          </a>
          <div style={{ marginTop: '28px', background: '#181818', borderRadius: '8px', padding: '20px 28px', color: '#fff' }}>
            <h3 style={{ color: '#4a90e2', marginBottom: '10px', fontSize: '1.15rem' }}>User Persona: Aspiring Influencer Anya</h3>
            <ul style={{ marginBottom: '10px', paddingLeft: '20px' }}>
              <li><strong>Bio:</strong> 22-year-old college student, passionate about sustainable fashion. Wants to build a personal brand, connect with like-minded individuals, and eventually collaborate with brands. Spends significant time on social media.</li>
            </ul>
            <ul style={{ marginBottom: '10px', paddingLeft: '20px' }}>
              <li><strong>Needs:</strong> Platform for creative expression, audience growth tools, community interaction, potential for income.</li>
            </ul>
            <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
              <li><strong>Frustrations:</strong> Low engagement, difficulty standing out, managing multiple platforms, feeling overwhelmed by content creation.</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '32px auto', background: '#181818', borderRadius: '12px', padding: '32px', color: '#fff', textAlign: 'center' }}>
        <img src={whimsical4} alt="Whimsical Screenshot 4" style={{ width: '100%', maxWidth: '1200px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', background: '#fff' }} />
      </div>
      <div style={{ maxWidth: '900px', margin: '32px auto', background: '#222', borderRadius: '12px', padding: '32px', color: '#fff', fontSize: '1.1rem' }}>
        <h2 style={{ color: '#4a90e2', marginBottom: '18px' }}>System Design of IG for Posting a Reel/Story</h2>
        <a
          href="https://whimsical.com/8YrKgayLgqG7JMwkmr4Zbz"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#a259e6',
            color: '#fff',
            padding: '10px 22px',
            borderRadius: '6px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1.08rem',
            margin: '8px 0 18px 0',
            boxShadow: '0 2px 8px rgba(162,89,230,0.10)'
          }}
        >
          <span style={{ fontSize: '1.2em' }}>🔗</span> View Whimsical System Design
        </a>
        <p>
          This section will describe the system design for the IG Posting a Reel/Story, including architecture, components, and data flow.
        </p>
      </div>
      <div style={{ maxWidth: '900px', margin: '32px auto', background: '#181818', borderRadius: '12px', padding: '32px', color: '#fff', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <img src={whimsical5} alt="Whimsical Screenshot 5" style={{ width: '100%', maxWidth: '900px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', background: '#fff' }} />
      </div>
    </div>
  );
}

export default MetaDetailPage; 