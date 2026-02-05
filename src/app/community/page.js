import { memo } from "react"; 
const Section3 = () => {
  return (
    <div className="financial-education-wrapper"> 

      {/* Hero Section */}
      <section className="financial-hero-section py-5">
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-12 col-lg-12">
              <h1 className="financial-hero-title display-4 fw-bold mb-4">
                Financial Markets EducationLearn Together, Grow Together  
              </h1>
              <p className="financial-hero-subtitle lead mb-0">
                Join a global community of learners exploring financial markets through collaborative education, peer discussions, and shared knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <hr className="financial-section-divider" />

      {/* Community Features */}
      <section className="financial-features-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="financial-features-heading">Community Features</h2>
              <p className="financial-features-description">
                Engage with fellow learners and educators through multiple channels
              </p>
            </div>
          </div>

          <div className="row">
            {/* Discussion Groups */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="financial-feature-card">
                <div className="financial-feature-header mb-3">
                  <div className="financial-feature-icon me-3">💬</div>
                  <h3 className="financial-feature-title mb-0">Discussion Groups</h3>
                </div>
                <p className="financial-feature-content">
                  Join peer-led study groups focused on specific topics like foreign exchange, technical analysis, or risk management.
                </p>
              </div>
            </div>

            {/* Live Educational Sessions */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="financial-feature-card">
                <div className="financial-feature-header mb-3">
                  <div className="financial-feature-icon me-3">🎓</div>
                  <h3 className="financial-feature-title mb-0">Live Educational Sessions</h3>
                </div>
                <p className="financial-feature-content">
                  Participate in scheduled learning sessions with our expert educators covering market analysis and trading concepts.
                </p>
              </div>
            </div>

            {/* Market Analysis Case Studies */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="financial-feature-card">
                <div className="financial-feature-header mb-3">
                  <div className="financial-feature-icon me-3">📊</div>
                  <h3 className="financial-feature-title mb-0">Market Analysis Case Studies</h3>
                </div>
                <p className="financial-feature-content">
                  Review real-world market scenarios and learn analytical frameworks through simulated case studies.
                </p>
              </div>
            </div>

            {/* Weekly Market Updates */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="financial-feature-card">
                <div className="financial-feature-header mb-3">
                  <div className="financial-feature-icon me-3">📈</div>
                  <h3 className="financial-feature-title mb-0">Weekly Market Updates</h3>
                </div>
                <p className="financial-feature-content">
                  Educational content on current market conditions, economic events, and their impact on financial markets.
                </p>
              </div>
            </div>

            {/* Peer Learning Programs */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="financial-feature-card">
                <div className="financial-feature-header mb-3">
                  <div className="financial-feature-icon me-3">🤝</div>
                  <h3 className="financial-feature-title mb-0">Peer Learning Programs</h3>
                </div>
                <p className="financial-feature-content">
                  Connect with fellow learners across similar skill levels to collaborate and share insights.
                </p>
              </div>
            </div>

            {/* Trading Psychology Support */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="financial-feature-card">
                <div className="financial-feature-header mb-3">
                  <div className="financial-feature-icon me-3">🧠</div>
                  <h3 className="financial-feature-title mb-0">Trading Psychology Support</h3>
                </div>
                <p className="financial-feature-content">
                  Special sessions focusing on emotional control, discipline, and developing the right trading mindset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Learning Process */}
      <section className="financial-learning-process py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="financial-process-heading">Structured Community Learning</h2>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-6">
              <div className="financial-process-step mb-3">
                <div className="financial-step-indicator">
                  <span className="financial-step-number">1</span>
                  <h3 className="financial-step-title">Join Study Groups</h3>
                </div>
                <p className="financial-step-description">
                  Connect with peers on your skill level focusing on specific topics like technical analysis or risk management.
                </p>
              </div>

              <div className="financial-process-step mb-3">
                <div className="financial-step-indicator">
                  <span className="financial-step-number">2</span>
                  <h3 className="financial-step-title">Attend Live Sessions</h3>
                </div>
                <p className="financial-step-description">
                  Participate in scheduled educational webinars with expert instructors sharing market trends and strategies.
                </p>
              </div>

              <div className="financial-process-step mb-3">
                <div className="financial-step-indicator">
                  <span className="financial-step-number">3</span>
                  <h3 className="financial-step-title">Share & Learn</h3>
                </div>
                <p className="financial-step-description">
                  Discuss market data, share analyses, and learn from diverse perspectives in a supportive environment.
                </p>
              </div>

              <div className="financial-process-step">
                <div className="financial-step-indicator">
                  <span className="financial-step-number">4</span>
                  <h3 className="financial-step-title">Track Your Progress</h3>
                </div>
                <p className="financial-step-description">
                  Build your knowledge systematically with structured learning paths and tailored feedback.
                </p>
              </div>
            </div>

            {/* Community Statistics - Card Layout */}
            <div className="col-12 col-md-6">
              <div className="financial-community-stats-card mt-4 mt-md-0">
                <h3 className="financial-stats-card-title">Our Growing Community</h3>
                
                <div className="financial-stats-grid">
                  <div className="financial-stat-card">
                    <div className="financial-stat-value-primary">15,000+</div>
                    <div className="financial-stat-label-primary">Active Learners</div>
                  </div>
                  
                  <div className="financial-stat-card">
                    <div className="financial-stat-value">500+</div>
                    <div className="financial-stat-label">Daily Discussions</div>
                  </div>
                  
                  <div className="financial-stat-card">
                    <div className="financial-stat-value">200+</div>
                    <div className="financial-stat-label">Weekly Sessions</div>
                  </div>
                  
                  <div className="financial-stat-card">
                    <div className="financial-stat-value">50+</div>
                    <div className="financial-stat-label">Expert Educators</div>
                  </div>
                </div>
                
                <div className="financial-stats-breakdown mt-4">
                  <h4 className="financial-breakdown-title mb-3">Community Stats Breakdown</h4>
                  <div className="financial-breakdown-grid">
                    <div className="financial-breakdown-item">
                      <div className="financial-breakdown-value">85%</div>
                      <div className="financial-breakdown-label">Active Engagement</div>
                    </div>
                    <div className="financial-breakdown-item">
                      <div className="financial-breakdown-value">92%</div>
                      <div className="financial-breakdown-label">Satisfaction Rate</div>
                    </div>
                    <div className="financial-breakdown-item">
                      <div className="financial-breakdown-value">150+</div>
                      <div className="financial-breakdown-label">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="financial-section-divider" />

      {/* Recent Discussions */}
      <section className="financial-discussions-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="financial-discussions-heading">Recent Discussions</h2>
            </div>
          </div>

          <div className="row mt-4">
            {recentDiscussions.map((discussion, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="financial-discussion-card h-100">
                  <div className="financial-discussion-header">
                    <h4 className="financial-discussion-author">{discussion.author}</h4>
                    <span className="financial-discussion-meta">
                      {discussion.category}: 📊 {discussion.messages} messages
                    </span>
                  </div>
                  <p className="financial-discussion-topic">{discussion.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="financial-events-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="financial-events-heading">Upcoming Events</h2>
            </div>
          </div>

          <div className="row mt-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="col-12 col-md-6 mb-3">
                <div className="financial-event-card h-100">
                  <div className="financial-event-header">
                    <h4 className="financial-event-title">{event.title}</h4>
                    <span className="financial-event-days">{event.days} days</span>
                  </div>
                  <div className="financial-event-details">
                    <div className="financial-event-schedule">
                      <span className="financial-event-icon">📅</span>
                      <span className="financial-event-time">{event.schedule}</span>
                    </div>
                    {event.subtitle && (
                      <div className="financial-event-subtitle">
                        <span className="financial-event-icon">📄</span>
                        <span className="financial-event-topic">{event.subtitle}</span>
                      </div>
                    )}
                    <div className="financial-event-duration">
                      <span className="financial-event-icon">⏰</span>
                      <span className="financial-event-hours">{event.duration} hours</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="financial-section-divider" />

      {/* Community Guidelines - IMPROVED LAYOUT */}
      <section className="financial-guidelines-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="financial-guidelines-heading">Community Guidelines</h2>
              <p className="financial-guidelines-subtitle">
                Maintaining a positive and respectful online community with transparent learning paths and tailored feedback.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="financial-guidelines-grid">
                {communityGuidelines.map((guideline, index) => (
                  <div key={index} className="financial-guideline-card">
                    <div className="financial-guideline-icon-wrapper">
                      <div className="financial-guideline-icon">
                        {guideline.icon}
                      </div>
                    </div>
                    <div className="financial-guideline-content-wrapper">
                      <h4 className="financial-guideline-title">{guideline.title}</h4>
                      <p className="financial-guideline-description">{guideline.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Learning Principles */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="financial-learning-principles-card">
                <h3 className="financial-principles-title text-white">Our Learning Principles</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="financial-principle-item">
                      <div className="financial-principle-header">
                        <div className="financial-principle-number">01</div>
                        <h4 className="financial-principle-name">Transparent Learning Paths</h4>
                      </div>
                      <p className="financial-principle-text">
                        Clear progression from beginner to advanced levels with defined milestones and achievable goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="financial-principle-item">
                      <div className="financial-principle-header">
                        <div className="financial-principle-number">02</div>
                        <h4 className="financial-principle-name">Tailored Feedback</h4>
                      </div>
                      <p className="financial-principle-text">
                        Personalized guidance and constructive feedback based on your individual learning journey and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="financial-cta-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="financial-cta-heading">Ready to Join Our Learning Community?</h2>
              <p className="financial-cta-description">
                Connect with learners worldwide and accelerate your financial education
              </p>
              <button className="financial-cta-button btn btn-primary btn-lg mt-3">
                Join Community Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Data arrays (keeping original names)
const recentDiscussions = [
  {
    author: "Sarah Chen",
    topic: "Understanding Support and Resistance Levels",
    category: "Technical Analysis",
    messages: "20"
  },
  {
    author: "Michael Rodriguez",
    topic: "Risk Management Strategies for Beginners",
    category: "Risk Management",
    messages: "10"
  },
  {
    author: "Priya Sharma",
    topic: "Analyzing Economic Indicators Impact",
    category: "Fundamental Analysis",
    messages: "10"
  },
  {
    author: "James Wilson",
    topic: "Trading Psychology: Overcoming Fear",
    category: "Psychological Analysis",
    messages: "10"
  },
  {
    author: "John Johnson",
    topic: "Stock Market Sector Rotation Explained",
    category: "Stock Market",
    messages: "10"
  },
  {
    author: "Emma Davis",
    topic: "Forex Trading Sessions & Best Times to Trade",
    category: "Forex Trading",
    messages: "15"
  }
];

const upcomingEvents = [
  {
    title: "Forex Market Structure Masterclass",
    days: "15",
    schedule: "D. Dealer's Open",
    duration: "24",
    subtitle: ""
  },
  {
    title: "Stock Market Technical Analysis Workshop",
    days: "18",
    schedule: "YTD PM - S&P PMI EST",
    duration: "18",
    subtitle: "Equity Theories"
  },
  {
    title: "Trading Psychology & Discipline",
    days: "22",
    schedule: "D. Dealers' Willness",
    duration: "12",
    subtitle: ""
  },
  {
    title: "Risk Management Fundamentals",
    days: "25",
    schedule: "G6 PM - S&P PMI EST",
    duration: "26",
    subtitle: "Michael Anderson"
  },
  {
    title: "Fundamental Analysis Bootcamp",
    days: "30",
    schedule: "Weekly Economic Review",
    duration: "20",
    subtitle: "Economic Indicators"
  },
  {
    title: "Live Trading Session & Q&A",
    days: "5",
    schedule: "Market Hours Session",
    duration: "8",
    subtitle: "Real-time Analysis"
  }
];

const communityGuidelines = [
  {
    title: "Education First",
    description: "All discussions must be educational in nature. No financial advice or specific investment recommendations.",
    icon: "📚"
  },
  {
    title: "Respectful Dialogue",
    description: "Treat all members with respect. Constructive feedback and diverse perspectives are encouraged.",
    icon: "🤝"
  },
  {
    title: "No Gamification",
    description: "Do not use leaderboards or other game-like features. Focus on learning and personal development.",
    icon: "🎯"
  },
  {
    title: "Quality Content",
    description: "Share well-researched analysis, credible sources, and thoughtful questions.",
    icon: "⭐"
  },
  {
    title: "Age Verification",
    description: "All community members must be 18 years or older.",
    icon: "🔞"
  },
  {
    title: "Privacy Respect",
    description: "Do not share personal information or ask for private details from other members.",
    icon: "🔒"
  }
];

export default memo(Section3);