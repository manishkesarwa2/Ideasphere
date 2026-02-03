// Services data
export const services = [
  {
    id: 1,
    title: "Venture Transformation",
    description: "Transform your existing business or idea into a scalable, future-ready venture with our comprehensive transformation methodology.",
    icon: "🚀",
    features: [
      "Business Model Innovation",
      "Digital Transformation",
      "Strategic Repositioning",
      "Market Expansion"
    ]
  },
  {
    id: 2,
    title: "Idea Generation & Product Design",
    description: "Generate breakthrough ideas and design products that solve real problems with our human-centered approach.",
    icon: "💡",
    features: [
      "Design Thinking Workshops",
      "Product Strategy",
      "User Research",
      "Rapid Prototyping"
    ]
  },
  {
    id: 3,
    title: "Digital Enablement",
    description: "Build robust digital infrastructure and platforms to power your modern business operations.",
    icon: "⚡",
    features: [
      "Custom Software Development",
      "AI & ML Integration",
      "Cloud Architecture",
      "API Development"
    ]
  },
  {
    id: 4,
    title: "Growth Strategy",
    description: "Scale your business sustainably with data-driven growth strategies and modern marketing frameworks.",
    icon: "📈",
    features: [
      "Growth Hacking",
      "Performance Marketing",
      "Community Building",
      "Analytics & Optimization"
    ]
  },
  {
    id: 5,
    title: "Co-building Ventures",
    description: "Partner with us to co-create and launch new ventures from scratch with shared risk and reward.",
    icon: "🤝",
    features: [
      "Joint Venture Setup",
      "Resource Sharing",
      "Risk Mitigation",
      "Shared Success Model"
    ]
  },
  {
    id: 6,
    title: "Training & Education",
    description: "Empower your teams, students, and faculty with cutting-edge skills in AI, entrepreneurship, and technology through our comprehensive training programs.",
    icon: "🎓",
    features: [
      "Corporate Training Programs",
      "College & University Partnerships",
      "Certification Courses",
      "Faculty Development Programs"
    ]
  }
];

// Products data
export const products = [
  {
    id: 1,
    name: "HireGenius AI",
    description: "AI-driven recruitment solution that solves most hiring challenges using intelligent automation and smart matching.",
    status: "Live",
    category: "HR Tech",
    features: ["AI Candidate Matching", "Automated Screening", "Interview Scheduling", "Smart Analytics"]
  },
  {
    id: 2,
    name: "VentureOS",
    description: "All-in-one operating system for managing startup operations, from ideation to scale.",
    status: "Beta",
    category: "Platform",
    features: ["Project Management", "Investor Relations", "Team Collaboration"]
  },
  {
    id: 3,
    name: "IdeaForge AI",
    description: "AI-powered idea generation and validation platform for entrepreneurs and innovators.",
    status: "MVP",
    category: "AI Tool",
    features: ["Idea Generation", "Market Validation", "Competitor Analysis"]
  },
  {
    id: 4,
    name: "GrowthKit",
    description: "Comprehensive growth toolkit with templates, frameworks, and automation for scaling businesses.",
    status: "Live",
    category: "SaaS",
    features: ["Growth Templates", "Marketing Automation", "Analytics Dashboard"]
  },
  {
    id: 5,
    name: "SkillMapper Pro",
    description: "Advanced skill assessment and mapping tool to identify strengths and build winning teams.",
    status: "Beta",
    category: "HR Tech",
    features: ["Skill Assessment", "Team Building", "Career Pathways"]
  },
  {
    id: 6,
    name: "ImpactTracker",
    description: "Measure and communicate your venture's social and environmental impact with precision.",
    status: "MVP",
    category: "ESG",
    features: ["Impact Metrics", "ESG Reporting", "Stakeholder Dashboard"]
  },
  {
    id: 7,
    name: "VentureStudio Hub",
    description: "Community platform connecting entrepreneurs, mentors, and investors in one ecosystem.",
    status: "Live",
    category: "Community",
    features: ["Networking", "Mentorship", "Events & Programs"]
  }
];

// Case studies data
export const caseStudies = [
  {
    id: 1,
    title: "EdTech Startup Scaling",
    client: "LearnSpace Technologies",
    industry: "Education Technology",
    challenge: "Struggling to scale from 1,000 to 100,000 users while maintaining quality and engagement.",
    solution: "Implemented AI-driven personalization, rebuilt platform architecture, and designed growth loops.",
    results: [
      "10x user growth in 6 months",
      "40% improvement in engagement",
      "85% user retention rate"
    ],
    image: "/case-studies/edtech.jpg",
    metrics: {
      growth: "900%",
      engagement: "+40%",
      retention: "85%"
    }
  },
  {
    id: 2,
    title: "Healthcare Platform Launch",
    client: "HealthConnect",
    industry: "Healthcare",
    challenge: "Building a compliant telemedicine platform from scratch with limited resources.",
    solution: "Co-built MVP in 3 months, ensured regulatory compliance, and designed patient-first UX.",
    results: [
      "Platform launched in 90 days",
      "5,000+ consultations in first month",
      "98% patient satisfaction rate"
    ],
    image: "/case-studies/healthcare.jpg",
    metrics: {
      timeToMarket: "90 days",
      consultations: "5K+",
      satisfaction: "98%"
    }
  },
  {
    id: 3,
    title: "AI-Powered Recruitment Transformation",
    client: "TalentCorp Solutions",
    industry: "HR Technology & Recruitment",
    challenge: "Manual recruitment process taking 45+ days with poor candidate quality and high dropout rates.",
    solution: "Built HireGenius AI platform with intelligent screening, automated matching, and smart interview scheduling.",
    results: [
      "70% reduction in time-to-hire",
      "5x improvement in candidate quality",
      "90% reduction in manual screening time"
    ],
    image: "/case-studies/recruitment.jpg",
    metrics: {
      timeToHire: "-70%",
      quality: "5x",
      efficiency: "90%"
    }
  }
];

// How we work process
export const workProcess = [
  {
    step: 1,
    title: "Skill Mapping",
    description: "Identify your unique strengths, capabilities, and resources through comprehensive assessment.",
    icon: "🎯",
    duration: "1-2 weeks",
    deliverables: ["Skill Assessment Report", "Capability Matrix", "Resource Inventory"]
  },
  {
    step: 2,
    title: "Idea Generation",
    description: "Co-create breakthrough ideas aligned with your strengths and market opportunities.",
    icon: "💭",
    duration: "2-3 weeks",
    deliverables: ["Idea Portfolio", "Market Analysis", "Opportunity Mapping"]
  },
  {
    step: 3,
    title: "Business Model Design",
    description: "Design a robust, sustainable business model with clear value proposition and revenue streams.",
    icon: "📐",
    duration: "3-4 weeks",
    deliverables: ["Business Model Canvas", "Financial Projections", "Go-to-Market Strategy"]
  },
  {
    step: 4,
    title: "Digital Enablement",
    description: "Build the digital infrastructure, platforms, and tools needed to bring your venture to life.",
    icon: "💻",
    duration: "6-12 weeks",
    deliverables: ["MVP Development", "Tech Stack Setup", "System Integration"]
  },
  {
    step: 5,
    title: "Growth & Co-Building",
    description: "Launch, scale, and optimize with ongoing support, strategic guidance, and shared success.",
    icon: "🌱",
    duration: "Ongoing",
    deliverables: ["Launch Support", "Growth Playbook", "Continuous Optimization"]
  }
];

// Career opportunities
export const careers = [
  {
    id: 1,
    title: "Full-Stack Engineer",
    type: "Full-time",
    location: "Remote / Hybrid",
    department: "Engineering",
    description: "Build cutting-edge products using modern tech stack. Work on AI, web platforms, and mobile apps.",
    requirements: [
      "3+ years of experience with React, Node.js, and cloud platforms",
      "Experience with AI/ML integration is a plus",
      "Passion for building impactful products"
    ]
  },
  {
    id: 2,
    title: "Product Designer",
    type: "Full-time",
    location: "Remote / Hybrid",
    department: "Design",
    description: "Design beautiful, intuitive experiences for our ventures and client projects.",
    requirements: [
      "2+ years of product design experience",
      "Strong portfolio showcasing UX/UI work",
      "Figma proficiency required"
    ]
  },
  {
    id: 3,
    title: "Growth Strategist",
    type: "Full-time",
    location: "Remote",
    department: "Growth",
    description: "Drive growth for multiple ventures using data-driven strategies and creative experiments.",
    requirements: [
      "Experience in growth marketing or strategy",
      "Strong analytical and communication skills",
      "Startup experience preferred"
    ]
  }
];

// Internship programs
export const internships = [
  {
    id: 1,
    program: "Venture Building Internship",
    duration: "3-6 months",
    description: "Work alongside founders and experienced builders to create new ventures from scratch.",
    tracks: ["Product", "Engineering", "Design", "Growth"],
    benefits: [
      "Hands-on startup experience",
      "Mentorship from industry experts",
      "Potential full-time opportunity",
      "Stipend provided"
    ]
  },
  {
    id: 2,
    program: "AI & Technology Internship",
    duration: "3 months",
    description: "Build AI-powered products and learn cutting-edge technologies in a fast-paced environment.",
    tracks: ["Machine Learning", "Backend Development", "Data Engineering"],
    benefits: [
      "Real-world project experience",
      "Technical mentorship",
      "Learning resources",
      "Certificate of completion"
    ]
  }
];

// Team members (for About page)
export const team = [
  {
    name: "Mainshu",
    role: "Founder & CEO",
    bio: "Serial entrepreneur with 5+ years building and scaling tech ventures.",
    image: "/team/placeholder.jpg"
  },
  {
    name: "Priya",
    role: "Head of Product",
    bio: "Product leader with experience at top tech companies, passionate about design thinking.",
    image: "/team/placeholder.jpg"
  },
  {
    name: "Sunaina",
    role: "Chief Technology Officer",
    bio: "Tech architect specializing in AI/ML and scalable systems.",
    image: "/team/placeholder.jpg"
  }
];

// Training programs data
export const trainingPrograms = {
  corporate: [
    {
      id: 1,
      title: "AI & Machine Learning for Business",
      duration: "2-3 days / Customizable",
      level: "Intermediate",
      description: "Equip your teams with practical AI skills to drive innovation and efficiency.",
      topics: [
        "AI Fundamentals & Use Cases",
        "Machine Learning Implementation",
        "Generative AI & ChatGPT for Business",
        "AI Strategy & ROI"
      ],
      outcomes: [
        "Understand AI capabilities and limitations",
        "Identify AI opportunities in your business",
        "Implement AI tools and workflows",
        "Build AI-first culture"
      ]
    },
    {
      id: 2,
      title: "Design Thinking & Innovation",
      duration: "2 days",
      level: "All Levels",
      description: "Transform your team into innovation champions using human-centered design methodology.",
      topics: [
        "Design Thinking Framework",
        "Problem Discovery & Definition",
        "Ideation & Prototyping",
        "Testing & Iteration"
      ],
      outcomes: [
        "Master design thinking process",
        "Generate innovative solutions",
        "Build empathy-driven products",
        "Create innovation culture"
      ]
    },
    {
      id: 3,
      title: "Product Management Masterclass",
      duration: "3 days",
      level: "Intermediate to Advanced",
      description: "Build world-class products with modern product management frameworks and tools.",
      topics: [
        "Product Strategy & Vision",
        "User Research & Analytics",
        "Roadmap Planning & Prioritization",
        "Metrics & Growth"
      ],
      outcomes: [
        "Define product strategy",
        "Make data-driven decisions",
        "Lead cross-functional teams",
        "Drive product growth"
      ]
    },
    {
      id: 4,
      title: "Digital Transformation Leadership",
      duration: "2-3 days",
      level: "Leadership / Executive",
      description: "Lead your organization through digital transformation with confidence and clarity.",
      topics: [
        "Digital Strategy & Roadmap",
        "Change Management",
        "Technology Stack Selection",
        "Measuring Digital ROI"
      ],
      outcomes: [
        "Create digital transformation roadmap",
        "Lead organizational change",
        "Evaluate and select technologies",
        "Drive digital adoption"
      ]
    }
  ],
  college: [
    {
      id: 1,
      title: "Full-Stack with AI",
      duration: "60-90 hours",
      level: "Beginner to Intermediate",
      description: "Learn full-stack development 3x faster using AI coding assistants and modern workflows. Industry-ready training with GitHub Copilot, ChatGPT, and AI-powered development tools.",
      topics: [
        "HTML, CSS, JavaScript with AI Tools",
        "React & Next.js with GitHub Copilot",
        "Node.js & APIs (AI-Assisted Development)",
        "AI-Powered Debugging & Code Reviews",
        "Database Design & Cloud Deployment"
      ],
      outcomes: [
        "Build production-ready apps with AI assistance",
        "Master GitHub Copilot & AI coding tools",
        "3x faster development with AI workflows",
        "Collaborate using Git & AI code reviews",
        "Deploy to cloud platforms efficiently"
      ],
      badge: "Tech Career"
    },
    {
      id: 2,
      title: "AI & Data Science Program",
      duration: "80-100 hours",
      level: "Intermediate",
      description: "Comprehensive AI and data science training with hands-on projects and real datasets.",
      topics: [
        "Python for Data Science",
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "AI Project Development"
      ],
      outcomes: [
        "Build ML models from scratch",
        "Work with real-world datasets",
        "Deploy AI applications",
        "Create portfolio projects"
      ],
      badge: "High Demand"
    },
    {
      id: 3,
      title: "Entrepreneurship & Startup Bootcamp",
      duration: "40-60 hours",
      level: "All Levels",
      description: "Transform ideas into businesses with our comprehensive entrepreneurship program.",
      topics: [
        "Idea Generation & Validation",
        "Business Model Design",
        "MVP Development",
        "Pitching & Fundraising"
      ],
      outcomes: [
        "Validate business ideas",
        "Create business plans",
        "Build MVPs",
        "Pitch to investors"
      ],
      badge: null
    },
    {
      id: 4,
      title: "UI/UX Design & Figma Masterclass",
      duration: "40-50 hours",
      level: "Beginner to Intermediate",
      description: "Design beautiful, user-centered products with industry-standard tools and methodologies.",
      topics: [
        "Design Principles & Theory",
        "User Research & Testing",
        "Figma & Design Tools",
        "Portfolio Building"
      ],
      outcomes: [
        "Create professional designs",
        "Conduct user research",
        "Build design portfolio",
        "Work with design systems"
      ],
      badge: "Creative Career"
    }
  ],
  faculty: [
    {
      id: 1,
      title: "Teaching Innovation in Tech Education",
      duration: "3-5 days",
      level: "Faculty",
      description: "Modern pedagogical approaches for teaching technology and innovation.",
      topics: [
        "Active Learning Techniques",
        "Project-Based Learning",
        "Industry Curriculum Integration",
        "Assessment & Evaluation"
      ]
    },
    {
      id: 2,
      title: "AI Tools for Educators",
      duration: "2 days",
      level: "Faculty",
      description: "Leverage AI to enhance teaching, create content, and improve student outcomes.",
      topics: [
        "AI for Content Creation",
        "Automated Assessment Tools",
        "Personalized Learning with AI",
        "Ethical AI in Education"
      ]
    }
  ]
};

// Training benefits
export const trainingBenefits = {
  corporate: [
    "Customized training aligned with business goals",
    "Flexible delivery: On-site, Virtual, or Hybrid",
    "Post-training support and resources",
    "ROI-focused skill development",
    "Expert trainers with industry experience"
  ],
  college: [
    "Industry-aligned curriculum",
    "Career guidance and support",
    "Hands-on projects and internships",
    "Certification upon completion",
    "Dedicated student support",
    "Free access to learning resources"
  ],
  faculty: [
    "Modern teaching methodologies",
    "Industry best practices",
    "Networking with educators",
    "Continuing education credits",
    "Free teaching resources"
  ]
};

// Contact info
export const contactInfo = {
  email: "connect@ideasphere.co.in",
  phone: "+91-9315168188",
  address: "Delhi, India",
  social: {
    linkedin: "https://linkedin.com/company/ideasphere",
    twitter: "https://twitter.com/ideasphere",
    instagram: "https://instagram.com/ideasphere"
  }
};
