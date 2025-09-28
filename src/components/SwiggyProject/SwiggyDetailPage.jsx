import React from 'react';
import swiggyLogo from './Swiggy logo.png';
import figmaImg from './figma.png';
import swiggyPdf from './Swiggy 1.pdf';
import './SwiggyDetailPage.css';
import swiggyKpiTree from './Swiggy KPI Tree.png';
import swiggyCustomerJourney from './Swiggy customer journey.png';
import swiggyHighQualityPdf from './Swiggy_High_Quality_Exact_Fit.pdf';
import { useNavigate } from "react-router-dom";

// Inline SVG for the official Figma logo
const FigmaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#fff"/>
    <circle cx="16" cy="9" r="4" fill="#0acf83"/>
    <circle cx="16" cy="16" r="4" fill="#a259e6"/>
    <circle cx="16" cy="23" r="4" fill="#f24e1e"/>
    <circle cx="25" cy="9" r="4" fill="#ff7262"/>
    <circle cx="7" cy="9" r="4" fill="#1abcfe"/>
  </svg>
);

// Skill groups and colors
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
    'Prototype',
    'Competitor Analysis',
  ],
  [
    'Ideation & Prioritization',
    'Figma',
    'Whimsical',
    'User Experience',
  ],
];

const skillColors = [
  '#256080', // blue
  '#8a6d2f', // brown
  '#7a3c4a', // maroon
  '#1d4d4d', // green
];

function SwiggyDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="python-detail-page" style={{ marginLeft: 0 }}>
      <button onClick={() => navigate("/")} className="bg-tertiary text-white px-4 py-2 rounded mb-4">Back to Projects</button>
      <div className="header-section">
          <img src={swiggyLogo} alt="Swiggy Logo" className="your-pic" />
          <div className="titles">
            <h1>SWIGGY</h1>
            <p className="subtitle">Swiggy Product/Case Study</p>
          </div>
          <img src={swiggyLogo} alt="Swiggy Logo" className="python-logo" style={{ marginLeft: 20, width: 180, height: 'auto' }} />
        </div>
        <div style={{ maxWidth: '900px', margin: '40px auto 0 auto', background: '#222', borderRadius: '18px', padding: '36px 32px', color: '#fff', display: 'flex', alignItems: 'center', gap: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: 0, fontWeight: 700, fontSize: '1.6rem', letterSpacing: '0.5px' }}>Figma Presentation Deck</h2>
            <div style={{ color: '#bbb', fontSize: '1.15rem', margin: '16px 0 24px 0' }}>
              View the full Meta Product Portfolio deck as an interactive Figma presentation.
            </div>
            <a
              href="https://www.figma.com/slides/EQ0s64ztmfOCecs3XRxtoa/Untitled?node-id=1-117&t=BPGMXTLqzNYwrIrV-0"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: '#16c47e',
                color: '#111',
                padding: '16px 32px',
                borderRadius: '10px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1.25rem',
                marginTop: '4px',
                boxShadow: '0 2px 8px rgba(22,196,126,0.10)'
              }}
            >
              <FigmaIcon />
              View Figma Slides
            </a>
          </div>
          <img src={figmaImg} alt="Figma Graphic" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '16px', background: '#fff' }} />
        </div>
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
          <embed
            src={swiggyPdf}
            type="application/pdf"
            width="900px"
            height="600px"
            style={{ border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}
          />
        </div>
        {/* Problem Statement Card Section */}
        <div style={{
          maxWidth: '1000px',
          margin: '48px auto 0 auto',
          background: '#23272f',
          borderRadius: '18px',
          padding: '48px 48px 40px 32px',
          color: '#fff',
          fontSize: '1.15rem',
          boxShadow: '0 6px 32px rgba(0,0,0,0.18)',
          borderLeft: '8px solid #16c47e',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}>
          <h2 style={{
            color: '#16c47e',
            fontWeight: 900,
            fontSize: '2.1rem',
            marginBottom: '12px',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            <span style={{ fontSize: '1.5em' }}>💡</span> Problem Statement
          </h2>
          <div style={{ marginBottom: 0, fontWeight: 500, fontSize: '1.15rem', lineHeight: 1.7 }}>
            Swiggy doesn't need a new feature; it needs better emotional timing. The aim is to <span style={{ color: '#16c47e' }}>reduce anxiety</span> and <span style={{ color: '#16c47e' }}>build user trust</span> during the <span style={{ color: '#4a90e2' }}>wait phase</span>, using <span style={{ color: '#ffd600' }}>smarter UX design</span> and <span style={{ color: '#ffd600' }}>better copy</span>.
          </div>
        </div>

        {/* Secondary Research */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>Secondary Research</span>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li><b>Average Orders/Day:</b> <span style={{ color: '#16c47e' }}>200K+</span></li>
            <li><b>Average Delivery Time:</b> <span style={{ color: '#16c47e' }}>30–40 minutes</span></li>
            <li><b>72%</b> of users reopen the app after placing an order</li>
            <li style={{ color: '#ffd600' }}><b>Major churn occurs in the post-checkout window</b></li>
          </ul>
          <div style={{ color: '#bbb', marginTop: 10, fontSize: '1.4em' }}>Benchmarked food delivery UX, emotion-driven design, and trust-building through real-time feedback.</div>
        </div>
        {/* Objective Breakdown */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>Objective Breakdown</span>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li><b>Tracking clarity</b></li>
            <li><b>Status comprehension</b></li>
            <li><b>Trust loop reinforcement</b></li>
            <li style={{ color: '#ffd600' }}><b>Drop-off reduction during wait time</b></li>
          </ul>
        </div>
        {/* Primary Research */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>Primary Research</span>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li><span style={{ color: '#16c47e' }}>5/6</span> users found Swiggy's tracking flow clear and intuitive</li>
            <li><span style={{ color: '#16c47e' }}>4/6</span> users felt real-time updates reduced their anxiety</li>
            <li><span style={{ color: '#16c47e' }}>3/6</span> users relied on live location view to plan their wait</li>
          </ul>
          <div style={{ color: '#ffd600', fontWeight: 600, marginTop: 10, fontSize: '1.4em' }}>&quot;I just want to feel in control&quot; after placing the order</div>
          <div style={{ color: '#bbb', marginTop: 10, fontSize: '1.4em' }}>Personas:</div>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li><b>Ravi</b> – 22, Student; checks app frequently for reassurance</li>
            <li><b>Sneha</b> – 25, Working Professional; wants minimal disruption during meetings</li>
          </ul>
        </div>
        {/* Customer Journey Mapping */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>Customer Journey Mapping</span>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li><span style={{ color: '#16c47e' }}>Order Placement</span> → Anxiety peaks</li>
            <li><span style={{ color: '#16c47e' }}>Restaurant Confirmation</span> → Relief</li>
            <li><span style={{ color: '#16c47e' }}>Preparation Phase</span> → Uncertainty</li>
            <li><span style={{ color: '#16c47e' }}>Delivery Start</span> → Hope</li>
            <li><span style={{ color: '#16c47e' }}>Delivery Progress</span> → Control</li>
            <li><span style={{ color: '#16c47e' }}>Delivery Completion</span> → Satisfaction</li>
          </ul>
        </div>
        {/* 5 WHYs Framework Analysis */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>5 WHYs Framework Analysis</span>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li>Unsure what's happening with the <span style={{ color: '#4a90e2' }}>order</span></li>
            <li>Language is <span style={{ color: '#ffd600' }}>vague</span>, timing is <span style={{ color: '#ffd600' }}>unclear</span></li>
            <li>No <span style={{ color: '#16c47e' }}>proactive updates</span> or <span style={{ color: '#16c47e' }}>progress confidence</span></li>
            <li>Emotional <span style={{ color: '#ffd600' }}>discomfort</span> builds</li>
            <li style={{ color: '#ffd600' }}>They churn or <span style={{ color: '#16c47e' }}>lose trust</span></li>
          </ul>
        </div>
        {/* Solution Ideation */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>Solution Ideation</span>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li><span style={{ color: '#16c47e' }}>Push-based Visual Clarity System</span></li>
            <li><span style={{ color: '#16c47e' }}>Emotionally Intelligent Tracker UI</span></li>
          </ul>
        </div>
        {/* Prioritization via RICE Framework */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>Prioritization via RICE Framework</span>
          <div style={{ color: '#16c47e', fontWeight: 600, marginTop: 10, fontSize: '1.4em' }}>Selected: <span style={{ color: '#ffd600' }}>Progressive Order Status System</span> with <span style={{ color: '#16c47e' }}>Emotive UX</span></div>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li><b>Reach:</b> <span style={{ color: '#16c47e' }}>High</span> (applies to all post-checkout users)</li>
            <li><b>Impact:</b> <span style={{ color: '#ffd600' }}>Medium–High</span> (trust = loyalty = retention)</li>
            <li><b>Confidence:</b> <span style={{ color: '#16c47e' }}>High</span> (validated through user research)</li>
            <li><b>Effort:</b> <span style={{ color: '#ffd600' }}>Medium</span> (requires only frontend + copy changes)</li>
          </ul>
        </div>
        {/* Wireframe & System Design */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>Wireframe & System Design</span>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li><span style={{ color: '#16c47e' }}>Contextual Status Messages</span> (<span style={{ color: '#ffd600' }}>&ldquo;Your food is being packed&rdquo;</span>)</li>
            <li><span style={{ color: '#16c47e' }}>ETA + Visual Map</span> + <span style={{ color: '#ffd600' }}>Emotional Copy</span> (<span style={{ color: '#ffd600' }}>&ldquo;Almost there! 🔥 5 min left&rdquo;</span>)</li>
            <li><span style={{ color: '#16c47e' }}>Push Notifications</span> to reduce app reopening</li>
            <li><span style={{ color: '#16c47e' }}>Modular UI layer</span> that scales across all restaurant types and cities</li>
          </ul>
        </div>
        {/* Metrics for Success */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>Metrics for Success</span>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li style={{ color: '#16c47e' }}>Reduction in reopens/app check-ins per order</li>
            <li style={{ color: '#16c47e' }}>Increase in NPS for delivery experience</li>
            <li style={{ color: '#ffd600' }}>Churn rate post-checkout window</li>
            <li style={{ color: '#16c47e' }}>Time spent in tracking → optimized to reduce anxiety, not increase stickiness</li>
          </ul>
        </div>
        {/* Pitfalls & Mitigation */}
        <div style={{ background: '#232b36', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(22,196,126,0.06)', borderLeft: '5px solid #4a90e2' }}>
          <span style={{ background: '#4a90e2', color: '#fff', borderRadius: '6px', padding: '4px 14px', fontWeight: 700, fontSize: '1.4em', marginRight: 12 }}>Pitfalls & Mitigation</span>
          <ul style={{ margin: '18px 0 0 0', paddingLeft: '20px', listStyle: 'none', lineHeight: 1.7, fontSize: '1.4em' }}>
            <li style={{ color: '#ffd600' }}>User fatigue with updates → <span style={{ color: '#16c47e' }}>Limit push frequency to key milestones</span></li>
            <li style={{ color: '#ffd600' }}>Vague ETA estimates → <span style={{ color: '#16c47e' }}>Combine GPS + kitchen timer + historical data</span></li>
            <li style={{ color: '#ffd600' }}>Generic language → <span style={{ color: '#16c47e' }}>Human-first microcopy per order stage</span></li>
          </ul>
        </div>

        {/* KPI Tree Section (card) */}
        <div style={{ maxWidth: '900px', margin: '32px auto', background: '#222', borderRadius: '10px', padding: '24px 32px', color: '#fff', display: 'flex', alignItems: 'center', gap: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: '#4a90e2', marginBottom: '18px' }}>KPI Tree</h2>
            <div style={{ color: '#bbb', fontSize: '0.98rem', margin: '8px 0 12px 0' }}>
              Whimsical combines whiteboards and docs in an all-in-one collaboration hub.
            </div>
            <a
              href="https://whimsical.com/swiggy-D8Z2XnBRvfR6wXbghWEhEa"
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
        </div>
        {/* KPI Tree Image (wide, centered) */}
        <div style={{ maxWidth: '1200px', margin: '32px auto', background: '#181818', borderRadius: '12px', padding: '32px', color: '#fff', textAlign: 'center' }}>
          <img src={swiggyKpiTree} alt="Swiggy KPI Tree" style={{ width: '100%', maxWidth: '1200px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', background: '#fff' }} />
        </div>
        {/* Customer Journey Map (Swiggy, at the end, styled like Meta) */}
        <div style={{ maxWidth: '900px', margin: '32px auto', background: '#222', borderRadius: '10px', padding: '24px 32px', color: '#fff', display: 'flex', alignItems: 'center', gap: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: '#4a90e2', marginBottom: '18px' }}>Customer Journey Map</h2>
            <div style={{ color: '#bbb', fontSize: '1.08rem', margin: '8px 0 12px 0' }}>
              Swiggy Customer Journey Map: From Craving to Delivery<br/>
              This map outlines the typical journey of a Swiggy user, highlighting touchpoints, thoughts, feelings, and potential pain points, especially focusing on the order wait phase based on your problem statement.
            </div>
            <a
              href="https://whimsical.com/swiggy-customer-journey-5nFv2UkCQJBLPkwPZxyEfE"
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
              <h3 style={{ color: '#4a90e2', marginBottom: '10px', fontSize: '1.15rem' }}>User Persona: Hungry Harish</h3>
              <ul style={{ marginBottom: '10px', paddingLeft: '20px' }}>
                <li><strong>Bio:</strong> 28-year-old marketing professional, lives in a metro city. Often works late and prefers ordering food online for convenience. Values quick, reliable service and clear communication.</li>
              </ul>
              <ul style={{ marginBottom: '10px', paddingLeft: '20px' }}>
                <li><strong>Needs:</strong> Easy access to a variety of restaurants, quick delivery, transparent order tracking, good customer support if issues arise.</li>
              </ul>
              <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
                <li><strong>Frustrations:</strong> Long wait times, inaccurate ETAs, lack of updates during the wait, feeling uncertain about order status, difficulty contacting support when needed.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Customer Journey Map Image (wide, centered) */}
        <div style={{ maxWidth: '1200px', margin: '32px auto', background: '#181818', borderRadius: '12px', padding: '32px', color: '#fff', textAlign: 'center' }}>
          <img src={swiggyCustomerJourney} alt="Swiggy Customer Journey Map" style={{ width: '100%', maxWidth: '1200px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', background: '#fff' }} />
        </div>
        {/* Swiggy Wait Phase Prototype! Scorecard */}
        <div style={{ maxWidth: '900px', margin: '32px auto', background: '#222', borderRadius: '10px', padding: '24px 32px', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
          <h2 style={{ color: '#4a90e2', marginBottom: '18px' }}>Swiggy Wait Phase Prototype!</h2>
          <div style={{ color: '#bbb', fontSize: '1.08rem', margin: '8px 0 12px 0' }}>
            Prototype for the critical wait phase experience in Swiggy, focusing on user needs and pain points during order tracking and delivery.
          </div>
          <a
            href="https://whimsical.com/swiggy-prototype-X4WJi99Y94f6X6z33WMHqz"
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
            <span style={{ fontSize: '1.2em' }}>🔗</span> View Prototype
          </a>
          <div style={{ marginTop: '28px', background: '#181818', borderRadius: '8px', padding: '20px 28px', color: '#fff' }}>
            <ul style={{ marginBottom: '10px', paddingLeft: '20px' }}>
              <li><strong>Bio:</strong> 28 y/o marketer, metro city dweller. Night owl, orders food 4–5x/week. Relies on Swiggy during late hours.</li>
            </ul>
            <ul style={{ marginBottom: '10px', paddingLeft: '20px' }}>
              <li><strong>Goals:</strong>
                <ul style={{ marginTop: '6px', marginBottom: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li>Quick, reliable food delivery.</li>
                  <li>Transparent wait updates.</li>
                  <li>Low mental load during ordering.</li>
                </ul>
              </li>
            </ul>
            <ul style={{ marginBottom: '10px', paddingLeft: '20px' }}>
              <li><strong>Frustrations:</strong>
                <ul style={{ marginTop: '6px', marginBottom: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li>Unclear where the order is stuck.</li>
                  <li>Generic progress messages.</li>
                  <li>Inaccurate estimated delivery time (EDT).</li>
                </ul>
              </li>
            </ul>
            <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
              <li><strong>Tech Comfort:</strong> High. Regular app user, expects polished UI/UX.</li>
            </ul>
          </div>
        </div>
        {/* Swiggy Wait Phase Prototype Visual (PDF, centered) */}
        <div style={{ maxWidth: '900px', margin: '32px auto', background: '#181818', borderRadius: '12px', padding: '24px', color: '#fff', textAlign: 'center' }}>
          <embed
            src={swiggyHighQualityPdf}
            type="application/pdf"
            width="100%"
            height="600px"
            style={{ border: '2px solid #333', borderRadius: '8px', background: '#fff' }}
          />
        </div>
        {/* Skills Showcased Section (at the end of research cards, original position) */}
        <div style={{ maxWidth: '1200px', margin: '48px auto 48px auto', background: 'transparent', color: '#fff' }}>
          <h3 style={{ marginBottom: '18px', fontWeight: 600, fontSize: '1.5rem', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span role="img" aria-label="skills">🛠️</span> Skills Showcased
          </h3>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'nowrap', justifyContent: 'flex-start' }}>
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
      </div>
  );
}

export default SwiggyDetailPage; 