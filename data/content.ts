// Services - focused on product development
export const services = [
  {
    id: 1,
    title: "Product Strategy & Design",
    description: "We help you define what to build and why. From market research to UX design, we turn fuzzy ideas into clear product roadmaps.",
    icon: "🎯",
    features: [
      "Product Discovery & Research",
      "UX/UI Design & Prototyping",
      "Product Roadmap & Strategy",
      "User Testing & Validation"
    ]
  },
  {
    id: 2,
    title: "Product Development",
    description: "We build your product end-to-end using modern tech. Web apps, mobile apps, AI-powered platforms � we ship production-ready software.",
    icon: "💻",
    features: [
      "Full-Stack Web & Mobile Apps",
      "AI & ML Integration",
      "Cloud-Native Architecture",
      "API & Backend Development"
    ]
  },
  {
    id: 3,
    title: "AI Product Development",
    description: "We build intelligent products powered by AI � from GPT-powered tools to custom ML models and automation systems.",
    icon: "🤖",
    features: [
      "Custom AI/ML Solutions",
      "LLM & GenAI Applications",
      "Intelligent Automation",
      "Data Pipeline & Analytics"
    ]
  },
  {
    id: 4,
    title: "Product Growth & Scale",
    description: "We help you take your product to market and scale it with data-driven growth strategies and performance optimization.",
    icon: "📈",
    features: [
      "Go-to-Market Strategy",
      "Growth Engineering",
      "Performance Optimization",
      "Analytics & Experimentation"
    ]
  },
  {
    id: 5,
    title: "Venture Co-Building",
    description: "For the right ideas, we go beyond client work. We co-build ventures with equity partnerships, sharing risk and reward.",
    icon: "🤝",
    features: [
      "Equity-Based Partnerships",
      "End-to-End Venture Building",
      "Shared Risk & Reward",
      "Long-Term Strategic Support"
    ]
  }
];

// Portfolio / Work - real projects built
export const portfolio = [
  {
    id: 1,
    name: "TalentMeta.ai",
    url: "https://www.talentmeta.ai/home",
    client: "Internal Venture",
    description: "AI-powered recruitment platform that automates candidate screening, matching, and interview scheduling � reducing time-to-hire by 70%.",
    category: "AI / HR Tech",
    techStack: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    results: "70% faster hiring, 5x candidate quality improvement",
    image: "/case-studies/recruitment.jpg"
  },
  {
    id: 2,
    name: "LearnSpace Platform",
    client: "LearnSpace Technologies",
    description: "Scalable EdTech platform with AI-driven personalization that grew from 1K to 100K users in 6 months.",
    category: "EdTech",
    techStack: ["React", "Node.js", "AWS", "ML Pipeline"],
    results: "900% user growth, 85% retention rate",
    image: "/case-studies/edtech.jpg"
  },
  {
    id: 3,
    name: "HealthConnect",
    client: "HealthConnect",
    description: "HIPAA-compliant telemedicine platform built from scratch in 90 days with patient-first UX and real-time video consultations.",
    category: "HealthTech",
    techStack: ["Next.js", "WebRTC", "Node.js", "MongoDB"],
    results: "5K+ consultations in month 1, 98% satisfaction",
    image: "/case-studies/healthcare.jpg"
  },
  {
    id: 4,
    name: "AgriDash",
    client: "FarmFirst India",
    description: "IoT + AI dashboard for precision agriculture � helping farmers monitor crops, predict yields, and reduce water usage by 30%.",
    category: "AgriTech",
    techStack: ["React", "Python", "IoT", "TensorFlow"],
    results: "30% water savings, 2x yield prediction accuracy",
    image: "/case-studies/agritech.jpg"
  },
  {
    id: 5,
    name: "PayFlow",
    client: "FinEdge Solutions",
    description: "Digital payments and invoicing platform for SMEs with UPI integration, automated reconciliation, and GST-compliant billing.",
    category: "FinTech",
    techStack: ["React Native", "Node.js", "PostgreSQL", "UPI API"],
    results: "2Cr+ transactions processed, 500+ SMEs onboarded",
    image: "/case-studies/fintech.jpg"
  },
  {
    id: 6,
    name: "StyleSync",
    client: "ThreadCraft",
    description: "AI-powered fashion recommendation engine and D2C storefront with virtual try-on and personalized styling.",
    category: "Fashion Tech",
    techStack: ["Next.js", "Python", "Computer Vision", "Shopify API"],
    results: "40% higher conversion, 3x average order value",
    image: "/case-studies/fashion.jpg"
  }
];

// Case studies (detailed versions)
export const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Recruitment Platform",
    client: "Internal Venture — TalentMeta.ai",
    industry: "HR Technology",
    challenge: "Manual recruitment processes taking 45+ days with poor candidate quality and high dropout rates across Indian companies.",
    solution: "Built an AI-first recruitment platform with intelligent screening, automated matching algorithms, and smart interview scheduling.",
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
  },
  {
    id: 2,
    title: "EdTech Platform Scaling",
    client: "LearnSpace Technologies",
    industry: "Education Technology",
    challenge: "Struggling to scale from 1,000 to 100,000 users while maintaining quality and engagement on the learning platform.",
    solution: "Rebuilt platform architecture for scale, implemented AI-driven personalization, and designed viral growth loops.",
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
    id: 3,
    title: "Telemedicine Platform Launch",
    client: "HealthConnect",
    industry: "Healthcare",
    challenge: "Building a compliant telemedicine platform from scratch with limited resources and a 90-day deadline.",
    solution: "Co-built the MVP with regulatory compliance baked in, designed patient-first UX, and launched on time.",
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
  }
];

// How we work process
export const workProcess = [
  {
    step: 1,
    title: "Discovery",
    description: "We understand your business, users, and goals through research, interviews, and market analysis.",
    icon: "🔍",
    duration: "1-2 weeks",
    deliverables: ["Product Brief", "User Research", "Competitive Analysis"]
  },
  {
    step: 2,
    title: "Design",
    description: "We design the product experience � wireframes, prototypes, and a visual identity that users love.",
    icon: "🎨",
    duration: "2-3 weeks",
    deliverables: ["Wireframes & Prototypes", "UI Design System", "User Flows"]
  },
  {
    step: 3,
    title: "Build",
    description: "We develop your product using modern, scalable tech � with weekly demos and continuous feedback loops.",
    icon: "⚙️",
    duration: "6-12 weeks",
    deliverables: ["Production-Ready Code", "API Documentation", "CI/CD Pipeline"]
  },
  {
    step: 4,
    title: "Launch",
    description: "We deploy, monitor, and optimize your product for a smooth go-to-market launch.",
    icon: "🚀",
    duration: "1-2 weeks",
    deliverables: ["Deployment & DevOps", "Launch Strategy", "Monitoring Setup"]
  },
  {
    step: 5,
    title: "Grow",
    description: "We continue to iterate, optimize, and scale your product based on real user data and feedback.",
    icon: "📊",
    duration: "Ongoing",
    deliverables: ["Growth Experiments", "Performance Optimization", "Feature Iteration"]
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
    description: "Build products for clients and our own ventures using React, Next.js, Node.js, and AI tools.",
    requirements: [
      "3+ years with React, Node.js, and cloud platforms",
      "Experience shipping production products",
      "Comfortable with AI tools like GitHub Copilot"
    ]
  },
  {
    id: 2,
    title: "Product Designer",
    type: "Full-time",
    location: "Remote / Hybrid",
    department: "Design",
    description: "Design intuitive, beautiful product experiences for startups and enterprises across industries.",
    requirements: [
      "2+ years of product design experience",
      "Strong portfolio showcasing end-to-end product work",
      "Figma proficiency required"
    ]
  },
  {
    id: 3,
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    description: "Build AI-powered features and products � from LLM integrations to custom ML models.",
    requirements: [
      "Experience with Python, PyTorch/TensorFlow",
      "Familiarity with LLM APIs (OpenAI, Claude, etc.)",
      "Track record of shipping AI features in production"
    ]
  }
];

// Internship programs
export const internships = [
  {
    id: 1,
    program: "Product Building Internship",
    duration: "3-6 months",
    description: "Work on real client projects and ship features that thousands of users interact with.",
    tracks: ["Full-Stack Development", "Product Design", "AI/ML", "Growth"],
    benefits: [
      "Ship real products, not toy projects",
      "Mentorship from experienced builders",
      "Potential full-time offer",
      "Stipend provided"
    ]
  },
  {
    id: 2,
    program: "AI & Technology Internship",
    duration: "3 months",
    description: "Build AI-powered features and learn cutting-edge technologies in a product studio environment.",
    tracks: ["Machine Learning", "Backend Development", "Data Engineering"],
    benefits: [
      "Real-world AI project experience",
      "Technical mentorship",
      "Learning resources access",
      "Certificate of completion"
    ]
  }
];

// Team members
export const team = [
  {
    name: "Mainshu",
    role: "Founder & CEO",
    bio: "Product builder with 5+ years building and scaling tech products for startups and enterprises.",
    image: "/team/placeholder.jpg"
  },
  {
    name: "Priya",
    role: "Head of Product",
    bio: "Product leader passionate about design thinking and building user-first experiences.",
    image: "/team/placeholder.jpg"
  },
  {
    name: "Sunaina",
    role: "Chief Technology Officer",
    bio: "Tech architect specializing in AI/ML, cloud infrastructure, and scalable systems.",
    image: "/team/placeholder.jpg"
  }
];

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
